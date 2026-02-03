import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/">La Boutique de Réparation</Link>
        <div>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
