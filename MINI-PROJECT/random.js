let quotes= [
    "I'm selfish, impatient and a little insecure.  I make mistakes, I am out of control and at times hard to handle.  But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","Be yourself;  everyone else is already taken.","Two things are infinite:the universe and human stupidity; and I'm not sure about the universe.","So many books, so little time","Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","A room without books is like a body without a soul.","You've gotta dance like there's nobody watching,  Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.","Be the change that you wish to see in the world.","Be the change that you wish to see in the world.","Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend"
]
function newQuotes()
{
    let num = Math.floor(Math.random()*(quotes.length));
    document.getElementById("display").innerHTML =quotes[num];
}