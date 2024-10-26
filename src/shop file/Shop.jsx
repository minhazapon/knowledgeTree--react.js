
import { useState } from "react";
import ShopBanner from "./ShopBanner";
import { useEffect } from "react";
import ShopList from "./ShopList";


const Shop = () => {



    const [ tree, setTree ] = useState([]) 

    useEffect( () =>{
      
        fetch('http://localhost:5000/treeShopData')
        .then( res => res.json())
        .then( data => setTree(data) )

    } , [])


    return (
        <div className="">

            <div>
                 <ShopBanner></ShopBanner>
            </div>
           

            <div>

               <ShopList tree={tree} ></ShopList>



            </div>
            
          
            
        </div>
    );
};

export default Shop;