import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => {
    //get all products reading
    getAllProducts: builder.query({
      query: () => "/products",
    });
  },
});

export const { useGetAllProductsQuery } = productsApi;
