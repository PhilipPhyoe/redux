import { useUpdateProductMutation } from "../redux/service/dummydata";

const UpdateProduct = ({ id }) => {
  const [updateProduct, { data }] = useUpdateProductMutation();
  const handleUpdate = async () => {
    try {
      const productData = {
        title: "Amazing!",
      };
      await updateProduct({
        id: id,
        product: productData,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Update Product</h1>
      <button onClick={handleUpdate}>Update</button>
      <h3>{data?.title}</h3>
    </div>
  );
};

export default UpdateProduct;
