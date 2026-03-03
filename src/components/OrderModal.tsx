import { useState } from "react";
import { Product } from "@/data/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Props = {
  product: Product | null;
  open: boolean;
  onClose: () => void;
};

const OrderModal = ({ product, open, onClose }: Props) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", mobile: "", address: "", quantity: "1" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    setSubmitted(true);
    toast({
      title: "Order Processed",
      description: "Redirecting you to WhatsApp...",
    });

    const msg = encodeURIComponent(
      `New Order Request:\n\nProduct: ${product.name} (${product.brand})\nQuantity: ${form.quantity}\n\nCustomer: ${form.name}\nMobile: ${form.mobile}\nAddress: ${form.address}`
    );

    // Redirect cleanly without popup blockers
    window.location.href = `https://wa.me/919438266515?text=${msg}`;

    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", mobile: "", address: "", quantity: "1" });
      onClose();
    }, 2000);
  };

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Place Order</DialogTitle>
          <DialogDescription>
            {product.name} — {product.brand}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center py-8 gap-3">
            <CheckCircle2 className="w-16 h-16 text-success" />
            <p className="text-lg font-semibold">Order Sent!</p>
            <p className="text-sm text-muted-foreground text-center">
              We'll confirm your order shortly via WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </div>
            <div>
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                required
                type="tel"
                maxLength={15}
                pattern="[0-9]{10,15}"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                placeholder="10-digit mobile number"
              />
            </div>
            <div>
              <Label htmlFor="address">Delivery Address</Label>
              <Input
                id="address"
                required
                maxLength={300}
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Full delivery address"
              />
            </div>
            <div>
              <Label htmlFor="qty">Quantity</Label>
              <Input
                id="qty"
                required
                type="number"
                min={1}
                max={9999}
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full mt-2">
              <MessageCircle className="w-4 h-4 mr-2" /> Send Order via WhatsApp
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
