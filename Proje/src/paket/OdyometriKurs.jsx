import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./KurslarPaket.css"; 

import Kurslarimiz1 from "../../../publicKurslarSaglik/odyometri2.png";

const OdyometriKurs = () => {
  const [aktifSekme, setAktifSekme] = useState("aciklama");
  const [odemeFormuGoster, setOdemeFormuGoster] = useState(false);

  const yorumlar = [
    {
      ad: "Ahmet Yılmaz",
      yorum: "İşitme testleri ve cihazlar hakkında detaylı bilgiler içeriyor!",
      puan: 5,
    },
    {
      ad: "Zeynep Demir",
      yorum: "Ölçüm teknikleri harika anlatılmış, daha fazla pratik olsa mükemmel olurdu!",
      puan: 4,
    },
  ];

  return (
    <div className="kurslar-paketi">
      <div className="konteyner">
        <div className="kurs-karti">
          <img
            src={Kurslarimiz1}
            alt="Odyometri"
            className="kurs-gorsel"
          />
          <div className="kurs-icerik">
            <h2 className="kurs-baslik">Odyometri</h2>
            <div className="fiyat">
              <s>199.99TL</s> <strong>139.99TL</strong>
            </div>
            <div className="ogretmen-bilgi">
              <span>Sorumlu Öğretmen:</span> <strong>Ege Mert Çelikel</strong>
            </div>

            <div className="paket-icerigi">
              <h4>Paket İçeriği</h4>
              <ul>
                <li>- Odyolojiye Özel Bilgiler</li>
                <li>- Test ve Ölçüm Teknikleri</li>
                <li>- İşitme Cihazları ve Teknolojileri</li>
                <li>- Anatomi ve Fizyoloji</li>
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
                      Odyometri kursunda işitme testleri ve ölçüm tekniklerini öğrenerek 
                      odyolojiye özel bilgileri keşfedeceksiniz. İşitme cihazları ve teknoloji 
                      konularında derinlemesine eğitim alarak anatomi ve fizyoloji bilgilerini geliştireceksiniz.
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

export default OdyometriKurs;
