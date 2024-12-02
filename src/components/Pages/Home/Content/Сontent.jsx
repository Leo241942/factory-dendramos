import { Fragment} from "react";
import GetStarted from "./GetStarted/GetStarted";
import Statistics from "./Statistics/Statistics";
import Features from "./Features/Features";
import ChoosePlan from "./ChoosePlan/ChoosePlan";
import HugeGlobalNetwork from "./HugeGlobalNetwork/HugeGlobalNetwork";
import Testimonials from "./Testimonials/Testimonials";

export default function Content() 
{
  return (
    <Fragment>
        <GetStarted/>
        <Statistics/>
        <Features/>
        <ChoosePlan/>
        <HugeGlobalNetwork/>
        <Testimonials/>
    </Fragment>
  );
}