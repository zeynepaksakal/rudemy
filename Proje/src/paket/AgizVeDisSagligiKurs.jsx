import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./KurslarPaket.css"; 

import Kurslarimiz1 from "../../../publicKurslarSaglik/ağız ve diş sağlığı1.png";

const AgizVeDisSagligiKurs = () => {
  const [aktifSekme, setAktifSekme] = useState("aciklama");
  const [odemeFormuGoster, setOdemeFormuGoster] = useState(false);

  const yorumlar = [
    {
      ad: "Ahmet Yılmaz",
      yorum: "Diş sağlığı konusunda çok kapsamlı ve faydalı bir eğitim!",
      puan: 5,
    },
    {
      ad: "Zeynep Demir",
      yorum: "Hasta iletişimi bölümü çok iyiydi, keşke daha fazla pratik olsa!",
      puan: 4,
    },
  ];

  return (
    <div className="kurslar-paketi">
      <div className="konteyner">
        <div className="kurs-karti">
          <img
            src={Kurslarimiz1}
            alt="Ağız ve Diş Sağlığı"
            className="kurs-gorsel"
          />
          <div className="kurs-icerik">
            <h2 className="kurs-baslik">Ağız ve Diş Sağlığı</h2>
            <div className="fiyat">
              <s>349.99TL</s> <strong>199.99TL</strong>
            </div>
            <div className="ogretmen-bilgi">
              <span>Sorumlu Öğretmen:</span> <strong>Aybars Mustafa Doğan</strong>
            </div>

            <div className="paket-icerigi">
              <h4>Paket İçeriği</h4>
              <ul>
                <li>- Ekipman Kullanımı ve Teknikleri</li>
                <li>- Hasta İletişimi ve Bakımı</li>
                <li>- Temel Tıbbi Bilgiler</li>
                <li>- Ağız ve Diş Sağlığına Özel Dersler</li>
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
                      Ağız ve diş sağlığı kursunda ekipman kullanımı, hasta iletişimi ve temel tıbbi bilgileri öğreneceksiniz. Diş sağlığına özel derslerle bilgi birikiminizi artıracaksınız.
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

export default AgizVeDisSagligiKurs;
