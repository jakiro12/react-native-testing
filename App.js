import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainStack from './navigation/MainStack';

export default function App() {

  return (<>
       <MainStack/>
       <StatusBar style='dark'/>
       </>
  );
}



