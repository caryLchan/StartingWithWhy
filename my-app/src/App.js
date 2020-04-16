import React, { Fragment, Component, useState } from 'react';
import './App.css';

import InputToDo from './components/InputToDo'
import ListToDos from './components/ListToDos'
import Login from './components/Login'
import How from './components/How'
import HowList from './components/HowList'
import What from './components/What'
import WhatList from './components/WhatList'

const App = () => {

  const [loggedIn, setLoggedIn] = useState('false')
  const [logId, setLogId] = useState(0)
  const [step, setStep] = useState('why')
  const [whyId, setWhyId] = useState(0)
  const [howId, setHowId] = useState(0)


  const setupHowId = howId => {
    return setHowId(howId)
  }

  const setupWhyId = whyId => {
    return setWhyId(whyId)
  }

  const checkLoggedIn = val => {
    return setLoggedIn(val)
  }

  const setId = logId => {
    return setLogId(logId)
  }

  const setupStep = step => {
    return setStep(step)
  }

  if (loggedIn === 'false') {
    return (
      <Fragment>
        <div className='container'>
          <Login loggedIn={checkLoggedIn} logId={setId} />
        </div>
      </Fragment>
    )
  }
  else if (step === 'why' && loggedIn !== 'false') {
    return (
      <Fragment>
        <div className='container'>
          <InputToDo changeLogin={checkLoggedIn} loggedIn={loggedIn} logId={logId} />
          <ListToDos setWhyId={setupWhyId} setStep={setupStep} loggedIn={loggedIn} logId={logId} />
        </div>
      </Fragment>
    )
  }
  else if (step === 'how' && loggedIn !== 'false') {
    return (
      <Fragment>
        <div className='container'>
          <How whyId={whyId} setStep={setupStep} changeLogin={checkLoggedIn} loggedIn={loggedIn} logId={logId} />
          <HowList whyId={whyId} setHowId={setupHowId} setStep={setupStep} loggedIn={loggedIn} logId={logId} />
        </div>
      </Fragment>
    )
  }
  else if (step === 'what' && loggedIn !== 'false') {
    return (
      <Fragment>
        <div className='container'>
          <What howId={howId} setStep={setupStep} changeLogin={checkLoggedIn} loggedIn={loggedIn} logId={logId} />
          <WhatList howId={howId} setStep={setupStep} loggedIn={loggedIn} logId={logId} />
        </div>
      </Fragment>
    )
  }
}



export default App;
