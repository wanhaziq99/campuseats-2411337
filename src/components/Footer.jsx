// --- FOOTER COMPONENT CHEAT SHEET ---
// Purpose: Renders the bottom copyright and course credit bar across your app layout.
// Note: This is a static, presentational component. It owns no state and accepts no props;
// it just outputs fixed structural HTML.

function Footer() {
  return (
    // Semantic HTML5 footer tag with a CSS class for styling
    <footer className="footer">
      <p>
        {/* &copy; is an HTML entity code that prints the copyright symbol (©) */}
        {/* {new Date().getFullYear()} uses single curly braces to inject JavaScript, */}
        {/* automatically fetching the current year (e.g., 2026) so you never have to update it manually! */}
        {/* &middot; is an HTML entity code that prints a neat middle dot separator (·) */}
        &copy; {new Date().getFullYear()} CampusEats &middot; BICS 3301, IIUM
      </p>
    </footer>
  );
}

// EXPORT STATEMENT
// Allows this component to be imported inside Layout.jsx or App.jsx using:
// import Footer from './Footer.jsx'
export default Footer;
