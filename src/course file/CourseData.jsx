import { Link } from "react-router-dom";



const CourseData = ({Crs}) => {

    const { _id, image, name, title, price } = Crs


    return (
        <div>

            

            <Link to={`/course/${_id}`} >
            
            <article class=" hover:border-[1px] border-cyan-400  relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[300px] h-[300px] mx-auto mt-24">
                <img className="absolute inset-0 h-full w-full object-cover " src={image} alt="" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 class="z-10 mt-3 text-3xl font-bold text-white">{name}</h3>
                <div class="z-10 gap-y-1  text-sm leading-6 text-gray-300">
                
                 <p>{title}</p>
                 <hr></hr>
                 <div className=" mt-3 flex justify-between">
                    <p className="  "> <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" /></p>
                    <p className="  hover:border-[1px] border-green-500 p-1 rounded-md ">{price}</p>
                 </div>
                
                </div>
            </article>
            
            
            </Link>

            
            
        </div>
    );
};

export default CourseData;