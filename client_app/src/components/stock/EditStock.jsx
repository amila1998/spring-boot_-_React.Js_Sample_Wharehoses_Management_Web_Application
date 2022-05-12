import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditStock = () => {
  const params = useParams()
    const [stock, setStock] = useState({
      id:'', stock_count: '',stock_date:''
    });

    useEffect(() =>{
        const getStock =async()=>{
            if(params.id){
                try {
                    const res = await axios.get(`http://localhost:8080/stocks/${params.id}`);
                    console.log(res);
                    setStock(res.data);
                } catch (error) {
                    console.log(error);
                }

            
            }
        }
        getStock();
        
    },[params.id])

    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setStock({...stock, [name]:value})
      };

    const addStock = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/addStock', stock)
            console.log(res);
            
       
            window.location.href = "/stockManagement";
           
        } catch (err) {
            console.log(err);
        }

    }
  return (
    <>
    <center>
    <div>Edit Stock</div>
    <div className='formBody'>
    <input type="number" name='stock_count' placeholder="Enter Stock Count" value={stock.stock_count} onChange={onChangeInput} required/>
      <input type="date" name='stock_date' placeholder="Choose Date" value={stock.stock_date}  onChange={onChangeInput} required/>
        <button onClick={addStock}>Edit</button>
    </div></center>
    </>
  )
}

export default EditStock