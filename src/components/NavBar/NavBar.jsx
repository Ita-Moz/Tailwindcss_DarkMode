import { useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { BiMenuAltLeft } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import useDarkMode from '../../useDarkMode';
function NavBar(props) {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const { isMobile } = props;
    const [openMenu, setopenMenu] = useState(false);
    const handleOpenMenu = () => {
        setopenMenu(!openMenu);
    };
    return (
        <nav className="dark:text-white flex text-black items-center">
            <div className="flex items-center">
                <div className="text-20 font-bold mr-2">NerdCard</div>
                {isDarkMode ? (
                    <BsFillSunFill
                        size={'24px'}
                        color="#e9c46a"
                        className="cursor-pointer"
                        onClick={() => toggleDarkMode()}
                    />
                ) : (
                    <FaMoon
                        size={'24px'}
                        color="#e9c46a"
                        className="cursor-pointer"
                        onClick={() => toggleDarkMode(!isDarkMode)}
                    />
                )}
            </div>
            <ul className=" md:flex md:gap-10 ml-auto text-16 font-semibold">
                {openMenu && isMobile ? (
                    <MdOutlineClose
                        size={'24px'}
                        className="cursor-pointer"
                        onClick={handleOpenMenu}
                    />
                ) : !openMenu && isMobile ? (
                    <BiMenuAltLeft
                        size={'24px'}
                        className="cursor-pointer"
                        onClick={handleOpenMenu}
                    />
                ) : (
                    <>
                        <li className="btn-hover">Features</li>
                        <li className="btn-hover">Menu</li>
                        <li className="btn-hover md:mr-[50px]">Our Story</li>
                        <li className="btn-hover ">Contact</li>
                    </>
                )}
                {openMenu && (
                    <div className="absolute right-5 bg-white text-black text-13 p-5">
                        <li>Features</li>
                        <li>Menu</li>
                        <li>Our Story</li>
                        <li>Contact</li>
                    </div>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;
