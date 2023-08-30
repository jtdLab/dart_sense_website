import{r as n}from"./index.6460afdd.js";import{c as o}from"./config.cc12ddec.js";import{j as e}from"./jsx-runtime.51014c9d.js";import{m as l}from"./motion.47112636.js";import{R as d}from"./react-markdown.3168d8d7.js";const c=[{question:"Does DartSense work without an internet connection?",answer:"Yes."},{question:"How many devices can I use with my subscription?",answer:"A subscription is bound to ONE device for 30 days after the first usage. After that period the subscription can be bound to another device."}],w=()=>e.jsxs("section",{className:"relative pt-16 pb-16 bg-blueGray-50 overflow-hidden",children:[e.jsx("div",{className:"absolute -top-10",id:"faq"}),e.jsx(l.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.2},children:e.jsx("div",{className:"relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full",children:e.jsxs("div",{className:"md:max-w-4xl mx-auto",children:[e.jsx("h2",{className:"mb-16 dartsense-block-big-title text-center",children:"FAQs"}),e.jsx("div",{className:"mb-11 flex flex-wrap -m-1",children:c.map((s,t)=>e.jsx("div",{className:"w-full p-1",children:e.jsx(m,{title:s.question,content:s.answer,defaultOpen:!0})},t))}),e.jsx("div",{children:e.jsxs("p",{className:"text-center text-white",children:["For additional questions,"," ",e.jsx("a",{target:"_blank",className:"underline",href:o.discordUrl,children:"ask us on Discord."})]})})]})})})]}),m=({defaultOpen:s,title:t,content:i})=>{const[r,a]=n.useState(s);return e.jsxs("div",{className:"pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-dartsenseBg3 dartsense-border-gray-darker mb-4 relative hover:bg-dartsenseBg3Hover cursor-pointer",onClick:()=>a(!r),children:[e.jsxs("div",{className:"flex flex-col p-2  justify-center items-start",children:[e.jsx("h3",{className:" dartsense-content-title pt-3 sm:pt-0 pr-8 sm:pr-0",children:t}),e.jsx(d,{className:`prose prose-invert text-dartsenseTextGray pt-4 transition-all duration-300 overflow-hidden ${r?"max-h-96":"max-h-0"}`,children:`${i}`})]}),e.jsx("div",{className:"absolute top-6 right-4 sm:top-8 sm:right-8",children:e.jsx("svg",{width:"28px",height:"30px",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`transition-all duration-500  ${r?"rotate-[180deg]":"rotate-[270deg]"}`,children:e.jsx("path",{d:"M4.16732 12.5L10.0007 6.66667L15.834 12.5",stroke:"#0196C0",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})};export{w as FAQ};