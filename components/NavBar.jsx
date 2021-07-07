import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Nav from "./Nav";
import NavLogo from "./NavLogo";
import NavButton from "./NavButton";
import NavSearch from "./NavSearch";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="z-50  fixed w-full h-20">
      <ClickAwayListener onClickAway={() => setMobileMenuOpen(false)}>
        <header className="shadow-content flex flex-wrap flex-row justify-between lg:items-center lg:space-x-4 bg-white py-6 px-10 relative">
          <NavLogo />
          <NavSearch />
          <NavButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
          <Nav trigger={mobileMenuOpen} />
        </header>
      </ClickAwayListener>
    </div>
  );
}

export default NavBar;
