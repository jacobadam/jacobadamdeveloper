import React, { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("tabs-with-pill-1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative">
      {/* Background effect */}
      <div className="absolute inset-0 blur-xl bg-slate-200"></div>

      <section className="pt-4 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl text-center font-bold text-gray-900 py-5 max-w-xl leading-[3.25rem] mx-auto">
              Services
            </h2>
          </div>
          <div className="mb-4">
            <div className="tabs">
              <div className="flex w-full items-center justify-center">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 overflow-x-auto mb-9 lg:mb-16">
                  {[
                    {
                      id: "tabs-with-pill-1",
                      label: "Custom Built Website",
                    },
                    { id: "tabs-with-pill-2", label: "Responsive Design" },
                    {
                      id: "tabs-with-pill-3",
                      label: "Performance Optimization",
                    },
                    {
                      id: "tabs-with-pill-4",
                      label: "SEO",
                    },
                  ].map((tab) => (
                    <li key={tab.id} className="w-full">
                      <button
                        onClick={() => handleTabClick(tab.id)}
                        className={`group flex items-center justify-center gap-4 py-5 lg:py-9 px-6 bg-slate-200 rounded-2xl text-base font-medium text-gray-900 transition-all duration-500 w-full lg:w-56 hover:text-white hover:bg-gradient-to-tr from-indigo-600 to-violet-600 whitespace-nowrap mr-5 lg:mr-0 ${
                          activeTab === tab.id
                            ? "bg-gradient-to-tr text-white"
                            : ""
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
                      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 flex justify-center">
                        <div className="max-w-screen-lg text-black sm:text-lg">
                          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
                            Custom Front-End Website
                          </h2>
                          <p className="mb-4 font-light">
                            Track work across the enterprise through an open,
                            collaborative platform. Link issues across Jira and
                            ingest data from other software development tools,
                            so your IT support and operations teams have richer
                            contextual information to rapidly respond to
                            requests, incidents, and changes.
                          </p>
                          <p className="mb-4 font-medium">
                            Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions. Accelerate
                            critical development work, eliminate toil, and
                            deploy changes with ease.
                          </p>
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
                      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 flex justify-center">
                        <div className="max-w-screen-lg text-black sm:text-lg">
                          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
                            Responsive Design
                          </h2>
                          <p className="mb-4 font-light">
                            Track work across the enterprise through an open,
                            collaborative platform. Link issues across Jira and
                            ingest data from other software development tools,
                            so your IT support and operations teams have richer
                            contextual information to rapidly respond to
                            requests, incidents, and changes.
                          </p>
                          <p className="mb-4 font-medium">
                            Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions. Accelerate
                            critical development work, eliminate toil, and
                            deploy changes with ease.
                          </p>
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
                      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 flex justify-center">
                        <div className="max-w-screen-lg text-black sm:text-lg">
                          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
                            Performance Optimization
                          </h2>
                          <p className="mb-4 font-light">
                            Track work across the enterprise through an open,
                            collaborative platform. Link issues across Jira and
                            ingest data from other software development tools,
                            so your IT support and operations teams have richer
                            contextual information to rapidly respond to
                            requests, incidents, and changes.
                          </p>
                          <p className="mb-4 font-medium">
                            Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions. Accelerate
                            critical development work, eliminate toil, and
                            deploy changes with ease.
                          </p>
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
                            ingest data from other software development tools,
                            so your IT support and operations teams have richer
                            contextual information to rapidly respond to
                            requests, incidents, and changes.
                          </p>
                          <p className="mb-4 font-medium">
                            Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions. Accelerate
                            critical development work, eliminate toil, and
                            deploy changes with ease.
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
    </div>
  );
}
