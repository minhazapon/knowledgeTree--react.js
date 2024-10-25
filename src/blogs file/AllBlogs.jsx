import { useLoaderData } from "react-router-dom";
import BlogsBanner from "./BlogsBanner";
import ABDetails from "./ABDetails";



const AllBlogs = () => {

    const ABlogs = useLoaderData()


    return (
        <div>
            <div>
                 <BlogsBanner></BlogsBanner>
            </div>


            <div className="flex justify-center mt-10">


                <div className=" grid  md:grid-cols-3 gap-5 " >


                     {

                        ABlogs.map( aBlogs =>  <ABDetails aBlogs={aBlogs} ></ABDetails> )


                     }


                </div>


            </div>
            
        </div>
    );
};

export default AllBlogs;