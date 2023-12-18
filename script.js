const genratememe= document.querySelector(".meme .button");
const memeimg= document.querySelector(".meme img");
const memetitle= document.querySelector(".meme .meme-title");
const memeauthor= document.querySelector(".meme .meme-author");

const updatedetails=(url,title,author)=>{
    memeimg.setAttribute("src",url);
    memetitle.innerHTML= title;
    memeauthor.innerHTML= author;
};

const meme = ()=>{
  fetch("https://meme-api.com/gimme/wholesomememes")
  .then((response)=> response.json())
  .then((data)=>{
    updatedetails(data.url,data.title,data.author);
  });
  
};

genratememe.addEventListener("click", meme);

meme();

