import { useGetter } from "store/accessors";
import ProductCard from "./ProductCard";

export default function Products() {
  const products = useGetter((state) => state.products);
  return (
    <div className="container-padded grid content-start pt-4">
      <div className="grid justify-items-center gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
