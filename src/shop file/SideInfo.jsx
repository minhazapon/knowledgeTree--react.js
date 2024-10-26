


const SideInfo = () => {

    return (
        <div className=" flex justify-center">

            <div>


               
               <div>
                {/* //searchBar */}
                <div className=" flex items-center gap-2 border-[1px] border-gray-500 h-[50px] w-[280px] p-4 rounded-md ">
                
                   <input className=" p-2" type="search" placeholder="Search" name="" id="" />
                   <img className=" h-[30px] " src="https://cdn-icons-png.flaticon.com/128/9788/9788528.png" alt="" />

                </div>
               </div>


              <div className=" mt-8">
                {/* categories */}
                <div>
                    <p className=" text-xl text-orange-400 font-serif ">| CATEGORIES</p>
                        <li className="  mt-5 text-xl font-serif">Languages(1)</li>
                        <li className="  text-xl font-serif mt-3 ">Learning(11)</li>
                </div>
              </div>


              <div className=" mt-10 ">
              {/* Bestsellers */}
              <div>
              <p className=" text-xl text-orange-400 font-serif ">| BESTSELLERS</p>

              <div className=" flex items-center gap-3 mt-5">
                <img className=" border-[1px] h-[80px] w-[80px] " src="https://wgl-dsites.net/iguru/wp-content/uploads/2019/10/product-2-540x540.png" alt="" />
                <div>
                    <p className=" text-xl font-thin ">Programming Book</p>
                    <div className=" mt-2 rating rating-xs">
                      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className=" mt-2  ">$900</p>
                </div>
              </div>

              <div className=" mt-3 flex items-center gap-3 ">
                <img className=" border-[1px] h-[80px] w-[80px] " src="https://wgl-dsites.net/iguru/wp-content/uploads/2019/10/product-1-540x540.png" alt="" />
                <div>
                    <p className=" text-xl font-thin ">Programming Book</p>
                    <div className=" mt-2 rating rating-xs">
                      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className=" mt-2  ">$900</p>
                </div>
              </div>

              <div className=" mt-3 flex items-center gap-3 ">
                <img className=" border-[1px] h-[80px] w-[80px] " src="https://wgl-dsites.net/iguru/wp-content/uploads/2019/10/product-12-540x540.png" alt="" />
                <div>
                    <p className=" text-xl font-thin ">Programming Book</p>
                    <div className=" mt-2 rating rating-xs">
                      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className=" mt-2  ">$900</p>
                </div>
              </div>

              </div>
              </div>




              <div className=" mt-10">
                {/* popular tag */}
                <div>
                <p className=" text-xl text-orange-400 font-serif ">| POPULAR TAG</p>
                <div className=" flex items-center mt-5 ">
                <div className=" grid  grid-cols-3 gap-2 ">
                    <button className=" btn h-[40px] w-[80px]">basics</button>
                    <button className=" btn h-[40px] w-[80px]"> code</button>
                    <button className=" btn h-[40px] w-[80px]">employ</button>
                    <button className=" btn h-[40px] w-[80px]">learning</button>
                    <button className=" btn h-[40px] w-[80px]">Languages</button>
                    <button className=" btn h-[40px] w-[80px]">wordpress</button>
                 </div>
                </div>
                </div>
              </div>


              <div className=" mt-10">
                {/* Cart */}
                <div>
                <p className=" text-xl text-orange-400 font-serif ">| CART</p>
                <p className=" mt-3 text-xl text-gray-400">No products in the cart.</p>
                </div>

              </div>







            </div>


            
        </div>
    );
};

export default SideInfo;