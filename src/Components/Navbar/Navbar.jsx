
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div>
        <header>
            <div className="container">
                {/*Logo Section*/}
                <div>
                    <img src={Logo} alt="" className="w-48" />
                </div>
                {/* Navlinks section */}
                <ul>
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
                <button>
                    {" "}
                    Get in touch
                </button>
            </div>
        </header>
    </div>
  )
}

export default Navbar
