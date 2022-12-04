const quotes = [
    {
        quote: "In his heart a man plans his course, but the LORD determines his steps.",
        author: "Proverbs 16:9",
    },
    {
        quote: "Why are you downcast, O my soul? Why so distrubed within me? Put your hope in God, for I will yet praise him, my Savior and my God.",
        author: "Psalm 42:11",
    },
    {
        quote: "Call to me and I will answer you and tell you great and unsearchable things you do not know.",
        author: "Jeremiah 33:3",
    },
    {
        quote: "Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God.",
        author: "Philippians 4:6",
    },
    {
        quote: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        author: "Romans 8:28",
    },
    {
        quote: "Above all else, guard your heart, for it is the wellspring of life.",
        author: "Proverbs 4:23",
    },
    {
        quote: "Your attitude should be the same as that of Christ Jesus.",
        author: "Philippians 2:5",
    },
    {
        quote: "Do not boast about tomorrow, for you do not know what a day may bring forth.",
        author: "Proverbs 27:1",
    },
    {
        quote: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
        author: "Psalms 23:4",
    },
    {
        quote: "But he knows the way that I take; when he has tested me, I will come forth as gold.",
        author: "Job 23:10",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;