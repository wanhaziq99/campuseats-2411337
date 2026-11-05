// --- STATUS COMPONENTS CHEAT SHEET ---
// Purpose: Small, stateless components used to handle the loading and error states
// of asynchronous data fetching (e.g., when loading restaurant menus from an API)[cite: 41, 49].
// Note: These components own no state and rely entirely on props passed down from parent components[cite: 49].

// 1. LOADING COMPONENT
// Purpose: Displays a clean feedback message to the user while network requests are in progress[cite: 41, 49].
export function Loading() {
  return (
    // role="status": An accessibility (ARIA) attribute that tells screen readers
    // to quietly announce status updates to visually impaired users.
    <p className="muted" role="status">
      Loading menus…
    </p>
  );
}

// 2. ERROR MESSAGE COMPONENT
// Purpose: Displays an error alert box with the failure reason and a retry button
// if data fetching fails (such as an HTTP 404 or network drop)[cite: 41, 49].
// Props:
// - 'message': A string describing what went wrong (e.g., "HTTP 404")[cite: 41, 49].
// - 'onRetry': A callback function passed from the parent to re-trigger the fetch effect[cite: 41, 49].
export function ErrorMessage({ message, onRetry }) {
  return (
    // role="alert": An accessibility (ARIA) attribute that tells screen readers
    // to immediately read out error alerts to the user.
    <div className="card error" role="alert">
      {/* Single curly braces {} inject the dynamic error 'message' string prop into the text[cite: 24, 41] */}
      <p>Could not load menus: {message}</p>

      {/* --- RETRY BUTTON --- */}
      {/* type="button" (implied for standard buttons inside divs) and onClick triggers 'onRetry'[cite: 41] */}
      {/* In App.jsx, clicking this usually bumps up a 'reloadKey' state number to force useEffect to fetch again[cite: 41, 49]. */}
      <button className="btn" onClick={onRetry}>
        Try again
      </button>
    </div>
  );
}

// EXPORT STATEMENT
// Allows these components to be imported in App.jsx or page views using:
