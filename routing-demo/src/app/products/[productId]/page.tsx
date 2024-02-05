export default function ProductDetails({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>Product details about - product {params.productId}</h1>;
}
