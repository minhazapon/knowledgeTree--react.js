import Swal from "sweetalert2";




const ContaForm = () => {


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
                title: 'Send Message Done!',
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
        <div className=" mt-20 mb-10 ml-10 mr-10 ">


            <div  className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-16 ">

                 
                 <div className=" flex justify-center">
                 <div>
                   <p className=" font-serif text-5xl  ">Send Us a Message</p>
                   <p className=" font-serif text-gray-400 mt-5 ">Have some suggestions or just want to say hi? Contact us:</p>
                   <div className=" ">
                    <form onSubmit={onSubmit} >
                      <input placeholder="Name" required className=" h-[40px] w-[300px] p-2 border-[1px] border-gray-400 mt-8 rounded-md " type="text" name="name" id="" />
                      <br></br>
                      <input placeholder="Email" required className=" h-[40px] w-[300px] p-2 border-[1px] border-gray-400 mt-3 rounded-md " type="email" name="email" id="" />
                      <br></br>
                      <input placeholder="Url" required className=" h-[40px] w-[300px] p-2 border-[1px] border-gray-400 mt-3 rounded-md " type="url" name="" id="" />
                      <br></br>
                      <textarea placeholder="Message" required className=" h-[100px] w-[300px] p-2 border-[1px] border-gray-400 mt-3 rounded-md " name="message  " id=""></textarea>
                      <br></br>
                      <input className=" btn bg-orange-500 text-white h-[40px] w-[300px] " type="submit" value="Send Message" />
                    </form>
                   </div>
                 </div>
                 </div>
                


                <div>
                <img className=" h-[500px] " src="https://cdn-icons-gif.flaticon.com/17110/17110672.gif" alt="" />
                </div>




            </div>


            
        </div>
    );
};

export default ContaForm;