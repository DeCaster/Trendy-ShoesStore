import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We provide you</span>
          <br />
          <span className="text-fuchsia-700 ">Special</span> Offer
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">Customer Appreciation: Earn double points on every purchase! 
        As a token of our gratitude for your continued support,
        we are excited to offer you this exclusive deal. For a limited time, 
        every shoe you buy will earn you double the reward points.</p>

        <p className="mt-6 lg:max-w-lg info-text">This means you can save even more on future purchases. 
        Don't miss out on this incredible opportunity to get more value for your money!</p>
        <div className="flex mt-11 flex-wrap gap-4">
        <Button label='Shop now' iconURL={arrowRight}/>
        <Button label='Learn more' backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
        
      </div>
    </section>
  )
}

export default SpecialOffer