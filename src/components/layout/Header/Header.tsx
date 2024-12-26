import Link from "next/link";

import CartIcon from "@/components/atoms/Icon/CartIcon";

export default function Header() {
  return (
    <header className="fixed h-16 top-0 px-5 left-0 w-full flex justify-between items-center py-2 border-b bg-primary z-50 lg:px-32">
      <Link href="/" className="text-2xl font-bold text-tertiary">
        GamerShop
      </Link>

      <Link
        href="/cart"
        aria-label="Cart"
        className="text-tertiary flex items-center"
      >
        <CartIcon size={24} color="gray" />
      </Link>
    </header>
  );
}
