
import { useState } from "react";
import ShopBanner from "./ShopBanner";
import { useEffect } from "react";
import ShopList from "./ShopList";
import ShopPagination from "./ShopPagination";
import SideInfo from "./SideInfo";


const Shop = () => {



    const [ tree, setTree ] = useState([]) 


    const [currentPerPage, setcurrentPerPage] = useState(1)

    const [postPerPage, setPostPerPage] = useState(9)

    useEffect( () =>{
      
        fetch('http://localhost:5000/treeShopData')
        .then( res => res.json())
        .then( data => setTree(data) )

    } , [])


    const lastIndex = currentPerPage * postPerPage 
    const fastIndex = lastIndex - postPerPage
    const currentPost = tree.slice( fastIndex, lastIndex )


    return (
        <div className="">

            <div>
                 <ShopBanner></ShopBanner>
            </div>
           

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center mt-10 gap-10 ">
               <SideInfo></SideInfo>
               <ShopList tree={currentPost} ></ShopList>
            </div>



            <div className=" flex justify-center mt-10   ">
                <ShopPagination totalPost={tree.length} postPerPage={postPerPage} setcurrentPerPage={setcurrentPerPage} ></ShopPagination>
            </div>
            
          
            
        </div>
    );
};

export default Shop;