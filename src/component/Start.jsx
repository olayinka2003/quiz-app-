import React from 'react'

export const Start = ({numQuestion, dispatch}) => {

 const onStartGame = () => {
  dispatch({type:'start'})
 }
  return (
    <div className='start'>
        <h2>Welcome to the React Quiz</h2>
        <h3>{numQuestion} questions to test your React mastery</h3>
        <button className='btn btn-ui' onClick={onStartGame} >let's start</button>
    </div>
  )
}
