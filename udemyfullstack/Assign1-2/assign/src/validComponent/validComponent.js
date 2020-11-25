import React from 'react';

const validComponent=(Props)=>{
    let person=null;
    if(Props.input===0){
        person=(
            <div>
                <p>Please Type something</p>
            </div>
        )

    }
    else if(Props.input<5){
        person=(
            <div>
                <p>Too Short</p>
            </div>
        )
 
    }
    else if(Props.input>5 && Props.input<10){
        person=(
            <div>
                <p> perfect</p>
            </div>
        )
 
    }
    else if(Props.input>10){
        person=(
            <div>
                <p>Too long</p>
            </div>
        )
 
    }
    return(
        <div>
            {person}
        </div>
    )
}
export default validComponent;