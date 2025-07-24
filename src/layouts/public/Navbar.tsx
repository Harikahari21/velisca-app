import { LogIn, Menu, UserPlus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();
  const { asPath } = router;

  const navARR = [
    { title: "Homestays", link: "/", isSubmenu: false },
    { title: "About Us", link: "/about-us", isSubmenu: false },
    { title: "Services", link: "/services", isSubmenu: false },
    { title: "Experiences", link: "/experiences", isSubmenu: false },
  ];

  const toggleDropdown = (title: any) => {
    if (isOpen === title) {
      setIsOpen(null); // Close if already open
    } else {
      setIsOpen(title);
    }
    // setIsOpen(!isOpen);
  };

  return (
    <section className="sticky top-0 z-[999] hidden bg-white w-full lg:block shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <div className="main-container flex justify-between items-center py-3 ">
        <Link href="/">
          <img src="/logo.png" alt="" className=" w-fit h-12" />
        </Link>
        <div className="flex gap-8">
          {navARR.map((item, i) => (
            <div key={i} className="relative group hover:text-primary  ">
              <Link href={item?.link} rel="noopener noreferrer">
                <div className="flex items-center gap-1 font-medium text-md ">
                  <div onClick={() => toggleDropdown(item?.title)} className="">
                    {item.title}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-6 items-center">
          <Link href="/login">
            <div className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-all">
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </div>
          </Link>
          <Link href="/register">
            <div className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-all">
              <UserPlus className="w-5 h-5" />
              <span>Register</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
