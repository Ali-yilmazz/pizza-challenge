import Card from "./Card";
import "./Cards.css";

export default function Cards() {

    return (
        <div className="card-container">
            <Card className="card-item" img="\images\iteration-2-images\pictures\food-1.png" text="Terminal Pizza" />
            <Card className="card-item" img="\images\iteration-2-images\pictures\food-2.png" text="Position Absolute Acı Pizza" />
            <Card className="card-item" img="\images\iteration-2-images\pictures\food-3.png" text="useEffect Tavuklu Burger" />
        </div>
    )
}