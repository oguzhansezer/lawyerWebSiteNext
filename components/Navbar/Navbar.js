import Link from "next/link";
import { MenuItem } from "./MenuItem";
import "./navbar.scss";
import { LawIcon, MenuIcon, CloseIcon } from "../../styles/icons.js";
import { useState } from "react";
import { useRouter } from "next/router";
const Navbar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const router = useRouter();

  const handleMmenuShown = () => {
    setIsMenuShown(isMenuShown == true ? false : true);
  };

  return (
    <nav className="navbarItems">
      <h1 className="navbarLogo">
        {"Önder Hukuk"}
        <LawIcon />
      </h1>
      <div className="menuIcon" onClick={() => handleMmenuShown()}>
        {isMenuShown && <CloseIcon />}
        {!isMenuShown && <MenuIcon />}
      </div>
      <ul className={isMenuShown ? "navMenu active" : "navMenu "}>
        {MenuItem.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setIsMenuShown()}
              className={router.pathname == item.page ? "selected" : ""}
            >
              <Link href={item.page}>
                <a className={item.className}>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
