import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Store = () => {
    const [stores, setStores] = useState([]);
    useEffect(() =>{
        const getStores = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/stores`);
                console.log(res)
                setStores(res.data)
            } catch (error) {
                console.log(error)
            }
          
        }
        getStores()
    },[])

    const deleteStore = async (storeId)=>{
        try {
            
                const res = await axios.delete(`http://localhost:8080/deleteStore/${storeId}`);
                //console.log(res)
                alert("Store Deleted!!");
                window.location.href = "/storeManagement";
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
   <>
    <div className='search bar'>
       {stores.length} stores have in the list
   </div>
   <div className='search bar'>

       <input type='text' /><button>Search</button>
   </div>
  
   <div className='table-page'>
   <table>
                <thead>
                    <tr>
                        <th>Store ID</th>
                        <th>Store Location</th>
                        <th>Store Capacity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stores.map(store => (
                            <tr key={store.id}>
                                <td>{store.id}</td>
                                <td>{store.storeLocation}</td>
                                <td>{store.storeCapacity}</td>
                                <td><Link to={`/storeManagement/editStore/${store.id}`}>Edit</Link></td>
                                <td><button onClick={() => deleteStore(store.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
   </div>
   </>
  )
}

export default Store