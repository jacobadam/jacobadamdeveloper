import React, { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("tabs-with-pill-1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="pt-4 xs:pt-8 pb-20 relative bg-slate-200 dark:bg-slate-900 flex-grow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 lg:mb-8 text-center">
          <div className="flex items-center justify-between gap-5 flex-col mb-14">
            <h2 className="text-gray-900 dark:text-white text-2xl lg:text-3xl font-semibold leading-snug">
              Services
            </h2>
            <p className="font-normal text-base text-gray-900 dark:text-white max-w-3xl text-center">
              Whether you need a website refresh or a custom-built solution, I
              provide a personalized approach to meet your business needs. I
              simplify the process, allowing you to focus on what matters while
              I bring your vision to life online.
            </p>
          </div>
        </div>
        <div className="mb-4">
          <div className="tabs">
            <div className="flex w-full items-center justify-center">
              <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 gap-4 overflow-x-auto sm:mb-9 lg:mb-16">
                {[
                  {
                    id: "tabs-with-pill-1",
                    label: "Performance Optimization",
                  },
                  {
                    id: "tabs-with-pill-2",
                    label: "Custom Built Website",
                  },
                  {
                    id: "tabs-with-pill-3",
                    label: (
                      <>
                        Custom Built Website &
                        <br />
                        Full Content Package
                      </>
                    ),
                  },
                ].map((tab) => (
                  <li key={tab.id} className="w-full">
                    <button
                      onClick={() => handleTabClick(tab.id)}
                      className={`group flex items-center justify-center text-center gap-4 py-5 lg:py-0 px-6 rounded-2xl text-base font-medium transition-all duration-500 w-full min-h-[80px]  sm:min-h-[110px] 
                        ${
                          activeTab === tab.id
                            ? "bg-gradient-to-tr from-indigo-600 to-violet-600 text-white"
                            : "text-gray-900 dark:text-white hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-violet-600 dark:hover:bg-gradient-to-tr dark:hover:from-indigo-600 dark:hover:to-violet-600 hover:text-white"
                        }`}
                      role="tab"
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              {activeTab === "tabs-with-pill-1" && (
                <div
                  id="tabs-with-pill-1"
                  role="tabpanel"
                  className="tabcontent"
                  style={{ display: "block" }}
                >
                  <section className="">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 flex justify-center text-center lg:text-left">
                      <div className="max-w-screen-lg">
                        <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
                          Performance Optimization
                        </h2>
                        <p className="mb-4 font-light dark:text-white">
                          I start with a full assessment of your current website
                          to identify areas for improvement. During a detailed
                          feedback session, I’ll gather your specific
                          requirements and implement the requested changes to
                          enhance your site’s performance. This service includes
                          one review to ensure everything meets your
                          expectations.
                        </p>
                        {/* <p className="mb-4 font-medium">
                          Deliver great service experiences fast - without the
                          complexity of traditional ITSM solutions. Accelerate
                          critical development work, eliminate toil, and deploy
                          changes with ease.
                        </p> */}
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {activeTab === "tabs-with-pill-2" && (
                <div
                  id="tabs-with-pill-2"
                  role="tabpanel"
                  className="tabcontent"
                  style={{ display: "block" }}
                >
                  <section className="">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 flex justify-center text-center lg:text-left">
                      <div className="max-w-screen-lg">
                        <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
                          Custom Built Website
                        </h2>
                        <p className="mb-4 font-light dark:text-white">
                          I’ll work closely with you to understand your vision
                          and requirements during a comprehensive feedback
                          session. From there, I’ll create a fully customized
                          website with up to five pages, tailored to your needs.
                          This package includes two reviews for refinements and
                          a focus on driving SEO to help your site stand out.
                        </p>
                        {/* <p className="mb-4 font-medium">
                          Deliver great service experiences fast - without the
                          complexity of traditional ITSM solutions. Accelerate
                          critical development work, eliminate toil, and deploy
                          changes with ease.
                        </p> */}
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {activeTab === "tabs-with-pill-3" && (
                <div
                  id="tabs-with-pill-3"
                  role="tabpanel"
                  className="tabcontent"
                  style={{ display: "block" }}
                >
                  <section className="">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 flex justify-center text-center lg:text-left">
                      <div className="max-w-screen-lg">
                        <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
                          Custom Built Website and Full Content Package
                        </h2>
                        <p className="mb-4 font-light dark:text-white">
                          This comprehensive package includes everything in the
                          Custom Built Website service, plus professionally
                          crafted copy for every page. After gathering your
                          requirements and conducting a feedback session, I’ll
                          design a website with up to five pages, optimize it
                          for SEO, and provide content that captures your
                          message effectively. Two reviews are included to
                          ensure the final product is perfect.
                        </p>
                        {/* <p className="mb-4 font-medium">
                          Deliver great service experiences fast - without the
                          complexity of traditional ITSM solutions. Accelerate
                          critical development work, eliminate toil, and deploy
                          changes with ease.
                        </p> */}
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {activeTab === "tabs-with-pill-4" && (
                <div
                  id="tabs-with-pill-4"
                  role="tabpanel"
                  className="tabcontent"
                  style={{ display: "block" }}
                >
                  <section className="">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 flex justify-center">
                      <div className="max-w-screen-lg text-black sm:text-lg">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
                          Search Engine Optimization
                        </h2>
                        <p className="mb-4 font-light">
                          Track work across the enterprise through an open,
                          collaborative platform. Link issues across Jira and
                          ingest data from other software development tools, so
                          your IT support and operations teams have richer
                          contextual information to rapidly respond to requests,
                          incidents, and changes.
                        </p>
                        <p className="mb-4 font-medium">
                          Deliver great service experiences fast - without the
                          complexity of traditional ITSM solutions. Accelerate
                          critical development work, eliminate toil, and deploy
                          changes with ease.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
