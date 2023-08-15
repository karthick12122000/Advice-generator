const api_url = "https://api.adviceslip.com/advice";
async function getQuote() {
  
  const response = await fetch(api_url);
   const data = await response.json();
 var quote= document.querySelector(".bodyText");
 quote.innerText=data.slip.advice;
 var id= document.querySelector(".title");
 id.innerText="ADVICE #"+data.slip.id;

}

addEventListener("DOMContentLoaded",getQuote());

// const response = fetch(api_url).then((res)=> res.json()).then((e)=>{
// console.log(e);
// });
