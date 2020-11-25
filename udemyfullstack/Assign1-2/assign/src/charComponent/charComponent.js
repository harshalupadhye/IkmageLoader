import React from 'react';

export const CharComponent=(Props)=>{
    const style={
        display:"inline-block",
        padding:"16px",
        textAlign:"center",
        margin:"16px",
        border:"1px solid black"
    }
    return(
        <div style={style} onClick={Props.change}>
            {Props.press}
        </div>
    )
}