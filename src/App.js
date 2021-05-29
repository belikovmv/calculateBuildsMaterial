import {
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import Main from "./layout/Main/Main";
import Calc from "./layout/Calc/Calc";

function App() {
	return (
		<>
			<Switch>
				<Route path="/main">
					<Main/>
				</Route>
				<Route exact path="/calc">
					<Calc/>
				</Route>
				<Redirect from='/' to='main'/>
			</Switch>
		</>
	);
}

export default App;
