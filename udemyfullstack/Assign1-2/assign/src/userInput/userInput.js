import React from 'react';
import './userInput.css';

const userInput=(Props)=>{
    let Style=null;
    if(Props.kr){
         Style={
            border:"1px solid red",
        }
    }
   
    return(
        <div>
            
            <input type="text" onChange={Props.change} style={Style}/*value=" "*//>
            <button onClick={Props.changed}>Click</button>
            {
             Props.kr?

            <button onClick={Props.shows}>VFX</button>:null }

        </div>

    );

}
export default userInput;