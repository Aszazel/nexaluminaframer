import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";

const AuthorsDetailDesktop: NextPage = () => {
  const [inputsSearchValue, setInputsSearchValue] = useState();
  return (
    <div className="relative bg-neutral-100 w-full h-[2415px] overflow-hidden text-left text-xs text-neutral-800 font-block-quote">
      <header className="absolute top-[0px] left-[0px] bg-neutral-100 box-border w-[1280px] flex flex-row items-center justify-between py-[26px] px-[140px] border-b-[1px] border-solid border-neutral-90">
        <div className="shrink-0 flex flex-row items-center justify-start">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-21xl leading-[48px] font-bold font-helvetica text-neutral-0 text-center inline-block">
            BEDROK
          </button>
        </div>
        <nav className="m-0 shrink-0 flex flex-row items-center justify-end gap-[20px] text-right text-lg text-neutral-10 font-block-quote">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[24px] capitalize text-[inherit]"
            href="/"
          >
            Home
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[24px] capitalize text-[inherit]"
            href="/about-desktop"
          >
            About
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[24px] capitalize text-[inherit]"
            href="/contact-desktop"
          >
            Contact
          </Link>
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
      <div className="absolute top-[194px] left-[568px] w-[572px] h-[262px] text-53xl text-neutral-0">
        <h1 className="m-0 absolute top-[0px] left-[0px] text-inherit leading-[90px] font-normal font-inherit">
          Isaiah Trotter
        </h1>
        <p className="m-0 absolute top-[106px] left-[0px] text-xl leading-[28px] text-neutral-50 inline-block w-[572px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum.
        </p>
        <div className="absolute top-[238px] left-[0px] flex flex-row items-start justify-start gap-[40px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/socialtwitter@2x.png"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/sociallinkedin@2x.png"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/socialinstagram@2x.png"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/socialfacebook@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[194px] left-[140px] rounded-981xl bg-neutral-100 w-[371px] h-[190px] flex flex-row items-start justify-start">
        <img
          className="self-stretch flex-1 relative rounded-981xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-5@2x.png"
        />
      </div>
      <div className="absolute top-[613px] left-[139px] rounded-3xs bg-neutral-100 box-border w-[317px] h-[517px] flex flex-col items-center justify-start border-[1px] border-solid border-neutral-80">
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
          <h2 className="m-0 self-stretch relative text-13xl leading-[40px] font-normal font-inherit text-neutral-0">
            7 Things about web design your boss wants you to know
          </h2>
          <div className="self-stretch relative text-sm leading-[20px] text-neutral-40 hidden">
            This is a description of the text that is in the article as a pre
            screener for what you need to know.
          </div>
        </div>
      </div>
      <div className="absolute top-[1160px] left-[139px] rounded-3xs bg-neutral-100 box-border w-[317px] h-[517px] flex flex-col items-center justify-start border-[1px] border-solid border-neutral-80">
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
          <h2 className="m-0 self-stretch relative text-13xl leading-[40px] font-normal font-inherit text-neutral-0">
            7 Things about web design your boss wants you to know
          </h2>
          <div className="self-stretch relative text-sm leading-[20px] text-neutral-40 hidden">
            This is a description of the text that is in the article as a pre
            screener for what you need to know.
          </div>
        </div>
      </div>
      <div className="absolute top-[613px] left-[480px] rounded-3xs bg-neutral-100 box-border w-[318px] h-[517px] flex flex-col items-center justify-start border-[1px] border-solid border-neutral-80">
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
          <h2 className="m-0 self-stretch relative text-13xl leading-[40px] font-normal font-inherit text-neutral-0">
            7 Things about web design your boss wants you to know
          </h2>
          <div className="self-stretch relative text-sm leading-[20px] text-neutral-40 hidden">
            This is a description of the text that is in the article as a pre
            screener for what you need to know.
          </div>
        </div>
      </div>
      <div className="absolute top-[1160px] left-[480px] rounded-3xs bg-neutral-100 box-border w-[318px] h-[517px] flex flex-col items-center justify-start border-[1px] border-solid border-neutral-80">
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
          <h2 className="m-0 self-stretch relative text-13xl leading-[40px] font-normal font-inherit text-neutral-0">
            7 Things about web design your boss wants you to know
          </h2>
          <div className="self-stretch relative text-sm leading-[20px] text-neutral-40 hidden">
            This is a description of the text that is in the article as a pre
            screener for what you need to know.
          </div>
        </div>
      </div>
      <div className="absolute top-[613px] left-[820px] rounded-3xs bg-neutral-100 box-border w-[319px] h-[517px] flex flex-col items-center justify-start border-[1px] border-solid border-neutral-80">
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
          <h2 className="m-0 self-stretch relative text-13xl leading-[40px] font-normal font-inherit text-neutral-0">
            7 Things about web design your boss wants you to know
          </h2>
          <div className="self-stretch relative text-sm leading-[20px] text-neutral-40 hidden">
            This is a description of the text that is in the article as a pre
            screener for what you need to know.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorsDetailDesktop;
