import type { NextPage } from "next";
import { useState } from "react";

const IndividualBlogDesktop: NextPage = () => {
  const [inputsSingleLineInputValue, setInputsSingleLineInputValue] =
    useState();
  return (
    <div className="relative bg-neutral-100 w-full h-[3556px] overflow-hidden text-center text-21xl text-neutral-0 font-helvetica">
      <div className="absolute top-[0px] left-[0px] w-[1280px] h-[358px] overflow-hidden flex flex-col items-center justify-center gap-[78px]">
        <div className="bg-neutral-100 box-border w-[1280px] flex flex-row items-center justify-between py-[26px] px-[140px] border-b-[1px] border-solid border-neutral-90">
          <div className="shrink-0 flex flex-row items-center justify-start">
            <b className="relative leading-[48px]">NexaLumina</b>
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
            <div className="rounded-81xl bg-neutral-100 box-border w-[189px] h-8 flex flex-row items-center justify-start py-3.5 px-4 gap-[8px] text-center text-base text-neutral-40 border-[1px] border-solid border-neutral-80">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/16search@2x.png"
              />
              <div className="relative leading-[24px]">Search</div>
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
          </div>
        </div>
        <h1 className="m-0 relative text-53xl leading-[90px] font-normal font-block-quote text-left flex items-center w-[1000px]">
          7 Things about web design your boss wants you to know
        </h1>
      </div>
      <div className="absolute top-[409px] left-[-9px] w-[1298px] overflow-hidden flex flex-col items-center justify-center gap-[38px] text-left text-base text-neutral-60 font-block-quote">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[53px]">
          <img
            className="relative rounded-xl w-[1000px] h-[462px] object-cover"
            alt=""
            src="/rectangle-11@2x.png"
          />
          <div className="box-border w-[660px] flex flex-row items-center justify-between py-2.5 px-0 border-t-[1px] border-solid border-neutral-80 border-b-[1px]">
            <span className="relative leading-[24px]">Posted 11/1/22</span>
            <span className="relative leading-[24px] text-right">
              4 min read
            </span>
          </div>
        </div>
        <div className="self-stretch relative h-[2532px] overflow-hidden shrink-0 text-neutral-0">
          <div className="absolute top-[0px] left-[320px] w-[658px] overflow-hidden flex flex-col items-start justify-center text-neutral-60">
            <div className="w-[165px] h-8 flex flex-row items-center justify-start gap-[9px]">
              <div className="rounded-981xl bg-neutral-100 w-8 h-8 flex flex-row items-start justify-start">
                <img
                  className="self-stretch flex-1 relative rounded-981xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/rectangle-5@2x.png"
                />
              </div>
              <span className="relative leading-[24px]">By Isaiah Trotter</span>
            </div>
          </div>
          <p className="m-0 absolute top-[69px] left-[320px] inline-block w-[658px]">
            <span className="block text-37xl">
              <span className="leading-[60px]">
                Nibh mauris cursus mattis molestie a iaculis at erat
              </span>
            </span>
            <span className="block">
              <span className="leading-[24px]">&nbsp;</span>
            </span>
            <span className="block">
              <span className="leading-[24px]">
                Lorem ipsum dolor sit amet. Aut praesentium molestiae sit amet
                consectetur id consequuntur velit et enim asperiores aut
                molestias ratione sit molestias iste in galisum maiores! Sit
                quibusdam omnis cum perferendis officia et molestiae beatae hic
                dolores architecto. Sit sunt a beatae nemo qui assumenda itaque
                ex harum delectus ea magnam voluptatem. Hic error cumque aut
                reiciendis molestias ut voluptas consectetur et corrupti nihil.
              </span>
            </span>
            <span className="block">
              <span className="leading-[24px]">&nbsp;</span>
            </span>
            <ul className="m-0 font-inherit pl-[21px]">
              <li className="mb-0">
                <span className="leading-[24px]">Ordered list</span>
              </li>
              <li className="mb-0">
                <span className="leading-[24px]">Second item</span>
              </li>
              <li className="mb-0">
                <span className="leading-[24px]">And final third item</span>
              </li>
            </ul>
            <span className="block">
              <span className="leading-[24px]">&nbsp;</span>
            </span>
            <ul className="m-0 font-inherit pl-[21px]">
              <li className="mb-0">
                <span className="leading-[24px]">Unordered list</span>
              </li>
              <li className="mb-0">
                <span className="leading-[24px]">Second item</span>
              </li>
              <li className="mb-0">
                <span className="leading-[24px]">And final third item</span>
              </li>
            </ul>
            <span className="block">
              <span className="leading-[24px]">&nbsp;</span>
            </span>
            <span className="block">
              <span className="leading-[24px]">
                Lorem ipsum dolor sit amet. Aut praesentium molestiae sit amet
                consectetur id consequuntur velit et enim asperiores aut
                molestias ratione sit molestias iste in galisum maiores! Sit
                quibusdam omnis cum perferendis officia et molestiae beatae hic
                dolores architecto. Sit sunt a beatae nemo qui assumenda itaque
                ex harum delectus ea magnam voluptatem. Hic error cumque aut
                reiciendis molestias ut voluptas consectetur et corrupti nihil.
              </span>
            </span>
            <span className="block">
              <span className="leading-[24px]">&nbsp;</span>
            </span>
            <span className="block">
              <span className="leading-[24px]">
                Lorem ipsum dolor sit amet. Aut praesentium molestiae sit amet
                consectetur id consequuntur velit et enim asperiores aut
                molestias ratione sit molestias iste in galisum maiores! Sit
                quibusdam omnis cum perferendis officia et molestiae beatae hic
                dolores architecto.
              </span>
            </span>
          </p>
          <div className="absolute top-[926px] left-[318px] w-[662px] overflow-hidden flex flex-col items-start justify-center">
            <img
              className="relative rounded-3xs w-[660px] h-[370px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame@2x.png"
            />
          </div>
          <div className="absolute top-[1308px] left-[586px] w-[126px] overflow-hidden flex flex-col items-start justify-center text-center text-sm">
            <i className="relative leading-[20px]">Image subtitle text</i>
          </div>
          <div className="absolute top-[1676px] left-[0px] w-[1298px] overflow-hidden flex flex-col items-start justify-center text-center text-21xl text-neutral-100">
            <div className="w-[1286px] overflow-hidden flex flex-col items-end justify-center">
              <div className="w-[1281px] overflow-hidden flex flex-col items-center justify-start">
                <div className="bg-neutral-0 w-[1281px] flex flex-col items-center justify-start py-[120px] px-0 box-border gap-[16px]">
                  <h2 className="m-0 self-stretch relative text-inherit leading-[48px] font-normal font-inherit">
                    <p className="m-0">{`A monthly post delivered `}</p>
                    <p className="m-0">straight to your inbox</p>
                  </h2>
                  <div className="flex flex-row items-center justify-center gap-[24px]">
                    <input
                      className="[border:none] [outline:none] font-block-quote text-sm bg-neutral-100 rounded-md w-[297px] shrink-0 flex flex-row items-center justify-start py-3.5 px-4 box-border text-neutral-40"
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
                  <div className="relative text-sm leading-[20px] text-neutral-60">
                    Zero spam, just the good stuff.
                  </div>
                </div>
                <div className="relative bg-neutral-100 box-border w-[1280px] h-[420px] overflow-hidden shrink-0 text-left text-base text-neutral-0 border-t-[1px] border-solid border-neutral-80">
                  <div className="absolute top-[135px] left-[716px] flex flex-row items-start justify-start gap-[75px]">
                    <div className="shrink-0 flex flex-col items-start justify-center gap-[16px]">
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
                    </div>
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
                  <div className="absolute top-[135px] left-[140px] flex flex-row items-center justify-start text-center text-21xl font-helvetica">
                    <h2 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit">
                      NexaLumina
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[1360px] left-[320px] bg-whitesmoke-100 box-border w-[658px] flex flex-row items-start justify-start py-4 px-9 text-13xl border-l-[2px] border-solid border-neutral-0">
            <i className="flex-1 relative leading-[40px]">
              “Block quote elements are standard in all blog templates.” —
              Isaiah
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlogDesktop;
