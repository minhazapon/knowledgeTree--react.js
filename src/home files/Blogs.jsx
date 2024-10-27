import { useQuery } from "@tanstack/react-query";
import BlogsDetails from "./BlogsDetails";


const Blogs = () => {



    const { data: query } = useQuery({

          queryKey:['data'],
          queryFn: async () =>{
             
            const res = await fetch('https://knowledgetree-express-js-1.onrender.com/blogsData')
            return res.json();

          }

    })





    return (
        <div className=" mt-20 mb-10 ml-5 mr-5 bg-white p-24 ">

            <div className=' mb-10 flex-col md:flex-row lg:flex-row flex justify-between items-center gap-5'>
                <p  className=' text-orange-500 p-2 text-xl font-serif'>| DISCOVER NEWS<br></br>
                <span className=' text-5xl font-serif text-black '>Read Our Blog</span>
                <br></br>
                <span className=" font-thin text-gray-400 "><p>Explore learning tips, career advice. Unlock new opportunities with unlimited access.</p></span>
                </p>
                
                <button className=' btn bg-[#0D7C66] text-white '>View All</button>
             </div>

          


            <div className=" flex justify-center ">


               <div className=" grid  md:grid-cols-3  gap-16 ">




                     {

                       query?.map( query =>  <BlogsDetails query={query} ></BlogsDetails> )

                     }





               </div>


            </div>
            
        </div>
    );
};

export default Blogs;