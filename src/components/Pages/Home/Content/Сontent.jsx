import { Fragment} from "react";
import GetStarted from "./GetStarted/GetStarted";
import Statistics from "./Statistics/Statistics";

export default function Content() 
{
  return (
    <Fragment>
        <GetStarted/>
        <Statistics/>
    </Fragment>
  );
}