import { useLoaderData } from "react-router-dom";
import CourseData from "./CourseData";



const Course = () => {


    const Crs = useLoaderData();






    return (
        <div>

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-5xl text-white font-serif font-bold">Course</h1>
                </div>
              </div>
            </div>



            <div className=" flex justify-center ">
                
                <div className=" grid grid-cols-4 gap-5">

                      {

                          Crs.map( Crs => <CourseData Crs={Crs} ></CourseData> )

                      }


                </div>


            </div>
            
        </div>
    );
};

export default Course;