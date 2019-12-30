import React ,{useContext} from 'react';
import userContext from './myContext';



 const Home = ()=>{

 
    const {value , setValue} = useContext(userContext);
    return (

        <div>Home
 <h1>{value}</h1>
        </div>
    )
}

export default Home;