(this.webpackJsonpsuperchat=this.webpackJsonpsuperchat||[]).push([[0],{25:function(e,t,a){e.exports=a(44)},30:function(e,t,a){},32:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(21),o=a.n(c),i=(a(30),a(11)),l=a.n(i),u=a(22),s=a(9),m=(a(32),a(12)),d=a.n(m),p=(a(15),a(17),a(23)),f=a(24),h=a(13);a(39),a(40);h.initializeApp({apiKey:"AIzaSyBNUQh1llCf2gwLGStu5-b0v7iBdCRw6fE",authDomain:"fire-chat-2a1b8.firebaseapp.com",databaseURL:"https://fire-chat-2a1b8.firebaseio.com",projectId:"fire-chat-2a1b8",storageBucket:"fire-chat-2a1b8.appspot.com",messagingSenderId:"847102902935",appId:"1:847102902935:web:010c3a686e2ddc80519fd2",measurementId:"G-PBW7W0GXNG"});var g=h,b=g.auth(),E=g.firestore();function v(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;b.signInWithPopup(e)}},"Sign in with Google"),r.a.createElement("p",null,"Temos Regras se quebra-las ser\xe1 banido ",r.a.createElement("strong",null,"for life!")))}function w(){return b.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){return b.signOut()}},"Sair")}function j(){var e=Object(n.useRef)(),t=E.collection("messages"),a=t.orderBy("createdAt").limit(25),c=Object(f.a)(a,{idField:"id"}),o=Object(s.a)(c,1)[0],i=Object(n.useState)(""),m=Object(s.a)(i,2),p=m[0],h=m[1],g=function(){var a=Object(u.a)(l.a.mark((function a(n){var r,c,o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=b.currentUser,c=r.uid,o=r.photoURL,a.next=4,t.add({text:p,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:o});case 4:h(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,o&&o.map((function(e){return r.a.createElement(k,{key:e.id,message:e})})),r.a.createElement("span",{ref:e})),r.a.createElement("form",{onSubmit:g},r.a.createElement("input",{value:p,onChange:function(e){return h(e.target.value)},placeholder:"diga algo"}),r.a.createElement("button",{type:"submit",disabled:!p},"\ud83d\udd4a\ufe0f")))}function k(e){var t=e.message,a=t.text,n=t.uid,c=t.photoURL,o=n===b.currentUser.uid?"sent":"received";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mensagem: ".concat(o)},r.a.createElement("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"}),r.a.createElement("p",null,a)))}var O=function(){var e=Object(p.a)(b),t=Object(s.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"),r.a.createElement(w,null)),r.a.createElement("section",null,t?r.a.createElement(j,null):r.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41).config(),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.3ae3e943.chunk.js.map