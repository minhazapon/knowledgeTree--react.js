import Swal from "sweetalert2";
import ShopBanner from "../shop file/ShopBanner";
import { Link } from "react-router-dom";



const AddForm = () => {

     

    const handleAdd = e =>{

      e.preventDefault()
      
      const form = e.target 
      const url = form.url.value 
      const title = form.title.value 
      const price = form.price.value
      const AllPro = { url, title, price } 
      console.log(AllPro)
      fetch('http://localhost:5000/productData', {
          method: 'POST',
          headers:{
             'content-type': 'application/json'
          },
          body: JSON.stringify(AllPro)
      })
      .then( res => res.json() )
      .then( data => {
         console.log(data)
         if(data){
            Swal.fire({
                title: 'Added Done!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            form.reset()  
    }})}



    return (
        <div className=" ">

           <div>
               <ShopBanner></ShopBanner>
           </div>


           <div className=" mt-10 ">
              <div className=" flex justify-center items-center gap-5 ">
                 <p className=" text-center font-serif text-5xl  ">Add Your Product</p>
                 <img className=" h-[50px] " src="https://cdn-icons-png.flaticon.com/128/9752/9752284.png" alt="" />
              </div>
           </div>


           <div className=" flex justify-center mt-10">
             <div>  
                <form onSubmit={handleAdd} >
                 <input required className=" p-2 h-[50px] w-[400px] border-[1px] border-gray-300 " placeholder="Image" type="url" name="url" id="" />
                 <br></br>
                 <input required className=" p-2 mt-3 h-[50px] w-[400px] border-[1px] border-gray-300 " placeholder="Title" name="title" type="text" />
                 <br></br>
                 <input required className=" p-2 mt-3 h-[50px] w-[400px] border-[1px] border-gray-300 " placeholder="price" name="price" type="text" />
                 <br></br>
                 <input className=" btn text-white bg-orange-500 mt-3 h-[50px] w-[400px] border-[1px] border-gray-300 " type="submit" value="Add" />
                </form>
             </div>
           </div>



           <div>
            <div className=" mt-20 flex justify-center items-center gap-10 ">
                
                <p className="  font-serif text-5xl ">Your Added Products</p>
                <img className=" h-[50px] " src="https://cdn-icons-png.flaticon.com/128/15714/15714558.png" alt="" />
                <Link to='/read' >
                <button className=" w-[200px] btn bg-orange-500 text-white ">View</button>
                </Link>
            
                
            </div>
           </div>
            
        </div>
    );
};

export default AddForm;