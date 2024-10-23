
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';


const TreeClock = () => {

    const [value, setValue] = useState(new Date());

    useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
    }, []);


    return (
        <div className=' flex-col md:flex-row lg:flex-row flex justify-center items-center  gap-56 bg-white border-[1px] p-10 mb-16 -mt-10 ml-10 mr-10 '>
         <div>
            <p className=' text-3xl font-serif '>Hurry up for Our Free<br></br> <span className=' text-orange-600 '>UX Design</span> Webinar!</p>
            <button className=' btn text-green-500 mt-5 '>SignUpNow+</button>
         </div>  
         <div>
         <Clock value={value} />
         </div>
        </div>
    );
};

export default TreeClock;