import{f as r,a as n}from"../chunks/BciU6upK.js";import"../chunks/Dn-xeAs5.js";import{o as Ke}from"../chunks/BUyBGVwE.js";import{E as Pe,D as Ee,ac as Ue,F as $e,o as c,z as o,G as a,H as i,J as m,I as l}from"../chunks/CrKLhVVU.js";import{s as g}from"../chunks/Du2rIYVo.js";import{p as T,i as u}from"../chunks/Ce3cnRq4.js";import{e as et}from"../chunks/i_-7ZOEr.js";import{i as tt}from"../chunks/ByBP6FjO.js";import{g as B,G as Q}from"../chunks/vg0DZ4Z7.js";import{H as st,N as at}from"../chunks/BiXV2gGN.js";const it=(async({fetch:Y})=>{const d=new Date,t=new Date;d.setDate(d.getDate()),t.setDate(t.getDate()+6);const j=d.getMonth()+1,y=t.getMonth()+1,_=("0"+j).slice(-2),I=("0"+y).slice(-2),M=d.getDate(),k=t.getDate(),h=("0"+M).slice(-2),w=("0"+k).slice(-2),f=d.getFullYear()+"-"+_+"-"+h,W=t.getFullYear()+"-"+I+"-"+w,x=`https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&daily=precipitation_sum&start_date=${f}&end_date=${W}&timezone=Europe%2FBerlin`;return console.log(x),await(await Y(x)).json()}),Lt=Object.freeze(Object.defineProperty({__proto__:null,load:it},Symbol.toStringTag,{value:"Module"}));var lt=r('<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>'),ct=r('<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>'),ot=r('<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>'),nt=r('<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>'),rt=r('<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>'),gt=r('<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>'),vt=r('<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>'),pt=r('<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>'),dt=r('<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>'),mt=r('<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>'),ut=r('<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>'),ht=r('<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>'),jt=r('<img src="images/druppel.svg" alt="icoon van regendruppels" class="svelte-1j6ictg"/>'),yt=r('<img src="images/wolk.svg" alt="icoon van wolk" class="svelte-1j6ictg"/>'),_t=r(`<!> <main class="landing svelte-1j6ictg"><section class="timeline svelte-1j6ictg"><section class="svelte-1j6ictg"><p class="svelte-1j6ictg">Nu</p> <!> <p class="svelte-1j6ictg"> <span class="svelte-1j6ictg">mm</span></p></section> <section class="svelte-1j6ictg"><p class="svelte-1j6ictg"> </p> <!> <p class="svelte-1j6ictg"> <span class="svelte-1j6ictg">mm</span></p></section> <section class="svelte-1j6ictg"><p class="svelte-1j6ictg"> </p> <!> <p class="svelte-1j6ictg"> <span class="svelte-1j6ictg">mm</span></p></section> <section class="svelte-1j6ictg"><p class="svelte-1j6ictg"> </p> <!> <p class="svelte-1j6ictg"> <span class="svelte-1j6ictg">mm</span></p></section> <section class="svelte-1j6ictg"><p class="svelte-1j6ictg"> </p> <!> <p class="svelte-1j6ictg"> <span class="svelte-1j6ictg">mm</span></p></section> <section class="svelte-1j6ictg"><p class="svelte-1j6ictg"> </p> <!> <p class="svelte-1j6ictg"> <span class="svelte-1j6ictg">mm</span></p></section> <section class="svelte-1j6ictg"><p class="svelte-1j6ictg"> </p> <!> <p class="svelte-1j6ictg"> <span class="svelte-1j6ictg">mm</span></p></section></section> <section class="barrel svelte-1j6ictg"><section class="info svelte-1j6ictg"><h2 class="svelte-1j6ictg">Spatwater's Regenton</h2> <p class="svelte-1j6ictg"> </p></section> <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 345.5 434.5" class="svelte-1j6ictg"><defs><style>:root {
              --inhoudPercentage: 20%;
            }
            
            .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7 {
              fill: none;
            }
      
            .cls-8 {
              fill: #ebebeb;
            }
      
            .cls-9 {
              fill: #384b61;
              transform: scaleY(var(--inhoudPercentage)) translateX(0px);
              transform-origin: bottom;
              transition: 1s;
              animation-fill-mode: forwards;
            }
            
            .isLeeg {
              transform: scaleY(20%) translateX(0px);
            }
    
            .cls-2 {
              stroke: #4ecd5d;
            }
      
            .cls-2, .cls-10, .cls-3, .cls-4, .cls-5, .cls-6 {
              stroke-linecap: round;
            }
      
            .cls-2, .cls-3 {
              stroke-width: 10px;
            }
      
            .cls-2, .cls-5, .cls-6 {
              stroke-linejoin: round;
            }
      
            .cls-10 {
              opacity: .25;
            }
      
            .cls-10, .cls-3, .cls-4 {
              stroke-miterlimit: 10;
            }
      
            .cls-10, .cls-3, .cls-4, .cls-5 {
              stroke: #d8d8d8;
            }
      
            .cls-10, .cls-4 {
              stroke-width: 5px;
            }
      
            .cls-5, .cls-6 {
              stroke-width: 15px;
            }
      
            .cls-6 {
              stroke: #77c4e3;
              transition: 1s;
              opacity: 0;
            }

            .isOpen {
              opacity: 1;
            }
      
            .cls-7 {
              clip-path: url(#clippath);
            }</style><clipPath id="clippath"><rect class="cls-1" x="5.5" y="4" width="266" height="423" rx="77.35" ry="77.35"></rect></clipPath></defs><g id="Layer_1-2" data-name="Layer 1"><g><g><line class="cls-6" x1="315.7" y1="427" x2="315.7" y2="347"></line><polyline class="cls-2" points="288.85 327.7 288.85 306.22 340.5 306.22"></polyline><polyline class="cls-5" points="315.7 352.95 315.7 327.7 262 327.7"></polyline></g><g class="cls-7"><rect class="cls-8" x="5.5" y="4" width="266" height="423"></rect><path class="cls-9" d="m271.5,427H5.5V-15C41.19-4.27,86.67,4.89,139.5,4.77c51.94-.11,96.71-9.16,132-19.77v442Z"></path></g><g><path class="cls-3" d="m5,141.95c34.84,8.53,81.41,16.39,136.5,16.05,51.87-.32,95.94-7.83,129.5-16.05"></path><path class="cls-3" d="m5,297.95c34.84,8.53,81.41,16.39,136.5,16.05,51.87-.32,95.94-7.83,129.5-16.05"></path><ellipse class="cls-10" cx="140" cy="22" rx="105" ry="19.5"></ellipse><ellipse class="cls-4" cx="139" cy="22" rx="105" ry="19.5"></ellipse></g></g></g></svg> <section class="background svelte-1j6ictg"><div class="gras svelte-1j6ictg"></div> <div class="svelte-1j6ictg"></div> <div class="svelte-1j6ictg"></div></section> <button class="leeg svelte-1j6ictg">Leeg</button></section> <dialog class="leegDialog svelte-1j6ictg"><h3 class="svelte-1j6ictg">Regenton legen</h3> <p class="svelte-1j6ictg">Weet je zeker dat je je regenton wilt legen?</p> <section class="svelte-1j6ictg"><button class="terug svelte-1j6ictg">Terug</button> <button class="svelte-1j6ictg">Leeg</button></section></dialog> <!></main>`,1);function Ht(Y,d){Pe(d,!1);let t=T(d,"data",8),j=T(d,"elementHuidigOpgevangenWater",12,0),y=T(d,"elementInhoudRegenton",12,0),_;const I=async()=>{console.log("getdata");const e="https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clilodskp031201uhbhpdaltk/master",s=new Q(e,{headers:{authorization:"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcyNTM0NTMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpbG9kc2twMDMxMjAxdWhiaHBkYWx0ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmM5MDMyN2YtZjQ3Ni00YzlkLTlmMjAtNGViMzYwMzE0YTg1IiwianRpIjoiY2xqNDM1NHk3MHJ2bTAxdDk1d2Y4YmxyOCJ9.mtX12JDjdjYcfHqwUg8HeDHMSvfRi2KVhCxRU5r4chMmpQX1BvgZgDvml03NI7zsMZKeVWL_9YIDrjJHw12M-uwWbAbERQlZMhENVIduCyOVfVkZrd31t1tPMikqo2jH3jtMgL-1H01Svk4SdlSub04BTzdYs7s4Xs0z-BCA5EGRr9fXWg75_ckhla4nyYsF0i4v2SazPhgZuD-kjVSK6mlmMCr0kbQg_3vSwNwlS2FWcBTrYR4NXKdWgM2kxipdve74chk8S6o-U_SqvatZUHIAG264asJm67r0q83sPG3sqRAjaC2QyTV8-6dhxSJKI65mfpoxXRORBfLk5wWfAqK8CRAe0p0RyznS_kiPpUyAaOT5hMLwufKKRYBuqgAN7DtK8WWU8uSVFLHHZeK2SM-uGTi3oFM_aRP9pOGVX5pjJnjII6yxedWa3jsb52nJ3neUo_oXIv7LbNfaxPTg6qGICp7jQJ-TQRQ1IDTGpQGYu0BXftXsqZKYTVYDS0Swme1ZMlOgkf-nX2wZM85ktdugZL7Kna1yWbZpOMJx_pnHhAj-yzh1Id7qrnYrHGL220cXVBRKNQJz0A0VXNWOtMG5P7DyuEAd9zhoOA4YgOcxyXnrFls9a8qL-x0ADqWf2HbndxA7evk3ByGMvQz9NwhHscp2aCC0vjvtfBQ2OCM"}}),v=B`
      query {
        gegevens(stage: DRAFT, last: 1) {
          id
          huidigOpgevangenWater
          inhoudRegenton
        }
      }
      `,p=await s.request(v);console.log("Log: "+p),x(p.gegevens),j(p.gegevens[0].huidigOpgevangenWater),y(p.gegevens[0].inhoudRegenton),j()===y()&&_.classList.add("show"),console.log(huidigOpgevangenWater),console.log(inhoudRegenton)};let M,k,h,w,f,W;Ke(()=>{M=document.getElementsByClassName("leeg")[0],k=document.getElementsByClassName("terug")[0],h=document.getElementsByClassName("leegDialog")[0],w=document.querySelector(".cls-9"),F(),K(),f=document.querySelector(".gras"),W=document.querySelector(".cls-6"),_=document.querySelector(".noti"),console.log("test"),I()});function x(e){let s=100/e[0].inhoudRegenton*e[0].huidigOpgevangenWater;console.log("Percentage: "+s);const v=document.querySelector(":root");getComputedStyle(v),s<20?v.style.setProperty("--inhoudPercentage","20%"):v.style.setProperty("--inhoudPercentage",`${s}%`)}function F(){M.addEventListener("click",()=>{h.showModal()})}function K(){k.addEventListener("click",()=>{h.close()})}const je=async()=>{const e="https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clilodskp031201uhbhpdaltk/master",s=new Q(e,{headers:{authorization:"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcyNTM0NTMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpbG9kc2twMDMxMjAxdWhiaHBkYWx0ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmM5MDMyN2YtZjQ3Ni00YzlkLTlmMjAtNGViMzYwMzE0YTg1IiwianRpIjoiY2xqNDM1NHk3MHJ2bTAxdDk1d2Y4YmxyOCJ9.mtX12JDjdjYcfHqwUg8HeDHMSvfRi2KVhCxRU5r4chMmpQX1BvgZgDvml03NI7zsMZKeVWL_9YIDrjJHw12M-uwWbAbERQlZMhENVIduCyOVfVkZrd31t1tPMikqo2jH3jtMgL-1H01Svk4SdlSub04BTzdYs7s4Xs0z-BCA5EGRr9fXWg75_ckhla4nyYsF0i4v2SazPhgZuD-kjVSK6mlmMCr0kbQg_3vSwNwlS2FWcBTrYR4NXKdWgM2kxipdve74chk8S6o-U_SqvatZUHIAG264asJm67r0q83sPG3sqRAjaC2QyTV8-6dhxSJKI65mfpoxXRORBfLk5wWfAqK8CRAe0p0RyznS_kiPpUyAaOT5hMLwufKKRYBuqgAN7DtK8WWU8uSVFLHHZeK2SM-uGTi3oFM_aRP9pOGVX5pjJnjII6yxedWa3jsb52nJ3neUo_oXIv7LbNfaxPTg6qGICp7jQJ-TQRQ1IDTGpQGYu0BXftXsqZKYTVYDS0Swme1ZMlOgkf-nX2wZM85ktdugZL7Kna1yWbZpOMJx_pnHhAj-yzh1Id7qrnYrHGL220cXVBRKNQJz0A0VXNWOtMG5P7DyuEAd9zhoOA4YgOcxyXnrFls9a8qL-x0ADqWf2HbndxA7evk3ByGMvQz9NwhHscp2aCC0vjvtfBQ2OCM"}}),v=B`
      query {
        gegevens(stage: DRAFT, last: 1) {
          id
        }
      }
      `,p=await s.request(v);return ye(p.gegevens[0].id),p.gegevens[0].id},ye=async e=>{const s="https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clilodskp031201uhbhpdaltk/master",v=e,p=new Q(s,{headers:{authorization:"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcyNTM0NTMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpbG9kc2twMDMxMjAxdWhiaHBkYWx0ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmM5MDMyN2YtZjQ3Ni00YzlkLTlmMjAtNGViMzYwMzE0YTg1IiwianRpIjoiY2xqNDM1NHk3MHJ2bTAxdDk1d2Y4YmxyOCJ9.mtX12JDjdjYcfHqwUg8HeDHMSvfRi2KVhCxRU5r4chMmpQX1BvgZgDvml03NI7zsMZKeVWL_9YIDrjJHw12M-uwWbAbERQlZMhENVIduCyOVfVkZrd31t1tPMikqo2jH3jtMgL-1H01Svk4SdlSub04BTzdYs7s4Xs0z-BCA5EGRr9fXWg75_ckhla4nyYsF0i4v2SazPhgZuD-kjVSK6mlmMCr0kbQg_3vSwNwlS2FWcBTrYR4NXKdWgM2kxipdve74chk8S6o-U_SqvatZUHIAG264asJm67r0q83sPG3sqRAjaC2QyTV8-6dhxSJKI65mfpoxXRORBfLk5wWfAqK8CRAe0p0RyznS_kiPpUyAaOT5hMLwufKKRYBuqgAN7DtK8WWU8uSVFLHHZeK2SM-uGTi3oFM_aRP9pOGVX5pjJnjII6yxedWa3jsb52nJ3neUo_oXIv7LbNfaxPTg6qGICp7jQJ-TQRQ1IDTGpQGYu0BXftXsqZKYTVYDS0Swme1ZMlOgkf-nX2wZM85ktdugZL7Kna1yWbZpOMJx_pnHhAj-yzh1Id7qrnYrHGL220cXVBRKNQJz0A0VXNWOtMG5P7DyuEAd9zhoOA4YgOcxyXnrFls9a8qL-x0ADqWf2HbndxA7evk3ByGMvQz9NwhHscp2aCC0vjvtfBQ2OCM"}}),q=B`
      mutation {
        updateBRAIN_data(data: {huidigOpgevangenWater: 0}, where: {id: "${v}"}) {
          huidigOpgevangenWater
        }
      }
      `,G=await p.request(q);console.log(G),h.close(),w.classList.add("isLeeg"),f.classList.add("kleurGras"),W.classList.add("isOpen"),I()};tt();var P=_t(),E=Ee(P);st(E,{});var U=i(E,2),b=a(U),D=a(b),$=i(a(D),2);{var _e=e=>{var s=lt();n(e,s)},Ie=e=>{var s=ct();n(e,s)};u($,e=>{o(t()),c(()=>t().daily.precipitation_sum[0]>0)?e(_e):e(Ie,!1)})}var ee=i($,2),Me=a(ee,!0);m(),l(ee),l(D);var L=i(D,2),H=a(L),ke=a(H,!0);l(H);var te=i(H,2);{var we=e=>{var s=ot();n(e,s)},fe=e=>{var s=nt();n(e,s)};u(te,e=>{o(t()),c(()=>t().daily.precipitation_sum[1]>0)?e(we):e(fe,!1)})}var se=i(te,2),We=a(se,!0);m(),l(se),l(L);var N=i(L,2),C=a(N),xe=a(C,!0);l(C);var ae=i(C,2);{var Ye=e=>{var s=rt();n(e,s)},be=e=>{var s=gt();n(e,s)};u(ae,e=>{o(t()),c(()=>t().daily.precipitation_sum[2]>0)?e(Ye):e(be,!1)})}var ie=i(ae,2),De=a(ie,!0);m(),l(ie),l(N);var S=i(N,2),X=a(S),Le=a(X,!0);l(X);var le=i(X,2);{var He=e=>{var s=vt();n(e,s)},Ne=e=>{var s=pt();n(e,s)};u(le,e=>{o(t()),c(()=>t().daily.precipitation_sum[3]>0)?e(He):e(Ne,!1)})}var ce=i(le,2),Ce=a(ce,!0);m(),l(ce),l(S);var z=i(S,2),Z=a(z),Se=a(Z,!0);l(Z);var oe=i(Z,2);{var Xe=e=>{var s=dt();n(e,s)},ze=e=>{var s=mt();n(e,s)};u(oe,e=>{o(t()),c(()=>t().daily.precipitation_sum[4]>0)?e(Xe):e(ze,!1)})}var ne=i(oe,2),Ze=a(ne,!0);m(),l(ne),l(z);var R=i(z,2),J=a(R),Re=a(J,!0);l(J);var re=i(J,2);{var Je=e=>{var s=ut();n(e,s)},Ve=e=>{var s=ht();n(e,s)};u(re,e=>{o(t()),c(()=>t().daily.precipitation_sum[5]>0)?e(Je):e(Ve,!1)})}var ge=i(re,2),Oe=a(ge);m(),l(ge),l(R);var ve=i(R,2),V=a(ve),Ae=a(V,!0);l(V);var pe=i(V,2);{var qe=e=>{var s=jt();n(e,s)},Ge=e=>{var s=yt();n(e,s)};u(pe,e=>{o(t()),c(()=>t().daily.precipitation_sum[6]>0)?e(qe):e(Ge,!1)})}var de=i(pe,2),Te=a(de,!0);m(),l(de),l(ve),l(b);var O=i(b,2),me=a(O),ue=i(a(me),2),Be=a(ue);l(ue),l(me),m(6),l(O);var A=i(O,2),he=i(a(A),4),Qe=i(a(he),2);l(he),l(A);var Fe=i(A,2);at(Fe,{}),l(U),Ue((e,s,v,p,q,G)=>{g(Me,(o(t()),c(()=>t().daily.precipitation_sum[0]))),g(ke,e),g(We,(o(t()),c(()=>t().daily.precipitation_sum[1]))),g(xe,s),g(De,(o(t()),c(()=>t().daily.precipitation_sum[2]))),g(Le,v),g(Ce,(o(t()),c(()=>t().daily.precipitation_sum[3]))),g(Se,p),g(Ze,(o(t()),c(()=>t().daily.precipitation_sum[4]))),g(Re,q),g(Oe,`${o(t()),c(()=>t().daily.precipitation_sum[5])??""} `),g(Ae,G),g(Te,(o(t()),c(()=>t().daily.precipitation_sum[6]))),g(Be,`${j()??""} / ${y()??""}L`)},[()=>(o(t()),c(()=>t().daily.time[1].slice(-2))),()=>(o(t()),c(()=>t().daily.time[2].slice(-2))),()=>(o(t()),c(()=>t().daily.time[3].slice(-2))),()=>(o(t()),c(()=>t().daily.time[4].slice(-2))),()=>(o(t()),c(()=>t().daily.time[5].slice(-2))),()=>(o(t()),c(()=>t().daily.time[6].slice(-2)))]),et("click",Qe,je),n(Y,P),$e()}export{Ht as component,Lt as universal};
