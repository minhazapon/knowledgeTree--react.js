import AboutUs from "./home files/AboutUs";
import AcademyLogo from "./home files/AcademyLogo";
import Banner from "./home files/Banner";
import Categories from "./home files/Categories";
import Evnets from "./home files/Evnets";
import Instructors from "./home files/Instructors";
import Learn from "./home files/Learn";
import TreeClock from "./home files/TreeClock";


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Learn></Learn>
            <AboutUs></AboutUs>
            <AcademyLogo></AcademyLogo>
            <Categories></Categories>
            <TreeClock></TreeClock>
            <Instructors></Instructors>
            <Evnets></Evnets>
       
             
        </div>
    );
};

export default Home;