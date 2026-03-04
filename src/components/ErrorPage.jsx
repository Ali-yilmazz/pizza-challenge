import { useLocation } from "react-router-dom";

export default function ErrorPage() {
    const location = useLocation();
    const data = location.state;

    return (
        <div className="error-page">
            <p>{data}</p>
        </div>
    );
}