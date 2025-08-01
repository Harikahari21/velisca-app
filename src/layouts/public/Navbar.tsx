import { LogIn, Menu, UserPlus, X, UserCircle, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const router = useRouter();
  const { asPath } = router;

  const navARR = [
    { title: "Homestays", link: "/", isSubmenu: false },
    { title: "About Us", link: "/about-us", isSubmenu: false },
    { title: "Services", link: "/services", isSubmenu: false },
    { title: "Experiences", link: "/experiences", isSubmenu: false },
  ];

  const toggleDropdown = (title: string) => {
    setIsOpen((prev) => (prev === title ? null : title));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-[999] bg-white w-full shadow-md">
      {/* Desktop Navbar */}
      <div className="main-container hidden lg:flex justify-between items-center py-3">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="w-fit h-12" />
        </Link>

        <div className="flex gap-8">
          {navARR.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className={`font-medium text-md hover:text-primary ${
                asPath === item.link ? "text-primary" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Profile Icon with Dropdown */}
        <div className="relative">
          <UserCircle
            className="w-6 h-6 cursor-pointer hover:text-primary"
            onClick={() => setProfileOpen(!profileOpen)}
          />
          {profileOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-50">
              <Link
                href="/login"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-base"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <UserPlus className="w-4 h-4" />
                Signup
              </Link>
              <Link
                href="/become-a-host"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"
              >
                <Home className="w-4 h-4" />
                Become a Host
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </Link>
        <button onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 shadow-md">
          <div className="flex flex-col gap-4">
            {navARR.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="text-md font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <hr className="my-2" />
            <Link
              href="/login"
              className="flex items-center gap-2 text-sm hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link
              href="/register"
              className="flex items-center gap-2 text-sm hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <UserPlus className="w-4 h-4" />
              Signup
            </Link>
            <Link
              href="/become-a-host"
              className="flex items-center gap-2 text-sm hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="w-4 h-4" />
              Become a Host
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
