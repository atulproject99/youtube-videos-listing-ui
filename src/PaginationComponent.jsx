import "./PaginationComponent.css";
export default function PaginationComponent({
  onDecrement,
  onIncrement,
  pageNo,
}) {
  return (
    <div className="pagination-container">
      <button onClick={onDecrement}>-</button>
      <h4 className="pagination-title">{pageNo}</h4>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
