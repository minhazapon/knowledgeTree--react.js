


const OurContact = () => {
    return (
        <div className=" mt-20 mb-10 ml-5 mr-5 ">


            <div>
               <p className=" text-center text-orange-500 font-serif">OUR CONTACTS</p>
               <p className=" text-5xl font-serif text-center mt-5 ">We`re here to Help You</p>
               <p className=" text-gray-400 mt-5 font-serif text-center ">Got a project in mind? We’d love to hear about it. Take five minutes to fill out our<br></br> project form so that we can get to know you and understand your project.</p>
            </div>


            <div>
                <div className=" grid  md:grid-cols-3 gap-5 mt-10 ">

                <div
                  className="hero min-h-screen  rounded-xl "
                  style={{
                    backgroundImage: "url(https://thumbs.dreamstime.com/b/vector-illustration-seamless-book-pattern-background-wallpaper-30298316.jpg)",
                  }}>
                  <div className="hero-overlay  bg-opacity-60 rounded-xl "></div>
                  <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                      <div className=" flex justify-center">
                      <img className=" h-[80px] " src="https://cdn-icons-png.flaticon.com/128/717/717498.png" alt="" /> 
                      </div>
                      <h1 className="mb-5 mt-4 text-white text-5xl font-bold">Visit Us Daily:
                      </h1>
                      <p className="mb-5 font-serif text-white ">
                      27 Division St, New York, 10002
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="hero min-h-screen rounded-xl "
                  style={{
                    backgroundImage: "url(https://thumbs.dreamstime.com/b/vector-illustration-seamless-book-pattern-background-wallpaper-30298316.jpg)",
                  }}>
                  <div className="hero-overlay bg-opacity-60 rounded-xl "></div>
                  <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                      <div className=" flex justify-center">
                      <img className=" h-[80px] " src="https://cdn-icons-png.flaticon.com/128/18098/18098748.png" alt="" /> 
                      </div>
                      <h1 className="mb-5 mt-4 text-white text-5xl font-bold">Phone Us 24/7:
                      </h1>
                      <p className="mb-5 font-serif text-white ">
                      +8 (123) 456 789
                      </p>
                    </div>
                  </div>
                </div>


                <div
                  className="hero min-h-screen rounded-xl "
                  style={{
                    backgroundImage: "url(https://thumbs.dreamstime.com/b/vector-illustration-seamless-book-pattern-background-wallpaper-30298316.jpg)",
                  }}>
                  <div className="hero-overlay bg-opacity-60 rounded-xl "></div>
                  <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                      <div className=" flex justify-center">
                      <img className=" h-[80px] " src="https://cdn-icons-png.flaticon.com/128/18154/18154192.png" alt="" /> 
                      </div>
                      <h1 className="mb-5 mt-4 text-white text-5xl font-bold">Mail Us 24/7:
                      </h1>
                      <p className="mb-5 font-serif text-white ">
                      iguru@mail.com
                      </p>
                    </div>
                  </div>
                </div>



                </div>
            </div>
            
        </div>
    );
};

export default OurContact;