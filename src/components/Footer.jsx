import { Link } from "react-router-dom";
import Logo from "../assets/bitesy.png"
function Footer () {
  return (
    <footer className="bg-gradient-to-r from-neutral-100 to-neutral-100 rounded-lg shadow-xl mt-4 mx-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                  <img src={Logo} className="h-16" alt="Bitesy Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">Bitesy</span>
                </Link >
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                    <li>
                        <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline me-4 md:me-6">Licensing</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center">© 2023 <Link to="/" className="hover:underline">Bitesy™</Link>. All Rights Reserved.</span>
        </div>
    </footer>
  );
}

export default Footer;