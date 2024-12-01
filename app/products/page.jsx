"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [isloding, setIsLoding] = useState(true);

  const getProductData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const Data = await res.json();
      setProductData(Data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoding(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className=" my-3">
      <h1 className=" text-orange-600 text-2xl my-4">All Products Names</h1>

      {isloding ? (
        <p>Loding...</p>
      ) : (
        productData.map((product) => (
          <div key={product?.id}>
            <Link href={`/products/${product?.id}`}>
              <h2 className=" cursor-pointer">{product?.firstName}</h2>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
