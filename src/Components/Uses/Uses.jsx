
import Img1 from "../../assets/Uses/1 (1).png"
import Img2 from "../../assets/Uses/2 (1).png"
import Img3 from "../../assets/Uses/3.png"

const Uses = () => {
  return (
    <section>
        <div className="container my-14">
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="order-last md:order-first flex flex-col justify-center xl:pr-14">
                    <h1 className="text-3xl font-bold text-darkBlue">
                        How it Helps people
                    </h1>
                    <p className=" text-gray-400 mt-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                        esse ab natus.
                    </p>
                    <p className="text-sm text-gray-400 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                        <a href="#" className="text-primary">
                        Learn More
                        </a>
                    </p>
                    <button className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
                        Get in Touch
                    </button>
                </div>
                <div>
                    <img src={Img1} alt="" className="w-full rounded-3xl " />
                    <p className="text-gray-400 mt-4">Coronavirus</p>
                </div>
                <div>
                    <img src={Img2} alt="" className="w-full rounded-3xl" />
                    <p className="text-gray-400 mt-4">Diagnostic</p>
                </div>
                <div>
                    <img src={Img3} alt="" className="w-full rounded-3xl" />
                    <p className="text-gray-400 mt-4">Symptoms</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Uses
