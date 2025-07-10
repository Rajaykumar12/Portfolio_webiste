import{r as o,j as e}from"./animation-DapMf6yi.js";import{R as l}from"./RevealOnScroll-wz7gAhO5.js";import{O as i,e as d,V as n}from"./utils-BLXIez2V.js";import"./vendor-DJG_os-6.js";const p=()=>{const[t,a]=o.useState({name:"",email:"",message:""}),s=r=>{r.preventDefault(),d.sendForm("service_71vebnx","template_8iojjzi",r.target,"fEMgnC18hWcivODI6").then(c=>{n.success("Message sent successfully!",{style:{background:"#112255",color:"#F5E6EB",border:"1px solid #95B1C9",padding:"16px"},duration:4e3}),a({name:"",email:"",message:""})}).catch(()=>{n.error("Something went wrong. Please try again.",{style:{background:"#112255",color:"#F5E6EB",border:"1px solid #FF6B6B",padding:"16px"},duration:4e3})})};return e.jsxs("section",{id:"contacts",className:"min-h-screen flex items-center justify-center py-20 bg-[#112255]",children:[e.jsx(i,{position:"bottom-center"}),e.jsx(l,{children:e.jsxs("div",{className:"max-w-2xl mx-auto px-4",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#95B1C9] to-[#F5E6EB] bg-clip-text text-transparent text-center",children:"Get in Touch"}),e.jsxs("form",{className:"space-y-6",onSubmit:s,children:[e.jsx("div",{className:"relative",children:e.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:t.name,className:`w-full bg-[#F5E6EB]/5 border border-[#95B1C9]/20 rounded-lg \r
                                          px-6 py-4 text-lg text-[#E5E0DA] \r
                                          transition-all duration-300\r
                                          focus:outline-none focus:border-[#95B1C9] \r
                                          focus:bg-[#F5E6EB]/10\r
                                          placeholder:text-[#95B1C9]/50`,placeholder:"Name...",onChange:r=>a({...t,name:r.target.value})})}),e.jsx("div",{className:"relative",children:e.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:t.email,className:`w-full bg-[#F5E6EB]/5 border border-[#95B1C9]/20 rounded-lg \r
                                          px-6 py-4 text-lg text-[#E5E0DA] \r
                                          transition-all duration-300\r
                                          focus:outline-none focus:border-[#95B1C9] \r
                                          focus:bg-[#F5E6EB]/10\r
                                          placeholder:text-[#95B1C9]/50`,placeholder:"Email...",onChange:r=>a({...t,email:r.target.value})})}),e.jsx("div",{className:"relative",children:e.jsx("textarea",{id:"message",name:"message",required:!0,rows:5,value:t.message,className:`w-full bg-[#F5E6EB]/5 border border-[#95B1C9]/20 rounded-lg \r
                                          px-6 py-4 text-lg text-[#E5E0DA] \r
                                          transition-all duration-300\r
                                          focus:outline-none focus:border-[#95B1C9] \r
                                          focus:bg-[#F5E6EB]/10\r
                                          placeholder:text-[#95B1C9]/50`,placeholder:"Your Message...",onChange:r=>a({...t,message:r.target.value})})}),e.jsx("button",{type:"submit",className:`w-full md:w-[200px] mx-auto block\r
                                      bg-[#95B1C9] text-[#112255]\r
                                      text-lg font-medium\r
                                      py-4 px-8 rounded-lg\r
                                      transition-all duration-300\r
                                      hover:bg-[#F5E6EB]\r
                                      hover:-translate-y-0.5 \r
                                      active:scale-[0.98]\r
                                      disabled:opacity-70 disabled:cursor-not-allowed\r
                                      focus:outline-none`,children:"Send Message"})]})]})})]})};export{p as Contacts};
