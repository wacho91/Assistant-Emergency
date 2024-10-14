
import Icon1 from "../../assets/icon1.png"
import Icon2 from "../../assets/icon2.png"

const Trust = () => {
  return (
    <section className="bg-brandWhite py-16 mt-20">
        <div className="container">
            <h1 className="py-6 text-4xl font-bold text-darkBlue text-center">
                Why you can trust this tools
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6 text-center md:text-left md:px-16 xl:px-32">
                    <img src={Icon1} alt="" className="mx-auto md:mx-0" />
                    <p className=" text-3xl font-semibold">Based on reliable sources</p>
                    <p>
                        We want our tool to be safe and reliable, so its logic is based on
                        the official global information provided by the WHO.
                    </p>
                    <p className="text-sm text-gray-400">
                        Enchance your preliminary diagnosis and triage with pediatric
                        content <span className="text-primary"> Lear More</span>
                    </p>
                </div>
                <div className="space-y-6 text-center md:text-left md:px-16 xl:px-32">
                    <img src={Icon2} alt="" className="mx-auto md:mx-0" />
                    <p className="text-3xl font-semibold">Based on reliable sources</p>
                    <p>
                        We want our tool to be safe and reliable, so its logic is based on
                        the official global information provided by the WHO.
                    </p>
                    <p className="text-sm text-gray-400">
                        Enchance your preliminary diagnosis and triage with pediatric
                        content <span className="text-primary">Learn More</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trust
