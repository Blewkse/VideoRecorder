import React, { useCallback, useState } from "react";



const SingleSetting = () => {
    const [title, setTitle] = useState<string>("Titre")
    const [activate, setActivate] = useState<boolean>(true)
    const [level, setLevel] = useState<number>()

    const handleClick = useCallback(() =>{
        activate ? setActivate(false) : setActivate(true);
    }, [activate]);



    return(
        <div className="rounded-2xl bg-violet-500 grid grid-cols-8 grid-rows-5 max-w-[15%] " onClick={handleClick}> 
            <div className="col-start-2 col-span-4 justify-self-start">
                <h1 className="font-mono text-black text-4xl">{title}</h1>
            </div>
            <div className="col-start-2 ">
                <h3 className="font-mono text-white  text-xl italic ">Value</h3>
            </div>
            <div className="col-start-2 col-span-2 row-start-3">
                <input type={"checkbox"} className=" bg-slate-500 w-full h-full" />
            </div>
            <div className="col-start-5 col-span-4 row-start-3 row-span-2">
                {activate?(
                    <div className="bg-lime-400 rounded-full  w-full h-full"></div>
                 ):<div className="bg-red-500 rounded-full  w-full h-full"></div>
                }
            </div>
            
            
            
            
        </div>
    );
}

export default SingleSetting;