import axios from 'axios';
import React, { useState } from 'react'

const AddItem = () => {
    const [item, setItem] = useState({
        id:'', itemName: ''
    });

    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setItem({...item, [name]:value})
      };

    const addItem = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/addItem', item)
            console.log(res);
            alert("Item Added!");
            
       
            window.location.href = "/itemManagement";
           
        } catch (err) {
            console.log(err);
            alert("Somthing wrong!!");
        }

    }

  return (
      <>
      <center>
      <div>Add Item</div>
      <div className='formBody'>
          <input type="text" name='itemName' placeholder="Enter Item Name" onChange={onChangeInput} required/>
          <button onClick={addItem}>Add</button>
      </div></center>
      </>
    
  )
}

export default AddItem