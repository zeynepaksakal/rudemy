// ...diğer importlar ve kodlar...
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo2.png";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [kullanici, setKullanici] = useState(null);
  const location = useLocation();
  const modalRef = useRef();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openSearchModal = () => {
    setIsSearchOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSearchModal = () => {
    setIsSearchOpen(false);
    setSearchTerm("");
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeSearchModal();
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  // Kullanıcı bilgisini localStorage'dan oku ve storage değişimini dinle
  useEffect(() => {
    const updateKullanici = () => {
      const kayitli = localStorage.getItem("kullaniciBilgi");
      if (kayitli) {
        setKullanici(JSON.parse(kayitli));
      } else {
        setKullanici(null);
      }
    };
    updateKullanici();
    window.addEventListener("storage", updateKullanici);
    return () => window.removeEventListener("storage", updateKullanici);
  }, []);

  const menuItems = [
    { name: "Anasayfa", href: "/" },
    { name: "Kurslar", href: "/Kurslar" },
    { name: "İletişim", href: "/Iletisim" }
  ];

  const searchItems = [
    ...menuItems,
    { name: "Hesabım", href: "/Hesap"},
    { name: "Hava Durumu", href: "/HavaDurumu"},
    { name: "Oturum", href: "/Oturum"}
  ];

  const filteredItems = searchItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            KIŞA ÖZEL - TÜM KURSLARDA <strong>%50 İNDİRİM</strong>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile" onClick={toggleMenu}>
              <i className="bi bi-list"></i>
            </div>
            <div className="header-left">
              <img src={logo} alt="Logo" />
            </div>
            <div className="header-center">
              <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
                <ul className="menu-list">
                  {menuItems.map((item, index) => (
                    <li className="menu-list-item" key={index}>
                      <Link
                        to={item.href}
                        className={`menu-link ${
                          location.pathname === item.href ? "active" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className={`header-right ${isSearchOpen ? "gizle" : ""}`}>
              <div className="header-right-links">
                <Link
                  to="/HavaDurumu"
                  className="header-account rounded-circle"
                  title="Hava Durumu"
                >
                  <i className="bi bi-cloud-sun"></i>
                </Link>
                <button onClick={openSearchModal} className="search-btn" >
                  <i className="bi bi-search"></i>
                </button>
                <Link to="/Hesap" className="header-account rounded-circle">
                  <i className="bi bi-person"></i>
                </Link>
                {/* Kullanıcı giriş yaptıysa kullanıcı adı yazıyor ama giriş yoksa giriş ikonu geri koyuluyor */}
                {kullanici && kullanici.username ? (
                  <span className="kullanici-adi">
                    {kullanici.username}
                  </span>
                ) : (
                  <Link
                    to="/Oturum"
                    className="OturumAcKismi"
                    title="Oturum Aç"
                  >
                    <FontAwesomeIcon icon={faRightToBracket} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="satir" id="arama-kapsayici">
          <div className="menu-arkaplan" ref={modalRef} style={{ backgroundColor: "#bbb" }}>
            <span className="kapat" onClick={closeSearchModal}>
              &times;
            </span>
            <h2>Arama Yapınız</h2>
            <input
              type="text"
              id="arama-girdisi"
              onChange={handleSearch}
              placeholder="Ara..."
              value={searchTerm}
            />
            <ul id="arama-menu">
              {filteredItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href} 
                    onClick={() => closeSearchModal()} 
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;