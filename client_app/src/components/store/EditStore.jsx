import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditStore = () => {
    const params = useParams()
    const [store, setStore] = useState({
        id:'', storeLocation: '',storeCapacity:''
    });

    useEffect(() =>{
        const getStore =async()=>{
            if(params.id){
                try {
                    const res = await axios.get(`http://localhost:8080/stores/${params.id}`);
                    console.log(res);
                    setStore(res.data);
                } catch (error) {
                    console.log(error);
                }

            
            }
        }
        getStore();
        
    },[params.id])

    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setStore({...store, [name]:value})
      };

    const addStore = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/addStore', store)
            console.log(res);
            
       
            window.location.href = "/storeManagement";
           
        } catch (err) {
            console.log(err);
        }

    }
  return (
    <>
    <center>
    <div>Edit Store</div>
    <div className='formBody'>
        <input type="text" name='storeLocation' placeholder="Enter Store Loaction" value={store.storeLocation} onChange={onChangeInput} required/>
        <input type="number" name='storeCapacity' placeholder="Enter Store Capacity" value={store.storeCapacity} onChange={onChangeInput} required/>
        <button onClick={addStore}>Edit</button>
    </div></center>
    </>
  )
  
}

export default EditStore