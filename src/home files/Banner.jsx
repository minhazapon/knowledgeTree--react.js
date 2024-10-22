

const Banner = () => {
    return (
        <div>

<div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.freepik.com/premium-photo/academic-triumph-mortarboard-diploma-certificate-gardenseayellowblack-background_1205263-54250.jpg?w=740)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content ">
    <div className="">
      <h1 className="mb-5 text-white font-serif  ">Fuel Your Future</h1>
      <h1 className="mb-5 text-5xl text-white font-bold">MORE THAN 15K+ <br></br>STUDENTS LEARNING WITH US</h1>
      <p className="mb-5 text-white font-serif ">
      "Education is not the filling of a pail, but the lighting of a fire." – William Butler Yeats
      </p>
    <div>
      <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#0D7C66] rounded-xl group">
      <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
      <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
      </span>
      <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full  bg-[#0D7C66] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
      <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">View Course</span>
      </a>
    </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;