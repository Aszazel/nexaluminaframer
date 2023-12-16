import type { NextPage } from "next";
import MigratingToLinear101Card from "../components/migrating-to-linear101-card";

const Blog: NextPage = () => {
  return (
    <div className="relative bg-neutral-100 w-full h-[3118px] overflow-hidden flex flex-col items-start justify-start text-left text-21xl text-neutral-0 font-block-quote">
      <div className="self-stretch bg-neutral-100 flex flex-col items-center justify-center pt-0 px-0 pb-[30px] text-center font-helvetica">
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
        <div className="self-stretch flex flex-row items-start justify-start text-left text-[243.8px] text-gray1-200 font-block-quote border-t-[1px] border-solid border-gray1-500 border-b-[1px]">
          <b className="relative">THE BLOG</b>
        </div>
      </div>
      <div className="self-stretch bg-neutral-100 hidden flex-col items-center justify-start py-24 px-0 text-sm text-gray-700">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-8">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div className="self-stretch w-[360px] flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative leading-[20px] font-medium hidden">
                      Email
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-100 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start py-3 pr-3.5 pl-4 gap-[8px] text-base text-gray-500 border-[1px] border-solid border-gray-300">
                      <div className="flex-1 shrink-0 flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-5 h-5 overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                          src="/mail@2x.png"
                        />
                        <div className="flex-1 relative leading-[24px]">
                          Enter your email
                        </div>
                      </div>
                      <img
                        className="relative w-4 h-4 object-cover hidden"
                        alt=""
                        src="/help-icon@2x.png"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[20px] text-gray-500">
                    {`We care about your data in our `}
                    <span className="[text-decoration:underline]">
                      privacy policy
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg shrink-0 flex flex-row items-start justify-start text-base text-neutral-100">
                <div className="rounded-lg bg-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-3 px-5 border-[1px] border-solid border-primary-600">
                  <div className="relative leading-[24px] font-medium">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 w-[1440px] overflow-hidden flex flex-col items-center justify-start text-5xl text-gray1-200">
        <div className="self-stretch bg-neutral-100 flex flex-col items-center justify-start py-[30px] px-0">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-8 gap-[32px]">
            <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-inherit">
              Recent blog posts
            </h2>
            <div className="self-stretch flex flex-row items-start justify-start gap-[32px] text-sm text-slateblue">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[32px]">
                <img
                  className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                    <h4 className="m-0 self-stretch relative text-inherit leading-[20px] font-semibold font-inherit">
                      Olivia Rhye • 1 Jan 2023
                    </h4>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-5xl text-gray1-200">
                      <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit">
                        UX review presentations
                      </h3>
                      <div className="shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/arrowupright@2x.png"
                        />
                      </div>
                    </div>
                    <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-500">
                      How do you create compelling presentations that wow your
                      colleagues and impress your managers?
                    </p>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-center">
                    <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply">
                      <span className="rounded-2xl bg-ghostwhite-200 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                        <span className="relative leading-[20px] font-medium">
                          Design
                        </span>
                      </span>
                    </div>
                    <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply text-darkblue">
                      <span className="rounded-2xl bg-aliceblue-200 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                        <span className="relative leading-[20px] font-medium">
                          Research
                        </span>
                      </span>
                    </div>
                    <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply text-pink-700">
                      <span className="rounded-2xl bg-pink-50 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                        <span className="relative leading-[20px] font-medium">
                          Presentation
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-[32px]">
                <MigratingToLinear101Card
                  imageCaption="/image@2x.png"
                  eventDate="Phoenix Baker • 1 Jan 2023"
                  courseImageUrl="Migrating to Linear 101"
                  articleImageUrl="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
                  propBackgroundColor="#f0f9ff"
                  propColor="#026aa2"
                />
                <MigratingToLinear101Card
                  imageCaption="/image@2x.png"
                  eventDate="Lana Steiner • 1 Jan 2023"
                  courseImageUrl="Building your API Stack"
                  articleImageUrl="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
                  propBackgroundColor="#ecfdf3"
                  propColor="#037a48"
                />
              </div>
            </div>
          </div>
        </div>
        
        #
        <div className="self-stretch bg-neutral-100 flex flex-col items-center justify-start py-[30px] px-0 text-sm text-slateblue">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-8">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[32px]">
                <img
                  className="flex-1 relative rounded-3xs max-w-full overflow-hidden h-[246px] object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                    <h4 className="m-0 self-stretch relative text-inherit leading-[20px] font-semibold font-inherit">
                      Olivia Rhye • 1 Jan 2023
                    </h4>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-5xl text-gray1-200">
                      <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit">
                        Grid system for better Design User Interface
                      </h3>
                      <div className="shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/arrowupright@2x.png"
                        />
                      </div>
                    </div>
                    <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-500">
                      A grid system is a design tool used to arrange content on
                      a webpage. It is a series of vertical and horizontal lines
                      that create a matrix of intersecting points, which can be
                      used to align and organize page elements. Grid systems are
                      used to create a consistent look and feel across a
                      website, and can help to make the layout more visually
                      appealing and easier to navigate.
                    </p>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-center">
                    <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply">
                      <span className="rounded-2xl bg-ghostwhite-200 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                        <span className="relative leading-[20px] font-medium">
                          Design
                        </span>
                      </span>
                    </div>
                    <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply text-pink-700">
                      <span className="rounded-2xl bg-pink-50 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                        <span className="relative leading-[20px] font-medium">
                          Interface
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-neutral-100 flex flex-col items-center justify-start py-[30px] px-0">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-8 gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
              <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-inherit">
                All blog posts
              </h2>
              <div className="self-stretch flex flex-col items-start justify-start gap-[48px] text-sm text-slateblue">
                <div className="self-stretch flex flex-row items-start justify-center gap-[32px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                        <h4 className="m-0 self-stretch relative text-inherit leading-[20px] font-semibold font-inherit">
                          Alec Whitten • 1 Jan 2023
                        </h4>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-5xl text-gray1-200">
                          <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit">
                            Bill Walsh leadership lessons
                          </h3>
                          <div className="shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/arrowupright@2x.png"
                            />
                          </div>
                        </div>
                        <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-500">
                          Like to know the secrets of transforming a 2-14 team
                          into a 3x Super Bowl winning Dynasty?
                        </p>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-center">
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply">
                          <span className="rounded-2xl bg-ghostwhite-200 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <span className="relative leading-[20px] font-medium">
                              Leadership
                            </span>
                          </span>
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply text-darkslateblue">
                          <span className="rounded-2xl bg-ghostwhite-100 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <span className="relative leading-[20px] font-medium">
                              Management
                            </span>
                          </span>
                        </div>
                        <div className="shrink-0 hidden flex-row items-start justify-start mix-blend-multiply text-pink-700">
                          <div className="rounded-2xl bg-pink-50 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Presentation
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                        <h4 className="m-0 self-stretch relative text-inherit leading-[20px] font-semibold font-inherit">
                          Demi WIlkinson • 1 Jan 2023
                        </h4>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-5xl text-gray1-200">
                          <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit">
                            PM mental models
                          </h3>
                          <div className="shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/arrowupright@2x.png"
                            />
                          </div>
                        </div>
                        <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-500">
                          Mental models are simple expressions of complex
                          processes or relationships.
                        </p>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-center text-steelblue">
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply">
                          <span className="rounded-2xl bg-aliceblue-100 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <span className="relative leading-[20px] font-medium">
                              Product
                            </span>
                          </span>
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply text-darkblue">
                          <span className="rounded-2xl bg-aliceblue-200 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <span className="relative leading-[20px] font-medium">
                              Research
                            </span>
                          </span>
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply text-firebrick">
                          <span className="rounded-2xl bg-seashell shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <span className="relative leading-[20px] font-medium">
                              Frameworks
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                        <h4 className="m-0 self-stretch relative text-inherit leading-[20px] font-semibold font-inherit">
                          Candice Wu • 1 Jan 2023
                        </h4>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-5xl text-gray1-200">
                          <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit">
                            What is Wireframing?
                          </h3>
                          <div className="shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/arrowupright@2x.png"
                            />
                          </div>
                        </div>
                        <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-500">
                          Introduction to Wireframing and its Principles. Learn
                          from the best in the industry.
                        </p>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-center">
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply">
                          <div className="rounded-2xl bg-ghostwhite-200 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <span className="relative leading-[20px] font-medium">
                              Design
                            </span>
                          </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply text-darkblue">
                          <span className="rounded-2xl bg-aliceblue-200 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <span className="relative leading-[20px] font-medium">
                              Research
                            </span>
                          </span>
                        </div>
                        <div className="shrink-0 hidden flex-row items-start justify-start mix-blend-multiply text-pink-700">
                          <div className="rounded-2xl bg-pink-50 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Presentation
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[32px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                        <h4 className="m-0 self-stretch relative text-inherit leading-[20px] font-semibold font-inherit">
                          Natali Craig • 1 Jan 2023
                        </h4>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-5xl text-gray1-200">
                          <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit">
                            How collaboration makes us better designers
                          </h3>
                          <div className="shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/arrowupright@2x.png"
                            />
                          </div>
                        </div>
                        <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-500">
                          Collaboration can make our teams stronger, and our
                          individual designs better.
                        </p>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-center">
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply">
                          <span className="rounded-2xl bg-ghostwhite-200 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Design
                            </div>
                          </span>
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply text-darkblue">
                          <span className="rounded-2xl bg-aliceblue-200 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Research
                            </div>
                          </span>
                        </div>
                        <div className="shrink-0 hidden flex-row items-start justify-start mix-blend-multiply text-pink-700">
                          <div className="rounded-2xl bg-pink-50 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Presentation
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                        <h4 className="m-0 self-stretch relative text-inherit leading-[20px] font-semibold font-inherit">
                          Drew Cano • 1 Jan 2023
                        </h4>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-5xl text-gray1-200">
                          <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit">
                            Our top 10 Javascript frameworks to use
                          </h3>
                          <div className="shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/arrowupright@2x.png"
                            />
                          </div>
                        </div>
                        <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-500">
                          JavaScript frameworks make development easy with
                          extensive features and functionalities.
                        </p>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-center text-seagreen">
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply">
                          <span className="rounded-2xl bg-honeydew shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <span className="relative leading-[20px] font-medium">
                              Software Development
                            </span>
                          </span>
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply text-pink-700">
                          <span className="rounded-2xl bg-pink-50 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <span className="relative leading-[20px] font-medium">
                              Tools
                            </span>
                          </span>
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply text-crimson">
                          <span className="rounded-2xl bg-lavenderblush shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              SaaS
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                        <h4 className="m-0 self-stretch relative text-inherit leading-[20px] font-semibold font-inherit">
                          Orlando Diggs • 1 Jan 2023
                        </h4>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-5xl text-gray1-200">
                          <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit">
                            Podcast: Creating a better CX Community
                          </h3>
                          <div className="shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/arrowupright@2x.png"
                            />
                          </div>
                        </div>
                        <p className="m-0 self-stretch relative text-base leading-[24px] text-gray-500">
                          Starting a community doesn’t need to be complicated,
                          but how do you get started?
                        </p>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-center">
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply">
                          <span className="rounded-2xl bg-ghostwhite-200 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <span className="relative leading-[20px] font-medium">
                              Podcasts
                            </span>
                          </span>
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start mix-blend-multiply text-darkslateblue">
                          <span className="rounded-2xl bg-ghostwhite-100 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <span className="relative leading-[20px] font-medium">
                              Customer Success
                            </span>
                          </span>
                        </div>
                        <div className="shrink-0 hidden flex-row items-start justify-start mix-blend-multiply text-pink-700">
                          <div className="rounded-2xl bg-pink-50 shrink-0 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Presentation
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-[62px] flex flex-row items-center justify-between pt-5 px-0 pb-0 text-sm text-gray-500 border-t-[1px] border-solid border-whitesmoke-200">
              <a className="[text-decoration:none] flex flex-row items-start justify-start text-[inherit]">
                <div className="shrink-0 flex flex-row items-center justify-center gap-[8px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/arrowleft@2x.png"
                  />
                  <div className="relative leading-[20px] font-medium">
                    Previous
                  </div>
                </div>
              </a>
              <div className="w-[292px] flex flex-row items-start justify-start gap-[2px] text-center">
                <div className="flex-1 rounded-lg bg-ghostwhite-200 overflow-hidden flex flex-col items-center justify-center text-primary-600">
                  <div className="self-stretch rounded-lg h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">1</div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden flex flex-col items-center justify-center">
                  <div className="self-stretch rounded-lg h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">2</div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden flex flex-col items-center justify-center">
                  <div className="self-stretch rounded-lg h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">3</div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden flex flex-col items-center justify-center">
                  <div className="self-stretch rounded-lg h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">
                      ...
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden flex flex-col items-center justify-center">
                  <div className="self-stretch rounded-lg h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">8</div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden flex flex-col items-center justify-center">
                  <div className="self-stretch rounded-lg h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">9</div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden flex flex-col items-center justify-center">
                  <div className="self-stretch rounded-lg h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">
                      10
                    </div>
                  </div>
                </div>
              </div>
              <a className="[text-decoration:none] flex flex-row items-start justify-start text-[inherit]">
                <div className="shrink-0 flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative leading-[20px] font-medium">
                    Next
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/arrowright@2x.png"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-neutral-100 flex flex-col items-center justify-center py-[30px] px-0 text-xl text-gray1-200">
        <div className="self-stretch flex flex-row items-start justify-start gap-[14px]">
          <div className="relative leading-[24px]">© 2023</div>
          <div className="w-[478px] shrink-0 flex flex-row items-start justify-start gap-[14px]">
            <div className="flex-1 relative leading-[24px]">{`Twitter `}</div>
            <div className="flex-1 relative leading-[24px]">LinkedIn</div>
            <a
              className="flex-1 relative leading-[24px] text-[inherit] [text-decoration:none]"
              href="mailto:faqihsopyan@gmail.com"
              target="_blank"
            >
              Email
            </a>
            <div className="flex-1 relative leading-[24px]">RSS feed</div>
            <div className="flex-1 relative leading-[24px]">Add to Feedly</div>
          </div>
        </div>
      </div>
      <div className="relative bg-neutral-100 box-border w-[1440px] h-[516px] overflow-hidden shrink-0 text-base border-t-[1px] border-solid border-neutral-80">
        <div className="absolute top-[135px] left-[809px] flex flex-row items-start justify-between">
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
  );
};

export default Blog;
