import "./Footer.css";

export default function Footer() {

    return <div className="container-footer">
        <div className="footer">
            <div className="footer-contact">
                <h2>Teknolojik <br /> Yemekler</h2>
                <p>
                    <img src="\images\iteration-2-images\footer\icons\icon-1.png" alt="konum icon" />
                    341 Londonderry Road,
                    Istanbul Türkiye
                </p>
                <p>
                    <img src="\images\iteration-2-images\footer\icons\icon-2.png" alt="mail icon" />
                    aciktim@teknolojikyemekler
                </p>
                <p>
                    <img src="\images\iteration-2-images\footer\icons\icon-3.png" alt="telefon icon" />
                    +90 216 123 45 67
                </p>

            </div>
            <div className="footer-menu">
                <h3>Hot Menu</h3>
                <p>Terminal Pizaa</p>
                <p>5 Kişilik Hackathlon</p>
                <p>useEffect Tavuklu Pizza</p>
                <p>Beyaz Console Frosty</p>
                <p>Testler Geçti Mutlu Burger</p>
                <p>Position Absolute Acı Burger</p>
            </div>
            <div className="footer-instagram">
                <h4>Instagram</h4>
                <div className="container-img">
                    <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="" />
                    <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="" />
                    <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="" />
                    <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="" />
                    <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="" />
                    <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="" />
                </div>
            </div>
        </div>
        <div className="bottom-part">
            <p>© 2023 Teknolojik Yemekler.</p>
            <img src="/images/iteration-2-images/footer/icons/Vector.png" alt="" />
        </div>
    </div>
}