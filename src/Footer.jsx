

const Footer = () => {
    return (
        <div className=" mt-10 ">


          <div className=" flex-col md:flex-row lg:flex-row flex justify-center  gap-20 bg-black p-10 text-white">

              

              <div>
                 <img className=" h-[80px] " src="https://cdn-icons-png.flaticon.com/128/1575/1575321.png" alt="" />
                 <p className=" mt-3  "><span className=" text-orange-500 " >Address</span>: 27 Division St, New<br></br> York, NY 10002, USA</p>
                 <p className=" mt-3  "><span className=" text-orange-500 " >Phone</span>: 507-452-1254</p>
                 <p className=" mt-3  "><span className=" text-orange-500 " >Email</span>: iguru@mail.com</p>
                 <div className=" mt-5 flex items-center gap-3 ">
                   <img className=" h-[30px] " src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="" />
                   <img className=" h-[30px] " src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="" />
                   <img className=" h-[30px] " src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                 </div>
              </div>


              <div>
              <nav>
              <h6 className=" text-4xl font-serif ">Popular Courses</h6>
              <br></br>
              <a className="link link-hover">UI/UX Design</a>
              <br></br>
              <a className="link link-hover">WordPress Development</a>
              <br></br>
              <a className="link link-hover">Business Strategy</a>
              <br></br>
              <a className="link link-hover">Software Development</a>
              <br></br>
              <a className="link link-hover">Business English</a>
              </nav>
              </div>



              <div>

                <p className=" text-4xl ">Find Us Here</p>

                <img className="  rounded-md mt-5  " src="https://wgl-dsites.net/iguru/wp-content/uploads/2019/07/map.jpg " alt="" />

              </div>




          </div>

          <footer className="footer footer-center bg-[#0D7C66] text-base-content p-4">
          <aside>
          <p className=" text-white ">Copyright © {new Date().getFullYear()} - All right reserved by Minhazul Abedin Apon</p>
          </aside>
          </footer>
            
            
        </div>
    );
};

export default Footer;