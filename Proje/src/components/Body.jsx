import React from "react";
import '../App.css'; 

import slider1 from "../assets/slider1.png"; 
import slider2 from "../assets/slider2.png"; 
import slider3 from "../assets/slider3.png"; 

import category1 from "../assets/aviation_technology_100x100.png"; 
import category2 from "../assets/bakery_pastry_100x100.png"; 
import category3 from "../assets/computer_programming_100x100.png"; 
import category4 from "../assets/culinary_arts_105x105.png"; 
import category5 from "../assets/graphic_design_100x100.png"; 
import category6 from "../assets/interior_design_100x100.png"; 

import thumbnail1 from "../../../publicThumbnail/aviation_video_cover_300x180.png";
import thumbnail2 from "../../../publicThumbnail/computer_programming_video_cover_300x180.png";
import thumbnail3 from "../../../publicThumbnail/culinary_video_cover_300x180.png";
import thumbnail4 from "../../../publicThumbnail/interior_design_video_cover_ultra_300x180.png";
import thumbnail5 from "../../../publicThumbnail/pastry_baking_video_cover_300x180.png";
import thumbnail6 from "../../../publicThumbnail/web_design_video_cover_ultra_300x180.png";
import thumbnail7 from "../../../publicThumbnail/web_design_video_cover_ultra_new_300x180.png";

import profile1 from "../../../publicProfile/abstract_profile_40x40.png";
import profile2 from "../../../publicProfile/different_male_profile_40x40.png";
import profile3 from "../../../publicProfile/new_man_autumn_profile_40x40.png";
import profile4 from "../../../publicProfile/new_man_profile_40x40.png";
import profile5 from "../../../publicProfile/new_man_profile_40x40_v2.png";
import profile6 from "../../../publicProfile/new_woman_profile_40x40_v2.png";
import profile7 from "../../../publicProfile/newest_man_profile_40x40.png";
import profile8 from "../../../publicProfile/profile_1_40x40.png";
import profile9 from "../../../publicProfile/recent_man_profile_40x40.png";



const Body = () => {
  return (
    <div>
      {/* Slider Section */}
      <div className="container" id="slider123" style={{ position: "relative", top: "15px" }}>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slider1} alt="Logo" className="d-block w-100"  />
              <div className="carousel-caption d-none d-md-block">
                <h4>Rudemy İle</h4>
                <h6>Başarı bir yolculuktur, bir varış noktası değil.</h6>
              </div>
            </div>
            <div className="carousel-item">
            <img src={slider2} alt="Logo" className="d-block w-100"  />
              <div className="carousel-caption d-none d-md-block">
                <h4>Rudemy Sayesinde</h4>
                <h6>Mağlubiyete uğrayınca ümitsizliğe kapılma, her başarısızlıkta bir zafer arzusu yatar.</h6>
              </div>
            </div>
            <div className="carousel-item">
            <img src={slider3} alt="Logo" className="d-block w-100"  />
              <div className="carousel-caption d-none d-md-block">
                <h4>Rudemy Önderliğinde</h4>
                <h6>İyi bir başlangıç, yarı yarıya başarı demektir.</h6>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <div className="section-title">
            <p className="kategoribaslik">
              <strong style={{ fontFamily: "'Times New Roman', Times, serif" }}>Bütün Kategoriler</strong>
            </p>
            <p>Buradan Bütün Kategorileri görebilirsiniz</p>
          </div>
          <ul className="category-list">
            <li className="category-item">
              <a href="#">
                <img src={category5} alt="" className="category-images" />
                <span className="category-title"><br /><br />Grafik Tasarımı</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
              <img src={category3} alt="" className="category-images" />
                <span className="category-title"><br /><br />Bilgisayar Programcılığı</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
              <img src={category6} alt="" className="category-images" />
                <span className="category-title"><br /><br />İç Mekan Tasarımı</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
              <img src={category4} alt="" className="category-images" />
                <span className="category-title"><br /><br />Aşçılık</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
              <img src={category1} alt="" className="category-images" />
                <span className="category-title"><br /><br />Uçak Teknolojisi</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
              <img src={category2} alt="" className="category-images" />
                <span className="category-title"><br /><br />Pastacılık ve Ekmekçilik</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Featured Section */}
      <section className="önecikanlar-single">
        <div className="container">
          <div className="önecikanlar-wrapper">
            <p>
              <strong>
                Öne Çıkanlar
              </strong>
            </p>
          </div>
        </div>
      </section>


      <div style={{marginBottom: "250px"}}>
      {/* Videos Section */}
      <div className="video">
        <div className="container">
          <div className="video-card">
            <div className="thumbnail">
              <img src={thumbnail1} alt="Video Thumbnail" />
            </div>
            <div className="content">
              <div className="profile">
                <img src={profile1} alt="Profile" />
                <span className="profile-name">Sadık Turan</span>
              </div>
              <div className="video-title">JavaScript Bootcamp(Html,Css,Js)</div>
              <div className="video-stats">198.245 İzlenme &bull; 3 saat önce</div>
            </div>
          </div>

          <div className="video-card">
            <div className="thumbnail">
            <img src={thumbnail2} alt="Video Thumbnail" />
            </div>
            <div className="content">
              <div className="profile">
                <img src={profile2} alt="Profile" />
                <span className="profile-name">ÜniStart</span>
              </div>
              <div className="video-title">Uçak Teknolojisi Bölümü Hakkında Neler Göreceksiniz?</div>
              <div className="video-stats">13.700 İzlenme &bull; 27 dakika önce</div>
            </div>
          </div>

          <div className="video-card">
            <div className="thumbnail">
              <img src={thumbnail3} alt="Video Thumbnail" />
            </div>
            <div className="content">
              <div className="profile">
                <img src={profile3} alt="Profile" />
                <span className="profile-name">Hoca Zade</span>
              </div>
              <div className="video-title">Lüks Mekan/Restoranlarda Nasıl Sunum Yapılır?</div>
              <div className="video-stats">205.041 İzlenme &bull; 6 gün önce</div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="video-card">
            <div className="thumbnail">
            <img src={thumbnail4} alt="Video Thumbnail" />
            </div>
            <div className="content">
              <div className="profile">
                <img src={profile6} alt="Profile" />
                <span className="profile-name">Tuğba Bağcı</span>
              </div>
              <div className="video-title">Neden İç Mekan Tasarımı Seçmelisiniz?</div>
              <div className="video-stats">81.718 İzlenme &bull; 9 saat önce</div>
            </div>
          </div>

          <div className="video-card">
            <div className="thumbnail">
            <img src={thumbnail5} alt="Video Thumbnail" />
            </div>
            <div className="content">
              <div className="profile">
                <img src={profile5} alt="Profile" />
                <span className="profile-name">Onur Naci Öztürkler</span>
              </div>
              <div className="video-title">Photoshop Nasıl Daha Efektif Kullanılır?</div>
              <div className="video-stats">515.763 İzlenme &bull; 2 hafta önce</div>
            </div>
          </div>

          <div className="video-card">
            <div className="thumbnail">
            <img src={thumbnail6} alt="Video Thumbnail" />
            </div>
            <div className="content">
              <div className="profile">
                <img src={profile4} alt="Profile" />
                <span className="profile-name">Enes Bayram</span>
              </div>
              <div className="video-title">Hangi Veri Tabanını Öğrenmeliyim?(Java,Node.js,Php)</div>
              <div className="video-stats">385.255 İzlenme &bull; 3 ay önce</div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="video-card">
            <div className="thumbnail">
            <img src={thumbnail7} alt="Video Thumbnail" />
            </div>
            <div className="content">
              <div className="profile">
                <img src={profile7} alt="Profile" />
                <span className="profile-name">Niyazi Etik</span>
              </div>
              <div className="video-title">Tasarım Yapmadan Önce Nelere Dikkat Etmeliyiz?</div>
              <div className="video-stats">90.560 İzlenme &bull; 1 ay önce</div>
            </div>
          </div>

          <div className="video-card">
            <div className="thumbnail">
            <img src={thumbnail5} alt="Video Thumbnail" />
            </div>
            <div className="content">
              <div className="profile">
                <img src={profile8} alt="Profile" />
                <span className="profile-name">Ankara Tasarım Akademi</span>
              </div>
              <div className="video-title">İç Mekan Tasarımında İlk Öncelikler Nelerdir?</div>
              <div className="video-stats">27.742 İzlenme &bull; 7 saat önce</div>
            </div>
          </div>

          <div className="video-card">
            <div className="thumbnail">
            <img src={thumbnail3} alt="Video Thumbnail" />
            </div>
            <div className="content">
              <div className="profile">
                <img src={profile9} alt="Profile" />
                <span className="profile-name">Hoca Mehmet</span>
              </div>
              <div className="video-title">Pastacılık ve Ekmekçilik Hakkında Bilgiler</div>
              <div className="video-stats">288.837 İzlenme &bull; 3 hafta önce</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    </div>

    
  );
};

export default Body;
