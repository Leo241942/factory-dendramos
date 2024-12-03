import "./ChoosePlan.css"
import PlanCard from "./PlanCard/PlanCard";

export default function ChoosePlan() 
{
  const freePlan = ["Powerfull online protection.", "Internet without borders.", "Supercharged VPN", "No specific time limits."];
  const standardPlan = ["Unlimited Bandwitch", "Encrypted Connection", "Yes Traffic Logs", "Works on All Devices", "Connect Anyware"];
  const premiumPlan = ["Unlimited Bandwitch", "Encrypted Connection", "Yes Traffic Logs", "Works on All Devices", "Connect Anyware", "Get New Features"];
  return (
    <div className="choooseplan-container" id="choooseplan">

      <div className="choooseplan-text">
        <h1>Choose Your Plan</h1>
        <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      </div>

      <div className="plans-container">
         <PlanCard list={freePlan} title="Free plan" image= "/images/plans/free.png" description="Free" />
         <PlanCard list={standardPlan} title="Standard Plan" image= "/images/plans/standard.png" description="<strong>$9</strong> / mo" />
         <PlanCard list={premiumPlan} title="Premium Plan" image= "/images/plans/premium.png" description="<strong>$12</strong> / mo" />
      </div>
    </div>
  );
}