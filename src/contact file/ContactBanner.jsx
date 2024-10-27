import { Link } from "react-router-dom";



const ContactBanner = () => {
    return (
        <div>

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl text-white font-serif font-bold">Contact</h1>
                  
                  <Link to='/' >
                  <button className="btn bg-[#0D7C66] font-mono text-white ">Home</button>
                  </Link>
                
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default ContactBanner;