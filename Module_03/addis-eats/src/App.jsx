import Header from './components/Header';
import Dish from './components/Dish';

const dishes = [
    { id: 1, name: 'Doro Wat', price: 500, spicy: true },
    { id: 2, name: 'Shiro', price: 200, spicy: false },
    { id: 3, name: 'Tibs', price: 500, spicy: true },
    { id: 4, name: 'Kitfo', price: 500, spicy: true },
    { id: 5, name: 'Beyaynet', price: 200, spicy: false },
];

function App() {
    return (
        <div>
            <Header />
            <section className="menu-grid">
                {dishes.map((dish) => (
                    <Dish
                        key={dish.id}
                        name={dish.name}
                        price={dish.price}
                        spicy={dish.spicy}
                    />
                ))}
            </section>
        </div>
    );
}

export default App;