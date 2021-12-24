import React, { useRef, useEffect } from 'react';



const SkillBar = ({skillper}) => {
    const myref = useRef();

    useEffect(()=> {
        myref.current.style.width=`${skillper}%`;
        console.log(myref.current.style.width);
    }, [])

    return(
        <div className='skill-bar'>
            <div className='skill-bar-percentage' ref={myref}>

            </div>
        </div>
    )
}

export default SkillBar;