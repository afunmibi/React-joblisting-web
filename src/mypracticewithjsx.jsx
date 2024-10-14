import React from 'react'

const App = () => {
const name = 'Felix';
const x = 20;
const y = 50;
const names = ['Felix', ' Ope', 'Temi', 'Tomi' ]; 
const loggedin = true;
const loggedout = false;
const styles={
  color: 'red',
  fontSize: '26px'
}

  return (
    <>

    <div className='text-5xl'>App</div>
    <h1 style={styles}> {name} is the student now but {name} will soon become master.</h1>
    <p style={{color: 'blue', fontSize: '24px'}}>The products of {x} and {y} is equal to {x * y} and this is inline css styling </p>
   <ul>
    {
      names.map((name, index)=>(
        <li key={index}>{name}</li>  
      ))
    }
   </ul>
   {
    loggedin ? <h1>Hello, Member</h1> : <h1>Hello Guest</h1>
   }
   {/* or */}
   {
    loggedout ? <h1>Bye, Guest</h1> : ''
   }

   {/* or */}
   {
    loggedout && <h1>Bye, Guest</h1> 
   }
  </>)
}

export default App
