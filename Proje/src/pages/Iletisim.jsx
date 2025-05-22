import React, { useEffect } from "react";
import './Iletisim.css';
import LogoRudemy from "../../../publicKurslarProfile/logo2.png";

// Form gönderme
const formGonder = (formId) => {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const ad = document.getElementById("name")?.value;
      const eposta = document.getElementById("email")?.value;
      const mesaj = document.getElementById("message")?.value;

      if (!ad || !eposta || !mesaj) {
        return;  
      }

      console.log('Adınız Soyadınız:', ad);
      console.log('E-posta:', eposta);
      console.log('Mesajınız:', mesaj);

      formVerisiniKaydet(formId, ["name", "email", "message"]);

      form.reset();
      localStorage.removeItem(formId);
      alert("Form başarıyla gönderildi!");
    });
  }
};

// Geri bildirim 
const geriBildirim = (formId) => {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const mesaj = document.getElementById("feedback")?.value;

      if (!mesaj) {
        return;  
      }

      console.log("Geri Bildirim:", mesaj);

      formVerisiniKaydet(formId, ["feedback"]);

      form.reset();
      localStorage.removeItem(formId);
      alert("Geri bildirim gönderildi!");
    });
  }
};

// localstden kaydetme 
const formVerisiniKaydet = (formId, alanlar) => {
  const form = document.getElementById(formId);
  if (form) {
    alanlar.forEach((alan) => {
      const eleman = form.querySelector(`#${alan}`);
      if (eleman) {
        eleman.addEventListener("input", () => {
          if (eleman.value.trim() !== "") {
            const kayitliVeri = JSON.parse(localStorage.getItem(formId)) || {};
            kayitliVeri[alan] = eleman.value;
            localStorage.setItem(formId, JSON.stringify(kayitliVeri));
          } else {
            // Boş veri locasst kaldır
            const kayitliVeri = JSON.parse(localStorage.getItem(formId)) || {};
            delete kayitliVeri[alan];
            localStorage.setItem(formId, JSON.stringify(kayitliVeri));
          }
        });
      }
    });
  }
};

// localstden  yükleme işlemi
const formVerisiniYukle = (formId, alanlar) => {
  const form = document.getElementById(formId);
  const kayitliVeri = JSON.parse(localStorage.getItem(formId));
  if (form && kayitliVeri) {
    alanlar.forEach((alan) => {
      const eleman = form.querySelector(`#${alan}`);
      if (eleman && kayitliVeri[alan]) {
        eleman.value = kayitliVeri[alan];
      }
    });
  }
};

function Iletisim() {
  useEffect(() => {
    const iletisimAlanlari = ["name", "email", "message"];
    const geriBildirimAlanlari = ["feedback"];

    formVerisiniYukle("contact-form", iletisimAlanlari);
    formVerisiniKaydet("contact-form", iletisimAlanlari);
    formGonder("contact-form");

    formVerisiniYukle("feedback-form", geriBildirimAlanlari);
    formVerisiniKaydet("feedback-form", geriBildirimAlanlari);
    geriBildirim("feedback-form");

    const modal = document.getElementById("searchmodal");
    const btn = document.getElementById("searchbtn");
    const span = document.getElementsByClassName("close")[0];

    if (btn && modal && span) {
      btn.onclick = () => modal.style.display = "block";
      span.onclick = () => modal.style.display = "none";
    }

    window.myFunction = function () {
      const input = document.getElementById("searchmenu");
      const filter = input.value.toUpperCase();
      const ul = document.getElementById("menu");
      const li = ul.getElementsByTagName("li");
      for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0];
        li[i].style.display = a.innerHTML.toUpperCase().includes(filter) ? "" : "none";
      }
    };
  }, []);

  return (
    <section className="contact-section">
      <div className="container">
        <div className="iletisimbaslik">
          <img
            src={LogoRudemy}
            alt="Profil"
            style={{
              borderRadius: "100%",
              width: "100px",
              height: "100px",
            }}
          />
        </div>
        <br />
        <div className="contact-info">
          <div className="info-item">
            <h2>İletişim Formu</h2>
            <form className="form2" action="#" method="POST" id="contact-form">
              <label htmlFor="name">Adınız Soyadınız:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">E-posta:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Mesajınız:</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">Gönder</button>
            </form>
          </div>

          <div className="info-item2">
            <strong><h2>İletişim Bilgileri</h2></strong>
            <p><strong>E-posta:</strong> Rudemy@gmail.com</p>
            <p><strong>Telefon:</strong> (+90) 556 761 65 66</p>
            <p><strong>Adres:</strong> İstanbul/Silivri Türkiye</p>
            <br /><br />
            <strong><h2>Mesai Saatleri</h2></strong>
            <p><strong>Hafta İçi:</strong> 08:00 - 19:00</p>
            <p><strong>Cumartesi:</strong> 08:00 - 15:00</p>
            <p><strong>Pazar:</strong> Kapalı</p>
          </div>

          <div className="info-item">
            <h2 style={{ fontSize: "2rem", color: "#333", marginBottom: "30px", fontWeight: "bold" }}>
              Sosyal Medya
            </h2>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              <li style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginBottom: "50px" }}>
                <i className="fab fa-facebook" style={{ fontSize: "48px", color: "#1877F2" }}></i>
                <a href="https://tr-tr.facebook.com/RumeliUNV/photos/" target="_blank" rel="noopener noreferrer"
                  style={{ color: "#1877F2", fontWeight: "bold", textDecoration: "none", fontSize: "1.2rem" }}>
                  İstanbul Rumeli Üniversitesi Facebook
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "50px" }}>
                <i className="fab fa-instagram" style={{ fontSize: "48px", color: "#E4405F" }}></i>
                <a href="https://www.instagram.com/rumeliunv/" target="_blank" rel="noopener noreferrer"
                  style={{ color: "#E4405F", fontWeight: "bold", textDecoration: "none", fontSize: "1.2rem" }}>
                  İstanbul Rumeli Üniversitesi Instagram
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", marginBottom: "20px" }}>
                <i className="fab fa-twitter" style={{ fontSize: "48px", color: "#1DA1F2" }}></i>
                <a href="https://x.com/rumeliunv?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer"
                  style={{ color: "#1DA1F2", fontWeight: "bold", textDecoration: "none", fontSize: "1.2rem" }}>
                  İstanbul Rumeli Üniversitesi Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="info-item">
            <h2>Harita</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              title="Harita"
            ></iframe>
          </div>
        </div>
        <br />
        <section className="contact-section-iletisim">
          <div className="info-item-iletisim">
            <h2 className="form-title-iletisim">Geri Bildirim veya Şikayet</h2>
            <form action="#" method="POST" id="feedback-form" className="form-container-iletisim">
              <label htmlFor="feedback" className="form-label-iletisim">Mesajınız:</label>
              <textarea
                id="feedback"
                name="feedback"
                required
                className="form-textarea-iletisim"
              ></textarea>
              <button type="submit" className="form-button-iletisim">Gönder</button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Iletisim;