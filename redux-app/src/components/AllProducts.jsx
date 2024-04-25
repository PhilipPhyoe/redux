import { useGetAllProductsQuery } from "../redux/service/dummydata";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();
  console.log(data);

  return (
    <div>
      <h1>All Products</h1>
      {data?.products.map((product) => (
        <div key={product.id}>
          <a href={`/products/${product.id}`}>
            <p>{product.id}</p>
          </a>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
