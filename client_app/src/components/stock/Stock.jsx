import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Stock = () => {
  const [stock, setStock] = useState([]);
  useEffect(() =>{
      const getStock = async () => {
          try {
              const res = await axios.get(`http://localhost:8080/stocks`);
              console.log(res)
              setStock(res.data)
          } catch (error) {
              console.log(error)
          }
        
      }
      getStock()
  },[])

  const deleteStock = async (stockId)=>{
      try {
          
              const res = await axios.delete(`http://localhost:8080/deleteStock/${stockId}`);
              //console.log(res)
              alert("Stock Deleted!!");
              window.location.href = "/stockManagement";
          
      } catch (error) {
          console.log(error)
      }
  }

return (
 <>
  <div className='search bar'>
     {stock.length} stock have in the list
 </div>
 <div className='search bar'>

     <input type='text' /><button>Search</button>
 </div>

 <div className='table-page'>
 <table>
              <thead>
                  <tr>
                      <th>Stock ID</th>
                      <th>Stock Count</th>
                      <th>Stock Date</th>
                      <th></th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  {
                      stock.map(stock => (
                          <tr key={stock.id}>
                              <td>{stock.id}</td>
                              <td>{stock.stock_count}</td>
                              <td>{stock.stock_date}</td>
                              <td><Link to={`/stockManagement/editStock/${stock.id}`}>Edit</Link></td>
                              <td><button onClick={() => deleteStock(stock.id)}>Delete</button></td>
                          </tr>
                      ))
                  }
              </tbody>
          </table>
 </div>
 </>
)
}

export default Stock