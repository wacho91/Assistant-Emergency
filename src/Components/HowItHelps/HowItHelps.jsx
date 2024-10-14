
import Card from "./CardComp.jsx";
import icon1 from "../../assets/Icon/1 (2).png"
import icon2 from "../../assets/Icon/2 (2).png"
import icon3 from "../../assets/Icon/3 (1).png"

const HowItHelps = () => {
  return (
    <section>
        <div className="conatiner py-16 my-20">
            <div>
                <div>
                    <div>
                        <Card
                            icon={icon1}
                            heading="Symptoms"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItHelps
