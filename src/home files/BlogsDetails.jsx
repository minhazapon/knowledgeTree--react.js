


const BlogsDetails = ({query}) => {

    const {image, sub, title} = query


    return (
        <div>

            <div className=" hover:border-[1px] border-black max-w-xs p-6  shadow-md bg-white text-gray-50">
            	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            	<div className="mt-6 mb-2">
            		<span className="block text-xs font-medium tracking-widest uppercase text-green-600"> {sub} </span>
            	</div>
            	<p className="text-black font-serif "> {title} </p>
                <button className=" btn mt-5 bg-[#0D7C66] text-white font-mono " >ViewMore+</button>
            </div>
                        
        </div>
    );
};

export default BlogsDetails;