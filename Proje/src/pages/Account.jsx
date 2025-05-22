import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './Account.css';
import ProfilFoto from "../../../publicAccountProfile/profilephoto.png";

// Başlangıç form 
const baslangicForm = {
  email: "",
  kullaniciAdi: "",
  sifre: "",
  isim: "",
  soyisim: "",
  cinsiyet: "",
  telefon: "",
  dogumTarihi: "",
  okul: "",
  egitimDurumu: "",
  isDurumu: "",
  adres1: "",
  adres2: "",
  postaKodu: "",
  ulke: "",
  il: ""
};

const Hesap = () => {
  const [form, setForm] = useState(baslangicForm);
  const navigate = useNavigate();

  useEffect(() => {
    // Oturumdan gelen kullanıcı bilgileri çekiyor
    const kayitli = localStorage.getItem("kullaniciBilgi");
    if (kayitli) {
      const kullanici = JSON.parse(kayitli);
      setForm(prev => ({
        ...prev,
        email: kullanici.email || kullanici.eposta || "",
        kullaniciAdi: kullanici.username || kullanici.kullaniciAdi || "",
        sifre: kullanici.password || kullanici.sifre || "",
      }));
    }
  }, []);

  const degisiklikYakala = e => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const kaydet = e => {
    e.preventDefault();
    localStorage.setItem("kullaniciBilgi", JSON.stringify(form));
    alert("Bilgiler kaydedildi!");
  };

  const sifirla = () => {
    setForm(baslangicForm);
    localStorage.removeItem("kullaniciBilgi");
  };

  const cikisYap = () => {
    localStorage.removeItem("kullaniciBilgi");
    setForm(baslangicForm);
    navigate("/");
    window.dispatchEvent(new Event("storage")); 
  };

  return (
    <div style={{ backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className="custom-wrapper">
        <form id="form" className="d-flex w-100 flex-wrap" onSubmit={kaydet} onReset={sifirla}>
          {/* Sol panel kısmı */}
          <div className="d-flex justify-content-md-start justify-content-center w-100 flex-column align-items-center">
            <h1 className="text-right">Profil Ayarları</h1>
          </div>
          <div className="custom-left  d-flex justify-content-md-start justify-content-center w-100 flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
              <img
                className="custom-profile-img rounded-circle"
                src={ProfilFoto}
                alt="profil"
                id="profilepht"
              />
              <label htmlFor="profilephotoinp" className="custom-photo-label">
                Dosya Seç
              </label>
              <input
                className="custom-photo-input"
                type="file"
                id="profilephotoinp"
                accept="image/*"
              />
              <button
                type="button"
                onClick={cikisYap}
                className="custom-logout btn btn-danger mt-3"
              >
                Çıkış Yap
              </button>
            </div>
          </div>

          {/* Sağ kısım */}
          <div className="custom-right">
            <div className="custom-inner p-3 py-4">
              {/* Form kısmı */}
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="custom-label">İsim</label>
                  <input id="isim" name="isim" type="text" className="form-control" placeholder="İsim" value={form.isim} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-6">
                  <label className="custom-label">Soyisim</label>
                  <input id="soyisim" name="soyisim" type="text" className="form-control" placeholder="Soyisim" value={form.soyisim} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-12">
                  <label className="custom-label">Cinsiyet</label>
                  <input id="cinsiyet" name="cinsiyet" type="text" className="form-control" placeholder="Cinsiyetinizi Giriniz" value={form.cinsiyet} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-12">
                  <label className="custom-label">Telefon Numarası</label>
                  <input id="telefon" name="telefon" type="text" className="form-control" placeholder="Telefon Numarası Giriniz" value={form.telefon} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-12">
                  <label className="custom-label">Kullanıcı Adı</label>
                  <input id="kullaniciAdi" name="kullaniciAdi" type="text" className="form-control" placeholder="Kullanıcı Adı" value={form.kullaniciAdi} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-12">
                  <label className="custom-label">Email Adresi</label>
                  <input id="email" name="email" type="text" className="form-control" placeholder="Email Giriniz" value={form.email} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-12">
                  <label className="custom-label">Şifre</label>
                  <input id="sifre" name="sifre" type="password" className="form-control" placeholder="Şifrenizi Giriniz" value={form.sifre} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-12">
                  <label className="custom-label">Doğum Tarihi</label>
                  <input id="dogumTarihi" name="dogumTarihi" type="date" className="form-control" value={form.dogumTarihi} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-12">
                  <label className="custom-label">Okul</label>
                  <input id="okul" name="okul" type="text" className="form-control" placeholder="Okulunuz Giriniz" value={form.okul} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-12">
                  <label className="custom-label">Eğitim Durumu</label>
                  <input id="egitimDurumu" name="egitimDurumu" type="text" className="form-control" placeholder="Eğitim Durumu Giriniz" value={form.egitimDurumu} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-12">
                  <label className="custom-label">İş Durumu</label>
                  <input id="isDurumu" name="isDurumu" type="text" className="form-control" placeholder="İş Durumu Giriniz" value={form.isDurumu} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-12">
                  <label className="custom-label">Adres Çubuğu 1</label>
                  <input id="adres1" name="adres1" type="text" className="form-control" placeholder="Adres Giriniz" value={form.adres1} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-12">
                  <label className="custom-label">Adres Çubuğu 2</label>
                  <input id="adres2" name="adres2" type="text" className="form-control" placeholder="Adres Giriniz" value={form.adres2} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-12">
                  <label className="custom-label">Posta Kodu</label>
                  <input id="postaKodu" name="postaKodu" type="text" className="form-control" placeholder="Posta Kodu Giriniz" value={form.postaKodu} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-6">
                  <label className="custom-label">Ülke</label>
                  <input id="ulke" name="ulke" type="text" className="form-control" placeholder="Ülke" value={form.ulke} onChange={degisiklikYakala} />
                </div>
                <div className="col-md-6">
                  <label className="custom-label">İl/İlçe</label>
                  <input id="il" name="il" type="text" className="form-control" placeholder="İl/İlçe" value={form.il} onChange={degisiklikYakala} />
                </div>
              </div>
              <div className="button-group">
                <button className="btn btn-primary profile-button" type="submit">Kaydet</button>
                <button className="btn btn-danger profile-button" type="reset">Reset</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hesap;