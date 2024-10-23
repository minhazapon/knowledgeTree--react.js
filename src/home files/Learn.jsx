import Swal from "sweetalert2";



const Learn = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
 
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            Swal.fire({
                title: 'FeedBack Done!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          event.target.reset();
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
          setResult(data.message);
        }
      };
    


    return (
        <div className=" mb-10">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-20 bg-[#0D7C66] p-10">


              <div className=" text-white">
                  <div>
                     <img className=" bg-white p-3 h-[70px] rounded-lg border-[1px] " src="https://cdn-icons-png.flaticon.com/128/18023/18023952.png" alt="" />
                  </div>
                  <p className=" mt-5 font-serif text-4xl">Learn Anything</p>
                  <p className=" mt-5 font-serif">Join millions of people from around the <br></br>world learning together. Try it now!</p>
                  <button className=" btn mt-5 bg-[#0D7C66] text-white border-[1px] border-white ">View+</button>
              </div>


              <div  className=" text-white">
                  <div>
                     <img className=" bg-white p-3 h-[70px] rounded-lg border-[1px] " src="https://cdn-icons-png.flaticon.com/128/9541/9541753.png" alt="" />
                  </div>
                  <p className=" mt-5 font-serif text-4xl">Learn Together</p>
                  <p className=" mt-5 font-serif">Join millions of people from around the <br></br>world learning together. Try it now!</p>
                  <button className=" btn mt-5 bg-[#0D7C66] text-white border-[1px] border-white ">View+</button>
              </div>



              <div className=" -mt-16">
                  <form onSubmit={onSubmit} >
                    <div className="  hover:border-[1px] border-black rounded-xl h-[400px] w-[400px] p-10 bg-white ">
                        <p className=" bg-orange-500 p-5 rounded-md text-white text-center text-4xl font-semibold ">| Feedback Form</p>
                        <div className=" mt-5">
                        <label className="input input-bordered flex items-center gap-2">
                         Name
                         <input type="text" className="grow" name="name" placeholder="Your Name" required />
                         </label>
                        </div>
                        <div className=" mt-5">
                        <label className="input input-bordered flex items-center gap-2">
                         Email
                         <input type="text" className="grow" name="email" placeholder="Your Email" required />
                        </label>
                        </div>
                        <div className=" flex justify-center ">
                            <input className=" bg-[#0D7C66] text-white font-mono w-full btn mt-5" type="submit" value="Submit" />
                        </div>
                    </div>
                  </form>
              </div>






            </div>
            
        </div>
    );
};

export default Learn;