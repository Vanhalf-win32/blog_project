import React from 'react';
import './styles/App.css';
import { BrowserRouter} from 'react-router-dom';
import Navigation from './components/UI/navigation/navigation';
import AppRoutes from './components/AppRotes';
import Index from './pages/Index';
import CellTradeIndex from './celltrade';

export default function App() {
  return( 
    //   <BrowserRouter>
    //     <Navigation/>
    //     <AppRoutes/>
    //   </BrowserRouter>
		<CellTradeIndex/>
	)
};