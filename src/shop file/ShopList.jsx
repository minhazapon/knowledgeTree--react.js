import ShopDetails from "./ShopDetails";




const ShopList = ({tree}) => {


    
    return (


        <div>

            <div>

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