const quotes = [
  { quote: "Hope is a good thing, maybe the best of things, and no good thing ever dies.", author: "The Shawshank Redemption" },
  { quote: "Get busy living, or get busy dying.", author: "The Shawshank Redemption" },
  { quote: "Don’t ever let somebody tell you you can’t do something.", author: "The Pursuit of Happyness" },
  { quote: "If you want something, go get it. Period.", author: "The Pursuit of Happyness" },
  { quote: "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.", author: "Coach Carter" },
  { quote: "It’s not who I am underneath, but what I do that defines me.", author: "Batman Begins" },
  { quote: "With great power comes great responsibility.", author: "Spider-Man" },
  { quote: "Just keep swimming.", author: "Finding Nemo" },
  { quote: "Life finds a way.", author: "Jurassic Park" },
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

    // Update Twitter link (fix)
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${random.quote}" — ${random.author}`
    )}`;
    twitterBtn.setAttribute("href", twitterUrl);

    // Change background
    randomGradient();

    // Fade in
    quoteBox.classList.add("show");
  }, 300);
}

btn.addEventListener("click", showQuote);

// Show one on load
showQuote();

