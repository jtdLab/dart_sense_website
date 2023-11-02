import{j as e}from"./jsx-runtime.51014c9d.js";import{r as s}from"./index.6460afdd.js";import{c as l}from"./config.cc12ddec.js";import{C as a}from"./CheckArrowIcon.eba86e2b.js";import{m as r}from"./motion.4fd21897.js";const c=[{title:"Voice Play I",description:"Unleash the magic of AI Voice Recognition and redefine the way you play.",price:4.99,cycle:"month",features:[{title:"Accurate"},{title:"Offline"},{title:"Fast"},{title:"Private"}],cta:{title:"Get Started",link:l.consoleUrl}},{title:"Voice Play II",description:"Unleash the magic of AI Voice Recognition and redefine the way you play.",price:49.99,cycle:"year",highlight:!0,features:[{title:"Accurate"},{title:"Offline"},{title:"Fast"},{title:"Private"}],cta:{title:"Get Started",link:l.consoleUrl}}],o=t=>e.jsx("div",{className:"w-[350px] sm:w-[380px] lg:w-3/10 px-4 mb-8 lg:mb-0",children:e.jsx("div",{className:t.highlight&&"rounded-3xl bg-gradient-to-r from-blue-400 to-teal-500 via-purple-500 animate-gradient-xy p-1",children:e.jsxs("div",{className:"h-full p-8 bg-dartsenseBg3 rounded-3xl",children:[e.jsx("p",{className:"mb-2 text-xl font-bold font-heading text-white text-left",children:t.title}),e.jsx("div",{className:"flex justify-start items-end",children:typeof t.price=="number"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2",children:["$",t.price]}),e.jsx("div",{className:"text-gray-500",children:`/ ${t.cycle}`})]}):e.jsx("div",{className:"text-3xl sm:text-4xl font-bold text-white text-left mt-4 mr-2 mb-2",children:t.price})}),e.jsx("p",{className:"mt-4 mb-4 text-gray-500 leading-loose text-left",children:t.description}),e.jsx("ul",{className:"mb-2 2xl:mb-6 text-white",children:t.features.map((i,n)=>e.jsxs("li",{className:"mb-4 flex",children:[e.jsx(a,{}),e.jsxs("span",{className:"flex gap-1",children:[i.title,i.info&&e.jsxs("span",{className:"tooltip-container",children:[e.jsx(x,{}),e.jsx("span",{className:"tooltip",dangerouslySetInnerHTML:{__html:i.info}})]})]})]},`${i.title}-${n}`))}),e.jsx("a",{target:"_blank",href:t.cta.link,className:"inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl dartsense-button-colored font-bold leading-loose mt-8",children:t.cta.title})]})})}),p=()=>e.jsxs("section",{className:"w-screen flex justify-center bg-dartsenseBg2 relative",children:[e.jsx("div",{className:"absolute -top-16",id:"pricing"}),e.jsx("div",{className:"pb-20 pt-12 bg-dartsenseBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ",children:e.jsx(r.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.2},children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("div",{className:"max-w-2xl mx-auto text-center mb-16",children:[e.jsx("h2",{className:"mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white",children:"Join now"}),e.jsx("p",{className:"mb-6 text-dartsenseTextGray",children:"Play and train locally or online with your friends powered by AI Voice Recognition."})]}),e.jsx("div",{className:"flex flex-wrap flex-col lg:flex-row -mx-4 items-center justify-center mt-20",children:c.map((t,i)=>s.createElement(o,{...t,key:`pricing-card-${i}`}))})]})})})]});function x(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"})})}export{p as Pricing};
