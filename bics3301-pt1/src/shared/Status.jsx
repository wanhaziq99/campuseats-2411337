// Small reusable components for a loading message and an error with a retry button.
// Provided for you (same idea as CampusEats Status.jsx). You do not need to change it.

export function Loading({ text = 'Loading…' }) {
  return <p className="muted">{text}</p>
}

export function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-box" role="alert">
      <p>{message}</p>
      {/* Only show the button if the parent gave us something to call. */}
      {onRetry && <button onClick={onRetry}>Try again</button>}
    </div>
  )
}
