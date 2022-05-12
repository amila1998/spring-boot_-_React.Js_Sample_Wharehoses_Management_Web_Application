import axios from 'axios';
import React, { useState } from 'react'

const AddStock = () => {
  const [stock, setStock] = useState({
    id:'', stock_count: '',stock_date:''
});

const onChangeInput = (e) =>{
    const {name, value} = e.target;
    setStock({...stock, [name]:value})
  };

const addStock = async(e)=>{
    e.preventDefault()
    try {
        const res = await axios.post('http://localhost:8080/addStock', stock)
        console.log(res);
        alert("Stock Added!");
        
   
        window.location.href = "/stockManagement";
       
    } catch (err) {
        console.log(err);
        alert("Somthing wrong!!");
    }

}

return (
  <>
  <center>
  <div>Add a Stock</div>
  <div className='formBody'>
      <input type="number" name='stock_count' placeholder="Enter Stock Count" onChange={onChangeInput} required/>
      <input type="date" name='stock_date' placeholder="Choose Date" onChange={onChangeInput} required/>
      <button onClick={addStock}>Add</button>
  </div></center>
  </>

)
}

export default AddStock