import "./OrderResult.css";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useMemo } from "react";

export default function OrderResult() {
    const location = useLocation();
    const history = useHistory();

    // OrderPizza'dan push ile gelen state
    const data = location.state;

    // Direkt sayfaya girilirse state olmaz -> ana sayfaya at
    useEffect(() => {
        if (!data) history.push("/");
    }, [data, history]);

    const extrasText = useMemo(() => {
        if (!data?.malzemeler?.length) return "-";
        return data.malzemeler.join(", ");
    }, [data]);

    if (!data) return null;

    const selections = Number(data.ekMalzemeFiyati || 0);
    const total = Number(data.toplamTutar || 0);

    return (
        <div className="result-page">
            <h1 className="brand">Teknolojik Yemekler</h1>

            <h2 className="result-title">SİPARİŞ ALINDI</h2>

            <div className="result-sub">
                <p className="sub-line">{data.isim}</p>
                <p className="sub-line">Boyut: {data.boyut}</p>
                <p className="sub-line">Hamur: {data.hamur}</p>
                <p className="sub-line">Ek Malzemeler: {extrasText}</p>
            </div>

            <div className="result-box">
                <h3 className="box-title">Sipariş Toplamı</h3>

                <div className="box-row">
                    <span className="label">Seçimler</span>
                    <span className="money">{selections.toFixed(2)} ₺</span>
                </div>

                <div className="box-row total">
                    <span className="label">Toplam</span>
                    <span className="money">{total.toFixed(2)} ₺</span>
                </div>
            </div>
        </div>
    );
}