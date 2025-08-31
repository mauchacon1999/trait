"use client";
import Script from "next/script";

const Landbot = () => {
    return (
        <Script
            src="/landbot.js"
            strategy="afterInteractive"
            onLoad={() => {
                console.log('Landbot script cargado');
            }}
            onError={(e) => {
                console.error('Error al cargar Landbot:', e);
            }}
        />
    )
}

export default Landbot;