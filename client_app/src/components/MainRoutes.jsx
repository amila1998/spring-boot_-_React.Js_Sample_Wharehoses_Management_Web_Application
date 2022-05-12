import React from 'react';
import { Routes,Route} from 'react-router-dom';
import ItemmanagementLayout from '../layouts/itemManagementLayout/ItemmanagementLayout';
import Dashboard from './dashboard/Dashboard';
import AddItem from './item/AddItem';
import EditItem from './item/EditItem';

const MainRoutes = () => {
  return (
    <>
  
     <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/itemManagement" element={<ItemmanagementLayout/>} />
            <Route path="/itemManagement/addItem" element={<AddItem/>} />
            <Route path="/itemManagement/editItem/:id" element={<EditItem/>} />
     </Routes>
 
    
    
    </>
  )
}

export default MainRoutes