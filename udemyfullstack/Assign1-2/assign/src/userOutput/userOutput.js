import React,{Component} from 'react';

// const userOutput =(Props)=>{
//     return(
//         <div>
// <p>Hey this {Props.username}</p>
//         </div>
//     );

// }
class userOutput extends Component{
    render(){
        return(
<div>
        <input type="text" value={this.props.username} onChange={this.props.change}/>
        <p onClick={this.props.delete}>Hey this is {this.props.username}</p>
</div>
        );
    }
}

export default userOutput;