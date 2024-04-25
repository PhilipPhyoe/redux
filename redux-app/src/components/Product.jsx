import { useGetProductByIdQuery } from "../redux/service/dummydata";

const Product = () => {
  const { data } = useGetProductByIdQuery();
  console.log(data);
  return (
    <div>
      <h1>{data?.product.title}</h1>
    </div>
  );
};

export default Product;
