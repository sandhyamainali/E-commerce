"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import  "bootstrap/dist/css/bootstrap.min.css"
import Bootstrap from "./Bootstrap";
import Header from "./Component/Header";
import { useEffect } from "react";
import { cartprovider } from "./CartContext";
import Footer from "./Component/Footer";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
useEffect(()=>{
  require ('bootstrap/dist/js/bootstrap.min.js')
})
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
       {/* <CartProvider>

       </CartProvider> */}
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
