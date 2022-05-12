import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() =>{
        const getItems = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/items`);
                //console.log(res)
                setItems(res.data)
            } catch (error) {
                console.log(error)
            }
          
        }
        getItems()
    },[])

    const deleteItem = async (itemId)=>{
        try {
            
                const res = await axios.delete(`http://localhost:8080/deleteItem/${itemId}`);
                //console.log(res)
                alert("Item Deleted!!");
                window.location.href = "/itemManagement";
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
   <>
    <div className='search bar'>
       {items.length} items have in the list
   </div>
   <div className='search bar'>

       <input type='text' /><button>Search</button>
   </div>
  
   <div className='table-page'>
   <table>
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.itemName}</td>
                                <td><Link to={`/itemManagement/editItem/${item.id}`}>Edit</Link></td>
                                <td><button onClick={() => deleteItem(item.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
   </div>
   </>
  )
}

export default Items