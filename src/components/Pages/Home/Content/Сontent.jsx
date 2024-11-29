import { Fragment} from "react";
import GetStarted from "./GetStarted/GetStarted";
import Statistics from "./Statistics/Statistics";
import Features from "./Features/Features";
import ChoosePlan from "./ChoosePlan/ChoosePlan";

export default function Content() 
{
  return (
    <Fragment>
        <GetStarted/>
        <Statistics/>
        <Features/>
        <ChoosePlan/>
    </Fragment>
  );
}