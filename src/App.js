import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Main from "./layout/Main";
import Calc from "./layout/Calc";

function App() {
    return (
        <>
            <Switch>
                <Route path="/main">
                    <Main/>
                </Route>
                <Route path="/calc">
                    <Calc/>
                </Route>
            </Switch>
            <Redirect from='/' to='main'/>
        </>
    );
}

export default App;
