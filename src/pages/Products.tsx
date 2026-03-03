import { useState, useMemo } from "react";
import { products, categories, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import OrderModal from "@/components/OrderModal";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [orderProduct, setOrderProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = category === "all" || p.category === category;
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, category]);

  return (
    <>
      <section className="bg-accent pt-32 pb-14">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-2 block">Catalog</span>
            <h1 className="font-display text-5xl md:text-6xl text-accent-foreground mb-2">Our Products</h1>
            <p className="text-accent-foreground/60 text-lg">Quality cement, steel, and construction materials at competitive prices.</p>
          </motion.div>
        </div>
      </section>

      <section className="container py-10">
        {/* Search & Filter */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="relative w-full sm:w-80 lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search products by name or brand..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-11"
              maxLength={100}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${category === c.id
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <ProductCard product={p} onOrder={setOrderProduct} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No products found. Try a different search or category.</p>
          </div>
        )}
      </section>

      <OrderModal product={orderProduct} open={!!orderProduct} onClose={() => setOrderProduct(null)} />
    </>
  );
};

export default Products;
