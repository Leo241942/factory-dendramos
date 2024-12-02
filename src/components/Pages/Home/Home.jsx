import { Fragment} from "react";
import Header from "../../Header/Header";
import Content from "./Content/Сontent";
import Foooter from "../../Footer/Footer";

export default function HOME() 
{
  return (
   <Fragment>
      <Header/>
      <Content/>
      <Foooter/>
    </Fragment>
  );
}