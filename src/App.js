import "./App.scss";
import {useSelector, useDispatch} from 'react-redux'
import {
  handleAdd,
  handleAddNumber,
  handleReset,
  handleSubstract,
  toggleAuth
} from './store/actions/action'



function App() {
  const count = useSelector(state => state.count)
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  console.log(count)
  console.log(isLoggedIn)
  const dispatch = useDispatch()



  

  let color = 'white'

  if (count >=1){
    color = 'yellow'
  } else if (count < 0){
    color = 'red'
  } else{
    color = 'white'
  }

  return (
    <section className = 'counter-sec --flex-center'>
      <div className  ='container counter --card --center-all'>
      <button className = '--btn --btn-danger'onClick = {() =>dispatch(toggleAuth())}> {isLoggedIn ? 'Log Out' : 'Log in'}</button>
      <hr />
      {!isLoggedIn ? <p>Please Log in</p> : (
        <>
         <h1 className = '--text-light'>EmmyB Counter App</h1>
        <p className = 'count --my2 --text-md --text-light --fw-bold'  style={{color:color}}> {count} </p>
        <div className = 'buttons'>
          <button className = '--btn --btn-danger' onClick ={() => dispatch(handleSubstract())}> -Subtract</button>
          <button className = '--btn' onClick ={() => dispatch(handleReset())}> !Reset</button>
          <button className = '--btn --btn-success' onClick ={() => dispatch(handleAdd())}> +Add</button>
          <button className = '--btn --btn-success' onClick ={() => dispatch(handleAddNumber(5))}> +Add 5</button>
     
        </div>
        </>
      )}
       
      </div>
    </section>
  );
}

export default App;
