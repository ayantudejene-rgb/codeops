import { CartProvider } from "./context/CartProvider";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div>
          <Header />
          <Menu />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;