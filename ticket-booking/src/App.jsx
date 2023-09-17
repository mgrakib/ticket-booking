

import { Outlet } from 'react-router-dom';
import './App.css'
import NavBar from "./Components/Shared/NavBar/NavBar";
import TopNavBar from './Components/Shared/NavBar/TopNavBar';
import ContactUs from './Components/HomePageCompo/ContactUs/ContactUs';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  
  return (
		<div className='overflow-x-hidden'>
			<div className=' '>
				<div className='hidden md:block border-b border-gray-200'>
					<TopNavBar />
				</div>

				<NavBar />
			</div>
			<div>
				<Outlet />
			</div>

			<div>
				<ContactUs />
				<Footer />
			</div>
		</div>
  );
}

export default App
