import {useState} from "react";


export const useForm = intitalValues =>{
    const [values , setValues] = useState(intitalValues);
  
    
    return [
        values,
        e=>{
            setValues({
                ...values , 
                [e.target.name] : e.target.value
            })
        }
    ]
}