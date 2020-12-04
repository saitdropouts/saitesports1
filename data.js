var defaultThreads = [
    {
        id: 1,
        title: "League of Legends",
        author: "Zimist",
        date: Date.now(),
        content: "League of Legends",
        comments: [
            {
                author: "Zimist",
                date: Date.now(),
                content: "Hello!"
            },
            {
                author: "hailteemo",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Valorant",
        author: "Tenz",
        date: Date.now(),
        content: "Valorant",
        comments: [
            {
                author: "Tenz",
                date: Date.now(),
                content: "Anyone want to play?"
            },
            {
                author: "timi",
                date: Date.now(),
                content: "What's your rank?"
            }
        ]
    },
	{
        id: 3,
        title: "Overwatch",
        author: "Sky",
        date: Date.now(),
        content: "Overwatch",
        comments: [
            {
                author: "Sky",
                date: Date.now(),
                content: "Did you guys see the new update?!"
            },
            {
                author: "flow1ngw1nd",
                date: Date.now(),
                content: "Yeah!"
            }
        ]
    },

	{
        id: 4,
        title: "Apex Legends",
        author: "laughingtotem",
        date: Date.now(),
        content: "Apex Legends",
        comments: [
            {
                author: "Steve1997",
                date: Date.now(),
                content: "This update is trash"
            },
            {
                author: "bob",
                date: Date.now(),
                content: "How so?"
            }
        ]
    },

	{
        id: 5,
        title: "Minecraft",
        author: "iloveminecraft",
        date: Date.now(),
        content: "Minecraft",
        comments: [
            {
                author: "iloveminecraft",
                date: Date.now(),
                content: "Minecraft is the best!"
            },
            {
                author: "min3craft2005",
                date: Date.now(),
                content: "I agree!"
            }
        ]
    },

	{
        id: 6,
        title: "LFG",
        author: "firedragon256",
        date: Date.now(),
        content: "Looking for Group",
        comments: [
            {
                author: "firedragon256",
                date: Date.now(),
                content: "Silver 2 in League! Anyone want to duo?"
            },
            {
                author: "Caleb92",
                date: Date.now(),
                content: "noob"
            }
        ]
    }
]


var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}