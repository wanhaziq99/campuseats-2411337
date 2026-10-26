# AI usage log

## Week 1

- Tool(s): Gemini
- What I asked for: I asked for help understanding how to break down the static UI into components (`Header`, `VendorCard`, `MenuItemCard`, and `Footer`) and how JSX rules work.
- What I kept, changed or rejected, and why: I used the suggested component structure for `App.jsx`, but I swapped out the placeholder text to use my own custom restaurant and menu details.
- One thing the AI got wrong and how I fixed it: The AI initially used plain HTML `class` instead of `className`. I corrected it to `className` so React wouldn't throw console warnings.

## Week 2

- Tool(s): Gemini
- What I asked for: Help setting up the initial `vendors.js` data file, rendering lists properly with `.map()`, and managing state using `useState` for selecting vendors and adding items to the cart.
- What I kept, changed or rejected, and why: I kept the state logic for switching vendors and updating the cart, but I updated the dish names and prices to match my "Haziq sedap" menu.
- One thing the AI got wrong and how I fixed it: The AI suggested using array index numbers as map keys. I changed them to use unique string IDs (`item.id`) to avoid React key warnings.

## Week 3

- Tool(s): Gemini
- What I asked for: Assistance with moving the data into a mock JSON API (`public/api/vendors.json`), fetching it using `useEffect` with an `AbortController`, handling cart quantities (`qty`), and building the checkout form with validation.
- What I kept, changed or rejected, and why: I kept the form validation checks (for the name length, mahallah selection, and pickup times between `07:00` and `22:00`) and the two-column CSS grid for the cart page layout.
- One thing the AI got wrong and how I fixed it: The AI left out a closing parenthesis and brace in the `fetch` chain inside `useEffect`. I spotted the syntax error in my code editor and added the missing `})` to fix it.
