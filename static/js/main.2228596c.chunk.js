(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,function(t){t.exports=JSON.parse('[{"id":1,"name":"The Fool","image":"https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-fool.jpg","count":0},{"id":2,"name":"The Magician","image":"https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-magician.jpg","count":0},{"id":3,"name":"The High Priestess","image":"https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-highpriestess.jpg","count":0},{"id":4,"name":"The Empress","image":"https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-empress.jpg","count":0},{"id":5,"name":"The Emperor","image":"https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-emperor.jpg","count":0},{"id":6,"name":"The Hierophant","image":"https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-hierophant.jpg","count":0},{"id":7,"name":"The Lovers","image":"https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-lovers.jpg","count":0},{"id":8,"name":"The Chariot","image":"https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-chariot.jpg","count":0},{"id":9,"name":"Strength","image":"https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-strength.jpg","count":0},{"id":10,"name":"The Hermit","image":"https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-hermit.jpg","count":0},{"id":11,"name":"Wheel of Fortune","image":"https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wheeloffortune.jpg","count":0},{"id":12,"name":"Justice","image":"https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-justice.jpg","count":0}]')},,,,,,,,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(3),c=a.n(o),s=(a(14),a(4)),i=a(5),m=a(7),g=a(6),h=a(8),d=function(t){return n.a.createElement("div",{className:"card col-3 border-0 mb-2 align-items-center",onClick:function(){return t.counter(t.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{className:"img-fluid",alt:t.name,src:t.image})))},l=function(t){return n.a.createElement("div",{className:"wrapper"},t.children)},u=function(t){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"title"},t.children),n.a.createElement("div",{className:"scores"},"Score: ",t.score," High Score: ",t.highscore))},p=a(1),w=(a(15),function(t){function e(){var t,a;Object(s.a)(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(n)))).state={cards:p,score:0,highscore:0},a.gameOver=function(){return a.state.score>a.state.highscore&&a.setState({highscore:a.state.score},(function(){console.log(this.state.highscore)})),a.state.cards.forEach((function(t){t.count=0})),alert("Game Over \nscore: ".concat(a.state.score)),a.setState({score:0}),!0},a.counter=function(t){a.state.cards.find((function(e,r){if(e.id===t){if(0===p[r].count)return p[r].count=p[r].count+1,a.setState({score:a.state.score+1},(function(){console.log(this.state.score)})),a.state.cards.sort((function(){return Math.random()-.5})),!0;a.gameOver()}}))},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement(l,null,n.a.createElement("div",{className:"main m-6"},n.a.createElement("div",{className:"container m-4"},n.a.createElement(u,{score:this.state.score,highscore:this.state.highscore},n.a.createElement("h1",null,"Tarot Memory Game"))),n.a.createElement("div",{className:"container mt-4"},n.a.createElement("div",{className:"row"},this.state.cards.map((function(e){return n.a.createElement(d,{counter:t.counter,id:e.id,key:e.id,image:e.image})}))))))}}]),e}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2228596c.chunk.js.map