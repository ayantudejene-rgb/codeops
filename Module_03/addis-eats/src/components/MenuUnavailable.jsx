export default function MenuUnavailable() {
  return (
    <div className="fallback">
      <h3>The menu could not be displayed.</h3>
      <p>Please try refreshing the page, or come back in a moment.</p>
      <button onClick={() => window.location.reload()}>Retry</button>
    </div>
  );
}