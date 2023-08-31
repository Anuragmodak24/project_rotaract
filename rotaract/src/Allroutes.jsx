
import { Routes,Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Newregister } from "./Components/Newregister";
import { Aboutus } from "./Components/Aboutus";
import { Ongoingprojects } from "./Components/Ongoingprojects";
import { Ourteam } from "./Components/Ourteam";
import { Contactus } from "./Components/Contactus";
import { Gallery } from "./Components/Gallery";
import { Notice } from "./Components/notice";
import { Signup } from "./Components/Registerhare";
import { Donate } from "./Components/donor";

export const AllRoutes =()=>{

    return(
        <>
     <Routes>
    <Route path={"/"} element={<Home/>}/>
    <Route path={"/signup"} element={<Signup/>}/>
    <Route path={"/newregister"} element={<Newregister/>}/>
    <Route path={"/ongoingpro"} element={<Ongoingprojects/>}/>
    <Route path={"/ourteam"} element={<Ourteam/>}/>
    <Route path={"/contactus"} element={<Contactus/>}/>
    <Route path={"/aboutus"} element={<Aboutus/>}/>
    <Route path={"/notice"} element={<Notice/>}/>
    <Route path={"/gallery"} element={<Gallery/>}/>
    <Route path={"/donor"} element={<Donate/>}/>

     </Routes>
        </>
    );
}