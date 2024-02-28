import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
 import Contact from "../components/contact";
// import Welcome from "../components/Home/Welcome";
// import Cards from "../components/Home/Cards";
// import Causes from "../components/Home/Causes";
// import FooterBar from "../components/FooterBar";
// import Volunteer from "../components/Home/Volunteer";
const ContactPage = () => {
    const [selected, setSelected] = useState('')
    return (
        <>
        <Header selected={selected} setSelected={setSelected}/>
         <Contact selected={selected} setSelected={setSelected}/>
        {/*<Welcome selected={selected} setSelected={setSelected}/>
        <Cards selected={selected} setSelected={setSelected}/>
        <Causes selected={selected} setSelected={setSelected}/>
        <Volunteer selected={selected} setSelected={setSelected}/>
        <FooterBar selected={selected} setSelected={setSelected}/> */}
        <Footer selected={selected} setSelected={setSelected}/>
        </>
    )
}
export default ContactPage;