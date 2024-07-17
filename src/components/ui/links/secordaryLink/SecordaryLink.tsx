"use client";

import clsx from "clsx";
import Link from "next/link";
import { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./SecordaryLink.module.css";

interface ISecordaryLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const SecordaryLink: FC<PropsWithChildren<ISecordaryLinkProps>> = ({
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




