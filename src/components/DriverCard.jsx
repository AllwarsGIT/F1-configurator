function DriverCard({ name = "Car", price = "Price", isActive, onActivate }) {
  return (
    <div className={isActive ? '' : 'card-opacity'}>
      <div className="card-rotate">
        <div
          className={`card ${isActive ? 'active-gradient card-opacity-set' : ''}`}
          onClick={onActivate}
        >
          <h3>{name}</h3>
          <h4>{price}</h4>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;