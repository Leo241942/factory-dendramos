import "./Features.css"
import Property from "../Property";

export default function Features() 
{
    const texts = ["Powerfull online protection.", "Internet without borders.", "Supercharged VPN", "No specific time limits."];

    return (
        <div className="features-container" id="features">
            <img srcSet="/images/features.png" />
            <div className="features-block">
                <h1>We Provide Many Features You Can Use</h1>
                <p>You can explore the features that we provide with fun and have their own functions each feature.</p>

                <div className="features-properties">
                    {texts.map((text, index) => 
                    (
                        <Property key={index} text={text} img="/images/check-circle.png" />
                    ))}
                </div>
            </div>


        </div>
    );
}