import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our<span className="text-violet-800" >Customers</span> Say?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center">Hear geenuine stories from our satisfied customers about their exceptional experiences with us.</p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((reviews) => (
            <ReviewCard key={reviews.customerName}
            imgURL={reviews.imgURL}
            customerName={reviews.customerName}
            rating={reviews.rating}
            feedback={reviews.feedback}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews