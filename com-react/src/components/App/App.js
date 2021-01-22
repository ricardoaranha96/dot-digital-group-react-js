//import logo from '../../logo.svg';
import "./App.css";
import Webdoor from "../Webdoor/Webdoor";
import SectionSlides from "../SectionSlides/SectionSlides";
import Footer from "../Footer/Footer";
import SectionAccordion from "../SectionAccordion/SectionAccordion";
import SectionVerticalImage from "../SectionVerticalImage/SectionVerticalImage";
import SectionContact from "../SectionContact/SectionContact";

function App() {
    return (
        <div>
            <Webdoor></Webdoor>
            <SectionSlides></SectionSlides>
            <SectionVerticalImage></SectionVerticalImage>
            <SectionAccordion></SectionAccordion>
            <SectionContact></SectionContact>
            <Footer></Footer>
        </div>
    );
}

export default App;
