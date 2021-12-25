import './App.css';
import React from 'react';
import SkillContainer from './components/SkillContainer';

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
      <SkillContainer skills={skills}></SkillContainer>
    </>

  );
}

export default App;
