import Radium from 'radium';
import React from 'react';
import styled from 'styled-components';
import Styled from 'styled-components';
const Style=styled.h1`
        background-color:red;
        &:hover{
            background-color:green;
        };
     
        cursor:pointer
`


const Rad =()=>{
    // const style={
    //     backgroundColor:"red",
    //     ':hover':{
    //         backgroundColor:"green"
    //     },
    //     // ':focus':{
    //     //     color:"white",
    //     // },
    //     cursor:"pointer"
    // }
    return(
        < Style>Hello there</ Style>
    )
}
export default Rad;