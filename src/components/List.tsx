import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchPokeById } from '../redux/features/pokeSlice'
// import { RootState } from '../redux/store'
import { ThunkDispatch } from "@reduxjs/toolkit"; //se importa para que no de problema el tipado del dispatch de thunks

function  PokeList() {
  const [formData, setFormData] = React.useState(
    {
        choice: ""
    }
)

  //const  poke  = useSelector((state: RootState) => state.poke)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target
      setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
    dispatch(fetchPokeById(value))
  }

  return (
    <div style={{width:"500px"}}>
      <select 
          className="form-select form-select-lg mb-2" aria-label=".form-select-lg example"
          id="choice" 
          value={formData.choice}
          onChange={ handleChange }
          name="choice">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</div>
  )
}

export default  PokeList