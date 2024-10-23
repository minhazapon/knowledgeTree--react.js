

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Categories = () => {


    return (
        <div className=' mt-24 mb-10'>

             <div className=' mb-10 flex justify-between items-center'>
                <p  className=' text-orange-600 text-xl font-serif'>| BROWSE TOP<br></br>
                <span className=' text-5xl font-serif text-black '>Trending Categories</span>
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
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <div  className=' '>

                   <div className=' flex justify-center'>
                      <img  className=' h-[70px]' src="https://cdn-icons-png.flaticon.com/128/2645/2645163.png" alt="" />
                   </div>
                   <p className=' text-center  font-serif text-2xl mt-10 '>Development</p>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
      
      </Swiper>
    </>
            
        </div>
    );
};

export default Categories;