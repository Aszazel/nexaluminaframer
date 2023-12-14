import type { NextPage } from "next";
import { useState } from "react";

const SubscribeDesktop: NextPage = () => {
  const [inputsSearchValue, setInputsSearchValue] = useState();
  const [inputsSingleLineInputValue, setInputsSingleLineInputValue] =
    useState();
  return (
    <div className="relative bg-neutral-100 w-full h-[1350px] overflow-hidden text-left text-53xl text-neutral-100 font-block-quote">
      <section className="absolute top-[100px] left-[0px] bg-neutral-0 w-[884px] h-[839px]" />
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
              placeholder="7 Things about..."
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
      <h1 className="m-0 absolute top-[244px] left-[140px] text-inherit leading-[90px] font-normal font-inherit">
        <p className="m-0">A monthly post</p>
        <p className="m-0">delivered straight</p>
        <p className="m-0">to your inbox</p>
      </h1>
      <p className="m-0 absolute top-[545px] left-[141px] text-xl leading-[28px] text-gray1-400 inline-block w-[572px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum.
      </p>
      <input
        className="[border:none] [outline:none] font-block-quote text-sm bg-neutral-100 absolute top-[686px] left-[140px] rounded-md w-[403px] flex flex-row items-center justify-start py-3.5 px-4 box-border text-neutral-40"
        placeholder="Enter your email"
        type="text"
        value={inputsSingleLineInputValue}
        onChange={(event) => setInputsSingleLineInputValue(event.target.value)}
      />
      <button className="cursor-pointer py-3 px-12 bg-[transparent] absolute top-[686px] left-[567px] rounded-6xs box-border h-12 flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-neutral-100">
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
      <img
        className="absolute top-[100px] left-[883px] w-[397px] h-[830px] overflow-hidden object-cover"
        alt=""
        src="/frame-389@2x.png"
      />
    </div>
  );
};

export default SubscribeDesktop;
