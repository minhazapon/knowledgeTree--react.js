import { useQuery } from "@tanstack/react-query";
import ShopBanner from "../shop file/ShopBanner";
import ReadDetails from "./ReadDetails";



const Read = () => {
     

    const { data:query } = useQuery({

       queryKey: ['query'],
       queryFn: async () =>{
         const res = await fetch('http://localhost:5000/productData')
         return res.json()
       }

    })


    return (
        <div >

            <div>
               <ShopBanner></ShopBanner>
            </div>


            <div className=" flex justify-center mt-10 ">
                <div className=" grid  md:grid-cols-3 gap-10 ">
                   {
                        query?.map( query =>  <ReadDetails query={query} ></ReadDetails> )
                   }
                </div>
            </div>
            
        </div>
    );
};

export default Read;