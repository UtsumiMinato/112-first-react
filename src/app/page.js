/*
 * ＠author 林彥佑 <newxmith@gmail.com>
 */

"use client";

import Link from "next/link";
import Image from "next/image";
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
import AutoSizeImage from "./components/AutoSizeImage"

export default function Home() {
  const [items, setItems] = useState([]); //預設items空陣列

  const tokenUrl =
    "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
  const apiUrl =
    "https://tdx.transportdata.tw/api/tourism/ScenicSpot/YunlinCounty";

  //頁面載入後會執行的程式 “useEffect”
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/items");
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-teal-600">
        <div className="container mx-auto">
          <Navbar fluid className="bg-teal-600">
            <NavbarBrand as={Link} href="/">
              <Image
                src="https://www.yuntech.edu.tw/images/website_png/Group_640.png"
                layout="intrinsic"
                width={396}
                height={44}
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

      <div className="sm:h-64 xl:h-80 2xl:h-96 ">
        <Carousel slideInterval={5000}>
          <Image
            layout="intrinsic"
            width={3000}
            height={2000}
            src="/banner/banner-1.jpg"
            alt="..."
          />
          <Image
            layout="intrinsic"
            width={3000}
            height={2000}
            src="/banner/banner-2.jpg"
            alt="..."
          />

          <Image
            layout="intrinsic"
            width={1300}
            height={868}
            src="/banner/banner-3.jpg"
            alt="由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869"
          />
          <Image
            layout="intrinsic"
            width={4329}
            height={2886}
            src="/banner/banner-5.jpg"
            alt="由 Mk2010 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=34143199"
          />
          <Image
            layout="intrinsic"
            width={945}
            height={630}
            src="/banner/banner-6.jpg"
            alt="由 Fcuk1203 - 自己的作品, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=17302330"
          />
        </Carousel>
      </div>

      <div className="bg-[#fff] py-16">
        <div className="container mx-auto grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <CustomCard item={item} key={index} />
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
