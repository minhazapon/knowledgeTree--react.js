import ShopDetails from "./ShopDetails";




const ShopList = ({tree}) => {


    
    return (


        <div className=" flex justify-center">

            <div className=" grid  md:grid-cols-3 gap-5 ">

              {tree.map ( ( tree, index ) =>{

                 return(
                    
                    <ShopDetails key={index} image={tree.image} title={tree.title} price={tree.price} ></ShopDetails>


                 )


              })}


            </div>
            
        </div>
    );
};

export default ShopList;