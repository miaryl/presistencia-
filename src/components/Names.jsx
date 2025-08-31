import React, { useEffect, useState } from 'react'
import { api } from '../services/api';

function Names() {
  const [names, setNames] = useState([]);
  const [form, setForm] = useState({name: ''});


  const apiNames = api();
  useEffect(()=>{
    apiNames.getNames()
    .then(res=>{setNames(res.data)})
    

  },[]);

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    apiNames.createName(form)
    .then(res =>{
        setNames([...names, res.data]);
        alert(`${res.data.name} se ha creado correctamente`)
    }).catch(error => alert("something wrong"))
  }

  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Nombre</label>
      <input type='text' name='name' id='name' onChange={handleChange}/>
      <button type="submit">Crear</button>
    </form>
      {
        names.map((obj, index)=>(
          <div  key={index}>
            <p>{obj.id}</p>
            <p>{obj.name}</p>
            <p>----------------------------</p>
          </div>
          
        ))
      }
    </>
  )
}

export default Names