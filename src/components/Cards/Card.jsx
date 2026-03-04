export default function Card({ className, img, text }) {

    return (
        <li className={className}>
            <img src={img} alt={text} />
            <p>
                <strong>{text}</strong>
            </p>
            <div className="card-detail">
                <span>4.9</span>
                <span>(200)</span>
                <span>
                    <strong>60₺</strong>
                </span>
            </div>
        </li>
    )

}