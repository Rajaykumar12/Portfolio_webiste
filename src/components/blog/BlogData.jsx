import csStudentLifeImage from "../../assets/images/blog/blog1.jpg"
import blog2 from "../../assets/images/blog/blog2.jpg"

export const blogPosts = [
    {
        id: 1,
        title: "CS Student Life: Web Dev Meets Machine Learning",
        excerpt: "Quick thoughts on juggling React projects and ML experiments as a 2nd year CS student.",
        images: [
            {
                id: 'setup',
                url: csStudentLifeImage,
                alt: 'My coding setup',
                caption: 'Late night coding sessions'
            },
            {
                id: 'react',
                url: 'https://via.placeholder.com/600x300/95B1C9/F5E6EB?text=React+Components',
                alt: 'React component structure',
                caption: 'Component hierarchy in my portfolio'
            },
            {
                id: 'learning',
                url: blog2,
                alt: 'Learning path visualization',
                caption: 'My learning journey so far'
            }
        ],
        content: `## How I Got Here

Started as a typical CS student, then discovered web development. Building things people can actually see and interact with? Addictive.

![My coding setup](${csStudentLifeImage})

Then came the hackathon. Built Redactly AI - a text redaction system with Python and spaCy. Didn't win, but suddenly I'm fascinated by making computers understand human language.

## Current Stack Chaos

**Web Dev:**
- React (hooks everywhere)
- Tailwind CSS (utility classes > everything)
- Node.js APIs
- That one PHP project we don't talk about

{{image:react}}

**Data Science/ML:**
- Python notebooks (messy but functional)
- spaCy from the hackathon
- Pandas (still confusing)
- scikit-learn experiments

**Academic Stuff:**
- Java assignments
- C++ that actually compiles
- Database schemas

## What I'm Learning

1. **React development** - This portfolio site
2. **Python & Data Science** - Pandas, NumPy, datasets
3. **Machine Learning basics** - Theory vs practice gap is real
4. **College coursework** - Algorithms, databases, networks

{{image:learning}}

## Random Observations

**Web Dev:**
- CSS is amazing and terrible simultaneously
- React hooks make sense until they don't
- "Works on my machine" is real

**Machine Learning:**
- Data cleaning takes forever
- Getting good data > building models
- "It's just statistics" (very complicated statistics)

**Student Life:**
- Balancing theory and practice is an art
- Google and Stack Overflow = best friends
- Not winning hackathons is totally fine

## What's Next?

Honestly? No idea. Maybe deeper into transformers, maybe more web apps, maybe another hackathon.

Currently curious about:
- Combining web dev + ML
- TypeScript (everyone says I should learn it)
- Docker (containers are confusing)
- Finishing that side project from 3 months ago

## Quick Tech Questions

- How do you scale React apps?
- TensorFlow vs PyTorch - what's the deal?
- Is Next.js actually better than React?
- Why is deployment harder than development?

## Machine Learning Fascination

Started with linear regression, now reading about neural networks. The idea that computers can learn patterns from data just clicks with me.

**What makes sense:**
- Computers learning from data
- Different algorithms for different problems
- Data prep being 80% of the work

**Still confusing:**
- The math (working on it)
- When to use which algorithm
- Why models work in training but fail in real life

## Closing Thoughts

Being a CS student in 2025 is weird. So much to learn, so many choices. Web dev? ML? Full-stack? Data science?

For now, I'm just building stuff and seeing what sticks. The hackathon taught me that "working and learning" beats "perfect and theoretical."

Back to debugging why my React component re-renders and why my ML model thinks everything is the same class...

P.S. - If anyone knows how to make Pandas less confusing, let me know!`,
        image: csStudentLifeImage,
        date: "2025-06-01",
        author: "R Ajay Kumar"
    }
]