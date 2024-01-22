"use client";

import { navbar } from "./style.css";
import { PropsWithChildren, ReactNode, useId } from "react";

interface Item extends React.HTMLProps<HTMLInputElement> {
  icon: ReactNode;
}

interface NavProps {
  items: Item[];
}

export const Nav = ({ children, items }: PropsWithChildren<NavProps>) => {
  const id = useId();
  return (
    <div>
      {children}
      <nav className={navbar}>
        {items.map(({ icon, type = "button", ...rest }, index) => {
          return (
            <li key={index}>
              <label htmlFor={`${id}-${index}`}>{icon}</label>
              <input id={`${id}-${index}`} type={type} {...rest} />
            </li>
          );
        })}
      </nav>
    </div>
  );
};
