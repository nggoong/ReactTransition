import React from 'react';
import SkillDiv from './SkillDiv';


const SkillContainer= ({skills}) => {


    return(
        <div className='skill-container'>
        {skills.map((skill, index)=>{return(<SkillDiv key={index} skillname={skill.name} skillper={skill.per}></SkillDiv>)})}
      </div>    
    )
}

export default SkillContainer;