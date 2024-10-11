
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div>
        <header>
            <div className="container py-5 flex  items-center justify-between">
                {/*Logo Section*/}
                <div>
                    <img src={Logo} alt="" className="w-48" />
                </div>
                {/* Navlinks section */}
                <ul className="hidden md:flex text-center gap-10 md:text-base text-sm">
                    <li>
                        <a href="#">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Customer Stories
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Blog
                        </a>
                    </li>
                </ul>
                {/*Button Section*/}
                <button className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
                    {" "}
                    Get in touch
                </button>
            </div>
        </header>
    </div>
  )
}

export default Navbar
