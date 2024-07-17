'use client'
import NavLink from "@/components/ui/links/navLink/NavLink";
import { PrimaryLink } from "@/components/ui/links/primaryLink/PrimaryLink";
import { SecordaryLink } from "@/components/ui/links/secordaryLink/SecordaryLink";
import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => {

  return (
    <header className={styles.header} >
      <Link className={styles.link} href={"/"}>Главная</Link>
      <Link className={styles.link} href={"/reviews"}>Отзывы</Link>
      <Link className={styles.link} href={"/faq"}>FAQ</Link>
      <Link className={styles.link} href={"/products"}>Продукты</Link>
			 <NavLink href={"/"}>Главная</NavLink>
			 <PrimaryLink href={"/"}>ПРОСТО ЛИНК</PrimaryLink>
			 <SecordaryLink  href={"/"}>ПРОСТО ЛИНК</SecordaryLink>
    </header>
  );
};
