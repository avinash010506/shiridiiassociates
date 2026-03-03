import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  product: Product;
  onOrder: (product: Product) => void;
};

const ProductCard = ({ product, onOrder }: Props) => {
  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in ${product.name} (${product.brand}). Please share details.`
  );

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className="h-full">
      <motion.div
        className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-shadow duration-300 group h-full flex flex-col"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="aspect-[4/3] overflow-hidden bg-muted relative" style={{ transform: "translateZ(30px)" }}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <Badge
            variant={product.inStock ? "default" : "destructive"}
            className={`absolute top-3 right-3 ${product.inStock ? "bg-success text-white border-0 shadow-sm" : ""}`}
            style={{ transform: "translateZ(40px)" }}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>

        <div className="p-5 flex flex-col gap-3 flex-1" style={{ transform: "translateZ(20px)" }}>
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest">{product.brand}</p>
            <h3 className="font-display font-semibold text-card-foreground leading-tight text-lg mt-1 group-hover:text-primary transition-colors">{product.name}</h3>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed flex-1">{product.description}</p>

          {product.specs && (
            <div className="bg-gradient-to-r from-accent/5 to-transparent rounded-lg px-3 py-2 border border-border/50">
              <p className="text-xs text-foreground/85 leading-relaxed font-medium">✨ {product.specs}</p>
            </div>
          )}

          <div className="mt-2 space-y-3">
            {product.price ? (
              <p className="text-2xl font-bold text-foreground">
                ₹{product.price.toLocaleString("en-IN")}{" "}
                <span className="text-xs font-medium text-muted-foreground">/{product.unit}</span>
              </p>
            ) : (
              <p className="text-sm font-semibold text-secondary">Contact for Price</p>
            )}

            <div className="flex gap-2">
              <Button
                size="sm"
                className="flex-1 shadow-md hover:shadow-primary/25 transition-all"
                onClick={() => onOrder(product)}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-4 h-4 mr-1.5" /> Order
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1 border-success/40 text-success hover:bg-success/10 hover:border-success"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(`https://wa.me/919438266515?text=${whatsappMsg}`, '_blank', 'noopener,noreferrer');
                }}
              >
                <MessageCircle className="w-4 h-4 mr-1.5" /> Enquire
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
