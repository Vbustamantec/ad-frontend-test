import { Badge } from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button/Button";
import { PriceTag } from "@/components/atoms/PriceTag";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-600">
      Hello, world!
      <Button variant="primary">ADD TO CART</Button>
      <Button variant="secondary">Checkout</Button>
      <Badge text="New" />
      <PriceTag amount={225} />
    </main>
  );
}
