import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import paper from "paper";
import "./Oturum.css";
import LogoRudemy from "../../../publicAccountProfile/LogoGiris.png";

const Oturum = () => {
  const tuvalRef = useRef(null);
  const kutuRef = useRef(null);
  const katmanRef = useRef(null);
  const navigate = useNavigate();

  const [kayitBasarili, setKayitBasarili] = useState(false);

  // Kayıt formu state
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    onay: false,
  });

  const [girisForm, setGirisForm] = useState({
    username: "",
    password: ""
  });
  const [girisHata, setGirisHata] = useState("");

  // Kayıt formu değişiklik
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Giriş formu değişiklik
  const handleGirisChange = e => {
    const { name, value } = e.target;
    setGirisForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Kayıt ol kısmı
  const handleKayitOl = e => {
    e.preventDefault();
    if (form.email && form.username && form.password && form.onay) {
      localStorage.setItem("kullaniciBilgi", JSON.stringify(form));
      setKayitBasarili(true);

      setTimeout(() => {
        setKayitBasarili(false);
        setGirisForm({
          username: form.username,
          password: form.password
        });
        solaGit();
      }, 1000);
      setForm({
        email: "",
        username: "",
        password: "",
        onay: false,
      });
    } else {
      setKayitBasarili(false);
      alert("Lütfen tüm alanları doldurduğunuzdan emin olun ve onay kutusunu işaretleyin.");
    }
  };

  // Giriş yap
  const handleGirisYap = e => {
    e.preventDefault();
    const kayitli = JSON.parse(localStorage.getItem("kullaniciBilgi"));
    if (
      kayitli &&
      girisForm.username === kayitli.username &&
      girisForm.password === kayitli.password
    ) {
      setGirisHata("");
      localStorage.setItem("girisYapildi", "true");
      navigate("/Hesap");
    } else {
      setGirisHata("Kullanıcı adınız veya şifreniz yanlış!");
    }
  };

  // Sağ ve sol kaydırma
  const sagaGit = () => {
    if (kutuRef.current && katmanRef.current) {
      kutuRef.current.style.transition = "margin-left 0.5s cubic-bezier(0.4,0,0.2,1)";
      katmanRef.current.style.transition = "margin-left 0.5s cubic-bezier(0.4,0,0.2,1)";
      kutuRef.current.style.marginLeft = "0";
      katmanRef.current.style.marginLeft = "100%";
    }
  };

  const solaGit = () => {
    if (kutuRef.current && katmanRef.current) {
      kutuRef.current.style.transition = "margin-left 0.5s cubic-bezier(0.4,0,0.2,1)";
      katmanRef.current.style.transition = "margin-left 0.5s cubic-bezier(0.4,0,0.2,1)";
      kutuRef.current.style.marginLeft = window.innerWidth > 769 ? "50%" : "20%";
      katmanRef.current.style.marginLeft = "0";
    }
  };

  //paper js animasyonu 
  useEffect(() => {
    if (tuvalRef.current) {
      paper.setup(tuvalRef.current);
      let canvasWidth, canvasHeight, canvasMiddleX, canvasMiddleY;
      let shapeGroup = new paper.Group();
      let positionArray = [];

      function getCanvasBounds() {
        canvasWidth = paper.view.size.width;
        canvasHeight = paper.view.size.height;
        canvasMiddleX = canvasWidth / 2;
        canvasMiddleY = canvasHeight / 2;
        let position1 = { x: (canvasMiddleX / 2) + 100, y: 100 };
        let position2 = { x: 200, y: canvasMiddleY };
        let position3 = { x: (canvasMiddleX - 50) + (canvasMiddleX / 2), y: 150 };
        let position4 = { x: 0, y: canvasMiddleY + 100 };
        let position5 = { x: canvasWidth - 130, y: canvasHeight - 75 };
        let position6 = { x: canvasMiddleX + 80, y: canvasHeight - 50 };
        let position7 = { x: canvasWidth + 60, y: canvasMiddleY - 50 };
        let position8 = { x: canvasMiddleX + 100, y: canvasMiddleY + 100 };
        positionArray = [position3, position2, position5, position4, position1, position6, position7, position8];
      }

      function initializeShapes() {
        getCanvasBounds();
        let shapePathData = [
          "M231,352l445-156L600,0L452,54L331,3L0,48L231,352",
          "M0,0l64,219L29,343l535,30L478,37l-133,4L0,0z",
          "M0,65l16,138l96,107l270-2L470,0L337,4L0,65z",
          "M333,0L0,94l64,219L29,437l570-151l-196-42L333,0",
          "M331.9,3.6l-331,45l231,304l445-156l-76-196l-148,54L331.9,3.6z",
          "M389,352l92-113l195-43l0,0l0,0L445,48l-80,1L122.7,0L0,275.2L162,297L389,352",
          "M 50 100 L 300 150 L 550 50 L 750 300 L 500 250 L 300 450 L 50 100",
          "M 700 350 L 500 350 L 700 500 L 400 400 L 200 450 L 250 350 L 100 300 L 150 50 L 350 100 L 250 150 L 450 150 L 400 50 L 550 150 L 350 250 L 650 150 L 650 50 L 700 150 L 600 250 L 750 250 L 650 300 L 700 350 "
        ];
        for (let i = 0; i < shapePathData.length; i++) {
          let headerShape = new paper.Path({
            strokeColor: "rgba(255, 255, 255, 0.5)",
            strokeWidth: 2,
            parent: shapeGroup,
          });
          headerShape.pathData = shapePathData[i];
          headerShape.scale(2);
          headerShape.position = positionArray[i];
        }
      }

      initializeShapes();

      paper.view.onFrame = function (event) {
        if (event.count % 4 === 0) {
          for (let i = 0; i < shapeGroup.children.length; i++) {
            if (i % 2 === 0) {
              shapeGroup.children[i].rotate(-0.1);
            } else {
              shapeGroup.children[i].rotate(0.1);
            }
          }
        }
      };

      paper.view.onResize = function () {
        getCanvasBounds();
        for (let i = 0; i < shapeGroup.children.length; i++) {
          shapeGroup.children[i].position = positionArray[i];
        }
        if (canvasWidth < 700) {
          shapeGroup.children[3].opacity = 0;
          shapeGroup.children[2].opacity = 0;
          shapeGroup.children[5].opacity = 0;
        } else {
          shapeGroup.children[3].opacity = 1;
          shapeGroup.children[2].opacity = 1;
          shapeGroup.children[5].opacity = 1;
        }
      };

      // paper.js animasyon sonu

      return () => {
        paper.project.clear();
      };
    }
  }, []);

  return (
    <div className="Oturum-arka">
      <canvas ref={tuvalRef} className="Oturum-tuval" />
      <div className="Oturum-arkaSag"></div>
      <div className="Oturum-arkaSol"></div>
      <div className="Oturum-kaydirKutu" ref={kutuRef}>
        <div className="Oturum-ustKatman" ref={katmanRef}>
          <div className="Oturum-sol">
            <div className="Oturum-icerik">
              <div className="Oturum-logo-tasarim">
                <img src={LogoRudemy} alt="logo" />
              </div>
              <h2>Kayıt Ol</h2>
              {kayitBasarili && (
                <div className="Oturum-basarili-bilgi">
                  Kayıt oluşturuldu!
                </div>
              )}
              <form onSubmit={handleKayitOl}>
                <div className="Oturum-formEleman Oturum-formYigit">
                  <label className="Oturum-label" htmlFor="Oturum-email">E-posta</label>
                  <input
                    className="Oturum-input"
                    id="Oturum-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="Oturum-formEleman Oturum-formYigit">
                  <label className="Oturum-label" htmlFor="Oturum-kullanici">Kullanıcı Adı</label>
                  <input
                    className="Oturum-input"
                    id="Oturum-kullanici"
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="Oturum-formEleman Oturum-formYigit">
                  <label className="Oturum-label" htmlFor="Oturum-sifre">Şifre</label>
                  <input
                    className="Oturum-input"
                    id="Oturum-sifre"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="Oturum-formEleman Oturum-formOnay">
                  <input
                    id="Oturum-onay"
                    type="checkbox"
                    className="Oturum-checkbox"
                    name="onay"
                    checked={form.onay}
                    onChange={handleChange}
                  />
                  <label htmlFor="Oturum-onay">
                    <a href="#">Hizmet Koşulları</a> ve <a href="#">Gizlilik Politikası</a>'nı kabul ediyorum
                  </label>
                </div>
                <div className="Oturum-formEleman Oturum-formGonder">
                  <button className="Oturum-kayitBtn" type="submit">Kayıt Ol</button>
                  <button className="Oturum-kayitBtn Oturum-pasif" type="button" onClick={solaGit}>Giriş Yap</button>
                  <Link className="Oturum-kayitBtn Oturum-pasif" to="/">
                    Geri Dön
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="Oturum-sag">
            <div className="Oturum-icerik">
              <div className="Oturum-logo-tasarim2">
                <img src={LogoRudemy} alt="logo" />
              </div>
              <h2>Giriş Yap</h2>
              <form onSubmit={handleGirisYap}>
                <div className="Oturum-formEleman Oturum-formYigit">
                  <label className="Oturum-label" htmlFor="Oturum-girisKullanici">Kullanıcı Adı</label>
                  <input
                    className="Oturum-input"
                    id="Oturum-girisKullanici"
                    type="text"
                    name="username"
                    value={girisForm.username}
                    onChange={handleGirisChange}
                  />
                </div>
                <div className="Oturum-formEleman Oturum-formYigit">
                  <label className="Oturum-label" htmlFor="Oturum-girisSifre">Şifre</label>
                  <input
                    className="Oturum-input"
                    id="Oturum-girisSifre"
                    type="password"
                    name="password"
                    value={girisForm.password}
                    onChange={handleGirisChange}
                  />
                </div>
                {girisHata && (
                  <div style={{ color: "red", marginBottom: "10px" }}>{girisHata}</div>
                )}
                <div className="Oturum-formEleman Oturum-formGonder">
                  <button className="Oturum-girisBtn" type="submit">Giriş Yap</button>
                  <button className="Oturum-girisBtn Oturum-pasif" type="button" onClick={sagaGit}>Kayıt Ol</button>
                  <Link className="Oturum-girisBtn Oturum-pasif" to="/">
                    Geri Dön
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oturum;