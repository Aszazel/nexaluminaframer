import type { NextPage } from "next";
import { useState } from "react";

const AboutDesktop: NextPage = () => {
  const [inputsSearchValue, setInputsSearchValue] = useState();
  const [inputsSingleLineInputValue, setInputsSingleLineInputValue] =
    useState();
  return (
    <div className="relative bg-neutral-100 w-full h-[1911px] overflow-hidden text-left text-21xl text-neutral-0 font-block-quote">
      <div className="absolute top-[0px] left-[0px] bg-neutral-100 box-border w-[1280px] flex flex-row items-center justify-between py-[26px] px-[140px] text-center font-helvetica border-b-[1px] border-solid border-neutral-90">
        <div className="shrink-0 flex flex-row items-center justify-start">
          <a className="[text-decoration:none] relative leading-[48px] font-bold text-[inherit]">
            NexaLumina
          </a>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-end gap-[20px] text-right text-lg text-neutral-10 font-block-quote">
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
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[24px] capitalize font-block-quote text-neutral-100 text-left inline-block">
              Subscribe
            </button>
            <img
              className="relative w-6 h-6 object-cover hidden"
              alt=""
              src="/iconsplaceholderplaceholder@2x.png"
            />
          </button>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[2px] bg-neutral-100 box-border w-[1280px] h-[420px] overflow-hidden text-base border-t-[1px] border-solid border-neutral-80">
        <div className="absolute top-[135px] left-[716px] flex flex-row items-start justify-start gap-[75px]">
          <a className="[text-decoration:none] shrink-0 flex flex-col items-start justify-center gap-[16px] text-[inherit]">
            <div className="relative text-sm leading-[20px] text-neutral-60">
              CATEGORIES
            </div>
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
          </a>
          <div className="shrink-0 flex flex-col items-start justify-center gap-[16px] text-right">
            <div className="relative text-sm leading-[20px] text-neutral-60 text-left">
              PAGES
            </div>
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
            <div className="relative text-sm leading-[20px] text-neutral-60">
              CONTACT
            </div>
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
        <a className="[text-decoration:none] absolute top-[135px] left-[140px] flex flex-row items-center justify-start text-center text-21xl text-[inherit] font-helvetica">
          <a className="[text-decoration:none] relative leading-[48px] font-bold text-[inherit]">
            NexaLumina
          </a>
        </a>
      </div>
      <div className="absolute top-[760px] left-[140px] w-[998px] h-[174px] text-base text-neutral-30">
        <h3 className="m-0 absolute top-[0px] left-[0px] text-13xl leading-[40px] font-normal font-inherit text-neutral-0">
          My Story
        </h3>
        <p className="m-0 absolute top-[6px] left-[341px] leading-[24px] inline-block w-[315px]">
          Eum fuga reprehenderit tempore quidem suscipit fugiat a recusandae
          minima. Debitis et exercitationem. Nisi vero deserunt. Expedita aut
          fugiat autem similique officiis. Qui quo repellendus voluptatum. Quia
          nemo voluptatem cumque aut blanditiis neque.
        </p>
        <p className="m-0 absolute top-[6px] left-[683px] leading-[24px] inline-block w-[315px]">
          Eum fuga reprehenderit tempore quidem suscipit fugiat a recusandae
          minima. Debitis et exercitationem. Nisi vero deserunt. Expedita aut
          fugiat autem similique officiis. Qui quo repellendus voluptatum. Quia
          nemo voluptatem cumque aut blanditiis neque.
        </p>
      </div>
      <div className="absolute top-[173px] left-[140px] rounded-981xl bg-neutral-100 w-[1000px] h-[403px] flex flex-row items-start justify-start">
        <img
          className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-5@2x.png"
        />
      </div>
      <div className="absolute bottom-[420px] left-[2px] bg-neutral-0 w-[1281px] flex flex-col items-center justify-start py-[120px] px-0 box-border gap-[16px] text-center text-neutral-100">
        <h2 className="m-0 self-stretch relative text-inherit leading-[48px] font-normal font-inherit">
          <p className="m-0">{`A monthly post delivered `}</p>
          <p className="m-0">straight to your inbox</p>
        </h2>
        <div className="flex flex-row items-center justify-center gap-[24px]">
          <input
            className="[border:none] [outline:none] font-block-quote text-sm bg-neutral-100 rounded-md w-[297px] shrink-0 flex flex-row items-center justify-start py-3.5 px-4 box-border text-neutral-40"
            placeholder="Enter your email"
            type="text"
            value={inputsSingleLineInputValue}
            onChange={(event) =>
              setInputsSingleLineInputValue(event.target.value)
            }
          />
          <button className="cursor-pointer [border:none] py-3 px-12 bg-neutral-100 rounded-md shrink-0 flex flex-row items-center justify-center gap-[8px]">
            <img
              className="relative w-6 h-6 object-cover hidden"
              alt=""
              src="/iconsplaceholderplaceholder@2x.png"
            />
            <div className="relative text-lg leading-[24px] capitalize font-block-quote text-neutral-0 text-left">
              Submit
            </div>
            <img
              className="relative w-6 h-6 object-cover hidden"
              alt=""
              src="/iconsplaceholderplaceholder@2x.png"
            />
          </button>
        </div>
        <span className="relative text-sm leading-[20px] text-neutral-60">
          Zero spam, just the good stuff.
        </span>
      </div>
      <div className="absolute top-[432px] left-[177px] w-[484px] h-[114px] text-53xl text-neutral-100">
        <h1 className="m-0 absolute top-[24px] left-[0px] text-inherit leading-[90px] font-normal font-inherit">
          Hey, I’m Isaiah
        </h1>
        <h3 className="m-0 absolute top-[0px] left-[0px] text-xl tracking-[0.15em] leading-[24px] uppercase font-semibold font-inherit text-neutral-80">
          ABOUT ME
        </h3>
      </div>
      <img
        className="absolute top-[685.5px] left-[0px] max-h-full w-[1280px] object-cover"
        alt=""
        src="/vector-4@2x.png"
      />
    </div>
  );
};

export default AboutDesktop;
