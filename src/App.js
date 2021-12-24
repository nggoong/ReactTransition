import './App.css';
import React from 'react';
import SkillDiv from './components/SkillDiv';

function App() {

  const skills = [
    {
      name:'javascript',
      per:'90'
    },
    {
      name:'python',
      per:'70'
    },
    {
      name:'mysql',
      per:'30'
    },
    {
      name:'html',
      per:'60'
    },
    {
      name:'css',
      per:'75'
    },
    {
      name:'React',
      per:'80'
    },
  ]

  return (
    <>
      <div className='skill-container'>
        {skills.map((skill, index)=>{return(<SkillDiv key={index} skillname={skill.name} skillper={skill.per}></SkillDiv>)})}
      </div>    
    </>

  );
}

export default App;
