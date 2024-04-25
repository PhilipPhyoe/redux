import AddProduct from "./components/AddProduct";
import AllProducts from "./components/AllProducts";
import Counter from "./components/Counter";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <UpdateProduct id={5} />
    </div>
  );
};

export default App;
