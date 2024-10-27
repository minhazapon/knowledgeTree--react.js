import { useLoaderData } from "react-router-dom";
import Upbanner from "./Upbanner";
import Swal from "sweetalert2";



const Update = () => {
    
    const query = useLoaderData();

    const { _id, url, title, price } = query


    
    const handleUpdate = e =>{

        e.preventDefault()
        
        const form = e.target 
        const url = form.url.value
        const title = form.title.value 
        const price = form.price.value
        const AllPro = { url, title, price } 
        console.log(AllPro)
        fetch(`http://localhost:5000/productData/${_id}`, {
            method: 'PUT',
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
                  title: 'Update Done!',
                  text: 'Do you want to continue',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
              form.reset()  
      }})}
  



    return (
        <div>
            <div>
                 <Upbanner></Upbanner>
            </div>


            <div>
                <div>

                 <div className=" flex justify-center mt-10">
                 <div>  
                 <form onSubmit={handleUpdate} >
                 <input required className=" p-2 h-[50px] w-[400px] border-[1px] border-gray-300 " placeholder="Image" type="url" name="url" defaultValue={url} id="" />
                 <br></br>
                 <input required className=" p-2 mt-3 h-[50px] w-[400px] border-[1px] border-gray-300 " placeholder="Title" name="title" defaultValue={title} type="text" />
                 <br></br>
                 <input required className=" p-2 mt-3 h-[50px] w-[400px] border-[1px] border-gray-300 " placeholder="price" name="price" defaultValue={price} type="text" />
                 <br></br>
                 <input className=" btn text-white bg-orange-500 mt-3 h-[50px] w-[400px] border-[1px] border-gray-300 " type="submit" value="UPDATE" />
                 </form>
                 </div>
                 </div>


                </div>
            </div>
            
        </div>
    );
};

export default Update;