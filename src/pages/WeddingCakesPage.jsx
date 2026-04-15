import { useProducts } from "../contexts/ProductContext";
import ProductGrid from "../components/ProductGrid";

export default function WeddingCakesPage() {
  const { weddingCakes } = useProducts();

  return (
    <section className="productsSection">
      <h2 className="sectionTitle">Our Products</h2>
      <h3 className="categoryTitle">Wedding Cakes</h3>
      <ProductGrid products={weddingCakes} />
    </section>
  );
}
