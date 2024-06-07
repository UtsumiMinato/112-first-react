/*
 * ＠author 林彥佑 <newxmith@gmail.com>
 */

'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  Carousel,
} from "flowbite-react";

import CustomCard from "./components/Card";

export default function Home() {
  const [items, setItems] = setState([]); //預設items空陣列

  const tokenUrl = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
  const apiUrl = "https://tdx.transportdata.tw/api/tourism/ScenicSpot/YunlinCounty";

  //頁面載入後會執行的程式 “useEffect”
  useEffect(() => {
    const getToken = async()=>{
      const clientId = process.env.TDX_CLIENT_ID;
      const clientSecret = process.env.TDX_CLIENT_SECRET;
  
      const tokenParams = new URLSearchParams();
      tokenParams.append("grant_type", "client_credentials");
      tokenParams.append("client_id", clientId);
      tokenParams.append("client_secret", clientSecret);
  
      const tokenResponse = await fetch(
        tokenUrl,
        {
          method: "post",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
          body: tokenParams.toString(),
          // タヒ
        });
    }
  }, []);

  // const items = [
  //   { cover: "./banner/banner-3.jpg",
  //     name: "北港朝天宮",
  //     description: "北港朝天宮（台文：Pak Káng Tiâu Thian Keng），俗稱北港媽（台文：Pak Káng Má），當地人稱媽祖宮、媽祖廟（台文：Má Chó͘ keng），舊稱為天后宮。是一座位在臺灣雲林縣北港鎮光民里的媽祖廟，主祀天上聖母媽祖。",
  //   },
  //   { cover: "./banner/banner-2.jpg",
  //     name: "臺米菜飯",
  //     description: "就賣吃的，不然我也不知道賣什麼的，看圖片應該看得出來吧，都有菜單了，還有燈籠也有寫，應該沒有這麼難理解吧，不要看到旁邊那個看起來像是電影廣告看板的東西以為是電影院嘿，再補一點字好了，旁邊那個藍色的窗戶是好看的，點餐的在圖片外面的右邊。",
  //   },
  //   { cover: "./banner/banner-6.jpg",
  //     name: "西螺大橋",
  //     description: "西螺大橋是台灣公路橋梁，前身在日治時期稱濁水溪大橋[5]，位於彰化縣與雲林縣之間，橫跨濁水溪下游，以華倫式桁架橋設計，連接北端之溪州鄉、南端之西螺鎮二地的交通，西螺大橋是僅次於美國舊金山金門大橋的世界第二大橋，也是當時全台灣最長的橋梁，被譽為「遠東第一大橋」。",
  //   },
  // ];

  return (
    <>
      <div className="bg-slate-500">
        <div className="container mx-auto">
          <Navbar fluid className="bg-slate-500">
            <NavbarBrand as={Link} href="/">
              <img
                src="https://www.yuntech.edu.tw/images/website_png/Group_640.png"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite React Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white text-slate-300">
                緬北旅遊網
              </span>{" "}
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink className="text-slate-300" href="#">
                <span className="hover:text-emerald-200 px-4 py-2">景點</span>
              </NavbarLink>
              <NavbarLink className="text-slate-300" as={Link} href="#">
                <span className="hover:text-emerald-200 px-4 py-2">交通</span>
              </NavbarLink>
              <NavbarLink className="text-slate-300" href="#">
                <span className="hover:text-emerald-200 px-4 py-2">
                  關於我們
                </span>
              </NavbarLink>
            </NavbarCollapse>
          </Navbar>
        </div>
      </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img src="./banner/banner-1.jpg" alt="..." />
          <img src="./banner/banner-2.jpg" alt="..." />
          <img
            src="./banner/banner-3.jpg"
            alt="由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869"
          />
          <img
            src="./banner/banner-5.jpg"
            alt="由 Mk2010 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=34143199"
          />
          <img
            src="./banner/banner-6.jpg"
            alt="由 Fcuk1203 - 自己的作品, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=17302330"
          />
        </Carousel>
      </div>

      <div className="bg-[#fff] py-16">
        <div className="container mx-auto grid grid-cols-4 gap-4">
          {items.map((item) => (
            <CustomCard item={item} />
          ))}
        </div>
      </div>

      <Footer container>
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
    </>
  );
}
