

const Evnets = () => {


    return (
        <div className=" mt-20 mb-10 ">

            <div className=" flex justify-center  bg-no-repeat bg-cover p-32"
             style={{
                backgroundImage: "url(  https://img.freepik.com/premium-photo/blackboard-with-apple-school-supplies-left-highresolution-stock-photo_191066-12014.jpg?w=826  )",
              }}
            
            >

                  <div className=" grid  md:grid-cols-4  gap-10 text-white bg-gradient-to-r from-black p-5 ">


                    <div>
                        <p className=" text-5xl ">| 589<br></br>
                        |<span className=" text-3xl">Creative Events</span> </p>
                    </div>

                    <div>
                        <p className=" text-5xl ">| 147<br></br>
                        |<span className=" text-3xl">Skilled Tutors</span> </p>
                    </div>

                    <div>
                        <p className=" text-5xl ">| 9k+<br></br>
                        |<span className=" text-3xl">Online Courses</span> </p>
                    </div>

                    <div>
                        <p className=" text-5xl ">| 23k+
                        <br></br>
                        |<span className=" text-3xl">People World</span> </p>
                    </div>




                  </div>

            </div>
            
        </div>
    );
};

export default Evnets;