import { Link } from "react-router-dom";
import { Search, UserCircle2, ShoppingBag, Menu } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between py-4">
      <div className="flex ">
        <Menu className="block  md:hidden" color="#000" strokeWidth={1.25} />
        <h1 className="text-base md:text-2xl"> 3legant</h1>
      </div>
      <nav className="hidden md:flex gap-x-10 text-gray-500">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/product">Product</Link>
        <Link to="/contacts">Contact Us </Link>
      </nav>
      <div className="flex gap-x-2 items-center">
        <Search className="hidden md:block" color="#000" strokeWidth={1.25} />
        <Link
          to="/sign-up"
          className="p-1 rounded-full transition duration-500 hover:cursor-pointer hover:bg-gray-200"
        >
          <UserCircle2
            className="hidden md:block "
            color="#000"
            strokeWidth={1.25}
          />
        </Link>
        <Link
          to="/sing-in"
          className="p-1 rounded-full transition duration-500 hover:cursor-pointer hover:bg-gray-200"
        >
          <ShoppingBag color="#000" strokeWidth={1.25} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
