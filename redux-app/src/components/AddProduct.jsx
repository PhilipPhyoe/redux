import { useAddProductMutation } from "../redux/service/dummydata";

const AddProduct = () => {
  const [addProduct, { data, isError, isLoading }] = useAddProductMutation();

  const handleAdd = async () => {
    try {
      const productData = {
        id: 500,
        title: "Amazing",
        description: "It is amazing!",
      };
      await addProduct(productData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Add New Product</h1>
      <button onClick={handleAdd}>Add Product</button>
      <h4>{data?.title}</h4>
    </div>
  );
};

export default AddProduct;
