import {
	Route,
	Switch,
} from "react-router-dom";
import Main from "./layout/Main/Main";
import Calc from "./layout/Calc/Calc";

function App() {
	return (
		<>
			<Switch>
				<Route path="/">
					<Main/>
				</Route>
				<Route exact path="/calculateBuildsMaterial/calc">
					<Calc/>
				</Route>
			</Switch>
		</>
	);
}

export default App;
