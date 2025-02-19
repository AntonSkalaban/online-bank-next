"use client";
import { FC, MouseEvent, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Checkmark from "assets/svg/checkmark.svg";
import { useClickOutside } from "hooks/useClickOutside";

import { SelectProps } from "./types";
import "./style.scss";

export const Select: FC<SelectProps> = ({ options, paramsName }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const ref = useClickOutside(closeDropdown);

  const [isOpen, setIsOpen] = useState(false);

  const selectValue = searchParams?.get(paramsName);
  const selectOption = options.find((o) => selectValue === o.value);

  const toggleDropdown = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleClick = (value: string) => () => {
    const params = new URLSearchParams(searchParams?.toString());

    params.set(paramsName, value);

    replace(`${pathname}?${params.toString()}`);
    closeDropdown();
  };

  return (
    <div className="select" ref={ref}>
      <details
        className="select__header"
        open={isOpen}
        onClick={toggleDropdown}
      >
        <summary className="select__summary">
          <span className="select__span">
            {selectOption?.content}
            <Image
              src={Checkmark}
              className="select__arrow"
              alt="select-checkmark"
            />
          </span>
        </summary>
      </details>

      <div role="definition" className="select__body">
        <ul className="select__options">
          {options.map(({ content, value }) => (
            <li
              key={value}
              className={`select__option ${selectOption?.value === value ? "select__option_select" : ""} body-text body-big`}
              onClick={handleClick(value)}
            >
              {content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
