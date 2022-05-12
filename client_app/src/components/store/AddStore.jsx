import axios from 'axios';
import React, { useState } from 'react'

const AddStore = () => {
    const [store, setStore] = useState({
        id:'', storeLocation: '',storeCapacity:''
    });

    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setStore({...store, [name]:value})
      };

    const addStore = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/addStore', store)
            console.log(res);
            alert("Store Added!");
            
       
            window.location.href = "/storeManagement";
           
        } catch (err) {
            console.log(err);
            alert("Somthing wrong!!");
        }

    }

  return (
      <>
      <center>
      <div>Add a Store</div>
      <div className='formBody'>
          <input type="text" name='storeLocation' placeholder="Enter Store Location" onChange={onChangeInput} required/>
          <input type="number" name='storeCapacity' placeholder="Enter Store Capacity" onChange={onChangeInput} required/>
          <button onClick={addStore}>Add</button>
      </div></center>
      </>
    
  )
}

export default AddStore