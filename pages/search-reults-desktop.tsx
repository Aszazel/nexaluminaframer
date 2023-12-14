import type { NextPage } from "next";
import { useState } from "react";

const SearchReultsDesktop: NextPage = () => {
  const [inputsSearchValue, setInputsSearchValue] = useState();
  const [inputsSearch1Value, setInputsSearch1Value] = useState();
  return (
    <div className="relative bg-neutral-100 w-full h-[2043px] overflow-hidden text-left text-xs text-neutral-800 font-block-quote">
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
      <div className="absolute bottom-[0px] left-[2px] bg-neutral-100 box-border w-[1280px] h-[420px] overflow-hidden text-base text-neutral-0 border-t-[1px] border-solid border-neutral-80">
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
          Copyright [Brand name] 2022
        </span>
        <div className="absolute top-[135px] left-[140px] flex flex-row items-center justify-start">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-21xl leading-[48px] font-bold font-helvetica text-neutral-0 text-center inline-block">
            BEDROK
          </button>
        </div>
      </div>
      <h1 className="m-0 absolute top-[207px] left-[140px] text-53xl leading-[90px] font-normal font-inherit text-neutral-0">
        Search Results
      </h1>
      <div className="absolute bg-neutral-100 top-[320px] left-[140px] rounded-81xl box-border w-[1000px] flex flex-row items-center justify-start border-[1px] border-solid border-neutral-80">
        <input
          className="[outline:none] font-block-quote text-base py-3.5 px-4 text-neutral-40 [border:none] w-full h-full [background:transparent]"
          placeholder="7 Things about graphic design"
          type="text"
          value={inputsSearch1Value}
          onChange={(event) => setInputsSearch1Value(event.target.value)}
        />
        <img
          className="absolute w-4 h-4 overflow-hidden shrink-0 object-cover z-[2] left-[16px] top-[18px]"
          alt=""
          src="/16search@2x.png"
        />
      </div>
      <div className="absolute top-[432px] left-[139px] rounded-3xs bg-neutral-100 box-border w-[319px] h-[517px] flex flex-col items-center justify-start border-[1px] border-solid border-neutral-80">
        <img
          className="self-stretch flex-1 relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="self-stretch rounded-t-none rounded-b-3xs bg-neutral-100 flex flex-col items-start justify-start p-4 gap-[10px]">
          <span className="rounded bg-neutral-200 flex flex-row items-start justify-start py-1 px-2">
            <div className="relative leading-[18px] uppercase font-medium">
              NEUTRAL
            </div>
          </span>
          <h3 className="m-0 self-stretch relative text-13xl leading-[40px] font-normal font-inherit text-neutral-0">
            7 Things about web design your boss wants you to know
          </h3>
          <div className="self-stretch relative text-sm leading-[20px] text-neutral-40 hidden">
            This is a description of the text that is in the article as a pre
            screener for what you need to know.
          </div>
        </div>
      </div>
      <div className="absolute top-[432px] left-[480px] rounded-3xs bg-neutral-100 box-border w-[319px] h-[517px] flex flex-col items-center justify-start border-[1px] border-solid border-neutral-80">
        <img
          className="self-stretch flex-1 relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="self-stretch rounded-t-none rounded-b-3xs bg-neutral-100 flex flex-col items-start justify-start p-4 gap-[10px]">
          <span className="rounded bg-neutral-200 flex flex-row items-start justify-start py-1 px-2">
            <div className="relative leading-[18px] uppercase font-medium">
              NEUTRAL
            </div>
          </span>
          <h3 className="m-0 self-stretch relative text-13xl leading-[40px] font-normal font-inherit text-neutral-0">
            7 Things about web design your boss wants you to know
          </h3>
          <div className="self-stretch relative text-sm leading-[20px] text-neutral-40 hidden">
            This is a description of the text that is in the article as a pre
            screener for what you need to know.
          </div>
        </div>
      </div>
      <div className="absolute top-[971px] left-[139px] rounded-3xs bg-neutral-100 box-border w-[319px] h-[517px] flex flex-col items-center justify-start border-[1px] border-solid border-neutral-80">
        <img
          className="self-stretch flex-1 relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="self-stretch rounded-t-none rounded-b-3xs bg-neutral-100 flex flex-col items-start justify-start p-4 gap-[10px]">
          <span className="rounded bg-neutral-200 flex flex-row items-start justify-start py-1 px-2">
            <div className="relative leading-[18px] uppercase font-medium">
              NEUTRAL
            </div>
          </span>
          <h3 className="m-0 self-stretch relative text-13xl leading-[40px] font-normal font-inherit text-neutral-0">
            7 Things about web design your boss wants you to know
          </h3>
          <div className="self-stretch relative text-sm leading-[20px] text-neutral-40 hidden">
            This is a description of the text that is in the article as a pre
            screener for what you need to know.
          </div>
        </div>
      </div>
      <div className="absolute top-[432px] left-[821px] rounded-3xs bg-neutral-100 box-border w-[319px] h-[517px] flex flex-col items-center justify-start border-[1px] border-solid border-neutral-80">
        <img
          className="self-stretch flex-1 relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="self-stretch rounded-t-none rounded-b-3xs bg-neutral-100 flex flex-col items-start justify-start p-4 gap-[10px]">
          <span className="rounded bg-neutral-200 flex flex-row items-start justify-start py-1 px-2">
            <div className="relative leading-[18px] uppercase font-medium">
              NEUTRAL
            </div>
          </span>
          <h3 className="m-0 self-stretch relative text-13xl leading-[40px] font-normal font-inherit text-neutral-0">
            7 Things about web design your boss wants you to know
          </h3>
          <div className="self-stretch relative text-sm leading-[20px] text-neutral-40 hidden">
            This is a description of the text that is in the article as a pre
            screener for what you need to know.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchReultsDesktop;
