import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import NewSubject from './Pages/NewSubject';
import Subject from './Pages/Subject';

export default function App() {
	return (
		<Fragment>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/subject'>
						<Route path='/subject/new' element={<NewSubject />} />
						<Route path={'/subject/:id'} element={<Subject />} />
					</Route>
					<Route path='/about' element={<About />} />
				</Routes>
			</BrowserRouter>
		</Fragment>
	);
}
