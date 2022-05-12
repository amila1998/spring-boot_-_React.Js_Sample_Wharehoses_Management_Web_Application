import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditItem = () => {
    const params = useParams()
    const [item, setItem] = useState({
        id:'', itemName: ''
    });

    useEffect(() =>{
        const getItem =async()=>{
            if(params.id){
                try {
                    const res = await axios.get(`http://localhost:8080/items/${params.id}`);
                    console.log(res);
                    setItem(res.data);
                } catch (error) {
                    console.log(error);
                }

            
            }
        }
        getItem();
        
    },[params.id])

    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setItem({...item, [name]:value})
      };

    const addItem = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/addItem', item)
            console.log(res);
            
       
            window.location.href = "/itemManagement";
           
        } catch (err) {
            console.log(err);
        }

    }
  return (
    <>
    <center>
    <div>Edit Item</div>
    <div className='formBody'>
        <input type="text" name='itemName' placeholder="Enter Item Name" value={item.itemName} onChange={onChangeInput} required/>
        <button onClick={addItem}>Edit</button>
    </div></center>
    </>
  )
}

export default EditItem