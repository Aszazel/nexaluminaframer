import type { NextPage } from "next";
import { useState } from "react";

const Desktop: NextPage = () => {
  const [inputsSearchValue, setInputsSearchValue] = useState();
  return (
    <div className="relative bg-neutral-100 w-full h-[995px] overflow-hidden text-left text-53xl text-neutral-100 font-block-quote">
      <header className="absolute top-[0px] left-[0px] bg-neutral-100 box-border w-[1280px] flex flex-row items-center justify-between py-[26px] px-[140px] border-b-[1px] border-solid border-neutral-90">
        <div className="shrink-0 flex flex-row items-center justify-start">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-21xl leading-[48px] font-bold font-helvetica text-neutral-0 text-center inline-block">
            BEDROK
          </button>
        </div>
        <nav className="m-0 shrink-0 flex flex-row items-center justify-end gap-[20px] text-right text-lg text-neutral-10 font-block-quote">
          <a className="[text-decoration:none] relative leading-[24px] capitalize text-[inherit]">
            Home
          </a>
          <a className="[text-decoration:none] relative leading-[24px] capitalize text-[inherit]">
            About
          </a>
          <a className="[text-decoration:none] relative leading-[24px] capitalize text-[inherit]">
            Contact
          </a>
          <div className="relative bg-neutral-100 rounded-81xl box-border w-[189px] h-8 flex flex-row items-center justify-start border-[1px] border-solid border-neutral-80">
            <input
              className="[outline:none] font-block-quote text-base py-3.5 px-4 text-neutral-40 [border:none] w-full h-full [background:transparent]"
              placeholder="Search"
              type="text"
              value={inputsSearchValue}
              onChange={(event) => setInputsSearchValue(event.target.value)}
            />
            <img
              className="absolute w-4 h-4 overflow-hidden shrink-0 object-cover z-[2] left-[16px] top-[8px]"
              alt=""
              src="/16search@2x.png"
            />
          </div>
          <button className="cursor-pointer [border:none] py-3 px-6 bg-neutral-0 rounded-md h-8 flex flex-row items-center justify-center box-border gap-[8px]">
            <img
              className="relative w-6 h-6 object-cover hidden"
              alt=""
              src="/iconsplaceholderplaceholder@2x.png"
            />
            <div className="relative text-lg leading-[24px] capitalize font-block-quote text-neutral-100 text-left">
              Subscribe
            </div>
            <img
              className="relative w-6 h-6 object-cover hidden"
              alt=""
              src="/iconsplaceholderplaceholder@2x.png"
            />
          </button>
        </nav>
      </header>
      <section className="absolute top-[97px] left-[0px] bg-neutral-0 w-[1280px] h-[475px]" />
      <section className="absolute bottom-[0px] left-[2px] bg-neutral-100 box-border w-[1280px] h-[420px] overflow-hidden text-left text-base text-neutral-0 font-block-quote border-t-[1px] border-solid border-neutral-80">
        <div className="absolute top-[135px] left-[716px] flex flex-row items-start justify-start gap-[75px]">
          <div className="shrink-0 flex flex-col items-start justify-center gap-[16px]">
            <span className="relative text-sm leading-[20px] text-neutral-60">
              CATEGORIES
            </span>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Entrepreneurship
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Creator
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Tech
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              All
            </a>
          </div>
          <div className="shrink-0 flex flex-col items-start justify-center gap-[16px] text-right">
            <span className="relative text-sm leading-[20px] text-neutral-60 text-left">
              PAGES
            </span>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Home
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              About
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Subscribe
            </a>
          </div>
          <div className="shrink-0 flex flex-col items-start justify-center gap-[16px]">
            <span className="relative text-sm leading-[20px] text-neutral-60">
              CONTACT
            </span>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Twitter
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              LinkedIn
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Email me
            </a>
          </div>
        </div>
        <span className="absolute top-[304px] left-[140px] leading-[24px] text-neutral-70">
          Copyright 2022
        </span>
        <div className="absolute top-[135px] left-[140px] flex flex-row items-center justify-start">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-21xl leading-[48px] font-bold font-helvetica text-neutral-0 text-center inline-block">
            BEDROK
          </button>
        </div>
      </section>
      <h1 className="m-0 absolute top-[244px] left-[396px] text-inherit leading-[90px] font-normal font-inherit">
        404!
      </h1>
      <h2 className="m-0 absolute top-[321px] left-[396px] text-13xl leading-[40px] font-normal font-inherit">
        Page can’t be found
      </h2>
      <button className="cursor-pointer py-3 px-12 bg-[transparent] absolute top-[386px] left-[396px] rounded-6xs box-border h-12 flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-neutral-100">
        <img
          className="relative w-6 h-6 object-cover hidden"
          alt=""
          src="/iconsplaceholderplaceholder@2x.png"
        />
        <div className="relative text-lg leading-[24px] capitalize font-block-quote text-neutral-100 text-left">
          Go home
        </div>
        <img
          className="relative w-6 h-6 object-cover hidden"
          alt=""
          src="/iconsplaceholderplaceholder@2x.png"
        />
      </button>
    </div>
  );
};

export default Desktop;
