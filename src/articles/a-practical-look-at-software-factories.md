---
title: A practical look at software factories
description: Why an assembly line doesn't fit software, where a factory does fit, and the principles I'm starting from.
date: 2026-10-22
series: Software factories for rest of us
part: 1
---

The loudest voices around AI coding agree on a few things right now. Pull requests are a waste of time. Reviewing code is dead. The future is prompt and ship, and the machinery that does the shipping is called a software factory.

I use AI agents every day, and I care about the quality of what I ship. I'm not willing to accept any of that just because it's said loudly. But I also don't want to dismiss it without trying it myself.

So I'm building a small factory for my own products, on nothing more than a Claude Max subscription, and writing down what I learn as I go. This is the first of those notes. I'm not an expert, and I don't think anyone is yet. We're all figuring this out.

## Why an assembly line doesn't fit software

The factory comparison breaks down quickly. A car factory makes sense because cars get used up. They wear out, they crash, they get replaced, so people keep needing the same car again. A line that never stops is exactly what you want.

Software never gets used up. Nobody needs a second copy of your app. What people need is different changes to the same product. Point a nonstop line at that, and you don't get more value. You get bloat.

That's what worries me about "code is cheap now, so build more". Every feature still costs complexity, support and maintenance long after it's written. When building gets cheap, it's easy to stop caring about the quality of what gets built, and to keep adding features simply because they cost so little to make.

The same goes for an always-on line that fixes bugs within minutes. It sounds great. But being able to fix fast is no excuse for shipping bugs in the first place. Your users still hit them.

Even the name is wrong. Zach Lloyd [put it well](https://x.com/zachlloydtweets/status/2112197085143674940):

> Factories reproduce. Products are invented. If you knew exactly what to build, most of the hard work would already be done.

A factory takes a design that's already settled and makes copies of it. Building a product has never worked that way.

I'm going to keep using the term anyway. It's the one everyone already knows, and inventing a new one would only add noise. Just know that when I say factory, I don't mean an assembly line.

## Where a factory does fit

None of this means I'm dismissing the shift. AI amazes me every day, with how much it can do and how quickly it does it. Building software used to be slow, and ignoring that would be just as wrong. The loud voices have a point: the way we build software is changing, and it's changing fast.

But that doesn't mean you can buy an assembly line from a vendor today, switch it on, and run it with the lights off.

To me, the real question is how to take the human out of the building, while keeping them for the judgment, the reasoning, and the responsibility for the overall quality of the product. And how to automate the chores, like fixing bugs and customer issues, or the maintenance that keeps getting postponed, so they actually get done instead of sitting in a backlog forever.

Answering that takes time. You build the process iteratively, tuning it for better output and delegating more as it earns your trust.

That's also my issue with most of the advice out there. There's plenty of theory and philosophy about software factories, and almost no view of what the system behind the scenes actually looks like. That's what I want to change. I'm going to go through the process and document it as I go. It won't be the world's best or most impressive system. But it's built around real questions and real pains, not around a philosophy.

## Start from first principles

1. **Start with why.** Every tool and workflow has to earn its place. I don't pay for automation until I feel the pain it removes.
2. **Build what you need, at the pace of real need.** Cheap code doesn't make a feature cheap. Most of its cost comes after it ships.
3. **Harness before automation.** Agents need to deeply understand your tech stack, and write code you can reason about, before you can trust them to work alone.
4. **Product context lives above the repo.** A product is rarely one repository. Its positioning, decisions and vocabulary belong to the product, not to any single codebase.
5. **Get out of the build, not out of the decisions.** I stay involved in shaping the work for as long as I want. Once it's settled, the building can happen without me.
6. **Reviews stay.** I still read the code, and I'll keep doing so.
7. **Build your own factory.** Borrow ideas from anyone, me included. But systems are personal, nobody has found the silver bullet yet, and the industry is still exploring.

That's where I'm starting from. In the next article, I'll apply the first principle to money: what the popular factory setups cost if you adopt all of them, and why I'm skipping most of it for now.
