import './App.scss';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import TodoAdd from './pages/TodoAdd/TodoAdd';
import TodoDetail from './pages/TodoDetail/TodoDetail';
import TodoEdit from './pages/TodoEdit/TodoEdit';
function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route path='/' exact={true} component={Home} />
				<Route path='/addTask' component={TodoAdd} />
				<Route path='/editTask/:id' component={TodoEdit} />
				<Route path='/view/:id' component={TodoDetail} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
