import React from 'react'
import MainRoutes from '../../components/MainRoutes'
import NavigationBar from '../../components/navbar/NavigationBar'

const MainLayot = () => {
  return (
    <div className='mainLayout'>
        <div className='colLeft'>
            <NavigationBar/>
        </div>
        <div className='colRight'>
            <MainRoutes/>
        </div>
    </div>
  )
}

export default MainLayot