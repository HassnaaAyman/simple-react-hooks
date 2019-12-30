import React, { useContext } from 'react';
import userContext from './myContext';

const About = () => {

    const {value , setValue} = useContext(userContext);

    return (
<>
        <div>About
 <h1>{value}</h1>
        </div>
        <button onClick={()=> setValue("hello")}>change value</button>
        </>
    )

}


export default About;