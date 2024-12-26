import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-6 flex justify-center items-center">
      <div className="flex items-center gap-2 py-16">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Apply Digital Logo"
            width={170}
            height={44}
            className="w-[170px] h-[44px] object-contain"
            priority
          />
        </Link>
      </div>
    </footer>
  );
}
