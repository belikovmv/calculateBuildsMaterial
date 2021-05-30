import {
	Route,
	Switch,
} from "react-router-dom";
import Main from "./layout/Main/Main";
import Calc from "./layout/Calc/Calc";

function App() {
	return (
			<Switch>
				<Route exact path="/">
					<Main/>
				</Route>
				<Route exact path="/calc">
					<Calc/>
				</Route>
			</Switch>
	);
}

export default App;
