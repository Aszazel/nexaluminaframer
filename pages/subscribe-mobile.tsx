import type { NextPage } from "next";

const SubscribeMobile: NextPage = () => {
  return (
    <div className="relative bg-neutral-100 w-full h-[1607px] overflow-hidden text-left text-base text-neutral-0 font-block-quote">
      <div className="absolute top-[0px] left-[0px] bg-neutral-100 box-border w-[375px] flex flex-col items-start justify-start text-center border-b-[1px] border-solid border-neutral-90">
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
      <div className="absolute bottom-[0px] left-[0px] bg-neutral-100 box-border w-[375px] flex flex-col items-start justify-start py-10 px-5 gap-[24px] border-t-[1px] border-solid border-neutral-80">
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
      <img
        className="absolute top-[604px] left-[0px] w-[375px] h-[294px] overflow-hidden object-cover"
        alt=""
        src="/frame-389@2x.png"
      />
      <div className="absolute top-[88px] left-[0px] bg-neutral-0 w-[375px] h-[516px]" />
      <div className="absolute top-[161px] left-[20px] text-13xl leading-[40px] text-neutral-100">
        <p className="m-0">A monthy post</p>
        <p className="m-0">delivered straight</p>
        <p className="m-0">to your inbox</p>
      </div>
      <div className="absolute top-[297px] left-[20px] leading-[24px] text-gray1-400 inline-block w-[335px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum.
      </div>
      <div className="absolute top-[417px] left-[20px] rounded-md bg-neutral-100 w-[335px] flex flex-row items-center justify-start py-3.5 px-4 box-border text-center text-sm text-neutral-40">
        <div className="relative leading-[20px]">Enter your email</div>
      </div>
      <div className="absolute top-[489px] left-[20px] rounded-6xs box-border w-[335px] h-12 flex flex-row items-center justify-center py-3 px-12 gap-[8px] text-lg text-neutral-100 border-[1px] border-solid border-neutral-100">
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
  );
};

export default SubscribeMobile;
