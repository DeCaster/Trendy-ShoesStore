import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="abou-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We provide you</span>
          <br />
          <span className="text-fuchsia-700 ">Super</span> <span className="text-fuchsia-700 ">Quality</span> Shoes
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">Ensuring premium comfort and style,our meticulousy crafted footwear is <span className="text-fuchsia-700 ">designed</span> to elevate your experience, providing you with unmatched quality innovation,and a touch of elgence</p>
        <p className="mt-6 lg:max-w-lg info-text"><span className="text-fuchsia-700 ">Our</span> dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
        <a href="/#contact-us"><Button label='View Detail' iconURL={arrowRight} /></a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>

    </section>
  )
}

export default SuperQuality