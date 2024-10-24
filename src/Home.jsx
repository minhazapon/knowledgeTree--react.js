import AboutUs from "./home files/AboutUs";
import AcademyLogo from "./home files/AcademyLogo";
import Banner from "./home files/Banner";
import Blogs from "./home files/Blogs";
import Categories from "./home files/Categories";
import Courses from "./home files/Courses";
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
            <Courses></Courses>
            <AcademyLogo></AcademyLogo>
            <Categories></Categories>
            <TreeClock></TreeClock>
            <Instructors></Instructors>
            <Evnets></Evnets>
            <Blogs></Blogs>
       
             
        </div>
    );
};

export default Home;