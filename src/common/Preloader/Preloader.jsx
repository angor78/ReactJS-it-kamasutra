import React from "react";
import preloader from "../../assets/images/preloader.gif";



let Preloader =(props)=>{
    return<div>
        <img alt={"load"} src={preloader} />
    </div>
}

export default Preloader