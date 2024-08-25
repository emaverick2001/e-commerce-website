import ProductCardImage from "@/components/ui/productCardImage";
import ProductList from "@/components/ui/productList";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <ProductCardImage />
      <ProductList />
    </section>
  );
}
