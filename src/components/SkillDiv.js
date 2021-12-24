import React from 'react';
import SkillName from './SkillName';
import SkillBar from './SkillBar';


const SkillDiv = ({skillname, skillper}) => {


    return(
        <div className='skill-div'>
            <SkillName skillname={skillname}></SkillName>
            <SkillBar skillper={skillper}></SkillBar>
            
            {/* <SkillName skillname={skillname}></SkillName>
            <SkillBar></SkillBar> */}
        </div>
    )
}

export default SkillDiv;