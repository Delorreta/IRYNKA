// Налаштування: зміни ім'я та пароль під себе
const SECRET_PASSWORD = "14.02.2026"; // Наприклад, дата знайомства у форматі 1402

const page = document.body.dataset.page;

function floatHearts(amount=12){
  for(let i=0;i<amount;i++){
    const h=document.createElement("div");
    h.className="float-heart";
    h.textContent=["♡","♥","💗","✧"][Math.floor(Math.random()*4)];
    h.style.left=Math.random()*100+"vw";
    h.style.bottom="-30px";
    h.style.fontSize=(18+Math.random()*25)+"px";
    h.style.color=["#f4a9c6","#e77ba4","#fff0f5"][Math.floor(Math.random()*3)];
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),3100);
  }
}
if(page==="home"||page==="final") setInterval(()=>floatHearts(1),1300);

if(page==="test"){
  const no=document.getElementById("noLove");
  const msg=document.getElementById("testMessage");
  no.addEventListener("mouseenter",()=>{
    no.style.transform=`translate(${Math.random()*150-75}px,${Math.random()*70-35}px) rotate(${Math.random()*18-9}deg)`;
    msg.textContent="Хмм... здається, ця відповідь недоступна 😂";
  });
  no.addEventListener("click",()=>{
    msg.textContent="Ой, кнопка втекла, але я все одно знаю правду 😌";
  });
  document.getElementById("yesLove").addEventListener("click",()=>{
    msg.textContent="Правильна відповідь! Тест тимчасово розтанув від милоти ❤️";
    floatHearts(25);
    setTimeout(()=>location.href="investigation.html",1300);
  });
}

if(page==="investigation"){
  document.querySelectorAll(".suspect").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const who=btn.dataset.suspect;
      const m=document.getElementById("caseMessage");
      m.textContent=who==="you"?"СПРАВУ ЗАКРИТО! Ти викрала моє серденько. Покарання: нескінченні обійми 💋":who==="me"?"Підозрюваний зізнався: так, це я. І не шкодую 😎":"Котик має алібі. Але він теж милий 🐱";
      if(who==="you") floatHearts(18);
    });
  });
}

if(page==="games"){
  let count=0;
  const target=document.getElementById("heartTarget");
  const area=document.querySelector(".game-area");
  const move=()=>{
    target.style.left=Math.max(2,Math.random()*85)+"%";
    target.style.top=Math.max(2,Math.random()*65)+"%";
  };
  target.addEventListener("mouseenter",move);
  target.addEventListener("click",()=>{
    count++;
    document.getElementById("heartCount").textContent=count;
    if(count>=5){
      target.textContent="♥";
      document.getElementById("gameMessage").textContent="Ти спіймала його! Але воно й так твоє 💗";
      floatHearts(20);
      target.disabled=true;
    }else{
      document.getElementById("gameMessage").textContent=["Майже! 😈","Ого, швидка!","Ще трошки!"][count%3];
      move();
    }
  });
}

if(page==="memories"){
  document.querySelectorAll(".memory-card input").forEach(input=>{
    input.addEventListener("change",()=>{
      const file=input.files[0];
      if(!file)return;
      const card=input.closest(".memory-card");
      const old=card.querySelector(".photo-placeholder");
      const img=document.createElement("img");
      img.alt="Ваш спогад";
      img.src=URL.createObjectURL(file);
      old.replaceWith(img);
    });2
  });
}

if(page==="secret"){
  document.getElementById("unlock").addEventListener("click",()=>{
    const value=document.getElementById("secretCode").value.trim().toLowerCase();
    const message=document.getElementById("secretMessage");
    if(value===SECRET_PASSWORD){
      message.textContent="Доступ дозволено! Секрет розкрито ❤️";
      floatHearts(20);
      setTimeout(()=>location.href="final.html",1100);
    }else{
      message.textContent="Неправильний пароль. Підказка: спробуй XX.XX.XXXX 😉";
    }
  });
}

if(page==="final"){
  document.getElementById("celebrate").addEventListener("click",()=>{
    document.getElementById("finalMessage").textContent="Обійми вже летять до тебе. Міцно-міцно! ❤️";
    floatHearts(55);
  });
}
