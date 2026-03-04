import Hero from "../components/Home/Hero";
import "./Home.css";
import MainContext from "../layout/MainContext";

export default function Home() {

    return (
        <div className="home-container">
            <Hero />
            <MainContext />
        </div>
    );
}