export default function Card({ props }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
        <p>{props.cardNumber}</p>
        <p>{props.cardHolderName}</p>
        <p>{props.month + "/" + props.year }</p>
        </div>
      </div>
      <div className="card">
        <div className="card-back"></div>
      </div>
    </div>
  );
}
