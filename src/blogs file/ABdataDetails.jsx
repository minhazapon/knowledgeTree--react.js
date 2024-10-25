import { useLoaderData } from "react-router-dom";
import BlogsBanner from "./BlogsBanner";





const ABdataDetails = () => {


    const AB = useLoaderData()

    const { _id, name, image, description, focus, url } = AB

    return (
        <div>
           
           <div>
              <BlogsBanner></BlogsBanner>
           </div>


           <div>



           <div className=" flex justify-center mt-10">
                

                <div className="max-w-lg p-4 shadow-md bg-black text-gray-100">
                <div className="space-y-4">
                    <div className="space-y-2">
                <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                </div>
                <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold text-white"> Name: {name} </h3>
                    <h3 className="text-xl font-semibold text-white"> Link: {url} </h3>
                    <h3 className="text-xl font-semibold text-white"> {focus} </h3>
                </a>
                <p className="leading-snug text-gray-400"> {description} </p>
                 </div>
                </div>
                </div>
    
    
                </div>


           </div>

            
        </div>
    );
};

export default ABdataDetails;