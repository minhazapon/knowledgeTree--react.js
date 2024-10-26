


const ShopPagination = ({totalPost, postPerPage, setcurrentPerPage}) => {
    

    let treeZ = []

    for( let i = 1; i <= Math.ceil( totalPost/postPerPage); i++ ){
         
        treeZ.push(i)

    }

    return (
        <div>

            
            {
                 treeZ.map( (treeZ, index) => {
                    return <div className="join">
                    <button onClick={() => setcurrentPerPage(treeZ) } className="join-item btn hover:bg-black border-[1px] border-black text-blue-500  " key={index}> {treeZ} </button>
                    </div>
                 })
            }
            
        </div>
    );
};

export default ShopPagination;