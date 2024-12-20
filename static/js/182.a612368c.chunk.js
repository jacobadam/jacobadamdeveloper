"use strict";(self.webpackChunkja_developer=self.webpackChunkja_developer||[]).push([[182],{706:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var r=s(43),i=s(452),a=s(579);function l(){const e=(0,r.useRef)(),[t,s]=(0,r.useState)(!1),[l,n]=(0,r.useState)(!1);return(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-200 dark:bg-slate-900",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-center pt-8 dark:text-white",children:"Contact"}),t&&(0,a.jsx)("p",{className:"text-center text-indigo-600 text-xl font-bold","aria-live":"polite",role:"alert",children:"Message sent!"}),l&&(0,a.jsx)("p",{className:"text-center text-red-600 text-xl font-bold","aria-live":"assertive",role:"alert",children:l}),(0,a.jsxs)("form",{ref:e,onSubmit:t=>{t.preventDefault(),i.Ay.sendForm("contact_service","contact_form",e.current,"ojNtN4lneN6w9tjlE").then((()=>{console.log("Success!"),t.target.reset(),s(!0),setTimeout((()=>s(!1)),5e3)}),(e=>{console.log("Failed...",e.text),n("Something went wrong. Please try again.")}))},id:"contact-form",className:"w-full max-w-lg p-6",children:[(0,a.jsxs)("div",{className:"relative mb-6",children:[(0,a.jsxs)("label",{htmlFor:"name",className:"flex items-center mb-2 text-gray-600 dark:text-white text-sm font-medium",children:["Name",(0,a.jsx)("svg",{width:"7",height:"7",className:"ml-1",viewBox:"0 0 7 7",fill:"none","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z",fill:"#EF4444"})})]}),(0,a.jsx)("input",{type:"text",id:"name",name:"name",required:!0,"aria-required":"true",className:"block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 bg-white dark:bg-gray-00 rounded-full placeholder-gray-400 focus:outline-none"})]}),(0,a.jsxs)("div",{className:"relative mb-6",children:[(0,a.jsxs)("label",{htmlFor:"email",className:"flex items-center mb-2 text-gray-600 dark:text-white text-sm font-medium",children:["Email",(0,a.jsx)("svg",{width:"7",height:"7",className:"ml-1",viewBox:"0 0 7 7",fill:"none","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z",fill:"#EF4444"})})]}),(0,a.jsx)("input",{type:"email",id:"email",name:"email",required:!0,"aria-required":"true",className:"block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 bg-white rounded-full placeholder-gray-400 focus:outline-none"})]}),(0,a.jsxs)("div",{className:"relative mb-6",children:[(0,a.jsxs)("label",{htmlFor:"message",className:"flex items-center mb-2 text-gray-600 dark:text-white text-sm font-medium",children:["Message",(0,a.jsx)("svg",{width:"7",height:"7",className:"ml-1",viewBox:"0 0 7 7",fill:"none","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z",fill:"#EF4444"})})]}),(0,a.jsx)("textarea",{className:"block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 bg-white rounded-2xl placeholder-gray-400 focus:outline-none resize-none",name:"message",id:"message",required:!0,"aria-required":"true"})]}),(0,a.jsxs)("button",{type:"submit",value:"Send",title:"Submit your message",className:"w-full sm:w-32 py-2 flex items-center justify-center gap-x-1 text-white font-medium bg-indigo-600 duration-150 rounded-full mt-4 text-nowrap",children:["Submit",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"})})]})]})]})}function n(){return(0,a.jsx)("section",{className:"h-screen sm:pb-20 bg-slate-200 dark:bg-black",children:(0,a.jsxs)("div",{className:"h-full flex flex-col lg:flex-row items-center justify-center relative max-w-screen-xl mx-auto overflow-hidden px-4 md:px-8",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center px-4 text-center md:max-w-xl mx-auto",children:[(0,a.jsx)("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white font-extrabold",children:"Custom websites that deliver results and drive success"}),(0,a.jsx)("p",{className:"mt-4 text-gray-600 dark:text-white",children:"Building custom websites with a focus on clean, responsive design, and optimized for search engines. Let\u2019s create a site delivers results and helps your business thrive."}),(0,a.jsxs)("div",{className:"flex items-center xxxs:gap-x-4 mt-8 lg:mt-4",children:[(0,a.jsxs)("a",{href:"/services",className:"flex items-center justify-center gap-x-1 py-1 xxxs:py-2 px-4 text-white font-medium bg-indigo-600 duration-150 rounded-full","aria-label":"Go to services page",children:[(0,a.jsx)("span",{children:"Services"}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"})})]}),(0,a.jsxs)("a",{href:"/contact",className:"flex items-center justify-center gap-x-1 py-1 xxxs:py-2 px-4 text-gray-700 xxxs:border-black xxxs:border xxxs:rounded-full duration-150 font-semibold text-nowrap dark:text-white dark:border-indigo-600","aria-label":"Go to contact page",children:[(0,a.jsx)("span",{children:"Get in touch"}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"})})]})]})]}),(0,a.jsx)("div",{className:"mt-12 lg:mt-0 lg:ml-12 flex justify-center",children:(0,a.jsx)("img",{src:"hero-image.svg",className:"w-3/4 md:w-2/4 lg:w-full",alt:"A graphic of a laptop and a mobile device",width:"500",height:"287"})})]})})}var o=s(975),c=s(50);s(14),s(874),s(84);function d(e){let{image:t,title:s,url:r,ariaLabel:i}=e;return(0,a.jsxs)("div",{className:"relative overflow-hidden rounded-2xl",children:[(0,a.jsx)("img",{src:t,alt:s,className:"w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:blur-sm",width:"400",height:"300"}),(0,a.jsxs)("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out",children:[(0,a.jsx)("h1",{className:"text-lg text-white font-bold mb-3",children:s}),(0,a.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":i,className:"text-sm text-white font-semibold bg-black/80 px-4 py-2 rounded-full transition-colors duration-300",children:"View project"})]})]})}const x=[{image:"https://www.katieshevlin.com/hero-image.webp",title:"Content Services Website",url:"https://www.katieshevlin.com/"},{image:"https://www.neilnevitt.com/homepage-image.webp",title:"Healthcare Website",url:"https://www.neilnevitt.com/"}];function m(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"relative bg-indigo-600 py-12 lg:py-20",children:(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-5",children:(0,a.jsxs)("div",{className:"flex justify-center flex-wrap gap-8",children:[(0,a.jsxs)("div",{className:"w-full lg:w-2/5 flex flex-col items-center justify-center",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-center text-white pb-4 md:pb-8",children:"Latest Projects"}),(0,a.jsxs)("div",{className:"flex items-center gap-8",children:[(0,a.jsx)("button",{className:"md:hidden portfolio-button-prev group flex justify-center items-center border border-black w-11 h-11 rounded-full transition-all","aria-label":"Previous slide",children:(0,a.jsx)("svg",{className:"h-6 w-6 text-black group-hover:text-white",viewBox:"0 0 24 24",fill:"none",children:(0,a.jsx)("path",{d:"M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,a.jsx)("button",{className:"md:hidden portfolio-button-next group flex justify-center items-center border border-black w-11 h-11 rounded-full transition-all","aria-label":"Next slide",children:(0,a.jsx)("svg",{className:"h-6 w-6 text-black group-hover:text-white",viewBox:"0 0 24 24",fill:"none",children:(0,a.jsx)("path",{d:"M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),(0,a.jsx)("div",{className:"w-full lg:w-3/5",children:(0,a.jsx)(o.RC,{modules:[c.Vx,c.dK],slidesPerView:2,spaceBetween:28,navigation:{nextEl:".portfolio-button-next",prevEl:".portfolio-button-prev"},loop:!0,breakpoints:{0:{slidesPerView:1,spaceBetween:20,loop:!0},768:{slidesPerView:2,spaceBetween:28,loop:!1}},"aria-live":"polite",children:x.map(((e,t)=>(0,a.jsx)(o.qr,{className:"group","aria-label":`Slide ${t+1}`,children:(0,a.jsx)(d,{image:e.image,title:e.title,url:e.url,ariaLabel:`View the ${e.title} project`})},t)))})})]})})})})}const h=[{title:"Custom Front-End Website",description:"Crafting tailored front-end solutions that enhance user experience, ensuring intuitive navigation and an engaging interface for every visitor.",svgPath:"/custom-website2.svg"},{title:"Responsive Design",description:"Designing websites that seamlessly adapt to any screen size, ensuring an optimal browsing experience across all devices and platforms.",svgPath:"/responsive-design.svg"},{title:"Performance Optimization",description:"Improving website speed and performance, optimizing load times, and ensuring a smooth, fast user experience that drives engagement and retention.",svgPath:"/performance-optimization.svg"},{title:"Search Engine Optimization",description:"Enhancing your website\u2019s visibility through proven SEO strategies, improving search rankings and driving more organic traffic to your site.",svgPath:"/seo.svg"}];function g(){return(0,a.jsx)("section",{className:"flex items-center justify-center dark:bg-black",children:(0,a.jsx)("div",{className:"max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16",children:[(0,a.jsxs)("div",{className:"lg:w-4/5 flex flex-col items-center justify-center mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold mb-2 dark:text-white",children:"Services"}),(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-400 text-center leading-relaxed",children:"Discover a range of tailored solutions designed to meet your needs, from custom front-end websites to performance and SEO optimization."}),(0,a.jsxs)("a",{href:"/services",className:"flex items-center justify-center gap-x-1 py-1 xxxs:py-2 px-4 text-white font-medium bg-indigo-600 duration-150 rounded-full mt-4",children:["Services",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:(0,a.jsx)("path",{d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"})})]})]}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4",children:h.map(((e,t)=>(0,a.jsx)("div",{className:"block rounded-xl border p-4 shadow-lg",children:(0,a.jsxs)("div",{className:"flex flex-col items-center text-center sm:text-left sm:items-start",children:[(0,a.jsx)("div",{className:"inline-block rounded-lg p-2",children:(0,a.jsx)("img",{className:"w-11 h-11 object-contain bg-white p-1 rounded",src:e.svgPath,alt:"","aria-hidden":"true",width:"32",height:"32"})}),(0,a.jsx)("h1",{className:"mt-2 font-bold dark:text-white",children:e.title}),(0,a.jsx)("p",{className:"hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 dark:sm:text-gray-400",children:e.description})]})},t)))})]})})})}function u(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(n,{}),(0,a.jsx)(m,{}),(0,a.jsx)(g,{}),(0,a.jsx)(l,{})]})}}}]);
//# sourceMappingURL=182.a612368c.chunk.js.map