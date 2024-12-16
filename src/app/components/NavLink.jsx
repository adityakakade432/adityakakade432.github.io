import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  style: ["normal", "italic"],  // Add styles as needed
});

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className={`py-2 pl-3 pr-4 bg-gradient-to-r from-[#d5bdaf] via-[#e3d5ca] to-[#f5ebe0] inline-block text-transparent bg-clip-text sm:text-xl rounded md:p-0 hover:text-white ${poppins.className}`}>
      {title}
    </Link>
  )
}

export default NavLink;