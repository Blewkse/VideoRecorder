import React, { useState } from "react";



const SingleSetting = () => {
    const [title, setTitle] = useState<string>("")
    const [activate, setActivate] = useState<boolean>(false)


    return(
        <div className="rounded bg-violet-500"> 
            <h3 className="top-0">{title}</h3>
            {activate?(
                <div className="bg-lime-400 rounded"></div>
            ):<div className="bg-red-500 rounded"></div>
            }
            


        </div>
    );
}

export default SingleSetting;