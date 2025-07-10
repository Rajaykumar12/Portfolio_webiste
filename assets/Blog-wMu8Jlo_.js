import{j as e,m as y,r as g}from"./animation-DapMf6yi.js";import{R as u}from"./RevealOnScroll-wz7gAhO5.js";import"./vendor-DJG_os-6.js";const x=({post:t,postCount:s,onClick:n})=>{const i=a=>"bg-[#F5E6EB]/5 border border-[#95B1C9]/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#95B1C9] hover:bg-[#F5E6EB]/10 cursor-pointer group",c=a=>a===1?"w-full h-64 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105":"w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105";return e.jsx(u,{children:e.jsxs(y.article,{className:i(),whileHover:{y:-5},onClick:()=>n(t),children:[e.jsxs("div",{className:"relative overflow-hidden",children:[e.jsx("img",{src:t.image,alt:t.title,className:c(s),onError:a=>{a.target.src="https://via.placeholder.com/800x400/95B1C9/F5E6EB?text=Blog+Image"}}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#112255]/50 to-transparent"})]}),e.jsxs("div",{className:`p-6 ${s===1?"md:p-8":""}`,children:[e.jsx("h3",{className:`font-bold text-[#F5E6EB] mb-3 group-hover:text-[#95B1C9] transition-colors ${s===1?"text-2xl md:text-3xl":"text-xl"}`,children:t.title}),e.jsx("p",{className:`text-[#95B1C9] mb-4 ${s===1?"text-lg line-clamp-4":"line-clamp-3"}`,children:t.excerpt}),e.jsxs("div",{className:"flex items-center justify-between text-sm text-[#95B1C9]/70",children:[e.jsx("span",{children:t.author}),e.jsx("span",{children:new Date(t.date).toLocaleDateString()})]})]})]})})},f=({posts:t,onPostClick:s})=>{const n=i=>i===1?"grid grid-cols-1 gap-8 max-w-4xl mx-auto":"grid grid-cols-1 md:grid-cols-2 gap-8";return e.jsx("div",{className:n(t.length),children:t.map(i=>e.jsx(x,{post:i,postCount:t.length,onClick:s},i.id))})},w=({content:t,images:s=[]})=>{const n=i=>i.split(`
`).map((a,o)=>{const r=a.match(/^!\[(.*?)\]\((.*?)\)$/);if(r){const[,h,l]=r;return e.jsxs("div",{className:"my-8 text-center",children:[e.jsx("img",{src:l,alt:h,className:`w-full max-w-2xl mx-auto rounded-lg shadow-lg border border-[#95B1C9]/20\r
                                      transition-transform duration-300 hover:scale-105`,onError:d=>{d.target.src="https://via.placeholder.com/600x300/95B1C9/F5E6EB?text=Image+Not+Found"}}),h&&e.jsx("p",{className:"text-[#95B1C9] text-sm mt-2 italic",children:h})]},o)}const m=a.match(/^\{\{image:(\w+)\}\}$/);if(m){const h=m[1],l=s.find(d=>d.id===h);if(l)return e.jsxs("div",{className:"my-8 text-center",children:[e.jsx("img",{src:l.url,alt:l.alt,className:`w-full max-w-2xl mx-auto rounded-lg shadow-lg border border-[#95B1C9]/20\r
                                          transition-transform duration-300 hover:scale-105`,onError:d=>{d.target.src="https://via.placeholder.com/600x300/95B1C9/F5E6EB?text=Image+Not+Found"}}),l.caption&&e.jsx("p",{className:"text-[#95B1C9] text-sm mt-2 italic",children:l.caption})]},o)}return a.startsWith("## ")?e.jsx("h2",{className:"text-2xl font-bold text-[#95B1C9] mt-8 mb-4",children:a.replace("## ","")},o):a.startsWith("**")&&a.endsWith("**")?e.jsx("h3",{className:"text-lg font-semibold text-[#F5E6EB] mt-6 mb-3",children:a.replace(/\*\*/g,"")},o):a.startsWith("- ")?e.jsx("li",{className:"text-[#E5E0DA] mb-2 ml-4",children:a.replace("- ","")},o):/^\d+\./.test(a)?e.jsx("li",{className:"text-[#E5E0DA] mb-2 ml-4 list-decimal",children:a.replace(/^\d+\.\s*/,"")},o):a.trim()===""?e.jsx("div",{className:"mb-4"},o):e.jsx("p",{className:"text-[#E5E0DA] mb-4 leading-relaxed",children:a},o)});return e.jsx("div",{className:"prose prose-invert max-w-none",children:n(t)})},v=({post:t,onClose:s})=>t?e.jsx("div",{className:"fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4",onClick:s,children:e.jsxs(y.div,{className:"bg-[#112255] border border-[#95B1C9]/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto",onClick:n=>n.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-64 md:h-80 object-cover",onError:n=>{n.target.src="https://via.placeholder.com/800x400/95B1C9/F5E6EB?text=Blog+Image"}}),e.jsx("button",{onClick:s,className:`absolute top-4 right-4 bg-[#112255]/80 text-[#F5E6EB] p-2 rounded-full\r
                                  hover:bg-[#95B1C9] hover:text-[#112255] transition-colors`,children:"✕"})]}),e.jsxs("div",{className:"p-8",children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-[#F5E6EB] mb-4",children:t.title}),e.jsxs("div",{className:"flex items-center gap-4 mb-8 text-[#95B1C9]",children:[e.jsxs("span",{children:["By ",t.author]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:new Date(t.date).toLocaleDateString()})]}),e.jsx(w,{content:t.content,images:t.images})]})]})}):null,j=({searchTerm:t,onSearchChange:s})=>e.jsx(u,{children:e.jsx("div",{className:"mb-12 flex justify-center",children:e.jsx("div",{className:"relative",children:e.jsx("input",{type:"text",placeholder:"Search posts...",value:t,onChange:n=>s(n.target.value),className:`w-full md:w-96 bg-[#F5E6EB]/5 border border-[#95B1C9]/20 rounded-lg \r
                                  px-6 py-3 text-[#E5E0DA] \r
                                  transition-all duration-300\r
                                  focus:outline-none focus:border-[#95B1C9] \r
                                  focus:bg-[#F5E6EB]/10\r
                                  placeholder:text-[#95B1C9]/50`})})})}),p="/Portfolio_webiste/assets/blog1-n4HVQwbR.jpg",C="/Portfolio_webiste/assets/blog2-CAB1K0Az.jpg",b="/Portfolio_webiste/assets/blog3-CxlbBiyu.png",k="/Portfolio_webiste/assets/blog4-DMIB_LKU.png",B="/Portfolio_webiste/assets/blog5-QkAukztO.jpeg",E="/Portfolio_webiste/assets/blog7-PNqowin4.jpg",N=[{id:1,title:"CS Student Life: Web Dev Meets Machine Learning",excerpt:"Quick thoughts on juggling React projects and ML experiments as a 2nd year CS student.",images:[{id:"setup",url:p,alt:"My coding setup",caption:"Late night coding sessions"},{id:"react",url:E,alt:"The Classes",caption:"How college is going"},{id:"learning",url:C,alt:"What i am trying to figure out",caption:"What even is this"}],content:`How I Got Here

Started as a typical CS student, then discovered web development. Building things people can actually see and interact with? Addictive.

Then came the hackathon. Built Redactly AI - a text redaction system with Python and spaCy. Didn't win, but suddenly I'm fascinated by making computers understand human language.

Current Stack Chaos

Web Dev:
• React (hooks everywhere)
• Tailwind CSS (utility classes > everything)
• Node.js APIs
• That one PHP project we don't talk about

{{image:setup}}

Data Science/ML:
• Python notebooks (messy but functional)
• spaCy from the hackathon
• Pandas (still confusing)
• scikit-learn experiments

Academic Stuff:
• Java assignments
• C++ that actually compiles
• Database schemas

What I'm Learning

1. React development - This portfolio site
2. Python & Data Science - Pandas, NumPy, datasets
3. Machine Learning basics - Theory vs practice gap is real
4. College coursework - Algorithms, databases, networks

Random Observations

Web Dev:
• CSS is amazing and terrible simultaneously
• React hooks make sense until they don't
• "Works on my machine" is real

{{image:react}}

Machine Learning:
• Data cleaning takes forever
• Getting good data > building models
• "It's just statistics" (very complicated statistics)

Student Life:
• Balancing theory and practice is an art
• Google and Stack Overflow = best friends
• Not winning hackathons is totally fine

What's Next?

Honestly? No idea. Maybe deeper into transformers, maybe more web apps, maybe another hackathon.

Currently curious about:
• Combining web dev + ML
• TypeScript (everyone says I should learn it)
• Docker (containers are confusing)
• Finishing that side project from 3 months ago

Quick Tech Questions

• How do you scale React apps?
• TensorFlow vs PyTorch - what's the deal?
• Is Next.js actually better than React?
• Why is deployment harder than development?

Machine Learning Fascination

Started with linear regression, now reading about neural networks. The idea that computers can learn patterns from data just clicks with me.

What makes sense:
• Computers learning from data
• Different algorithms for different problems
• Data prep being 80% of the work

{{image:learning}}

Still confusing:
• The math (working on it)
• When to use which algorithm
• Why models work in training but fail in real life

Closing Thoughts

Being a CS student in 2025 is weird. So much to learn, so many choices. Web dev? ML? Full-stack? Data science?

For now, I'm just building stuff and seeing what sticks. The hackathon taught me that "working and learning" beats "perfect and theoretical."

Back to debugging why my React component re-renders and why my ML model thinks everything is the same class...

P.S. - If anyone knows how to make Pandas less confusing, let me know!`,image:p,date:"2025-11-03",author:"R Ajay Kumar"},{id:2,title:"Harmony, Ethics & Technology: Towards a Better Future",excerpt:"Exploring how Universal Human Values and ethical thinking can guide technology development for a sustainable and equitable world.",images:[{id:"ethics",url:b,alt:"Ethics in technology",caption:"The intersection of technology and human values"},{id:"sustainability",url:k,alt:"Sustainable technology concept",caption:"Building technology for a better tomorrow"},{id:"harmony",url:B,alt:"Technology in harmony with nature",caption:"Balancing innovation with responsibility"}],content:`The Innovation Paradox

Today is the age of quick innovation. Artificial intelligence and smart gadgets, biotech and renewable energy—technology is transforming our world at breakneck pace.

But in this race to innovate, are we taking time to ask: "Are we creating a future that's actually in harmony—with ourselves, with each other, and with the planet?"

This is where the concept of Universal Human Values (UHV) comes into the picture. Based on ageless values of respect, balance, and responsibility, UHV encourages us to reimagine the way we live—and the way we innovate.

Ethics: The Hidden Framework of Innovation

Technology doesn't exist in a vacuum—it interacts with people, environments, and societies. That's why ethics becomes more crucial than ever.

The Amazon AI Recruiting Disaster

Consider Amazon's artificial intelligence recruiting tool. Created to simplify the hiring process, it ended up discriminating against female applicants. Why? Because it was trained on historical data from a male-dominated tech industry. The system picked up the bias—and amplified it.

Lesson: Algorithms aren't impartial. Without ethical consideration, technology can accelerate inequality.

{{image:ethics}}

The Cambridge Analytica Scandal

Or consider the Cambridge Analytica scandal, where Facebook user data was harvested to influence political opinions during major elections. Millions had their privacy violated without consent.

Lesson: Ethics isn't about what's legal—it's about what's right.

In both cases, the absence of ethical thinking caused real-world harm—lost trust, skewed opportunities, and global outrage.

Holistic Technology: Beyond the Bottom Line

The concept of holistic technology takes this further. It asks:

• Who does this innovation serve?
• What's the long-term impact on people and the planet?
• Can this be sustainable, inclusive, and ethical simultaneously?

Tesla: The Green Paradox

Tesla is driving the shift to electric mobility—but lithium mining for EV batteries causes water depletion, child labor, and habitat destruction in places like South America and Congo.

A "green" solution isn't enough if it causes harm elsewhere.

Google's Project Sunroof ☀️

Conversely, Google's Project Sunroof uses AI to help homeowners install solar panels efficiently, reducing electricity bills and promoting clean energy without major trade-offs.

{{image:sustainability}}

This exemplifies tech working in harmony with people and planet.

Holistic thinking means designing not just for profit or performance, but for impact—on communities, ecosystems, and future generations.

Ethical Leadership: Setting the Standard

Modern leadership isn't just about profits—it's about responsibility.

Microsoft's AI Ethics

Microsoft has established ethical AI guidelines, ensuring new systems are transparent, reliable, and fair. They created an internal AI ethics board and refused to sell facial recognition to law enforcement without proper regulation.

Patagonia's Mission

Patagonia, the outdoor clothing company, weaves ethics into everything—recycling materials, donating profits to environmental causes. They even changed their mission statement to: "We're in business to save our home planet."

These companies prove that ethics and success can coexist.

The Road Ahead: What We Must Do

As future engineers, developers, entrepreneurs, or innovators, the responsibility is ours. We're not just building apps or systems—we're building the future.

To create a truly sustainable and equitable world, we need to:

1. Embed UHV principles in education and work
2. Design human-centered, accessible technologies
3. Assess ethical and environmental impact at every step
4. Cultivate leadership with integrity and compassion

Most importantly, we need to ask tough questions:

"Can I build this?" vs. "Should I build this?"

{{image:harmony}}

Personal Reflection

As a CS student, I'm constantly amazed by what technology can do. But I'm also learning that with great power comes great responsibility.

Every line of code I write, every algorithm I implement, every system I design—these choices matter. They shape how people interact, how societies function, how our planet evolves.

The question isn't just whether our code compiles or our models achieve high accuracy. It's whether we're building a world we'd actually want to live in.

Final Thoughts

Ethical literacy and systems thinking aren't "nice-to-haves"—they're non-negotiable in today's world.

The future needs leaders who are technically skilled but ethically grounded. Innovators who care not just about success—but about significance.

Let's build technologies that don't just solve problems—but solve the right problems. Let's choose harmony over haste, values over vanity, and purpose over pure profit.

Because the future isn't something we inherit—it's something we design.

Let's design it right.

---

What do you think? How can we better integrate ethics into technology development? Share your thoughts—I'd love to continue this conversation.`,image:b,date:"2025-01-06",author:"R Ajay Kumar"}],P=()=>{const[t,s]=g.useState(null),[n,i]=g.useState(""),c=N.filter(r=>r.title.toLowerCase().includes(n.toLowerCase())||r.excerpt.toLowerCase().includes(n.toLowerCase())),a=r=>{s(r),document.body.style.overflow="hidden"},o=()=>{s(null),document.body.style.overflow="unset"};return e.jsxs("section",{id:"blog",className:"min-h-screen py-20 bg-[#112255]",children:[e.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[e.jsxs(u,{children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#95B1C9] to-[#F5E6EB] bg-clip-text text-transparent text-center",children:"Blog & Insights"}),e.jsx("p",{className:"text-[#95B1C9] text-center mb-12 text-lg",children:"Thoughts on web development, machine learning, and student life"})]}),e.jsx(j,{searchTerm:n,onSearchChange:i}),e.jsx(f,{posts:c,onPostClick:a}),c.length===0&&e.jsx("div",{className:"text-center py-12",children:e.jsx("p",{className:"text-[#95B1C9] text-lg",children:"No posts found matching your search."})})]}),e.jsx(v,{post:t,onClose:o})]})};export{P as Blog};
