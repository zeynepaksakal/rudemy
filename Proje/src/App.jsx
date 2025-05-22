import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Kurslar from "./pages/Kurslar";
import Iletisim from "./pages/Iletisim";
import Account from "./pages/Account";
// Kurs paketleri
import GrafikKurs from "./paket/grafikKurs";
import BilgisayarKurs from "./paket/BilgisayarKurs";
import IcMekanKurs from "./paket/İcMekanKurs";
import AscilikKurs from "./paket/AscilikKurs";
import UcakKurs from "./paket/UcakKurs";
import PastacilikKurs from "./paket/PastacilikKurs";
import AnesteziKurs from "./paket/AnesteziKurs";
import CocukGelisimiKurs from "./paket/CocukGelisimiKurs";
import AgizVeDisSagligiKurs from "./paket/AgizVeDisSagligiKurs";
import RadyoterapiKurs from "./paket/RadyoterapiKurs";
import OdyometriKurs from "./paket/OdyometriKurs";
import DiyalizKurs from "./paket/DiyalizKurs";
// Hava durumu
import HavaDurumu from "./pages/HavaDurumu";
//Oturum Kısmı
import Oturum from "./pages/Oturum";
import './App.css';


function App() {
  return (
    <Router>
      <LayoutRouter />
    </Router>
  );
}

export default App;


function LayoutRouter() {
  const location = useLocation(); 
  const gizlenecekSayfalar = ["/Oturum"]; 
  const gizleHeaderFooter = !gizlenecekSayfalar.includes(location.pathname); 

  return (
    <>
      {gizleHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<BodyWithTitle />} />
        <Route path="/Kurslar" element={<KurslarWithTitle />} />
        <Route path="/Iletisim" element={<IletisimWithTitle />} />
        <Route path="/Hesap" element={<AccountWithTitle />} />
        <Route path="/GrafikKurs" element={<GrafikKursWithTitle />} />
        <Route path="/BilgisayarKurs" element={<BilgisayarKursWithTitle />} />
        <Route path="/IcMekanKurs" element={<IcMekanKursWithTitle />} />
        <Route path="/AscilikKurs" element={<AscilikKursWithTitle />} />
        <Route path="/UcakKurs" element={<UcakKursWithTitle />} />
        <Route path="/PastacilikKurs" element={<PastacilikKursWithTitle />} />
        <Route path="/AnesteziKurs" element={<AnesteziKursWithTitle />} />
        <Route path="/CocukGelisimiKurs" element={<CocukGelisimiKursWithTitle />} />
        <Route path="/AgizVeDisSagligiKurs" element={<AgizVeDisSagligiKursWithTitle />} />
        <Route path="/RadyoterapiKurs" element={<RadyoterapiKursWithTitle />} />
        <Route path="/OdyometriKurs" element={<OdyometriKursWithTitle />} />
        <Route path="/DiyalizKurs" element={<DiyalizKursWithTitle />} />
        <Route path="/HavaDurumu" element={<HavaDurumuWithTitle />} />
        <Route path="/Oturum" element={<OturumWithTitle />} />
      </Routes>
      {gizleHeaderFooter && <Footer />}
    </>
  );
}


// Anasayfa title
function BodyWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Anasayfa";
  }, []);
  return <Body />;
}

// Kurslar title
function KurslarWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurslar";
  }, []);
  return <Kurslar />;
}

// İletişim title
function IletisimWithTitle() {
  useEffect(() => {
    document.title = "Rudemy İletişim";
  }, []);
  return <Iletisim />;
}

// Hesap title
function AccountWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Hesap";
  }, []);
  return <Account />;
}

// Grafik kurs title
function GrafikKursWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurs Paketleri";
  }, []);
  return <GrafikKurs />;
}

// Bilgisayar kurs title
function BilgisayarKursWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurs Paketleri";
  }, []);
  return <BilgisayarKurs />;
}

// İç mekan kurs title
function IcMekanKursWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurs Paketleri";
  }, []);
  return <IcMekanKurs />;
}

// Ascilik kurs title
function AscilikKursWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurs Paketleri";
  }, []);
  return <AscilikKurs />;
}

// Uçak kurs title
function UcakKursWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurs Paketleri";
  }, []);
  return <UcakKurs />;
}

// Pastacılık kurs title
function PastacilikKursWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurs Paketleri";
  }, []);
  return <PastacilikKurs />;
}

// Anestezi kurs title
function AnesteziKursWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurs Paketleri";
  }, []);
  return <AnesteziKurs />;
}

// Çocuk gelişimi kurs title
function CocukGelisimiKursWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurs Paketleri";
  }, []);
  return <CocukGelisimiKurs />;
}

// Ağız ve diş sağlığı kurs title
function AgizVeDisSagligiKursWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurs Paketleri";
  }, []);
  return <AgizVeDisSagligiKurs />;
}

// Radyoterapi kurs title
function RadyoterapiKursWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurs Paketleri";
  }, []);
  return <RadyoterapiKurs />;
}

// Odyometri kurs title
function OdyometriKursWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurs Paketleri";
  }, []);
  return <OdyometriKurs />;
}

// Diyaliz kurs title
function DiyalizKursWithTitle() {
  useEffect(() => {
    document.title = "Rudemy Kurs Paketleri";
  }, []);
  return <DiyalizKurs />;
}

// Hava durumu title
function HavaDurumuWithTitle() {
  useEffect(() => {
    document.title = "Hava Durumu";
  }, []);
  return <HavaDurumu />;
}

// Oturum açma title
function OturumWithTitle() {
  useEffect(() => {
    document.title = "Oturum";
  }, []);
  return <Oturum />;
}
