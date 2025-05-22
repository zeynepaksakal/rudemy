import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./HavaDurumu.css";

const ceviriTablosu = {
  "Clear": "Açık",
  "Partially cloudy": "Parçalı Bulutlu",
  "Overcast": "Kapalı",
  "Rain": "Yağmurlu",
  "Snow": "Karlı",
  "Fog": "Sisli",
  "Thunderstorm": "Gök Gürültülü Fırtına",
  "Cloudy": "Bulutlu",
  "Drizzle": "Çiseleme",
  "Rain, Partially cloudy": "Yağmur, Parçalı Bulutlu",
  "Rain, Overcast": "Yağmur, Kapalı",
  "Haze": "Puslu",
  "Windy": "Rüzgarlı",
  "Mostly cloudy": "Çoğunlukla Bulutlu",
  "Scattered clouds": "Dağınık Bulutlar",
  "Light rain": "Hafif Yağmur",
  "Heavy rain": "Şiddetli Yağmur",
  "Light snow": "Hafif Kar",
  "Heavy snow": "Yoğun Kar",
  "Showers": "Sağanak Yağış"
};

const turkceyeCevir = (durum) => {
  return ceviriTablosu[durum] || durum || "Bilinmiyor";
};

const formatTarihSaat = (datetimeStr) => {
  const tarih = new Date(datetimeStr);
  return tarih.toLocaleString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};

const HavaDurumu = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/T%C3%BCrkiye?unitGroup=metric&include=hours&key=NCW6W52VL7AT83UYTUH9AP32Q&contentType=csv`;

    fetch(url)
      .then(response => response.text())
      .then(data => {
        const parsedData = Papa.parse(data, { header: true });
        setWeatherData(parsedData.data.filter(row => row.datetime && row.temp));
        setLoading(false);
      })
      .catch(error => {
        console.error("Hata oluştu:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="weather-loading">Veriler yükleniyor...</div>
  }

  const goruntulenecekVeri = weatherData.slice(0, visibleCount);

  const handleButtonClick = () => {
    if (visibleCount < 24) {
      setVisibleCount(prev => Math.min(prev + 4, 24));
    } else {
      setVisibleCount(4); // başa döner
    }
  };

  return (
    <div className="weather-container">
      <h1 className="weather-title">⛅ Türkiye / İstanbul Saatlik Hava Durumu 🌞</h1>
      <div className="weather-table-container">
        {goruntulenecekVeri.map((hour, index) => (
          <div key={index} className="weather-row-card">
            <div className="weather-row">
              <div className="weather-column">
                <strong>Tarih ve Saat:</strong> {formatTarihSaat(hour.datetime)}
              </div>
              <div className="weather-column">
                <strong>Sıcaklık (°C):</strong> {hour.temp}
              </div>
              <div className="weather-column">
                <strong>Durum:</strong> {turkceyeCevir(hour.conditions)}
              </div>
              <div className="weather-column">
                <strong>Nem (%):</strong> {hour.humidity || "-"}
              </div>
              <div className="weather-column">
                <strong>Rüzgar (km/sa):</strong> {hour.windspeed || "-"}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="show-more-btn" onClick={handleButtonClick}>
          {visibleCount < 24 ? "Devamını Göster ▼" : "Kapat ▲"}
        </button>
      </div>
    </div>
  );
};

export default HavaDurumu;
