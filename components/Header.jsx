import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <nav className="flex justify-center gap-5 font-bold  underline">
        <Link href="/category">Category</Link>
        <Link href="/product">Product</Link>
        {/* <Link href="/product">Product</Link> */}
        <Link href="/recommendation">Recommendation</Link>
        {/* <Link href="/coupon">Coupon</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/offers">Offers</Link> */}

      </nav>
    </header>
  );
}

export default Header;
