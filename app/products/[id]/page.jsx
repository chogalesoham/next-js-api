"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState();
  const { id } = useParams();

  const product = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}`);
      const Data = await res.json();
      setProducts(Data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    product();
  }, []);
  return (
    <div>
      <h1>{products?.email}</h1>
      <h2>{products?.university}</h2>
    </div>
  );
};

export default Product;
