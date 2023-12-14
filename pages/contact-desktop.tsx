import type { NextPage } from "next";

const ContactDesktop: NextPage = () => {
  return (
    <div className="relative bg-neutral-100 w-full h-[1906px] overflow-hidden text-left text-53xl text-neutral-100 font-block-quote">
      <header className="absolute top-[0px] left-[0px] bg-neutral-100 box-border w-[1280px] flex flex-row items-center justify-between py-[26px] px-[140px] text-center text-21xl text-neutral-0 font-helvetica border-b-[1px] border-solid border-neutral-90">
        <div className="shrink-0 flex flex-row items-center justify-start">
          <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit">
            BEDROK
          </h1>
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
        </nav>
      </header>
      <section className="absolute bottom-[0px] left-[2px] bg-neutral-100 box-border w-[1280px] h-[420px] overflow-hidden text-left text-base text-neutral-0 font-block-quote border-t-[1px] border-solid border-neutral-80">
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
            <textarea
              className="[border:none] bg-[transparent] font-block-quote text-base [outline:none] relative leading-[24px] text-neutral-0 text-left"
              placeholder="Tech"
            />
            <textarea
              className="[border:none] bg-[transparent] font-block-quote text-base [outline:none] relative leading-[24px] text-neutral-0 text-left"
              placeholder="All"
            />
          </div>
          <div className="shrink-0 flex flex-col items-start justify-center gap-[16px] text-right">
            <div className="relative text-sm leading-[20px] text-neutral-60 text-left">
              PAGES
            </div>
            <textarea
              className="[border:none] bg-[transparent] font-block-quote text-base [outline:none] relative leading-[24px] text-neutral-0 text-right"
              placeholder="Home"
            />
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
        <div className="absolute top-[304px] left-[140px] leading-[24px] text-neutral-70">
          Copyright 2022
        </div>
        <div className="absolute top-[135px] left-[140px] flex flex-row items-center justify-start text-center text-21xl font-helvetica">
          <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit">
            BEDROK
          </h1>
        </div>
      </section>
      <section className="absolute top-[196px] left-[140px] rounded-981xl bg-neutral-100 w-[1000px] h-[574px] flex flex-row items-start justify-start">
        <img
          className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-5@2x.png"
        />
      </section>
      <div className="absolute top-[616px] left-[180px] w-[469px] h-[114px]">
        <h3 className="m-0 absolute top-[24px] left-[0px] text-inherit leading-[90px] font-normal font-inherit">
          Want to chat?
        </h3>
        <div className="absolute top-[0px] left-[0px] text-xl tracking-[0.15em] leading-[24px] uppercase font-semibold text-neutral-80">
          CONTACT
        </div>
      </div>
      <textarea
        className="bg-neutral-100 font-block-quote text-sm [outline:none] absolute top-[954px] left-[140px] rounded-md box-border w-[1000px] flex flex-row items-center justify-start py-3.5 px-4 text-neutral-40 border-[1px] border-solid border-neutral-80"
        placeholder="Enter your name"
      />
      <textarea
        className="bg-neutral-100 font-block-quote text-sm [outline:none] absolute top-[1034px] left-[140px] rounded-md box-border w-[1000px] flex flex-row items-center justify-start py-3.5 px-4 text-neutral-40 border-[1px] border-solid border-neutral-80"
        placeholder="Enter your email"
      />
      <textarea
        className="bg-neutral-100 font-block-quote text-sm [outline:none] absolute top-[1114px] left-[140px] rounded-md box-border w-[1000px] h-32 py-[11px] px-3 text-neutral-40 border-[1px] border-solid border-neutral-80"
        placeholder="Your message"
      />
      <button className="cursor-pointer [border:none] py-[13px] px-[174px] bg-neutral-0 absolute top-[812px] left-[140px] rounded-6xs flex flex-row items-start justify-start">
        <div className="relative text-base leading-[24px] font-block-quote text-neutral-100 text-left">
          owner@email.com
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[13px] px-[186px] bg-neutral-0 absolute top-[812px] left-[652px] rounded-6xs flex flex-row items-start justify-start">
        <div className="relative text-base leading-[24px] font-block-quote text-neutral-100 text-center">
          478-334-8505
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-3 px-12 bg-neutral-0 absolute top-[1274px] left-[140px] rounded-md flex flex-row items-center justify-center gap-[8px]">
        <img
          className="relative w-6 h-6 object-cover hidden"
          alt=""
          src="/iconsplaceholderplaceholder@2x.png"
        />
        <div className="relative text-lg leading-[24px] capitalize font-block-quote text-neutral-100 text-left">
          Submit message
        </div>
        <img
          className="relative w-6 h-6 object-cover hidden"
          alt=""
          src="/iconsplaceholderplaceholder@2x.png"
        />
      </button>
      <div className="absolute top-[910px] left-[144px] text-sm leading-[20px] text-neutral-0">
        You can send me an email, but why not call? People don't call anymore...
        Call me!
      </div>
    </div>
  );
};

export default ContactDesktop;
