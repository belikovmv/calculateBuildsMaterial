import {
    Link,
} from "react-router-dom";
import gratis from "../../img/gratis.png";
import blue from "../../img/blue.png";
import './App.css';

function Main() {
    return (
        <div className="App">
            Калькулятор расчета строительных материалов!
            <Link className='app-button' to="/calc">Рассчитать!</Link>
            <img className='app-img' src={gratis} alt="gratis"/>
            <img className='app-img2' src={blue} alt="gratis"/>
        </div>
    );
}

export default Main;
