const Product = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/users/${params.id}`);
  const Data = await res.json();
  return <div>{<h1>{Data.email}</h1>}</div>;
};

export default Product;
