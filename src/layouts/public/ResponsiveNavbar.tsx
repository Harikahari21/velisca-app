import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = React.useState(false);
  const [isOpen, setIsOpen] = useState(null);

  const router = useRouter();
  const { asPath } = router;
  const navARR = [
    { title: "Home", link: "/", isSubmenu: false },
    { title: "About Us", link: "/about-us", isSubmenu: false },
    { title: "Product", link: "/products", isSubmenu: false },
    {
      title: "Manufacturing",
      link: "",
      isSubmenu: true,
      submenu: [
        {
          title: "Manufacturing Process",
          link: "/manufacturing-process",
        },
        {
          title: "Test Reports",
          link: "/test-reports",
        },
        {
          title: "Certification",
          link: "",
        },
      ],
    },
    {
      title: "Our Clients",
      link: "/our-clients",
      isSubmenu: false,
    },
    {
      title: "Investor Relation",
      link: "/investor-relation",
      isSubmenu: false,
    },
    {
      title: "Disclosure",
      link: "",
      isSubMenu: true,
      submenu: [
        {
          title: "Notice",
          link: "/notice",
        },
        {
          title: "Quarterly Compliance",
          link: "/quarterly-compliance",
        },
        {
          title: "Unclaimed Dividend",
          link: "/unclaimed-dividend",
        },
        {
          title: "Investor Related Cell",
          link: "/investor-related-cell",
        },
      ],
    },
    {
      title: "Contacts",
      link: "/contact-us",
      isSubmenu: false,
    },
  ];

  const handleClose = (e: any) => {
    e.target.dataset.closesidebar && setShowNav(false);
  };
  const toggleDropdown = (title: any) => {
    if (isOpen === title) {
      setIsOpen(null); // Close if already open
    } else {
      setIsOpen(title);
    }
    // setIsOpen(!isOpen);
  };
  return (
    <div className="main-container relative flex h-[4.5rem] items-center gap-1 justify-between py-2 shadow">
      <div className="h-full w-full">
        <Link href="/">
          <img src="/Alfa/logo.png" alt="logo" className="w-fit h-14" />
        </Link>
      </div>
      <div className="flex items-center justify-end gap-1">
        <div onClick={() => setShowNav(!showNav)} className="z-20">
          {showNav ? (
            <AiOutlineClose className="text-red-700 text-xl" />
          ) : (
            <AiOutlineMenu />
          )}
        </div>
      </div>

      <div
        id="nav-menu"
        data-closesidebar
        className={`absolute top-0 left-0 z-10 flex h-screen w-screen bg-black/20 transition-all duration-500 ease-in-out lg:-left-[1.7rem] ${
          showNav ? "translate-x-0" : "-translate-x-full"
        } `}
        onClick={handleClose}
      >
        <div className="z-20 w-[65vw] overflow-y-auto font-semibold bg-white py-4 px-3">
          <div className="flex w-full justify-start pt-2 pb-4">
            <Link href="/">
              <img src="/Alfa/logo.png" alt="logo" className="w-fit h-12" />
            </Link>
          </div>
          <hr />
          <div className="flex flex-col gap-4 pt-2 items-start">
            {navARR.map((item, i) => (
              <div key={i} className="relative  ">
                <Link href={item?.link} rel="noopener noreferrer">
                  <div className="flex items-center gap-1 font-medium text-sm ">
                    <div
                      onClick={() => toggleDropdown(item?.title)}
                      className={`${
                        item?.link === asPath ||
                        (item?.submenu &&
                          item?.submenu.some(
                            (subItem) => subItem?.link === asPath
                          ))
                          ? "text-primary"
                          : ""
                      } `}
                    >
                      {item.title}
                    </div>
                    {item?.submenu ? (
                      isOpen === item?.title ? (
                        <MdOutlineExpandLess className="" />
                      ) : (
                        <MdOutlineExpandMore className="" />
                      )
                    ) : null}
                  </div>
                </Link>
                {isOpen === item?.title && item?.submenu ? (
                  <div className=" ">
                    <div className="flex flex-col gap-1">
                      {item?.submenu?.map((innerItem, i) => (
                        <Link
                          key={i}
                          href={innerItem.link}
                          rel="noopener noreferrer"
                        >
                          <p className={`px-4 py-2 `}>{innerItem?.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResponsiveNavbar;
