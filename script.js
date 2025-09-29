const quotes = [
  // Shawshank Redemption
  { quote: "Hope is a good thing, maybe the best of things, and no good thing ever dies.", author: "The Shawshank Redemption" },
  { quote: "Get busy living, or get busy dying.", author: "The Shawshank Redemption" },

  // Mean Girls
  { quote: "On Wednesdays we wear pink.", author: "Mean Girls" },
  { quote: "She doesn’t even go here!", author: "Mean Girls" },

  // James Bond
  { quote: "The name’s Bond. James Bond.", author: "James Bond" },
  { quote: "Shaken, not stirred.", author: "James Bond" },

  // Pursuit of Happyness
  { quote: "Don’t ever let somebody tell you you can’t do something.", author: "The Pursuit of Happyness" },
  { quote: "If you want something, go get it. Period.", author: "The Pursuit of Happyness" },

  // The Office
  { quote: "I am Beyoncé, always.", author: "The Office" },
  { quote: "I’m not superstitious, but I am a little stitious.", author: "The Office" },
  { quote: "I wish there was a way to know you’re in the good old days before you’ve actually left them.", author: "The Office" },

  // Friends
  { quote: "We were on a break!", author: "Friends" },
  { quote: "How you doin’?", author: "Friends" },
  { quote: "Pivot! Pivot! Pivot!", author: "Friends" },

  // Young Sheldon
  { quote: "When I grow up, I’m going to be a theoretical physicist.", author: "Young Sheldon" },
  { quote: "I don’t like science fiction. I only like science fact.", author: "Young Sheldon" },

  // Coach Carter
  { quote: "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.", author: "Coach Carter" },
  { quote: "You said we’re a team. One person struggles, we all struggle. One person triumphs, we all triumph.", author: "Coach Carter" },

  // Extra
  { quote: "Why so serious?", author: "The Dark Knight" },
  { quote: "With great power comes great responsibility.", author: "Spider-Man" },
  { quote: "Just keep swimming.", author: "Finding Nemo" },
  { quote: "I feel the need—the need for speed.", author: "Top Gun" },
  { quote: "Hasta la vista, baby.", author: "Terminator 2" },
  { quote: "I’ll be back.", author: "Terminator" },
  { quote: "May the Force be with you.", author: "Star Wars" },
  { quote: "I am inevitable.", author: "Avengers: Endgame" },
  { quote: "Wakanda forever!", author: "Black Panther" },
  { quote: "It’s not who I am underneath, but what I do that defines me.", author: "Batman Begins" },
  { quote: "To infinity… and beyond!", author: "Toy Story" },
  { quote: "Life finds a way.", author: "Jurassic Park" },
  { quote: "I’m king of the world!", author: "Titanic" },
  { quote: "Why fit in when you were born to stand out?", author: "Dr. Seuss" }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const btn = document.getElementById("newQuote");
const twitterBtn = document.getElementById("twitterShare");
const quoteBox = document.getElementById("quoteBox");

function randomGradient() {
  const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
}

function showQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Fade out
  quoteBox.classList.remove("show");
  
  setTimeout(() => {
    quoteText.textContent = `"${random.quote}"`;
    authorText.textContent = `— ${random.author}`;
    
    // Update Twitter link
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(random.quote + " — " + random.author)}`;
    twitterBtn.href = twitterUrl;
    
    // Change background
    randomGradient();
    
    // Fade in
    quoteBox.classList.add("show");
  }, 300);
}

btn.addEventListener("click", showQuote);

// Show one immediately
showQuote();
