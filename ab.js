var ChatBoatComponent='\n<div class="card deafSignChatcard">\n  <div id="header">\n    <div id="logo">\n     <div class=\'deafchatIcn\'></div>\n    </div>\n    <div id="title">\n      <div>\n        <span id="title" style="width: 100%; color: rgb(106, 106, 106); padding-left: 20px; font-size: 15px;">\u0623\u0628\u0634\u0631\u060c \u0645\u0633\u0627\u0639\u062f\u0643 \u0627\u0644\u0634\u062e\u0635\u064a</span>\n      </div>\n    </div>\n    <div id="close-button">\n      <div id="hide-chatbot" class="closedeafchatbtn"></div>\n    </div>\n  </div>\n\n  <div id="message-section" dir="ltr">\n    <div id="intro-bot">\n      <img src="/portal/deaf-sign/individuals/GapFiller.gif" id="GapFillerGif" width="100%" >\n      <p>\n\n        \u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645 \u0623\u0646\u0627 \u0645\u0633\u0627\u0639\u062f\u0643 \u0627\u0644\u0634\u062e\u0635\u064a \u0645\u0646 \u0623\u0628\u0634\u0631 \ud83d\ude03\n\n        \u200f\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u062e\u062a\u064a\u0627\u0631 \u0625\u062d\u062f\u0649 \u0627\u0644\u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \n      \n      </p>\n    </div>\n    <div id="bot-timestamp" class="message">\n    </div>\n  </div>\n</div>  \n',
showButton=document.querySelector("#show-chatbot"),hideButton="",chatbot,data1;showButton.addEventListener("click",function(){chatDeafFunc();chatbot=document.querySelector(".deafSignChatcard");hideButton=document.querySelector("#hide-chatbot");chatbot.style.display="block";hideButton.addEventListener("click",function(){chatbot.style.display="none"})});
var chatDeafFunc=function(){function l(a,e,d){a=document.createElement("div");a.id="user-timestamp";a.classList.add("message");var b=new Date,c=b.getHours().toString().padStart(2,"0"),b=b.getMinutes().toString().padStart(2,"0");a.innerHTML="You - "+c+":"+b;c=document.createElement("div");c.id="user";c.classList.add("message");gif=document.createElement("IMG");gif.setAttribute("src",e.gifSrc);content=document.createElement("p");content.innerText=e.label;c.appendChild(gif);c.appendChild(content);g.appendChild(c);
g.appendChild(a);var f=document.createElement("div");f.id="bot-stamp-element";f.classList.add("chatgrid");d.forEach(function(a){var b=document.createElement("a");b.classList.add("message");b.id="bot";b.href="#chatdown";gif=document.createElement("IMG");gif.setAttribute("src",a.gifSrc);content=document.createElement("p");content.innerText=a.label;var d=document.getElementById("bot-timestamp"),c=new Date,e=c.getHours().toString().padStart(2,"0"),c=c.getMinutes().toString().padStart(2,"0");d.innerHTML=
"<div class='deafchatIcn'></div>"+("\u0623\u0628\u0634\u0631\u060c \u0645\u0633\u0627\u0639\u062f\u0643 \u0627\u0644\u0634\u062e\u0635\u064a - "+e+":"+c);b.addEventListener("click",function(){0<a.children.length&&l(b,a,a.children)});b.appendChild(gif);b.appendChild(content);f.appendChild(b);g.appendChild(f);h.appendChild(d)})}document.querySelector("body").insertAdjacentHTML("beforeend",ChatBoatComponent);var h=document.createElement("div");h.id="main-chat";var g=document.createElement("div");document.getElementById("message-section").appendChild(h);
document.getElementById("main-chat").appendChild(g);var m=document.getElementById("main-chat"),k=document.createElement("a");k.id="chatdown";m.appendChild(k);fetch("/portal/individuals/js/data.json").then(function(a){return a.json()}).then(function(a){data1=a;var e=document.createElement("div");e.id="first-bot-stamp-element";e.classList.add("chatgrid");var d=document.createElement("a");gif=document.createElement("IMG");gif.setAttribute("src",a[0].gifSrc);content=document.createElement("p");content.innerText=
a[0].label;d.id="bot";d.href="#chatdown";d.classList.add("message");d.appendChild(gif);d.appendChild(content);e.appendChild(d);g.appendChild(e);var b=document.createElement("a");gif2=document.createElement("IMG");gif2.setAttribute("src",a[1].gifSrc);content2=document.createElement("p");content2.innerText=a[1].label;var c=document.getElementById("bot-timestamp"),f=new Date,k=f.getHours().toString().padStart(2,"0"),f=f.getMinutes().toString().padStart(2,"0");c.innerHTML="<a id='chatdown' /><div class='deafchatIcn'></div>"+
("\u0623\u0628\u0634\u0631\u060c \u0645\u0633\u0627\u0639\u062f\u0643 \u0627\u0644\u0634\u062e\u0635\u064a - "+k+":"+f);b.id="bot";b.href="#chatdown";b.classList.add("message");b.appendChild(gif2);b.appendChild(content2);e.appendChild(b);g.appendChild(e);h.appendChild(c);d.addEventListener("click",function(){0<a[0].children.length&&l(d,a[0],a[0].children)});b.addEventListener("click",function(){0<a[1].children.length&&l(b,a[1],a[1].children)})})["catch"](function(a){console.error("Error reading data from JSON file:",
a)})};