
import {
    SiFacebook,
    SiInstagram,
    SiTiktok,
    SiGoogle,
    SiYoutube,
    SiWordpress,
    SiWhatsapp,
    SiTelegram,
    SiDiscord,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaChartLine, FaUsers, FaBullhorn, FaStore, FaBriefcase, FaHandshake, FaRocket, FaAd, FaNewspaper } from "react-icons/fa";

export const logos = [
    // Negocio en el centro
    { Icon: FaStore, label: "Tu Negocio", size: 80, x: 0, y: 0, delay: 0, isCenter: true },
    
    // Empresas de publicidad digital alrededor
    { Icon: SiFacebook, label: "Facebook Ads", size: 60, x: 0, y: -160, delay: 0.2 },
    { Icon: SiGoogle, label: "Google Ads", size: 60, x: 140, y: -100, delay: 0.4 },
    { Icon: SiInstagram, label: "Instagram Ads", size: 60, x: 160, y: 0, delay: 0.6 },
    { Icon: SiTiktok, label: "TikTok Ads", size: 60, x: 140, y: 100, delay: 0.8 },
    { Icon: SiYoutube, label: "YouTube Ads", size: 60, x: 0, y: 160, delay: 1.0 },
    { Icon: FaXTwitter, label: "X (Twitter) Ads", size: 60, x: -140, y: 100, delay: 1.2 },
    { Icon: SiWordpress, label: "WordPress", size: 60, x: -160, y: 0, delay: 1.4 },
    { Icon: SiWhatsapp, label: "WhatsApp Ads", size: 60, x: -140, y: -100, delay: 1.6 },
    
    // Elementos de marketing digital
    { Icon: FaChartLine, label: "Analytics", size: 50, x: 100, y: -60, delay: 1.8 },
    { Icon: FaUsers, label: "Audiencia", size: 50, x: 100, y: 60, delay: 2.0 },
    { Icon: FaBullhorn, label: "Anuncios", size: 50, x: -100, y: 60, delay: 2.2 },
];