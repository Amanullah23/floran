export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  accent: "maroon" | "green" | "gold";
  gradient: string;
  content: string[];
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "shipping-ai-features-without-the-hype",
    title: "Shipping AI features without the hype",
    excerpt:
      "A practical look at where AI genuinely earns its place in a product — and where it's just noise clients pay for twice.",
    category: "Engineering",
    date: "Oct 2026",
    readTime: "6 min read",
    author: "Floran Team",
    accent: "maroon",
    gradient: "from-maroon/80 to-maroon/40",
    content: [
      "Every client conversation this year has included some version of the same question: 'can you add AI to it?' Usually the honest answer is yes, but not where they think.",
      "The features that hold up in production tend to be narrow and boring — a smarter search, a summarized ticket, a drafted reply someone still reviews. The ones that don't are the ones bolted on to look modern, with no clear job to do.",
      "Our rule of thumb: if you can't describe the failure mode in one sentence, it's not ready to ship. That discipline is what separates an AI feature from an AI demo.",
      "We'd rather tell a client 'not yet' than hand them something that quietly erodes trust in the product six weeks after launch.",
    ],
  },
  {
    id: "2",
    slug: "picking-a-stack-that-outlives-the-mvp",
    title: "Picking a stack that outlives the MVP",
    excerpt:
      "The frameworks we reach for by default, and the ones we've quietly stopped recommending to clients.",
    category: "Architecture",
    date: "Sep 2026",
    readTime: "8 min read",
    author: "Floran Team",
    accent: "green",
    gradient: "from-green/80 to-green/40",
    content: [
      "Most stack decisions get made under time pressure, for a version of the product that won't exist in six months. That's fine — but it means the choice should optimize for change, not for today's feature list.",
      "In practice that means boring, well-documented tooling over whatever's trending that quarter, a clear boundary between the parts likely to be rewritten and the parts that won't be, and migrations we actually plan for instead of dread.",
      "We've shipped on plenty of stacks. The ones that aged well weren't the cleverest — they were the ones a new engineer could read cold and understand within a day.",
    ],
  },
  {
    id: "3",
    slug: "what-a-senior-engineer-actually-reviews",
    title: "What a senior engineer actually reviews",
    excerpt:
      "Every build we ship passes a senior review before deploy. Here's the checklist behind that promise.",
    category: "Process",
    date: "Sep 2026",
    readTime: "5 min read",
    author: "Floran Team",
    accent: "gold",
    gradient: "from-gold/80 to-gold/40",
    content: [
      "'Reviewed by a senior engineer' can mean a rubber stamp or it can mean something real. We try hard to make it the second one.",
      "In practice that's four things: does this solve the actual problem, not just the ticket as written; what happens when it fails, not just when it succeeds; will the next person who touches this file understand why it's built this way; and is there a simpler version we're missing.",
      "None of that shows up in a demo. It shows up eighteen months later, when the feature still works and nobody dreads opening that file.",
    ],
  },
  {
    id: "4",
    slug: "designing-for-clients-who-arent-designers",
    title: "Designing for clients who aren't designers",
    excerpt:
      "How we translate vague feedback like 'make it pop' into decisions we can actually defend.",
    category: "Design",
    date: "Aug 2026",
    readTime: "4 min read",
    author: "Floran Team",
    accent: "maroon",
    gradient: "from-maroon/80 to-maroon/40",
    content: [
      "'Make it pop' is a real brief — it's just not written in design language yet. Our job is translation, not argument.",
      "Usually it means one of: the hierarchy isn't clear, the color palette is flat, or the page doesn't feel finished next to whatever inspired them. We ask which, show two concrete directions, and let the client react to something real instead of a vague note.",
      "Design feedback goes faster once it stops being about taste and starts being about specific, nameable problems.",
    ],
  },
  {
    id: "5",
    slug: "mobile-vs-web-first-what-we-tell-clients",
    title: "Mobile vs. web-first: what we tell clients",
    excerpt:
      "The honest tradeoffs behind that decision, and why the answer is rarely 'build both at once.'",
    category: "Strategy",
    date: "Aug 2026",
    readTime: "7 min read",
    author: "Floran Team",
    accent: "green",
    gradient: "from-green/80 to-green/40",
    content: [
      "Clients often arrive wanting a web app and a mobile app simultaneously, launched together. We usually talk them out of it.",
      "Building both at once doubles the surface area for every decision before you know which one your users actually prefer. A focused web-first launch (or mobile-first, depending on the audience) gets real usage data faster, and the second platform gets built on evidence instead of guesswork.",
      "It's a harder pitch than 'yes to everything,' but it's the version that doesn't waste the client's budget finding out the hard way.",
    ],
  },
  {
    id: "6",
    slug: "our-remote-workflow-with-global-clients",
    title: "Our remote workflow with global clients",
    excerpt:
      "Time zones, async updates, and how we keep a project moving when nobody's online at the same hour.",
    category: "Team",
    date: "Jul 2026",
    readTime: "5 min read",
    author: "Floran Team",
    accent: "gold",
    gradient: "from-gold/80 to-gold/40",
    content: [
      "A good chunk of our clients are eight or more time zones away. If a project depended on live meetings to move forward, it would stall constantly.",
      "So almost nothing is a meeting by default. Updates are written, decisions are documented where anyone can find them later, and anything urgent has a clear owner who isn't asleep when it lands.",
      "The side effect is a paper trail that makes onboarding a new teammate — or a new client stakeholder — far faster than it would be if all that context lived in someone's memory of a call.",
    ],
  },
];
