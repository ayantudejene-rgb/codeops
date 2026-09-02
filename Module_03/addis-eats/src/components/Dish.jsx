function Dish({ name, price, spicy }) {
    return (
        <div className="dish-card">
            <h3>{name}</h3>
            <p>{price} ETB</p>
            {spicy && <span>🌶️ Spicy</span>}
        </div>
    );
}

export default Dish;