import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
    const history = useNavigate();
  return (
    <>
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/"
            onSelect={({itemId}) => {
             history(itemId)
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => {},
              },
              {
                title: 'Items Management',
                itemId: '/itemManagement',
                elemBefore: () => {},
                subNav: [
                  {
                    title: 'Add a item',
                    itemId: '/itemManagement/addItem',
                    // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                    elemBefore: () => {},
                  },
                  
                ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
            ]}
          />
      </>
  )
}

export default NavigationBar