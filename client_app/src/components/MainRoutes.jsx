import React from 'react';
import { Routes,Route} from 'react-router-dom';
import ItemmanagementLayout from '../layouts/itemManagementLayout/ItemmanagementLayout';
import Dashboard from './dashboard/Dashboard';
import AddItem from './item/AddItem';
import EditItem from './item/EditItem';
import Items from './item/Items';
import AddStock from './stock/AddStock';
import EditStock from './stock/EditStock';
import Stock from './stock/Stock';
import AddStore from './store/AddStore';
import EditStore from './store/EditStore';
import Store from './store/Store';

const MainRoutes = () => {
  return (
    <>
  
     <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/itemManagement" element={<Items/>} />
            <Route path="/itemManagement/addItem" element={<AddItem/>} />
            <Route path="/itemManagement/editItem/:id" element={<EditItem/>} />
            <Route path="/storemanagement" element={<Store/>} />
            <Route path="/storemanagement/addStore" element={<AddStore/>} />
            <Route path="/storemanagement/editStore/:id" element={<EditStore/>} />
            <Route path="/stockmanagement" element={<Stock/>} />
            <Route path="/stockmanagement/addStock" element={<AddStock/>} />
            <Route path="/stockmanagement/editStock/:id" element={<EditStock/>} />
     </Routes>
 
    
    
    </>
  )
}

export default MainRoutes