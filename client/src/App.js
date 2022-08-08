import AppRoute from "./route/AppRoute";
import ProductContextProvider from "./global/productContext";
import CartContextProvider from "./global/cartContext";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <AppRoute />
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
