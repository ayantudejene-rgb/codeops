export default function Skeleton() {
  return (
    <div className="skeleton" aria-label="Loading">
      <div className="skeleton-bar" />
      <div className="skeleton-bar" />
      <div className="skeleton-bar short" />
    </div>
  );
}