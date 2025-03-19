import { View, Text } from 'react-native'
import React from 'react'
import { AuthProvider } from './context/authContext';
import Screenmenu from './components/menu/Screenmenu';

const RootNavigation = () => {
  return (
   <AuthProvider>

   <Screenmenu/>
   
   
   
   </AuthProvider>
  )
}

export default RootNavigation;