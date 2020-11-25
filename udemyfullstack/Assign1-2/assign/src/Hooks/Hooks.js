import React,{useState} from 'react';


const Hooks=()=>{
    const [personState,setPersonState]=useState({
        user:[
            {id:"1",name:"harshal"},
            {id:"2",name:"rohit"},
            {id:"3",name:"aslam"},
        ]
        
    });
    const changeNameHandler=(id)=>{
        const index=personState.user.findIndex(user=>{
            return user.id===id;

        })
        console.log(index);
        let news=[...personState.user];
        if(index===0){
            news[index].name="ghost";
        }
        else if(index===1){
            news[index].name="god";
        }
        else{
            news[index].name="human";
        }
    setPersonState({
     user:news
    })
    }

    let person=null;
    person=(
        <div>

            {personState.user.map(names=>{
                return(
                    <div>
                    <p>{names.name}</p>
                    <button onClick={()=>changeNameHandler(names.id)}>Change</button>
                    </div>
                )
               
            })}
        </div>
    )
    return(
        <div>
      {person}
    
        </div>
    )
}
export default Hooks;