import Header from './components/Header';
import Menu from './components/Menu';
import { dishes } from './data';

function App() {
    return (
        <div>
            <Header />
            <Menu dishes={dishes} />
        </div>
    );
}

export default App;