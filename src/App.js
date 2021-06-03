import {
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Main from "./layout/Main/Main";
import Calc1 from "./layout/Calc1/Calc";
import Calc2 from "./layout/Calc2/Calc";
import Calc3 from "./layout/Calc3/Calc";
import Nav from "./layout/Nav/Nav";
import Contact from "./layout/Contact/Contact";

function App() {
	return (
		<div className='all-container'>
			<Nav/>
			<div className='all-wrapper'>
				<Switch>
					<Route exact path="/main">
						<Main/>
					</Route>
					<Route exact path="/calc1">
						<Calc1/>
					</Route>
					<Route exact path="/calc2">
						<Calc2/>
					</Route>
					<Route exact path="/calc3">
						<Calc3/>
					</Route>
					<Route exact path="/contact">
						<Contact/>
					</Route>
					<Redirect from='/' to='main' />
				</Switch>
			</div>
		</div>
	);
}

export default App;
