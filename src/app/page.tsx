import { Badge, Button, PriceTag } from "@/components/atoms";
import CartItem from "@/components/molecules/CartItem/CartItem";
import GameCard from "@/components/molecules/GameCard/GameCard";

export default async function Home() {
  return (
    <main className="flex gap-2 min-h-screen flex-col items-center justify-between pt-24 px-3 ">
      <Button variant="primary">ADD TO CART</Button>
      <Button variant="secondary">Checkout</Button>
      <Badge text="New" className="mb-2" />
      <PriceTag amount={225} />
      {/*   <CartItem
        genre="MMORPG"
        id="1"
        image="/game-images/hollowknight.jpeg"
        isNew
        name="World of Warcraft"
        price={332}
      />
      <GameCard
        genre="MMORPG"
        id="1"
        image="/game-images/hollowknight.jpeg"
        isNew
        name="World of Warcraft"
        price={332}
      /> */}
    </main>
  );
}
