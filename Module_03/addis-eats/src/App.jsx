import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import ErrorBoundary from "./components/ErrorBoundary";
import MenuUnavailable from "./components/MenuUnavailable";
import Skeleton from "./components/ui/Skeleton";

import Home from "./pages/Home";
import Menu from "./components/Menu";
import DishDetail from "./pages/DishDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Exercise 4: Lazy-loaded routes
const Checkout = lazy(() => import("./pages/Checkout"));
const Receipt = lazy(() => import("./pages/Receipt"));

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          {/* Top-level boundary: catches anything that escapes the page-level ones */}
          <ErrorBoundary fallback={<MenuUnavailable />}>
            <Suspense fallback={<Skeleton />}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="menu" element={<Menu />} />
                  <Route path="menu/:id" element={<DishDetail />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="login" element={<Login />} />
                  <Route
                    path="checkout"
                    element={
                      <RequireAuth>
                        <Checkout />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="orders/:id"
                    element={
                      <RequireAuth>
                        <Receipt />
                      </RequireAuth>
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;