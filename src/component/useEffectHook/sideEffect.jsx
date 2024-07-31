import React,{useEffect} from 'react'
const SideEffect = () =>{
    useEffect(() =>{
        const[color,setColor] = useState("red")
        console.log("Hi user");
    });
    return(
        <div style={{color:color}}>
            SideEffect
            <button onClick={()=>setColor("black")}>Change Color</button>
        </div>
    )
}

export default SideEffect;