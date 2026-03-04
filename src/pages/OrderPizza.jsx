import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./OrderPizza.css";
import { useHistory } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const initialState = {
    isim: "",
    boyut: "",
    hamur: "default",
    malzemeler: [],
    kisiIsmi: "",
    not: "",
};

export default function OrderPizza() {
    const pizza = useMemo(
        () => ({
            isim: "Position Absolute Acı Pizza",
            aciklama:
                "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.",
            fiyat: 85.5,
            derece: 4.9,
            yorum: 200,
            boyut: ["Küçük", "Orta", "Büyük"],
            malzemeler: [
                "Pepperoni",
                "Tavuk Izgara",
                "Mısır",
                "Sarımsak",
                "Ananas",
                "Sosis",
                "Soğan",
                "Salam",
                "Biber",
                "Kabak",
                "Kanada Jambonu",
                "Domates",
                "Jalepeno",
                "Sucuk",
            ],
            ekMalzemeBirimFiyat: 5,
        }),
        []
    );

    const history = useHistory();

    const [counter, setCounter] = useState(1);
    const [isDisabled, setIsDisabled] = useState(true);
    const [error, setError] = useState({});
    const [form, setForm] = useState(initialState);

    const ekMalzemeFiyati = form.malzemeler.length * pizza.ekMalzemeBirimFiyat;
    const toplamTutar = counter * (pizza.fiyat + ekMalzemeFiyati);

    function formValidation() {
        const hatalar = {};
        if (!form.boyut) hatalar.boyut = "Lütfen pizza boyutu seçiniz!";
        if (form.hamur === "default")
            hatalar.hamur = "Lütfen hamur kalınlığını seçiniz!";
        if (form.kisiIsmi.trim().length < 3)
            hatalar.kisiIsmi = "Lütfen geçerli bir isim giriniz!";
        if (form.malzemeler.length < 4)
            hatalar.malzemeler = "Lütfen en az dört malzeme seçiniz!";

        setError(hatalar);
        setIsDisabled(Object.keys(hatalar).length > 0);
    }

    useEffect(() => {
        formValidation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form]);

    const handleMaterials = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;

        if (form.malzemeler.length === 10 && checked) {
            alert("En fazla 10 adet seçim yapabilirsiniz!");
            return;
        }

        setForm((prev) => ({
            ...prev,
            malzemeler: prev.malzemeler.includes(value)
                ? prev.malzemeler.filter((a) => a !== value)
                : [...prev.malzemeler, value],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...form,
            id: crypto.randomUUID(),
            isim: pizza.isim,
            adet: counter,
            ekMalzemeFiyati,
            toplamTutar,
        };

        // Önce yönlendir (challenge akışı bozulmasın)
        history.push("/orderresult", payload);

        // API opsiyonel: hata verse bile sayfa bozulmasın
        try {
            await axios.post("https://reqres.in/api/pizza", payload);
        } catch (err) {
            console.log("API isteği başarısız (önemli değil):", err?.message || err);
        }

        setForm(initialState);
        setCounter(1);
    };

    const handleIncrease = () => setCounter((c) => c + 1);
    const handleDecrement = () => setCounter((c) => (c > 1 ? c - 1 : 1));

    return (
        <div className="order-page">
            <div className="order-container">
                {/* Açıklama */}
                <div className="order-card">
                    <h2 className="order-title">{pizza.isim}</h2>

                    <div className="menu-info">
                        <span className="price">{pizza.fiyat.toFixed(2)} ₺</span>
                        <div className="rating">
                            <span>{pizza.derece}</span>
                            <span>({pizza.yorum})</span>
                        </div>
                    </div>

                    <p className="order-desc">{pizza.aciklama}</p>
                </div>

                {/* Form */}
                <Form className="order-form" onSubmit={handleSubmit}>
                    {/* İsim */}
                    <div className="field">
                        <h3 className="field-title">
                            İsmin <span className="req">*</span>
                        </h3>
                        {error.kisiIsmi && <p className="order-error">{error.kisiIsmi}</p>}
                        <Input
                            className="text-input"
                            value={form.kisiIsmi}
                            onChange={(e) => setForm({ ...form, kisiIsmi: e.target.value })}
                            placeholder="İsmini yaz"
                        />
                    </div>

                    {/* Boyut + Hamur */}
                    <div className="two-col">
                        <div className="field">
                            <h3 className="field-title">
                                Boyut Seç <span className="req">*</span>
                            </h3>
                            {error.boyut && <p className="order-error">{error.boyut}</p>}

                            <div className="size-grid">
                                {pizza.boyut.map((boyut) => {
                                    const checked = form.boyut === boyut;
                                    return (
                                        <label
                                            key={boyut}
                                            className={`size-item ${checked ? "size-item--selected" : ""
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="pizzaBoyut"
                                                value={boyut}
                                                checked={checked}
                                                onChange={(e) =>
                                                    setForm({ ...form, boyut: e.target.value })
                                                }
                                            />
                                            <span>{boyut}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="field">
                            <h3 className="field-title">
                                Hamur Seç <span className="req">*</span>
                            </h3>
                            {error.hamur && <p className="order-error">{error.hamur}</p>}

                            <FormGroup>
                                <Label for="hamurSelect" className="sr-only">
                                    Hamur Kalınlığı
                                </Label>
                                <Input
                                    className="dough-select"
                                    id="hamurSelect"
                                    name="hamur"
                                    type="select"
                                    value={form.hamur}
                                    onChange={(e) => setForm({ ...form, hamur: e.target.value })}
                                >
                                    <option value="default" disabled>
                                        Hamur Kalınlığı
                                    </option>
                                    <option value="İnce">İnce</option>
                                    <option value="Orta">Orta</option>
                                    <option value="Kalın">Kalın</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </div>

                    {/* Ek Malzemeler */}
                    <div className="field">
                        <h3 className="field-title">
                            Ek Malzemeler <span className="req">*</span>
                        </h3>
                        {error.malzemeler && <p className="order-error">{error.malzemeler}</p>}
                        <p className="hint">
                            En fazla 10 malzeme seçebilirsiniz. {pizza.ekMalzemeBirimFiyat}₺
                        </p>

                        <div className="toppings-grid">
                            {pizza.malzemeler.map((malzeme) => {
                                const checked = form.malzemeler.includes(malzeme);
                                const disabled = !checked && form.malzemeler.length >= 10;

                                return (
                                    <label
                                        key={malzeme}
                                        htmlFor={malzeme}
                                        className={[
                                            "topping-item",
                                            checked ? "topping-item--selected" : "",
                                            disabled ? "topping-item--disabled" : "",
                                        ].join(" ")}
                                    >
                                        <input
                                            type="checkbox"
                                            id={malzeme}
                                            value={malzeme}
                                            checked={checked}
                                            disabled={disabled}
                                            onChange={handleMaterials}
                                        />
                                        <span className="topping-label">{malzeme}</span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    {/* Sipariş Notu */}
                    <div className="field">
                        <h3 className="field-title">Sipariş Notu</h3>
                        <Input
                            className="note"
                            type="textarea"
                            value={form.not}
                            onChange={(e) => setForm({ ...form, not: e.target.value })}
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                        />
                    </div>

                    {/* Alt bölüm: sayaç + toplam */}
                    <div className="bottom-row">
                        <div className="counter">
                            <Button type="button" className="counter-btn" onClick={handleDecrement}>
                                -
                            </Button>
                            <span className="counter-value">{counter}</span>
                            <Button type="button" className="counter-btn" onClick={handleIncrease}>
                                +
                            </Button>
                        </div>

                        <div className="summary">
                            <h3 className="summary-title">Sipariş Toplamı</h3>

                            <div className="summary-row">
                                <span>Seçimler</span>
                                <span className="money">{ekMalzemeFiyati.toFixed(2)} ₺</span>
                            </div>

                            <div className="summary-row total">
                                <span>Toplam</span>
                                <span className="money">{toplamTutar.toFixed(2)} ₺</span>
                            </div>

                            <Button type="submit" className="submit-btn" disabled={isDisabled}>
                                SİPARİŞ VER
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}