import Slider from "./Slider/Slider";
import "./Testimonials.css"

export default function Testimonials() 
{
    return (
      <div className="testimonials-container">
         <div className="testimonials-text">
            <h1>Trusted by Thousands of Happy Customer</h1>
            <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
         </div>
         <Slider/>
      </div>
    );
  }