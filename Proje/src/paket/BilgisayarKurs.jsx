import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./KurslarPaket.css"; 
import Kurslarimiz1 from "../../../publicKurslarThumbnails/blgsyr.png";

const BilgisayarKurs = () => {
  const [aktifSekme, setAktifSekme] = useState("aciklama");
  const [odemeFormuGoster, setOdemeFormuGoster] = useState(false);

  const yorumlar = [
    {
      ad: "Ahmet Yılmaz",
      yorum: "Gerçekten harika bir içerik! Temeller çok iyi anlatılmış.",
      puan: 5,
    },
    {
      ad: "Zeynep Demir",
      yorum: "İçerikler doyurucu, eğitmen çok açıklayıcı anlatıyor.",
      puan: 4,
    },
  ];

  return (
    <div className="kurslar-paketi">
      <div className="konteyner">
        <div className="kurs-karti">
          <img
            src={Kurslarimiz1}
            alt="Bilgisayar Programcılığı"
            className="kurs-gorsel"
          />
          <div className="kurs-icerik">
            <h2 className="kurs-baslik">Bilgisayar Programcılığı</h2>
            <div className="fiyat">
              <s>699.99TL</s> <strong>399.99TL</strong>
            </div>
            <div className="ogretmen-bilgi">
              <span>Sorumlu Öğretmen:</span> <strong>Abdullah Yavuz</strong>
            </div>

            <div className="paket-icerigi">
              <h4>Paket İçeriği</h4>
              <ul>
                <li>- Programlama Dilleri</li>
                <li>- Yazılım Geliştirme ve Yönetim</li>
                <li>- Web ve İnternet Teknolojileri</li>
                <li>- Veri Analizi ve İşleme</li>
              </ul>
            </div>

            <div className="sekme">
              <div className="sekme-listesi">
                <button
                  className={`sekme-dugme ${
                    aktifSekme === "aciklama" ? "aktif" : ""
                  }`}
                  onClick={() => setAktifSekme("aciklama")}
                >
                  Açıklama
                </button>
                <button
                  className={`sekme-dugme ${
                    aktifSekme === "yorumlar" ? "aktif" : ""
                  }`}
                  onClick={() => setAktifSekme("yorumlar")}
                >
                  Yorumlar
                </button>
              </div>

              <div className="sekme-icerik">
                {aktifSekme === "aciklama" && (
                  <div className="aciklama">
                    <p>
                      Bu bilgisayar programcılığı kursu ile programlama dillerini
                      öğrenecek, yazılım geliştirme süreçlerine hakim olacak ve
                      web teknolojilerini yakından tanıyacaksınız.
                    </p>
                  </div>
                )}

                {aktifSekme === "yorumlar" && (
                  <div className="yorumlar">
                    {yorumlar.map((yorum, index) => (
                      <div className="yorum-item" key={index}>
                        <div className="yorum-avatar">
                          <img
                            src={`https://i.pravatar.cc/150?img=${index + 5}`}
                            alt={yorum.ad}
                          />
                        </div>
                        <div className="yorum-icerik">
                          <strong>{yorum.ad}</strong>
                          <div className="yildizlar">
                            {"★".repeat(yorum.puan)}
                            {"☆".repeat(5 - yorum.puan)}
                          </div>
                          <p>{yorum.yorum}</p>
                        </div>
                      </div>
                    ))}

                    <form
                      className="yorum-formu"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <h4>Yorum Bırak</h4>
                      <input type="text" placeholder="Adınız" required />
                      <input type="email" placeholder="Email" required />
                      <textarea
                        rows="4"
                        placeholder="Yorumunuz"
                        required
                      ></textarea>
                      <button type="submit" className="btn">
                        Gönder
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>

            <div className="satin-al-kismi">
              <button
                className="btn satin-al-btn"
                onClick={() => setOdemeFormuGoster(!odemeFormuGoster)}
              >
                {odemeFormuGoster ? "Kapat" : "Satın Al"}
              </button>

              {odemeFormuGoster && (
                <div className="odeme-formu">
                  <h4>Ödeme Bilgileri</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Ad Soyad" required />
                    <input type="text" placeholder="Kart Numarası" required />
                    <div className="odeme-flex">
                      <input type="text" placeholder="SKT (AA/YY)" required />
                      <input type="text" placeholder="CVV" required />
                    </div>
                    <button type="submit" className="btn odeme-btn">
                      Ödemeyi Tamamla
                    </button>
                  </form>
                </div>
              )}
            </div>
<div className="Kurslar-geridonus-butonu">
              <Link to="/Kurslar">
              <button className="satin-al-btn">Geri Dön</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BilgisayarKurs;
