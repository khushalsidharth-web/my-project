<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>A Little World For You ❤️</title>

<style>
* { margin:0; padding:0; box-sizing:border-box; }

body {
  font-family:'Trebuchet MS',sans-serif;
  overflow-x:hidden;
}

/* COMMON */
.page {
  display:none;
  min-height:100vh;
  width:100%;
  position:relative;
}

.active { display:flex; }

/* ================= PAGE 1 ================= */

#page1 {
  background:linear-gradient(135deg,#e96b98,#f5a0bb,#ed729c);
  justify-content:center;
  align-items:center;
  overflow:hidden;
  color:#8b123d;
}

.p1-container {
  width:94%;
  max-width:800px;
  padding:45px 10px;
  text-align:center;
  z-index:2;
  animation:appear 1.5s ease;
}

@keyframes appear {
  from {opacity:0;transform:translateY(30px)}
  to {opacity:1;transform:translateY(0)}
}

.main-heart {
  width:145px;
  height:130px;
  display:block;
  margin:0 auto 30px;
  overflow:visible;
  filter:drop-shadow(0 7px 8px #8e123b55);
  animation:heartbeat 1.4s infinite ease-in-out;
}

@keyframes heartbeat {
  0%,100% {transform:scale(1)}
  50% {transform:scale(1.09)}
}

#page1 h1 {
  font-size:clamp(34px,6vw,55px);
  font-weight:900;
  color:#8b123d;
  letter-spacing:2px;
  text-shadow:2px 2px 0 #ffc6da;
}

.p1-subtitle {
  font-size:18px;
  line-height:1.8;
  max-width:510px;
  margin:20px auto 30px;
  color:#831039;
  font-weight:600;
}

.start-button {
  background:#941044;
  color:white;
  border:2px solid #ffd2e1;
  padding:15px 42px;
  border-radius:40px;
  font-size:17px;
  font-weight:bold;
  cursor:pointer;
  letter-spacing:1px;
  box-shadow:0 6px 20px #9b174b55;
  transition:.3s;
}

.start-button:hover {
  transform:scale(1.08);
  background:#710b34;
}

.corner {
  position:absolute;
  font-size:28px;
  animation:cornerBeat 2s infinite ease-in-out;
  pointer-events:none;
}

.top-left {top:8%;left:6%}
.top-right {top:12%;right:7%}
.bottom-left {bottom:9%;left:8%}
.bottom-right {bottom:8%;right:8%}

@keyframes cornerBeat {
  50% {transform:scale(1.3) rotate(12deg)}
}

.floating-heart {
  position:absolute;
  bottom:-50px;
  color:#ffe1eb;
  animation:floatUp 7s linear forwards;
  pointer-events:none;
}

@keyframes floatUp {
  0% {transform:translateY(0) rotate(0) scale(.7);opacity:0}
  20% {opacity:.9}
  100% {transform:translateY(-110vh) rotate(360deg) scale(1.3);opacity:0}
}

/* ================= PAGE 2 ================= */

#page2 {
  background:linear-gradient(180deg,#07152f 0%,#102e59 40%,#3976a9 75%,#91c9e9 100%);
  color:white;
  overflow:hidden;
}

.p2-content {
  min-height:100vh;
  width:100%;
  padding:45px 18px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  position:relative;
  z-index:2;
}

.p2-heading {
  font-size:clamp(24px,5vw,39px);
  max-width:750px;
  line-height:1.5;
  text-shadow:0 0 15px #a9dfff;
}

.p2-heading span {color:#bce8ff}

.star {
  position:absolute;
  color:white;
  animation:twinkle 2s infinite alternate;
  pointer-events:none;
}

@keyframes twinkle {
  from {opacity:.2;transform:scale(.7)}
  to {opacity:1;transform:scale(1.3)}
}

.calendar {
  width:min(330px,90vw);
  margin:40px auto 30px;
  background:#fffaf0;
  color:#173458;
  border-radius:18px;
  padding:20px;
  box-shadow:0 15px 45px #020b2055;
  border:5px solid #e9e1d2;
}

.calendar-top {
  background:#18365b;
  color:white;
  padding:13px;
  border-radius:10px 10px 0 0;
  font-weight:bold;
  letter-spacing:3px;
}

.rings {
  display:flex;
  justify-content:space-around;
  margin-top:-5px;
  margin-bottom:17px;
}

.rings span {
  width:12px;
  height:25px;
  border:3px solid #7a8ba1;
  border-radius:8px;
  background:#fffaf0;
}

.date-box {
  min-height:145px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  border:2px dashed #c5bcae;
  border-radius:12px;
  background:white;
}

.date-box.flipping {animation:flip .15s ease}

@keyframes flip {
  0% {transform:rotateX(0)}
  50% {transform:rotateX(90deg)}
  100% {transform:rotateX(0)}
}

.month {
  font-size:22px;
  font-weight:bold;
  color:#53769c;
  letter-spacing:4px;
}

.day {
  font-size:75px;
  line-height:1.1;
  font-weight:900;
  color:#173458;
}

.final-date {animation:finalGlow 1.5s infinite alternate}

@keyframes finalGlow {
  from {box-shadow:0 0 5px #e5b96b}
  to {box-shadow:0 0 25px #e5b96b}
}

.calendar-bottom {
  margin-top:17px;
  color:#8b9aab;
  font-size:12px;
  letter-spacing:3px;
}

.journey {
  font-size:clamp(22px,4vw,29px);
  font-weight:bold;
  margin:10px 0 25px;
  color:white;
  text-shadow:0 0 12px #c5eaff;
  opacity:0;
  transition:opacity 1s;
}

.journey.show {opacity:1}

.go-button {
  padding:16px 50px;
  background:#a6dcf8;
  border:2px solid #e4f7ff;
  border-radius:40px;
  color:#102d52;
  font-size:17px;
  font-weight:900;
  letter-spacing:2px;
  cursor:pointer;
  box-shadow:0 0 22px #a6dcf877;
  transition:.3s;
  opacity:0;
  pointer-events:none;
}

.go-button.show {
  opacity:1;
  pointer-events:auto;
}

.go-button:hover {transform:scale(1.08);background:white}

.celebration {
  position:absolute;
  inset:0;
  pointer-events:none;
  overflow:hidden;
  z-index:5;
}

.spark {
  position:absolute;
  top:-30px;
  animation:fall linear forwards;
  font-size:24px;
}

@keyframes fall {
  to {transform:translateY(110vh) rotate(720deg);opacity:0}
}

/* ================= PAGE 3 ================= */

#page3 {
  background:linear-gradient(135deg,#190b14,#3c1729,#69243f);
  color:white;
  align-items:center;
  justify-content:space-between;
  padding:60px 7%;
  overflow:hidden;
}

.p3-content {
  position:relative;
  z-index:2;
  width:62%;
  max-width:680px;
}

.small-text {
  color:#ffd4df;
  font-size:15px;
  letter-spacing:4px;
  text-transform:uppercase;
  margin-bottom:18px;
  opacity:0;
  animation:slideIn 1s ease forwards;
}

.p3-heading {
  font-size:clamp(35px,5.5vw,68px);
  line-height:1.12;
  font-weight:900;
  color:white;
  text-shadow:0 3px 20px #00000088;
  opacity:0;
  animation:slideIn 1.2s ease forwards;
  animation-delay:.4s;
}

.p3-heading span {
  display:block;
  color:#ffb0c3;
  margin-top:8px;
}

.heart-line {
  margin:24px 0;
  display:flex;
  align-items:center;
  gap:12px;
  color:#ffb0c3;
  font-size:22px;
  opacity:0;
  animation:slideIn 1s ease forwards;
  animation-delay:.8s;
}

.heart-line::before,.heart-line::after {
  content:"";
  width:55px;
  height:2px;
  background:#ffb0c3;
}

.p3-messages {
  margin-top:15px;
  display:flex;
  flex-direction:column;
  gap:17px;
}

.p3-message {
  width:fit-content;
  max-width:520px;
  padding:14px 20px;
  background:rgba(255,255,255,.13);
  border-left:4px solid #ff9db6;
  border-radius:5px 16px 16px 5px;
  backdrop-filter:blur(12px);
  color:white;
  font-size:17px;
  line-height:1.65;
  box-shadow:0 5px 20px #00000022;
  opacity:0;
  transform:translateY(25px);
}

.p3-message:nth-child(1) {animation:messageIn 1s ease 1.3s forwards}
.p3-message:nth-child(2) {animation:messageIn 1s ease 1.9s forwards}
.p3-message:nth-child(3) {animation:messageIn 1s ease 2.5s forwards}

@keyframes messageIn {
  to {opacity:1;transform:translateY(0)}
}

@keyframes slideIn {
  from {opacity:0;transform:translateX(-45px)}
  to {opacity:1;transform:translateX(0)}
}

.button-area {
  position:relative;
  z-index:3;
  width:32%;
  display:flex;
  justify-content:center;
  align-items:center;
  opacity:0;
  animation:buttonAppear 1.2s ease 3.2s forwards;
}

@keyframes buttonAppear {to {opacity:1}}

.forward-button {
  padding:18px 30px;
  background:linear-gradient(135deg,#ffb1c4,#ef7796);
  color:#691a35;
  border:2px solid #ffe1e9;
  border-radius:50px;
  font-size:16px;
  font-weight:900;
  letter-spacing:1px;
  cursor:pointer;
  box-shadow:0 0 15px #ff9eb9aa,0 8px 25px #00000055;
  transition:.35s;
  white-space:nowrap;
}

.forward-button:hover {
  transform:scale(1.1);
  box-shadow:0 0 30px #ff9eb9;
}

/* ================= PAGE 4 ================= */

#page4 {
  background:linear-gradient(180deg,#260713 0%,#501326 40%,#812d49 75%,#c47a91 100%);
  color:white;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:40px 15px;
  text-align:center;
  overflow:visible;
}

.p4-heading {
  font-size:clamp(27px,5vw,43px);
  font-weight:900;
  color:#fff0f4;
  text-shadow:0 0 20px #ffb2c5;
  margin-bottom:12px;
  z-index:2;
}

.p4-subheading {
  font-size:14px;
  color:#f5c4d1;
  letter-spacing:2px;
  margin-bottom:45px;
  z-index:2;
}

.envelope-area {
  width:min(310px,88vw);
  height:220px;
  position:relative;
  perspective:1000px;
  z-index:3;
  margin-bottom:25px;
}

/* Letter that rises out of envelope */

.letter {
  position:absolute;
  width:min(88vw,560px);
  height:0;
  left:50%;
  bottom:55px;
  transform:translateX(-50%);
  background:#fff6e9;
  color:#65233a;
  border-radius:9px;
  overflow:hidden;
  padding:0 22px;
  box-shadow:0 10px 35px #1a061166;
  z-index:8;
  opacity:0;
  transition:
    height 1s ease,
    bottom 1s ease,
    opacity .5s ease,
    padding .8s ease;
}

.envelope-area.opened .letter {
  height:min(62vh,520px);
  bottom:25px;
  padding:22px;
  opacity:1;
}

.letter-title {
  font-family:Georgia,serif;
  color:#8b2949;
  font-size:23px;
  margin-bottom:15px;
}

.letter-scroll {
  height:calc(100% - 48px);
  overflow-y:auto;
  overscroll-behavior:contain;
  padding-right:7px;
  text-align:left;
  scrollbar-width:thin;
  scrollbar-color:#c77b91 #f6e5e8;
}

.letter-scroll::-webkit-scrollbar {width:6px}
.letter-scroll::-webkit-scrollbar-thumb {
  background:#c77b91;
  border-radius:10px;
}

.letter-message {
  font-family:Georgia,serif;
  font-size:16px;
  line-height:1.9;
  white-space:pre-line;
  color:#65233a;
  padding-bottom:20px;
}

.signature {
  font-family:Georgia,serif;
  font-style:italic;
  color:#9e4560;
  margin:10px 0 25px;
  text-align:right;
}

/* Next button appears at the bottom */

.letter-next {
  display:block;
  margin:20px auto 12px;
  padding:14px 38px;
  background:#a52d55;
  color:white;
  border:2px solid #e8a9bc;
  border-radius:35px;
  font-size:15px;
  font-weight:900;
  letter-spacing:2px;
  cursor:pointer;
  opacity:0;
  pointer-events:none;
  transform:translateY(10px);
  transition:.5s;
}

.letter-next.show {
  opacity:1;
  pointer-events:auto;
  transform:translateY(0);
  box-shadow:0 0 18px #d4779277;
}

/* Envelope */

.envelope {
  position:absolute;
  bottom:0;
  width:100%;
  height:155px;
  background:#9d3557;
  border-radius:5px 5px 12px 12px;
  z-index:3;
  box-shadow:0 12px 30px #16040c66;
}

.envelope::before {
  content:"";
  position:absolute;
  inset:0;
  background:#bb5575;
  clip-path:polygon(0 0,50% 72%,100% 0,100% 100%,0 100%);
  border-radius:5px 5px 12px 12px;
  z-index:4;
}

.flap {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:105px;
  background:#d47792;
  clip-path:polygon(0 0,100% 0,50% 100%);
  transform-origin:top center;
  transition:transform .9s ease;
  z-index:5;
}

.envelope-hearts {
  position:absolute;
  inset:0;
  z-index:6;
  pointer-events:none;
}

.envelope-hearts span {
  position:absolute;
  color:#ffe2eb;
  font-size:19px;
  text-shadow:0 2px 5px #75213f;
}

.envelope-hearts span:nth-child(1) {left:20px;top:65px}
.envelope-hearts span:nth-child(2) {right:25px;top:80px}
.envelope-hearts span:nth-child(3) {left:70px;top:105px}
.envelope-hearts span:nth-child(4) {right:75px;top:45px}
.envelope-hearts span:nth-child(5) {left:145px;top:120px}

.seal {
  position:absolute;
  top:52px;
  left:50%;
  transform:translateX(-50%);
  width:53px;
  height:53px;
  background:#761d3c;
  border:3px solid #f5b6c9;
  border-radius:50%;
  z-index:7;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  box-shadow:0 3px 12px #390b20;
  transition:opacity .5s;
}

.open-button {
  padding:15px 45px;
  background:#f2b2c4;
  border:2px solid #ffe5ec;
  border-radius:40px;
  color:#70213b;
  font-size:16px;
  font-weight:900;
  letter-spacing:2px;
  cursor:pointer;
  box-shadow:0 0 20px #ffb3ca88;
  transition:.3s;
  z-index:9;
}

.open-button:hover {
  transform:scale(1.08);
  background:#fff0f4;
}

.envelope-area.opened .flap {
  transform:rotateX(180deg);
  z-index:1;
}

.envelope-area.opened .seal {opacity:0}

.envelope-area.opened .envelope-hearts {
  opacity:0;
  transition:opacity .4s;
}

.p4-hint {
  color:#fbd3df;
  font-size:12px;
  margin-top:18px;
}

/* ================= PAGE 5 TEMPORARY ================= */

#page5 {
  background:linear-gradient(135deg,#260713,#501326,#812d49);
  color:white;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  text-align:center;
  padding:30px;
}

#page5 h1 {
  font-size:clamp(30px,6vw,48px);
  margin-bottom:20px;
}

.back-button {
  margin-top:25px;
  padding:13px 32px;
  border-radius:30px;
  border:0;
  background:#f2b2c4;
  color:#70213b;
  font-weight:bold;
  cursor:pointer;
}

/* MOBILE */

@media(max-width:700px) {
  .main-heart {width:135px;height:120px}
  #page1 h1 {font-size:35px;line-height:1.25}
  .p1-subtitle {font-size:16px}

  #page3 {
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding:55px 22px;
  }

  .p3-content {width:100%;max-width:100%}
  .small-text {font-size:11px;letter-spacing:2px}
  .p3-heading {font-size:clamp(36px,9vw,52px)}
  .p3-message {max-width:100%;font-size:15px;padding:12px 15px}

  .button-area {
    width:100%;
    justify-content:center;
    margin-top:40px;
  }

  .forward-button {padding:16px 38px;font-size:15px}

  .p4-heading {font-size:30px}
  .p4-subheading {font-size:11px;letter-spacing:1px}
  .letter-message {font-size:15px}
}

</style>
</head>

<body>

<!-- ================= PAGE 1 ================= -->

<section id="page1" class="page active">

  <div class="corner top-left">💗</div>
  <div class="corner top-right">💕</div>
  <div class="corner bottom-left">💖</div>
  <div class="corner bottom-right">💗</div>

  <div class="p1-container">

    <svg class="main-heart" viewBox="0 0 200 180"
         xmlns="http://www.w3.org/2000/svg">

      <path d="M100 168 C80 145 12 100 12 55
        C12 5 76 -8 100 42
        C124 -8 188 5 188 55
        C188 100 120 145 100 168Z"
        fill="#ffc6da"
        stroke="#8e123b"
        stroke-width="7"
        stroke-linejoin="round"/>

      <path d="M40 48 Q43 24 68 22"
        fill="none" stroke="#fff0f5"
        stroke-width="7" stroke-linecap="round"/>
    </svg>

    <h1>HEY BEAUTIFUL...</h1>

    <p class="p1-subtitle">
      This is a beautiful and cute gift for my
      little girl who is dearest to me ❤️
    </p>

    <button class="start-button" onclick="showPage(2)">
      LET'S START 💕
    </button>

  </div>
</section>


<!-- ================= PAGE 2 ================= -->

<section id="page2" class="page">

  <div class="p2-content">

    <h1 class="p2-heading">
      The wait for my favourite person's
      <span>special day</span> is over 💙
    </h1>

    <div class="calendar">

      <div class="calendar-top">A SPECIAL DAY</div>

      <div class="rings">
        <span></span><span></span><span></span>
        <span></span><span></span>
      </div>

      <div class="date-box" id="dateBox">
        <div class="month" id="month">JANUARY</div>
        <div class="day" id="day">01</div>
      </div>

      <div class="calendar-bottom">
        MARK THIS BEAUTIFUL DAY
      </div>

    </div>

    <div class="journey" id="journey">
      Start this beautiful journey 💙
    </div>

    <button class="go-button" id="goButton"
            onclick="showPage(3)">
      GO AHEAD →
    </button>

  </div>

  <div class="celebration" id="celebration"></div>

</section>


<!-- ================= PAGE 3 ================= -->

<section id="page3" class="page">

  <div class="p3-content">

    <div class="small-text">
      A SPECIAL WISH FOR SOMEONE SPECIAL
    </div>

    <h1 class="p3-heading">
      HAPPY BIRTHDAY
      <span>MY BEGUMJAAN ❤️</span>
    </h1>

    <div class="heart-line">♡</div>

    <div class="p3-messages">

      <div class="p3-message">
        This day brings a lot of happiness. 💗
      </div>

      <div class="p3-message">
        May you live long and always keep smiling. ✨
      </div>

      <div class="p3-message">
        Get so much love from your loved ones
        and of course, from me. ❤️
      </div>

    </div>

  </div>

  <div class="button-area">
    <button class="forward-button" onclick="showPage(4)">
      MOVE FORWARD →
    </button>
  </div>

</section>


<!-- ================= PAGE 4 ================= -->

<section id="page4" class="page">

  <h1 class="p4-heading">
    There is a letter for you... 💌
  </h1>

  <p class="p4-subheading">
    SOMETHING SPECIAL, WRITTEN FROM MY HEART
  </p>

  <div class="envelope-area" id="envelopeArea">

    <!-- YOUR PERSONAL LETTER GOES HERE -->

    <div class="letter" id="letter">

      <h2 class="letter-title">
        My Dearest Begumjaan ❤️
      </h2>

      <div class="letter-scroll" id="letterScroll">

        <div class="letter-message" id="letterMessage">


Tasi ji 
happy birthday my love 
Kaise believe ni hota ki aapn yahan tk aa gye 
aapn almost 5 years complete krne wale hai 
kitna achha achha time aapn ne sath me nikala hai I know yeh sab easy nhi tha bahut tough tha mere liye bhi or tumhare liye to khas kr ki 
tumhare sath hona mano jannat sa feel hota hai sab kuch achha lgta hai bura to feel hi  nhi hota (haan isme ladhne wali baatain include nhi hai )
log bolte hai ki jab relationship new new hota hai to log yehsi hi baatain krte hai but pta nhi itna time hone ke baad bhi mujhe sab waisa hi feel hota hai tumse milne aane pr bo ek ajeeb si khusi ko feel krna 
tumhe dekhne ka har sambhab preyas krna 
tumse baat krna mera sabse pasandida kam hona
tumhare pass rehke bo ek comfort feel krna 
tumhare sath rehna tumhari khusbu mehsoos krna 
tumhara hath pakadhna tumhe hug krna sab har bar special feel hota hai 
yehmiyat rakhti ho tum meri zindagi me 
pta nhi kyu but mene kabhi bhi tumse aange socha hi nhi 
mujhe jab bhi kiyal aata hai agar apne alag hone ka to aange kuch dikhta hi nhi mene tumhare sath sare sapne dekhe hai tumhe aapne har sukh dukh me sath rakhna chahta hu 
me life me kafi cheeze krna chahta hu but sab kuch tumhare sath me milke 
me chahta hu ki tum life me khoob successful ho but me sirf yeh chahta nhi hu mujhe yeh krna hi hai tumhe achhi position pr pahuchana hi hai yahi mere pyaar ka sabse pehla goal hai tumhare sath 
I know aapn bahut ladhte hai kai baar ladhai kafi jyada ho jati hai but me to fir bhi tumhare hi pass rehna chahta hu chahe ladhai ho chahe kuch ho me tumse alag nhi hona chahta hu 
ladhte hai todha jab jyada sath rahenge to sayad aapn or behtar ek dusre ko samjh paye or agar tab bhi ladhai nhi kam hui to me yeh to nhi bol rha ki kuch yehsa nhi hone dunga ki ladhai na ho but me har bar kuch bhi ho sabse upr tumhe choose krunga 
mere liye meri tasi pehle hai baki sab badme 
I know me tumhare sath nhi hu is baar ho sakta hai aaj aapn mil bhi na paye but koi baat nhi 
life me ups or downs to hote hi rehte hai 
last year me tumhare sath tumhara hb celebrate kiya tha is bar but kuch possible nhi ho paya 
bura feel ho rha hai is baar me tumhe koi gift bhi nhi de sakta kher tumhara gift mene soch liya hai or jab ab me tumhe yahans se nikal lunga to tumhe ho sakta ho next year tak do gift mile 
once again happy birthday my sweetheart 
love you 

.

.
        </div>

        <p class="signature">
          With all my love ❤️
        </p>

        <button class="letter-next" id="letterNext"
                onclick="showPage(5)">
          NEXT → ❤️
        </button>

      </div>

    </div>

    <!-- ENVELOPE -->

    <div class="envelope">

      <div class="flap"></div>

      <div class="envelope-hearts">
        <span>♡</span>
        <span>♥</span>
        <span>💕</span>
        <span>♡</span>
        <span>♥</span>
      </div>

      <div class="seal">❤️</div>

    </div>

  </div>

  <button class="open-button" id="openButton"
          onclick="openLetter()">
    OPEN IT ❤️
  </button>

  <p class="p4-hint" id="p4Hint">
    A little letter, just for you... 💗
  </p>

</section>


<!-- ================= PAGE 5 TEMPORARY ================= -->

<section id="page5" class="page">

  <h1>Your next surprise is waiting... ❤️</h1>

  <p>A new chapter of our beautiful journey begins!</p>

  <button class="back-button" onclick="showPage(4)">
    ← GO BACK
  </button>

</section>


<script>

/* GENERAL PAGE NAVIGATION */

let currentPage = 1;

function showPage(number) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById("page" + number)
    .classList.add("active");

  currentPage = number;

  window.scrollTo(0,0);

  if(number === 2) startCalendar();

  if(number === 3) {
    // Replay Page 3 entrance animations
    const p3 = document.getElementById("page3");
    p3.querySelectorAll(".small-text,.p3-heading,.heart-line,.p3-message,.button-area")
      .forEach(el => {
        el.style.animation = "none";
        void el.offsetWidth;
        el.style.animation = "";
      });
  }
}


/* PAGE 1 FLOATING HEARTS */

const symbols = ["💗","💕","♡","💖","♥"];

setInterval(() => {

  if(currentPage !== 1) return;

  const heart = document.createElement("div");

  heart.className = "floating-heart";

  heart.innerHTML = symbols[
    Math.floor(Math.random()*symbols.length)
  ];

  heart.style.left = Math.random()*100+"vw";
  heart.style.fontSize = (15+Math.random()*22)+"px";
  heart.style.animationDuration = (5+Math.random()*5)+"s";

  document.getElementById("page1").appendChild(heart);

  setTimeout(() => heart.remove(),10000);

},450);


/* PAGE 2 STARS */

for(let i=0;i<45;i++) {

  const star=document.createElement("div");

  star.className="star";
  star.innerHTML="✦";

  star.style.left=Math.random()*100+"%";
  star.style.top=Math.random()*100+"%";
  star.style.fontSize=(8+Math.random()*15)+"px";
  star.style.animationDelay=Math.random()*3+"s";

  document.querySelector(".p2-content").appendChild(star);
}


/* PAGE 2 CALENDAR */

let calendarStarted=false;

function startCalendar() {

  if(calendarStarted) return;

  calendarStarted=true;

  const months=[
    "JANUARY","FEBRUARY","MARCH","APRIL","MAY",
    "JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER"
  ];

  const start=new Date(Date.UTC(2026,0,1));
  const end=new Date(Date.UTC(2026,10,11));

  const monthElement=document.getElementById("month");
  const dayElement=document.getElementById("day");
  const dateBox=document.getElementById("dateBox");

  let current=new Date(start);

  function showDate(date) {

    monthElement.innerText=months[date.getUTCMonth()];
    dayElement.innerText=String(date.getUTCDate()).padStart(2,"0");

    dateBox.classList.remove("flipping");
    void dateBox.offsetWidth;
    dateBox.classList.add("flipping");
  }

  showDate(current);

  setTimeout(() => {

    let count=0;

    const total=Math.round(
      (end-start)/(24*60*60*1000)
    );

    const timer=setInterval(() => {

      count++;

      current=new Date(
        start.getTime()+(count/total)*(end-start)
      );

      current.setUTCHours(0,0,0,0);

      showDate(current);

      if(count>=total) {

        clearInterval(timer);
        finishCelebration();

      }

    },18);

  },1200);

}


function finishCelebration() {

  document.getElementById("month").innerText="NOVEMBER";
  document.getElementById("day").innerText="11";

  document.getElementById("dateBox")
    .classList.add("final-date");

  const celebration=document.getElementById("celebration");

  const symbols=["✨","🎉","💙","⭐","🎊"];

  for(let i=0;i<100;i++) {

    const spark=document.createElement("div");

    spark.className="spark";

    spark.innerText=symbols[
      Math.floor(Math.random()*symbols.length)
    ];

    spark.style.left=Math.random()*100+"%";
    spark.style.animationDuration=(2+Math.random()*4)+"s";
    spark.style.animationDelay=Math.random()*2+"s";

    celebration.appendChild(spark);
  }

  document.getElementById("journey").classList.add("show");
  document.getElementById("goButton").classList.add("show");
}


/* PAGE 4 BACKGROUND HEARTS */

setInterval(() => {

  if(currentPage !== 4) return;

  const heart=document.createElement("div");

  heart.className="bg-heart";
  heart.innerHTML=["♡","♥","💕","💗"][Math.floor(Math.random()*4)];

  heart.style.position="absolute";
  heart.style.left=Math.random()*100+"%";
  heart.style.bottom="-30px";
  heart.style.color="#ffb6c9";
  heart.style.fontSize=(16+Math.random()*20)+"px";
  heart.style.animation="floatHeart 7s linear forwards";
  heart.style.pointerEvents="none";

  document.getElementById("page4").appendChild(heart);

  setTimeout(()=>heart.remove(),8000);

},600);


/* OPEN THE LETTER */

function openLetter() {

  const envelope=document.getElementById("envelopeArea");

  if(envelope.classList.contains("opened")) return;

  envelope.classList.add("opened");

  document.getElementById("openButton").style.display="none";

  document.getElementById("p4Hint").innerText =
    "Scroll down and read every little word... ❤️";

  // Check whether the letter needs scrolling
  setTimeout(checkLetterBottom,1100);

}


/* SHOW NEXT ONLY WHEN LETTER REACHES ITS END */

const letterScroll=document.getElementById("letterScroll");
const letterNext=document.getElementById("letterNext");

function checkLetterBottom() {

  const atBottom =
    letterScroll.scrollTop + letterScroll.clientHeight
    >= letterScroll.scrollHeight - 12;

  if(atBottom) {
    letterNext.classList.add("show");
    document.getElementById("p4Hint").innerText =
      "You have reached the end of my letter ❤️";
  } else {
    letterNext.classList.remove("show");
  }
}

letterScroll.addEventListener("scroll",checkLetterBottom);


/* PAGE 5 IS TEMPORARY - REAL PAGE WILL BE ADDED LATER */

</script>

</body>
</html>
