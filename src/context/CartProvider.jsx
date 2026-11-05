import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { CartContext } from "./cart-context.js";

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("campuseats-cart", []);
  const [orders, setOrders] = useLocalStorage("campuseats-orders", []);

  // Derived values
  const count = cart.reduce((sum, line) => sum + line.qty, 0);
  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0);

  function addToCart(item) {
    setCart((prevCart) => {
      const existing = prevCart.find((line) => line.item.id === item.id);
      if (existing) {
        return prevCart.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line,
        );
      }
      return [...prevCart, { item, qty: 1 }];
    });
  }

  function changeQty(itemId, delta) {
    setCart((prevCart) =>
      prevCart
        .map((line) => {
          if (line.item.id === itemId) {
            return { ...line, qty: line.qty + delta };
          }
          return line;
        })
        .filter((line) => line.qty > 0),
    );
  }

  function removeFromCart(itemId) {
    setCart((prevCart) => prevCart.filter((line) => line.item.id !== itemId));
  }

  function placeOrder(details) {
    const newOrder = {
      id: Date.now(),
      ...details,
      items: cart,
      total,
      date: new Date().toLocaleString(),
    };
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]); // Clear cart after ordering
  }

  const value = {
    cart,
    orders,
    count,
    total,
    addToCart,
    changeQty,
    removeFromCart,
    placeOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
