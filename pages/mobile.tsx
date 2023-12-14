import type { NextPage } from "next";

const Mobile: NextPage = () => {
  return (
    <div className="relative bg-neutral-100 w-full h-[1271px] overflow-hidden text-left text-base text-neutral-100 font-block-quote">
      <div className="absolute top-[0px] left-[0px] bg-neutral-100 box-border w-[375px] flex flex-col items-start justify-start text-center text-neutral-0 border-b-[1px] border-solid border-neutral-90">
        <div className="self-stretch flex flex-row items-center justify-between p-5">
          <img
            className="relative w-12 h-12 object-cover"
            alt=""
            src="/brandinglogo@2x.png"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/iconsessentialhamburger@2x.png"
          />
        </div>
        <div className="bg-neutral-100 box-border w-[375px] hidden flex-col items-start justify-center p-5 gap-[24px] border-b-[1px] border-solid border-neutral-90">
          <div className="relative leading-[24px]">Home</div>
          <div className="relative leading-[24px]">About</div>
          <div className="relative leading-[24px]">Contact</div>
          <div className="self-stretch rounded-81xl bg-neutral-100 flex flex-row items-center justify-start py-3.5 px-4 gap-[8px] text-neutral-40 border-[1px] border-solid border-neutral-80">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/16search@2x.png"
            />
            <div className="relative leading-[24px]">Search</div>
          </div>
          <div className="self-stretch rounded-md bg-neutral-0 flex flex-row items-center justify-center py-3 px-12 gap-[8px] text-left text-lg text-neutral-100">
            <img
              className="relative w-6 h-6 object-cover hidden"
              alt=""
              src="/iconsplaceholderplaceholder@2x.png"
            />
            <div className="relative leading-[24px] capitalize">Subscribe</div>
            <img
              className="relative w-6 h-6 object-cover hidden"
              alt=""
              src="/iconsplaceholderplaceholder@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[0px] bg-neutral-100 box-border w-[375px] flex flex-col items-start justify-start py-10 px-5 gap-[24px] text-neutral-0 border-t-[1px] border-solid border-neutral-80">
        <div className="flex flex-row items-center justify-start text-center text-21xl font-helvetica">
          <b className="relative leading-[48px]">BEDROK</b>
        </div>
        <div className="flex flex-col items-start justify-center gap-[16px]">
          <div className="relative text-sm leading-[20px] text-neutral-60">
            CATEGORIES
          </div>
          <div className="relative leading-[24px]">Entrepreneurship</div>
          <div className="relative leading-[24px]">Creator</div>
          <div className="relative leading-[24px]">Tech</div>
          <div className="relative leading-[24px]">All</div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[16px] text-right">
          <div className="relative text-sm leading-[20px] text-neutral-60 text-left">
            PAGES
          </div>
          <div className="relative leading-[24px]">Home</div>
          <div className="relative leading-[24px]">About</div>
          <div className="relative leading-[24px]">Subscribe</div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[16px]">
          <div className="relative text-sm leading-[20px] text-neutral-60">
            CONTACT
          </div>
          <div className="relative leading-[24px]">Twitter</div>
          <div className="relative leading-[24px]">LinkedIn</div>
          <div className="relative leading-[24px]">Email me</div>
        </div>
        <div className="relative leading-[24px] text-neutral-70">
          Copyright 2022
        </div>
      </div>
      <div className="absolute top-[88px] left-[0px] bg-neutral-0 w-[375px] h-[475px]" />
      <div className="absolute top-[232px] left-[32px] text-53xl leading-[90px]">
        404!
      </div>
      <div className="absolute top-[309px] left-[32px] text-13xl leading-[40px]">
        Page can’t be found
      </div>
      <div className="absolute top-[374px] left-[32px] rounded-6xs box-border h-12 flex flex-row items-center justify-center py-3 px-12 gap-[8px] text-lg border-[1px] border-solid border-neutral-100">
        <img
          className="relative w-6 h-6 object-cover hidden"
          alt=""
          src="/iconsplaceholderplaceholder@2x.png"
        />
        <div className="relative leading-[24px] capitalize">Go home</div>
        <img
          className="relative w-6 h-6 object-cover hidden"
          alt=""
          src="/iconsplaceholderplaceholder@2x.png"
        />
      </div>
    </div>
  );
};

export default Mobile;
