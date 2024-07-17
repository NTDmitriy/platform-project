"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./NavLink.module.css";

interface INavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const NavLink: FC<PropsWithChildren<INavLinkProps>> = ({
  children,
  className,
  href,
  ...rest
}) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={clsx(styles.link, isActive ? styles.active : "", className)}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;


