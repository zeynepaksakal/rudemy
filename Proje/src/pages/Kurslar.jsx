
import React from "react";
import './Kurslar.css';

import KurslarResimEnÜst from "../../src/assets/ArkaPlanGörsel.png";

import LogoRudemy from "../../../publicKurslarProfile/logo2.png";

import butunBolumler1 from "../../../publicKurslarCategory/GrafikTasarım.png";
import butunBolumler2 from "../../../publicKurslarCategory/Bilgisayar Programcılığı.png";
import butunBolumler3 from "../../../publicKurslarCategory/İç Mekan Tasarımı.png";
import butunBolumler4 from "../../../publicKurslarCategory/Aşçılık.png";
import butunBolumler5 from "../../../publicKurslarCategory/Uçak Teknolojisi.png";
import butunBolumler6 from "../../../publicKurslarCategory/Pastacaılık ve Ekmekçilik.png";
import butunBolumler7 from "../../../publicKurslarCategory/anestezi.png";
import butunBolumler8 from "../../../publicKurslarCategory/çocuk gelişimi.png";
import butunBolumler9 from "../../../publicKurslarCategory/ağız ve diş sağlığı.png";
import butunBolumler10 from "../../../publicKurslarCategory/radyoterapi.png";
import butunBolumler11 from "../../../publicKurslarCategory/odyometri.png";
import butunBolumler12 from "../../../publicKurslarCategory/diyaliz.png";

import Kurslarimiz1 from "../../../publicKurslarThumbnails/grafik tasarımı.png";
import Kurslarimiz2 from "../../../publicKurslarThumbnails/blgsyr.png";
import Kurslarimiz3 from "../../../publicKurslarThumbnails/iç mekan tasarımı.png";
import Kurslarimiz4 from "../../../publicKurslarThumbnails/aşçılıkyeni.png";
import Kurslarimiz5 from "../../../publicKurslarThumbnails/uçak teknolojisi.png";
import Kurslarimiz6 from "../../../publicKurslarThumbnails/pastacılık ve ekmekçilik.png";

import SaglikKurslar1 from "../../../publicKurslarSaglik/anestezi1.png";
import SaglikKurslar2 from "../../../publicKurslarSaglik/çocukgelişimi1.png";
import SaglikKurslar3 from "../../../publicKurslarSaglik/ağız ve diş sağlığı1.png";
import SaglikKurslar4 from "../../../publicKurslarSaglik/radyoterapi1.png";
import SaglikKurslar5 from "../../../publicKurslarSaglik/odyometri2.png";
import SaglikKurslar6 from "../../../publicKurslarSaglik/diyaliz1.png";


const App = () => {
  return (
    <div>
      {/* Bölüm Başlangıcı */}
      <section className="section-main">
        <div className="section-container">
          <div className="section-title">
            <ul className="section-list">
              <a href="" className="section-link">
                <img 
                  src= {KurslarResimEnÜst}
                  alt="Kategori Resmi"
                  className="category-image3"
                />
                <span className="category-title"></span>
              </a>
            </ul>
          </div>
        </div>
      </section>

      {/* Bölümler */}
      <section className="categories2">
        <div className="categories-container2">
          <div className="section-title2">
            <p className="categories-header2">
              <strong style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "40px" }}>
                Bütün Bölümlerin Kategorileri
              </strong>
            </p>
            <p className="categories-description2" style={{ fontFamily: "'Arial', sans-serif", fontSize: "20px" }}>
              Buradan Hangi Bölümle İlgili Kurs Paketi Satın Almak İstiyorsanız Seçiniz
            </p>
          </div>
          <ul className="category-list2">
            <li className="category-item2">
              <a href="#" className="category-link">
                <img
                  src={butunBolumler1}
                  alt="Grafik Tasarımı"
                  className="category-image2"
                />
                <span className="category-title2"><br /><br />Grafik Tasarımı</span>
              </a>
            </li>
            <li className="category-item2">
              <a href="#" className="category-link2">
                <img
                  src={butunBolumler2}
                  alt="Bilgisayar Programcılığı"
                  className="category-image2"
                />
                <span className="category-title2"><br /><br />Bilgisayar Programcılığı</span>
              </a>
            </li>
            <li className="category-item2">
              <a href="#" className="category-link2">
                <img
                  src={butunBolumler3}
                  alt="İç Mekan Tasarımı"
                  className="category-image2"
                />
                <span className="category-title2"><br /><br />İç Mekan Tasarımı</span>
              </a>
            </li>
            <li className="category-item2">
              <a href="#" className="category-link2">
                <img
                  src={butunBolumler4}
                  alt="Aşçılık"
                  className="category-image2"
                />
                <span className="category-title2"><br /><br />Aşçılık</span>
              </a>
            </li>
            <li className="category-item2">
              <a href="#" className="category-link2">
                <img
                  src={butunBolumler5}
                  alt="Uçak Teknolojisi"
                  className="category-image2"
                />
                <span className="category-title2"><br /><br />Uçak Teknolojisi</span>
              </a>
            </li>
            <li className="category-item2">
              <a href="#" className="category-link2">
                <img
                  src={butunBolumler6}
                  alt="Pastacılık ve Ekmekçilik"
                  className="category-image2"
                />
                <span className="category-title2"><br /><br />Pastacılık ve Ekmekçilik</span>
              </a>
            </li>
          </ul>
          <ul className="category-list2">
            <li className="category-item2">
              <a href="#" className="category-link2">
                <img
                  src={butunBolumler7}
                  alt="Anestezi"
                  className="category-image2"
                />
                <span className="category-title2"><br /><br />Anestezi</span>
              </a>
            </li>
            <li className="category-item2">
              <a href="#" className="category-link2">
                <img
                  src={butunBolumler8}
                  alt="Çocuk Gelişimi"
                  className="category-image2"
                />
                <span className="category-title2"><br /><br />Çocuk Gelişimi</span>
              </a>
            </li>
            <li className="category-item2">
              <a href="#" className="category-link2">
                <img
                  src={butunBolumler9}
                  alt="Ağız ve Diş Sağlığı"
                  className="category-image2"
                />
                <span className="category-title2"><br /><br />Ağız ve Diş Sağlığı</span>
              </a>
            </li>
            <li className="category-item2">
              <a href="#" className="category-link2">
                <img
                  src={butunBolumler10}
                  alt="Radyoterapi"
                  className="category-image2"
                />
                <span className="category-title2"><br /><br />Radyoterapi</span>
              </a>
            </li>
            <li className="category-item2">
              <a href="#" className="category-link2">
                <img
                  src={butunBolumler11}
                  alt="Odyometri"
                  className="category-image2"
                />
                <span className="category-title2"><br /><br />Odyometri</span>
              </a>
            </li>
            <li className="category-item2">
              <a href="#" className="category-link2">
                <img
                  src={butunBolumler12}
                  alt="Diyaliz"
                  className="category-image2"
                />
                <span className="category-title2"><br /><br />Diyaliz</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* Video Section Start */}
<div className="video2">
  <div className="kurslarimiz-title">
    <p>
        Kurslarımız
    </p>
  </div>
  <div className="container2">
    <div className="video-card2" onClick={() => window.location.href = "./GrafikKurs"}>
      <div className="thumbnail2">
        <img src={Kurslarimiz1} alt="Grafik Tasarım" />
      </div>
      <div className="content2">
        <div className="profile2">
          <span className="profile-name2"></span>
        </div>
        <div className="video-title2">Grafik Tasarım</div>
        <div className="profile2">
          <img src={LogoRudemy} alt="Profile" />
          <div className="fiyat2">
            <p>
              <s className="kurs-renk-ayar">399.99</s>&nbsp;199.99TL
            </p>
          </div>
        </div>
        <div className="video-stats2">Sorumlu Öğretmen</div>
        <p>Burcu Güldüren</p>
        <div className="video-stats2">
          <u>Paket İçeriği</u>
        </div>
        <div className="baslik2">
          <p>-Temel Tasarım Prensipleri</p>
          <p>-Dijital Tasarımlar</p>
          <p>-Sanat ve Tasarım Tarihi</p>
          <p>-Baskı ve Matbaa Teknikleri</p>
        </div>
      </div>
    </div>

    <div className="video-card2" onClick={() => window.location.href = "./BilgisayarKurs"}>
      <div className="thumbnail2">
        <img src={Kurslarimiz2} alt="Bilgisayar Programcılığı" />
      </div>
      <div className="content2">
        <div className="profile2">
          <span className="profile-name2"></span>
        </div>
        <div className="video-title2">Bilgisayar Programcılığı</div>
        <div className="profile2">
          <img src={LogoRudemy}  alt="Profile" />
          <div className="fiyat2">
            <p>
              <s className="kurs-renk-ayar">699.99</s>&nbsp;399.99TL
            </p>
          </div>
        </div>
        <div className="video-stats2">Sorumlu Öğretmen</div>
        <p>Abdullah Yavuz</p>
        <div className="video-stats2">
          <u>Paket İçeriği</u>
        </div>
        <div className="baslik2">
          <p>-Programlama Dilleri</p>
          <p>-Yazılım Geliştirme ve Yönetim</p>
          <p>-Web ve İnternet Teknolojileri</p>
          <p>-Veri Analizi ve İşleme</p>
        </div>
      </div>
    </div>

    <div className="video-card2" onClick={() => window.location.href = "./IcMekanKurs"}>
      <div className="thumbnail2">
        <img src={Kurslarimiz3} alt="İç Mekan Tasarımı" />
      </div>
      <div className="content2">
        <div className="profile2">
          <span className="profile-name2"></span>
        </div>
        <div className="video-title2">İç Mekan Tasarımı</div>
        <div className="profile2">
          <img src={LogoRudemy}  alt="Profile" />
          <div className="fiyat2">
            <p>
              <s className="kurs-renk-ayar">249.99</s>&nbsp;149.99TL
            </p>
          </div>
        </div>
        <div className="video-stats2">Sorumlu Öğretmen</div>
        <p>Canmert Demir</p>
        <div className="video-stats2">
          <u>Paket İçeriği</u>
        </div>
        <div className="baslik2">
          <p>-Tasarım Temelleri</p>
          <p>-Teknik Çizim ve Görselleştirme</p>
          <p>-Ergonomi ve İnsan-Mekan İlişkisi</p>
          <p>-Malzeme ve Yapı Bilgisi</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Video Section */}
<div className="video2">
  <div className="container2">
    {/* Aşçılık Card */}
    <div className="video-card2" onClick={() => window.location.href = "./AscilikKurs"}>
      <div className="thumbnail2">
        <img src={Kurslarimiz4} alt="Aşçılık" />
      </div>
      <div className="content2">
        <div className="profile2">
          <span className="profile-name2"></span>
        </div>
        <div className="video-title2">Aşçılık</div>
        <div className="profile2">
          <img src={LogoRudemy}  alt="Profile" />
          <div className="fiyat2">
            <p>
              <s className="kurs-renk-ayar">299.99</s>&nbsp;199.99TL
            </p>
          </div>
        </div>
        <div className="video-stats2">Sorumlu Öğretmen</div>
        <p>Tuna Tunç</p>
        <div className="video-stats2">
          <u>Paket İçeriği</u>
        </div>
        <div className="baslik2">
          <p>-Temel Mutfak Teknikleri</p>
          <p>-Ulusal ve Uluslararası Mutfaklar</p>
          <p>-Hijyen ve Sanitasyon</p>
          <p>-Makarnacılık ve Tatlı Hazırlama</p>
        </div>
      </div>
    </div>

    {/* Uçak Teknolojisi Card */}
    <div className="video-card2" onClick={() => window.location.href = "./UcakKurs"}>
      <div className="thumbnail2">
        <img src={Kurslarimiz5} alt="Uçak Teknolojisi" />
      </div>
      <div className="content2">
        <div className="profile2">
          <span className="profile-name2"></span>
        </div>
        <div className="video-title2">Uçak Teknolojisi</div>
        <div className="profile2">
          <img src={LogoRudemy}  alt="Profile" />
          <div className="fiyat2">
            <p>
              <s className="kurs-renk-ayar">499.99</s>&nbsp;339.99TL
            </p>
          </div>
        </div>
        <div className="video-stats2">Sorumlu Öğretmen</div>
        <p>Emre Erdoğan</p>
        <div className="video-stats2">
          <u>Paket İçeriği</u>
        </div>
        <div className="baslik2">
          <p>-Uçak Yapıları ve Malzemeleri</p>
          <p>-Uçak Bakım ve Onarımı</p>
          <p>-Motor Teknolojisi ve Bakımı</p>
          <p>-Uçuş Sistemleri ve Elektronik</p>
        </div>
      </div>
    </div>

    {/* Pastacılık ve Ekmekçilik Card */}
    <div className="video-card2" onClick={() => window.location.href = "./PastacilikKurs"}>
      <div className="thumbnail2">
        <img src={Kurslarimiz6} alt="Pastacılık ve Ekmekçilik" />
      </div>
      <div className="content2">
        <div className="profile2">
          <span className="profile-name2"></span>
        </div>
        <div className="video-title2">Pastacılık ve Ekmekçilik</div>
        <div className="profile2">
          <img src={LogoRudemy}  alt="Profile" />
          <div className="fiyat2">
            <p>
              <s className="kurs-renk-ayar">199.99</s>&nbsp;99.99TL
            </p>
          </div>
        </div>
        <div className="video-stats2">Sorumlu Öğretmen</div>
        <p>Atilla Duhan Yılmaz</p>
        <div className="video-stats2">
          <u>Paket İçeriği</u>
        </div>
        <div className="baslik2">
          <p>-Pastacılık Teknikleri</p>
          <p>-Beslenme İlkeleri</p>
          <p>-Hamur Teknikleri</p>
          <p>-Gıda Hijyeni ve Sanitasyonu</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Continue with additional sections as in the HTML */}
{/* Sağlık Bölümleri Section */}
<div className="video2">
  <div className="kurslarimiz-title">
    <p>
      <strong>
        <br />
        <u>Sağlık Bölümleri</u>
      </strong>
    </p>
  </div>
  <div className="container2">
    {/* Anestezi Card */}
    <div className="video-card2" onClick={() => window.location.href = "./AnesteziKurs"}>
      <div className="thumbnail2">
        <img src={SaglikKurslar1} alt="Anestezi" />
      </div>
      <div className="content2">
        <div className="profile2">
          <span className="profile-name2"></span>
        </div>
        <div className="video-title2">Anestezi</div>
        <div className="profile2">
          <img src={LogoRudemy} alt="Profile" />
          <div className="fiyat2">
            <p>
              <s className="kurs-renk-ayar">299.99</s>&nbsp;199.99TL
            </p>
          </div>
        </div>
        <div className="video-stats2">Sorumlu Öğretmen</div>
        <p>Berat Çağlar Öztürk</p>
        <div className="video-stats2">
          <u>Paket İçeriği</u>
        </div>
        <div className="baslik2">
          <p>-Temel Tıp Bilgisi</p>
          <p>-Klinik Uygulamalar</p>
          <p>-Mesleki ve Etik Bilgiler</p>
          <p>-Anesteziye Özel Bilgiler</p>
        </div>
      </div>
    </div>

    {/* Çocuk Gelişimi Card */}
    <div className="video-card2" onClick={() => window.location.href = "./CocukGelisimiKurs"}>
      <div className="thumbnail2">
        <img src={SaglikKurslar2}  alt="Çocuk Gelişimi" />
      </div>
      <div className="content2">
        <div className="profile2">
          <span className="profile-name2"></span>
        </div>
        <div className="video-title2">Çocuk Gelişimi</div>
        <div className="profile2">
          <img src={LogoRudemy} alt="Profile" />
          <div className="fiyat2">
            <p>
              <s className="kurs-renk-ayar">399.99</s>&nbsp;299.99TL
            </p>
          </div>
        </div>
        <div className="video-stats2">Sorumlu Öğretmen</div>
        <p>Elif Türel</p>
        <div className="video-stats2">
          <u>Paket İçeriği</u>
        </div>
        <div className="baslik2">
          <p>-Çocuk Gelişim Temelleri</p>
          <p>-Eğitim ve Öğretim Yöntemleri</p>
          <p>-Aile ve Çocuk İlişkileri</p>
          <p>-Sağlık ve Beslenme</p>
        </div>
      </div>
    </div>

    {/* Ağız ve Diş Sağlığı Card */}
    <div className="video-card2" onClick={() => window.location.href = "./AgizVeDisSagligiKurs"}>
      <div className="thumbnail2">
        <img src={SaglikKurslar3}  alt="Ağız ve Diş Sağlığı" />
      </div>
      <div className="content2">
        <div className="profile2">
          <span className="profile-name2"></span>
        </div>
        <div className="video-title2">Ağız ve Diş Sağlığı</div>
        <div className="profile2">
          <img src={LogoRudemy} alt="Profile" />
          <div className="fiyat2">
            <p>
              <s className="kurs-renk-ayar">349.99</s>&nbsp;199.99TL
            </p>
          </div>
        </div>
        <div className="video-stats2">Sorumlu Öğretmen</div>
        <p>Aybars Mustafa Doğan</p>
        <div className="video-stats2">
          <u>Paket İçeriği</u>
        </div>
        <div className="baslik2">
          <p>-Ekipman Kullanımı ve Teknikler</p>
          <p>-Hastayla İletişim ve Bakım</p>
          <p>-Temel Tıbbi Bilgiler</p>
          <p>-Ağız ve Diş Sağlığına Özgü Dersler</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Sağlık Bölümleri Additional Section */}
<div className="video2">
  <div className="container2" >
    {/* Radyoterapi Card */}
    <div className="video-card2" onClick={() => window.location.href = "./RadyoterapiKurs"}>
      <div className="thumbnail2">
        <img src={SaglikKurslar4}  alt="Radyoterapi" />
      </div>
      <div className="content2">
        <div className="profile2">
          <span className="profile-name2"></span>
        </div>
        <div className="video-title2">Radyoterapi</div>
        <div className="profile2">
          <img src={LogoRudemy} alt="Profile" />
          <div className="fiyat2">
            <p>
              <s className="kurs-renk-ayar">249.99</s>&nbsp;169.99TL
            </p>
          </div>
        </div>
        <div className="video-stats2">Sorumlu Öğretmen</div>
        <p>Enes Yalçın</p>
        <div className="video-stats2">
          <u>Paket İçeriği</u>
        </div>
        <div className="baslik2">
          <p>-Radyasyon Fiziği ve Teknolojisi</p>
          <p>-Tedavi Planlama ve Uygulama</p>
          <p>-Kanser Tedavisi ve Klinik Bilgiler</p>
          <p>-Sterilizasyon ve Radyasyon</p>
        </div>
      </div>
    </div>

    {/* Odyometri Card */}
    <div className="video-card2" onClick={() => window.location.href = "./OdyometriKurs"}>
      <div className="thumbnail2">
        <img src={SaglikKurslar5}  alt="Odyometri" />
      </div>
      <div className="content2">
        <div className="profile2">
          <span className="profile-name2"></span>
        </div>
        <div className="video-title2">Odyometri</div>
        <div className="profile2">
          <img src={LogoRudemy} alt="Profile" />
          <div className="fiyat2">
            <p>
              <s className="kurs-renk-ayar">199.99</s>&nbsp;139.99TL
            </p>
          </div>
        </div>
        <div className="video-stats2">Sorumlu Öğretmen</div>
        <p>Ege Mert Çelikel</p>
        <div className="video-stats2">
          <u>Paket İçeriği</u>
        </div>
        <div className="baslik2">
          <p>-Odyolojiye Özgü Bilgiler</p>
          <p>-Test ve Ölçüm Teknikleri</p>
          <p>-İşitme Cihazları ve Teknolojisi</p>
          <p>-Anotomi ve Fizyoloji</p>
        </div>
      </div>
    </div>

    {/* Diyaliz Card */}
    <div className="video-card2" onClick={() => window.location.href = "./DiyalizKurs"}>
      <div className="thumbnail2">
        <img src={SaglikKurslar6}  alt="Diyaliz" />
      </div>
      <div className="content2">
        <div className="profile2">
          <span className="profile-name2"></span>
        </div>
        <div className="video-title2">Diyaliz</div>
        <div className="profile2">
          <img src={LogoRudemy} alt="Profile" />
          <div className="fiyat2">
            <p>
              <s className="kurs-renk-ayar">299.99</s>&nbsp;229.99TL
            </p>
          </div>
        </div>
        <div className="video-stats2">Sorumlu Öğretmen</div>
        <p>Hamza Zübeyir Güneş</p>
        <div className="video-stats2">
          <u>Paket İçeriği</u>
        </div>
        <div className="baslik2">
          <p>-Diyaliz Süreci ve Teknolojisi</p>
          <p>-Hasta Bakımı ve Takibi</p>
          <p>-Acil Durum Yönetimi</p>
          <p>-Uygulamalı Eğitim ve Staj</p>
        </div>
      </div>
    </div>
  </div>
</div>
<br />
<br />

    </div>
  );
};

export default App;
