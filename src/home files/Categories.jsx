

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Categories = () => {


    return (
        <div className=' bg-no-repeat  bg-cover p-16 '
        style={{
          backgroundImage: "url(  https://as2.ftcdn.net/v2/jpg/02/99/84/89/1000_F_299848927_S0EwX0P6HWGigW6qZWFIBaczKMQuq5D9.jpg )",
        }}
        
        
        >

             <div className=' mb-10 flex justify-between items-center'>
                <p  className=' bg-gradient-to-r from-black  text-orange-500 p-2 text-xl font-serif'>| BROWSE TOP<br></br>
                <span className=' text-5xl font-serif text-white '>Trending Categories</span>
                </p>
                <button className=' btn bg-[#0D7C66] text-white '>View All</button>
             </div>



<>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
            <div className=' flex justify-center bg-no-repeat bg-cover h-[300px] w-[400px] rounded-xl  '
             style={{
              backgroundImage: "url(  https://img.pikbest.com/back_our/bg/20200903/bg/1f567b0105221_397995.jpg!w700wp  )",
            }}
            >
                <div  className=' border-[1px] h-[300px] w-[200px]  p-4 bg-gradient-to-r from-black rounded-xl  '>
                   <div className=' flex justify-center'>
                      <img  className='   rounded-lg h-[100px]' src="https://cdn-icons-png.flaticon.com/128/2645/2645163.png" alt="" />
                   </div>
                   <p className=' text-center  font-serif text-2xl mt-10  text-white'>Development</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex justify-center bg-no-repeat bg-cover h-[300px] w-[400px] rounded-xl  '
             style={{
              backgroundImage: "url(  https://img.pikbest.com/back_our/bg/20200903/bg/1f567b0105221_397995.jpg!w700wp  )",
            }}
            >
                <div  className=' border-[1px] h-[300px] w-[200px]  p-4 bg-gradient-to-r from-black rounded-xl  '>
                   <div className=' flex justify-center'>
                      <img  className='   rounded-lg h-[100px]' src="https://cdn-icons-png.flaticon.com/128/11495/11495575.png" alt="" />
                   </div>
                   <p className=' text-center  font-serif text-2xl mt-10  text-white'>Business</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

        <div className=' flex justify-center bg-no-repeat bg-cover h-[300px] w-[400px] rounded-xl  '
             style={{
              backgroundImage: "url(  https://img.pikbest.com/back_our/bg/20200903/bg/1f567b0105221_397995.jpg!w700wp  )",
            }}
            >
                <div  className=' border-[1px] h-[300px] w-[200px]  p-4 bg-gradient-to-r from-black rounded-xl  '>
                   <div className=' flex justify-center'>
                      <img  className='   rounded-lg h-[100px]' src="https://cdn-icons-png.flaticon.com/128/2139/2139551.png" alt="" />
                   </div>
                   <p className=' text-center  font-serif text-2xl mt-10  text-white'>Management</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

        <div className=' flex justify-center bg-no-repeat bg-cover h-[300px] w-[400px] rounded-xl  '
             style={{
              backgroundImage: "url(  https://img.pikbest.com/back_our/bg/20200903/bg/1f567b0105221_397995.jpg!w700wp  )",
            }}
            >
                <div  className=' border-[1px] h-[300px] w-[200px]  p-4 bg-gradient-to-r from-black rounded-xl  '>
                   <div className=' flex justify-center'>
                      <img  className='   rounded-lg h-[100px]' src="https://cdn-icons-png.flaticon.com/128/922/922699.png" alt="" />
                   </div>
                   <p className=' text-center  font-serif text-2xl mt-10  text-white'>Design</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

        <div className=' flex justify-center bg-no-repeat bg-cover h-[300px] w-[400px] rounded-xl  '
             style={{
              backgroundImage: "url(  https://img.pikbest.com/back_our/bg/20200903/bg/1f567b0105221_397995.jpg!w700wp  )",
            }}
            >
                <div  className=' border-[1px] h-[300px] w-[200px]  p-4 bg-gradient-to-r from-black rounded-xl  '>
                   <div className=' flex justify-center'>
                      <img  className='   rounded-lg h-[100px]' src="https://cdn-icons-png.flaticon.com/128/1973/1973739.png" alt="" />
                   </div>
                   <p className=' text-center  font-serif text-2xl mt-10  text-white'>Language</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

        <div className=' flex justify-center bg-no-repeat bg-cover h-[300px] w-[400px] rounded-xl  '
             style={{
              backgroundImage: "url(  https://img.pikbest.com/back_our/bg/20200903/bg/1f567b0105221_397995.jpg!w700wp  )",
            }}
            >
                <div  className=' border-[1px] h-[300px] w-[200px]  p-4 bg-gradient-to-r from-black rounded-xl  '>
                   <div className=' flex justify-center'>
                      <img  className='   rounded-lg h-[100px]' src="https://cdn-icons-png.flaticon.com/128/901/901002.png" alt="" />
                   </div>
                   <p className=' text-center  font-serif text-2xl mt-10  text-white'>Technology</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

        <div className=' flex justify-center bg-no-repeat bg-cover h-[300px] w-[400px] rounded-xl  '
             style={{
              backgroundImage: "url(  https://img.pikbest.com/back_our/bg/20200903/bg/1f567b0105221_397995.jpg!w700wp  )",
            }}
            >
                <div  className=' border-[1px] h-[300px] w-[200px]  p-4 bg-gradient-to-r from-black rounded-xl  '>
                   <div className=' flex justify-center'>
                      <img  className='   rounded-lg h-[100px]' src="https://cdn-icons-png.flaticon.com/128/1605/1605753.png" alt="" />
                   </div>
                   <p className=' text-center  font-serif text-2xl mt-10  text-white'>Psychology</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

        <div className=' flex justify-center bg-no-repeat bg-cover h-[300px] w-[400px] rounded-xl  '
             style={{
              backgroundImage: "url(  https://img.pikbest.com/back_our/bg/20200903/bg/1f567b0105221_397995.jpg!w700wp  )",
            }}
            >
                <div  className=' border-[1px] h-[300px] w-[200px]  p-4 bg-gradient-to-r from-black rounded-xl  '>
                   <div className=' flex justify-center'>
                      <img  className='   rounded-lg h-[100px]' src="https://cdn-icons-png.flaticon.com/128/4104/4104711.png" alt="" />
                   </div>
                   <p className=' text-center  font-serif text-2xl mt-10  text-white'>Photography</p>
                </div>
            </div>

        </SwiperSlide>
      
      </Swiper>
    </>
            
        </div>
    );
};

export default Categories;