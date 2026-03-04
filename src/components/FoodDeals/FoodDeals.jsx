import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import "./FoodDeals.css";


export default function FoodDeals() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/orderpizza');
    };

    return (
        <div className="deal-container">
            <div className="deal-1">
                <h3 className="text-5xl text-white">Özel <br />Lezzetus</h3>
                <p className="!text-white">Position:Absolute Acı Burger</p>
                <Button className="deal-button" onClick={handleClick} >SİPARİŞ VER</Button>
            </div>
            <div className="other-deals">
                <div className="deal-2">
                    <h3 className="text-2xl text-white">Hackathlon <br />Burger Menü</h3>
                    <Button className="deal-button" onClick={handleClick}>SİPARİŞ VER</Button>
                </div>
                <div className="deal-3">
                    <h3 className="text-2xl text-customDarkGray"><span className="text-red-600">Çoooook</span> hızlı<br />npm gibi kurye</h3>
                    <Button className="deal-button" onClick={handleClick}>SİPARİŞ VER</Button>
                </div>
            </div>
        </div>
    );
}