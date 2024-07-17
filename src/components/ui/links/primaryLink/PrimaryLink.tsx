"use client";

import clsx from "clsx";
import Link from "next/link";
import { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./PrimaryLink.module.css";

interface IPrimaryLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const PrimaryLink: FC<PropsWithChildren<IPrimaryLinkProps>> = ({
  children,
  className,
  href,
  ...rest
}) => {

  return (
    <Link
      href={href}
      className={clsx(styles.link, className)}
      {...rest}
    >
      {children}
    </Link>
  );
};






