import Property from "../../Property"

export default function PlanCard({list, title, image ,description }) 
{
  return (
    <div className="plan-container">

    <div className="plan-block">
      <img srcSet={image} alt="free plan" />
      <p className="type-plan">{title}</p>
      <div className="plan-property">
         {  
            list.map((text, index) => 
            (   
                <Property key={index} text={text} img="/images/check-arrow.png" />
            ))
         }
      </div>
    </div>
     
    <div className="plan-conrol">
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <button>Select</button>
    </div>
  </div>
  );
}