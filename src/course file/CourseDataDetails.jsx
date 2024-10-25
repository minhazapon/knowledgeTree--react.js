import { useLoaderData } from "react-router-dom";



const CourseDataDetails = () => {
    

    const details = useLoaderData()

    const { _id, image, name, title, price } = details


    return (
        <div>


            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-5xl text-white font-serif font-bold">Course</h1>
                </div>
              </div>
            </div>
            

            <div className=" flex justify-center mt-10">
                

            <div className="max-w-lg p-4 shadow-md bg-black text-gray-100">
	        <div className="space-y-4">
	        	<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
		    </div>
		    <div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-white"> {name} </h3>
				<h3 className="text-xl font-semibold text-white"> {title} </h3>
				<h3 className="text-xl font-semibold text-white"> {price} </h3>
			</a>
			<p className="leading-snug text-gray-400">This course is designed to provide a comprehensive understanding of [subject/topic], equipping students with essential knowledge and practical skills. Through a blend of lectures, hands-on projects, and interactive discussions, students will explore fundamental concepts and advanced techniques to deepen their expertise. Each module builds on the last, ensuring a progressive learning experience tailored to all skill levels. Whether you're looking to gain a foundational understanding or enhance existing skills, this course will provide valuable insights and tools that can be applied in real-world scenarios. By the end of the course, participants will be well-prepared to confidently pursue further study or career opportunities in [related field].</p>
		     </div>
	        </div>
            </div>


            </div>

            

            
        </div>
    );
};

export default CourseDataDetails;