import Header from './components/Header';
import Menu from './components/Menu';
import { dishes } from './data';

function App() {
    return (
        <div>
            <Header />
            {/* Change "Main" to "Vegetarian" or "Dessert" to test filtering */}
            <Menu dishes={dishes} category="Main" />
        </div>
    );
}

export default App;