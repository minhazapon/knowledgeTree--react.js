import { useQuery } from "@tanstack/react-query";
import CoursesDetails from "./CoursesDetails";


const Courses = () => {


    const { data: query } = useQuery({
         queryKey:['query'],
         queryFn: async () =>{            
            const res = await fetch('https://knowledgetree-express-js-1.onrender.com/courseData')
            return res.json()
         }
    })


    return (
        <div className=" mt-20 mb-10 ml-5 mr-5 ">
             


                 
                 <div>
                     
                     <p className=" text-center font-serif text-orange-500 "> DISCOVER NEW</p>
                     <p className=" mt-5 text-center font-serif text-5xl ">Our Top Online Courses</p>
                     <p className=" mt-5 text-center font-serif ">We’ll then ask you to tell us your current level of English or invite you to take our quick 20 minute <br></br>placement test so we can make sure you start learning English at the level that’s right for you.</p>
 

                 </div>



            <div className=" flex justify-center ">

              
              <div className=" grid  md:grid-cols-4 gap-5 ">
                    
                    {
                        query?.map( query => <CoursesDetails query={query} ></CoursesDetails> ) 
                    }


              </div>



            </div>
            
        </div>
    );
};

export default Courses;