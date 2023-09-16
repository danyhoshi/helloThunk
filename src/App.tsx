import './App.scss'
import List from "./components/List"
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokeById } from './redux/features/pokeSlice'
import { RootState, AppDispatch } from './redux/store'
import { ThunkDispatch } from "@reduxjs/toolkit"; //se importa para que no de problema el tipado del dispatch de thunks
import { useEffect } from 'react'

function App() {

 const  poke  = useSelector((state: RootState) => state.poke)
  //const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const dispatch = useDispatch<AppDispatch>();
  
  // const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
  //   dispatch(fetchPokeById(7))
  // }
  // useEffect(() => {

  // }, [dispatch])
  return (
    <>
       {/* <button onClick={ handleClick }> My pokemon </button> */}
       <List />
       { poke.loading ? 
          <p>Loading</p>:
       <h1>{poke.name}</h1>}
       
    </>
  )
}

export default App
