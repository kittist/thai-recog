(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),c=n(9),s=n.n(c),a=(n(16),n(2)),r=n(3),l=n(5),g=n(4),d=n(6),u=(n(8),n(1)),m=function(e){function t(){var e;if(Object(a.a)(this,t),(e=Object(l.a)(this,Object(g.a)(t).call(this))).handleListen=function(){var t=Object(u.a)(Object(u.a)(e)).recognition;if("SpeechRecognition"in window||"webkitSpeechRecognition"in window){console.log("listening?",e.state.listening),e.state.listening?(t.start(),t.onend=function(){console.log("...continue listening..."),t.start()}):(t.stop(),t.onend=function(){console.log("Stopped listening per click")}),t.onstart=function(){console.log("Listening!")};var n="";t.onresult=function(i){for(var o="",c=i.resultIndex;c<i.results.length;c++){var s=i.results[c][0].transcript;i.results[c].isFinal?n+=s+" ":o+=s}e.setState({interim:o}),e.setState({text:n});var a=n.split(" "),r=a.slice(-3,-1);console.log("stopCmd",r),"stop"===r[0]&&"listening"===r[1]&&(t.stop(),t.onend=function(){console.log("Stopped listening per command");var e=a.slice(0,-3).join(" ");document.getElementById("final").innerHTML=e})},t.onerror=function(e){console.log("Error occurred in recognition: "+e.error)}}},e.state={listening:!1,interim:"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e41\u0e1b\u0e25\u0e07\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e1e\u0e39\u0e14\u0e44\u0e14\u0e49\u0e14\u0e49\u0e27\u0e22\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 '\u0e1f\u0e31\u0e07\u0e40\u0e25\u0e22' \u0e15\u0e23\u0e07\u0e1a\u0e19\u0e02\u0e27\u0e32",text:""},e.recognition="","SpeechRecognition"in window||"webkitSpeechRecognition"in window){var n=window.webkitSpeechRecognition;e.recognition=new n,e.recognition.continous=!0,e.recognition.interimResults=!0,e.recognition.lang="th-TH"}return e.toggleListen=e.toggleListen.bind(Object(u.a)(Object(u.a)(e))),e.handleListen=e.handleListen.bind(Object(u.a)(Object(u.a)(e))),e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"toggleListen",value:function(){this.setState({listening:!this.state.listening},this.handleListen)}},{key:"render",value:function(){return console.log(window.webkitSpeechRecognition),o.a.createElement("div",{className:"Recog"},o.a.createElement("button",{id:"microphone-btn",className:"Recog-btn",onClick:this.toggleListen,style:{backgroundColor:this.state.listening?"red":"green"}},this.state.listening?"\u0e2b\u0e22\u0e38\u0e14\u0e1f\u0e31\u0e07":"\u0e1f\u0e31\u0e07\u0e40\u0e25\u0e22"),o.a.createElement("div",{className:"Recog-text-div "},o.a.createElement("div",{className:"Recog-text"},o.a.createElement("p",{className:"Recog-complete-text"},this.state.text),o.a.createElement("p",{className:"Recog-interim-text"},this.state.interim))))}}]),t}(i.Component),h=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window?o.a.createElement("div",{className:"App"},o.a.createElement(m,null)):o.a.createElement("div",{className:"Recog-text-div Recog-text"},"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e43\u0e0a\u0e49 Chrome browser \u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19")}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){}},[[10,2,1]]]);
//# sourceMappingURL=main.ae12ccb9.chunk.js.map