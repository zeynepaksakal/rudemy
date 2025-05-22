import React from "react";
import '../App.css'; 
import store1 from "../../../publicStore/app-store.png"; 
import store2 from "../../../publicStore/google-play.png"; 
import store3 from "../../../publicStore/cards.png"; 
import RudemyLogo from "../assets/logo2.png";





const Footer = () => {
  
  return (
    
    
      <footer className="footer">

        {/* Footer Ulaşım */}
        <section className="policy" style={{ marginBottom: "-250px" } }>
        <div className="container">
            <ul className="policy-list">
                <li className="policy-item">
                    <i className="bi bi-truck"></i>
                    <div className="policy-texts">
                        <strong>ÜCRETSİZ TESLİMAT</strong>
                        <span>19.99 $'dan Başlayan Fiyatlarla</span>
                    </div>
                </li>
                <li className="policy-item">
                    <i className="bi bi-headset"></i>
                    <div className="policy-texts">
                        <strong>7/24 DESTEK</strong>
                        <span>24 Saat Çevrimiçi</span>
                    </div>
                </li>
                <li className="policy-item">
                    <i className="bi bi-arrow-clockwise"></i>
                    <div className="policy-texts">
                        <strong>30 GÜN İADE</strong>
                        <span>Sadece 30 Gün İçinde İade Edin</span>
                    </div>
                </li>
                <li className="policy-item">
                    <i className="bi bi-credit-card"></i>
                    <div className="policy-texts">
                        <strong>ÖDEME YÖNTEMİ</strong>
                        <span>Güvenli Ödeme</span>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    
      {/* Footer 1. Kısım */}
      <div className="subscribe-row" >
        <div className="container">
          <div className="footer-row-wrapper">
            <div className="footer-subscribe-wrapper">
              <div className="footer-subscribe">
                <div className="footer-subscribe-top">
                  <h3 className="subscribe-title">
                    Yeni Kurslar, indirimler ve daha fazlası hakkında bilgi almak için e-postalarımızı alın.
                  </h3>
                  <p className="subscribe-desc">
                    Size e-postayla 500Tl üzerindeki ilk siparişinizde 100Tl değerinde bir kupon göndereceğiz.
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-contact-wrapper">
              <div className="footer-conctact-top">
                <h3 className="contact-title" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Yardıma mı ihtiyacınız var?
                  <br />
                  <br />
                  (+90) 556 761 65 66
                </h3>
                <p className="contact-desc">Sabah 8.00 – Akşam 19.00 arası açığız</p>
              </div>
              <div className="footer-contact-bottom">
                <div className="download-app">
                  <a href="https://www.apple.com/app-store/">
                    <img src={store1} alt="App Store" />
                  </a>
                  <a href="https://play.google.com/store/games?device=windows&&utm_source=emea_Med&utm_medium=hasem&utm_content=Mar2425&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-tr-1710138-Med-hasem-py-Evergreen-Mar2425-Text_Search_BKWS-id_104081_%7CEXA%7CONSEM_kwid_43700081234209635&gad_source=1&gclid=Cj0KCQjw5azABhD1ARIsAA0WFUEZp5CAeiA30yxHPVhffMMVSHQqsYirpvGEHVD57WSev6DfI1IjfHsaAogbEALw_wcB">
                    <img src={store2} alt="Google Play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer 2. Kısım */}
      <div className="widgets-row">
        <div className="container">
          <div className="footer-widgets">
            <div className="brand-info">
              <div className="footer-logo">
                <img
                  src={RudemyLogo}
                  className="logo"
                  style={{ position: "relative", bottom: "15px" , height: "120px", width: "120px" , borderRadius: "50%" }}
                  alt="Logo"
                />
              </div>
              <div className="footer-desc">
                <p>Rudemy 40 yıla aşkındır bu işi yapıyor ve sizler sayesinde büyüyoruz.</p>
              </div>
              <div className="footer-contact">
                <p>
                  <a href="tel:555 555 55 55">(+90)556 761 65 66</a> –{" "}
                  <a href="mailto:info@example.com">**********@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="widget-nav-menu">
              <h4>Bilgi</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Gizlilik Politikası</a>
                </li>
              </ul>
            </div>

            <div className="widget-nav-menu">
              <h4>Hesap</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Pano</a>
                </li>
                <li>
                  <a href="#">Hesap Detayları</a>
                </li>
              </ul>
            </div>

            <div className="widget-nav-menu">
              <h4>Kurs</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Sosyal Toplum Projeleri</a>
                </li>
                <li>
                  <a href="#">Etkinlikler</a>
                </li>
                <li>
                  <a href="#">Gezi Turları</a>
                </li>
                <li>
                  <a href="#">Eğlence Alanları</a>
                </li>
              </ul>
            </div>

            <div className="widget-nav-menu">
              <h4>Liderlik</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Yönetim Becerileri</a>
                </li>
                <li>
                  <a href="#">Proje Yönetimi</a>
                </li>
                <li>
                  <a href="#">Kişisel Üretkenlik</a>
                </li>
                <li>
                  <a href="#">Duygusal Zeka</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer 3. Kısım */}
      <div className="copyright-row">
        <div className="container">
          <div className="footer-copyright">
            <br />
            <br /><br />
            <div className="site-copyright">
              <p>
                Telif Hakkı 2025 © E-Kurs Teması. Tüm hakları saklıdır.
              </p>
              <p>
              Berat Öztürk - Aybars Mustafa Doğan - Zeynep Aksakal tarafından desteklenmektedir.
              </p>
            </div>
            <a href="#">
              <img src={store3} alt="Cards" />
            </a>
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li className="list-item">
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li className="list-item">
                  <a href="#">Şartlar ve Koşullar</a>
                </li>
                <li className="list-item">
                  <a href="#">İade Politikası</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
