import { useParams } from "react-router";
import { useVendors } from "../hooks/useVendors.js";
import MenuList from "../components/MenuList.jsx";
import { useCart } from "../hooks/useCart.js";
import { Loading, ErrorMessage } from "../components/Status.jsx";

export default function VendorPage() {
  const { id } = useParams();
  const { vendors, loading, error, reload } = useVendors();
  const { addToCart } = useCart();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  const vendor = vendors.find((v) => v.id === id);

  if (!vendor) {
    return (
      <div className="card">
        <h2>Vendor not found</h2>
        <p className="muted">
          The restaurant you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <section>
      <h2 className="section-title">Menu: {vendor.name}</h2>
      <MenuList items={vendor.menu} onAdd={addToCart} />
    </section>
  );
}
