import {
    Route,
    Switch,
} from "react-router-dom";

function Calc() {
    return (
       <div>
           <Switch>
               <Route path="/calc">
                   hi
               </Route>
           </Switch>
       </div>
    );
}

export default Calc;
