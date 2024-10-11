"use client";

import useProduct from "@/hooks/useProduct";
import Card from "@/components/Card";
import { FC } from "react";

const ProductList: FC = () => {
  const { productMap, isLoading, error } = useProduct();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading products</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-5">
      {Object.values(productMap).map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
