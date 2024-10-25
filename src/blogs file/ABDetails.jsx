import { Link } from "react-router-dom";


const ABDetails = ({aBlogs}) => {

    const { _id, name, image, description, focus, url } = aBlogs

    return (
        <div>

            <div className=" hover:border-[1px] border-black max-w-xs p-6  shadow-md bg-white text-gray-50">
            	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            	<div className="mt-6 mb-2">
            		<span className="block text-xs font-medium tracking-widest uppercase text-green-600">  </span>
            	</div>
            	<p className="text-black font-serif "> {name} </p>
                <Link to={`/blogs/${_id}`} >
                <button className=" btn mt-5 bg-[#0D7C66] text-white font-mono " >ViewDetails+</button>
                </Link>
            </div>
            
        </div>
    );
};

export default ABDetails;