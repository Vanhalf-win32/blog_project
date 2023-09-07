import React from 'react';
import './styles/App.css';
import { BrowserRouter} from 'react-router-dom';
import Navigation from './components/UI/navigation/navigation';
import AppRoutes from './components/AppRotes';


export default function App() {
  return( 
      <BrowserRouter>
        <Navigation/>
        <AppRoutes/>
      </BrowserRouter>
  )
};