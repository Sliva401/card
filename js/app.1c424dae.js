(function(){"use strict";var t={3817:function(t,e,n){var o=n(9242),s=n(3396);const r={class:"card-wrapper"},a={class:"card-container"};function i(t,e,n,i,c,d){const l=(0,s.up)("appCard"),h=(0,s.up)("dictionary");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",a,[(0,s._)("div",{class:"btn drop",onClick:e[0]||(e[0]=(...t)=>d.indexDrop&&d.indexDrop(...t))},"drop"),(0,s.Wm)(l,{wordsData:c.wordsData,index:c.index},null,8,["wordsData","index"]),(0,s._)("div",{class:"btn learn",onClick:e[1]||(e[1]=(...t)=>d.indexUp&&d.indexUp(...t))},"learn")]),(0,s._)("div",{class:"btn dictionary-btn",onClick:e[2]||(e[2]=t=>c.dictionaryOpen=!c.dictionaryOpen)},"dictionary"),(0,s.wy)((0,s.Wm)(h,{onChangeCardContent:d.changeCardContent,onCloseDictionary:d.closeDictionary,words:c.wordsData},null,8,["onChangeCardContent","onCloseDictionary","words"]),[[o.F8,c.dictionaryOpen]])])}var c=n(7139);const d={class:"front"},l={class:"back"};function h(t,e,n,o,r,a){return(0,s.wg)(),(0,s.iD)("div",{class:(0,c.C_)(["card",{active:r.rotateActive}]),onClick:e[0]||(e[0]=t=>r.rotateActive=!r.rotateActive)},[(0,s._)("div",d,(0,c.zw)(n.wordsData[n.index].first),1),(0,s._)("div",l,(0,c.zw)(n.wordsData[n.index].second),1)],2)}var u={data(){return{rotateActive:!1}},props:{wordsData:Array,index:Number},methods:{}},w=n(89);const p=(0,w.Z)(u,[["render",h],["__scopeId","data-v-c1fbf00e"]]);var f=p;const v=t=>((0,s.dD)("data-v-747ebc74"),t=t(),(0,s.Cn)(),t),D={class:"dictionary"},C={class:"words-book"},m=["onClick"],y={class:"input-bar"},g={class:"search-bar"},b=v((()=>(0,s._)("button",{class:"search-btn"},"🔍",-1))),x={class:"counter"};function _(t,e,n,r,a,i){const d=(0,s.up)("wordsColection");return(0,s.wg)(),(0,s.iD)("div",D,[(0,s.Wm)(d,{onSelectedColection:i.selectedColection},null,8,["onSelectedColection"]),(0,s._)("div",C,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.wordsData,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"words-item",onClick:t=>i.removeWord(e),key:t},(0,c.zw)(t.first)+": "+(0,c.zw)(t.second),9,m)))),128))]),(0,s._)("div",y,[(0,s._)("div",g,[(0,s.wy)((0,s._)("input",{type:"search",class:"search-input",maxlength:"40",onInput:e[0]||(e[0]=(...t)=>i.searchWord&&i.searchWord(...t)),"onUpdate:modelValue":e[1]||(e[1]=t=>a.searchInput=t)},null,544),[[o.nr,a.searchInput]]),b]),(0,s.wy)((0,s._)("input",{type:"text",class:"input","onUpdate:modelValue":e[2]||(e[2]=t=>a.inputData=t)},null,512),[[o.nr,a.inputData]]),(0,s._)("div",{class:"enter-btn button",onClick:e[3]||(e[3]=(...t)=>i.inputEnter&&i.inputEnter(...t)),onEnter:e[4]||(e[4]=(...t)=>i.inputEnter&&i.inputEnter(...t))},"←",32),(0,s._)("div",{class:"clear-all-btn button",onClick:e[5]||(e[5]=(...t)=>i.clearAll&&i.clearAll(...t))},"clear all"),(0,s._)("div",{class:"save-btn",onClick:e[6]||(e[6]=(...t)=>i.saveData&&i.saveData(...t))}),(0,s._)("div",x,"pairs:"+(0,c.zw)(a.wordsCounter),1)]),(0,s._)("div",{class:"close-btn",onClick:e[7]||(e[7]=(...t)=>i.closeDictionary&&i.closeDictionary(...t))},"X")])}const k={class:"words-colection"},O=["onClick"];function I(t,e,n,o,r,a){return(0,s.wg)(),(0,s.iD)("div",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.colectionItems,(t=>((0,s.wg)(),(0,s.iD)("div",{class:(0,c.C_)(["colection-item",{active:t.active}]),onClick:e=>a.chooseColection(t),key:t.content},(0,c.zw)(t.content),11,O)))),128))])}var A={data(){return{colectionItems:[{active:!0,content:"custom"},{active:!1,content:100},{active:!1,content:500},{active:!1,content:1e3},{active:!1,content:5e3}],defaultValue:[{first:"add new words",second:"добавьте новые слова"}]}},methods:{chooseColection(t){for(let e of this.colectionItems)e.active=!1;if(t.active=!0,"custom"===t.content)this.$emit("selectedColection",this.defaultValue);else{let e=new XMLHttpRequest;e.open("GET","data.json"),e.onload=()=>{let n=JSON.parse(e.response).words.splice(0,t.content);this.$emit("selectedColection",n)},e.send()}}}};const M=(0,w.Z)(A,[["render",I],["__scopeId","data-v-78cdc066"]]);var j=M,E={components:{wordsColection:j},data(){return{wordsData:this.words,inputData:"",wordsCounter:this.words.length,searchInput:"",searchMemory:[{first:"add new words",second:"добавьте новые слова"}],customActive:!0}},props:{words:Array},methods:{searchWord(){if(this.wordsData=this.searchMemory,1!==this.wordsData.length){let t=[];for(let e=0;e<this.wordsData.length;e++)this.wordsData[e].first.includes(this.searchInput)&&t.push(this.wordsData[e]);this.wordsData=t}""===this.searchInput&&(this.searchMemory=this.wordsData,this.$emit("changeCardContent",this.wordsData))},counterCheck(){this.wordsCounter=this.wordsData.length},closeDictionary(){this.searchInput="",this.wordsData=this.searchMemory,this.$emit("closeDictionary")},selectedColection(t){this.wordsData=t,this.counterCheck(),this.$emit("changeCardContent",this.wordsData),this.searchMemory=t},clearAll(){this.wordsData=[{first:"add new words",second:"добавьте новые слова"}],this.$emit("changeCardContent",this.wordsData),this.counterCheck()},inputEnter(){if("add new words"===this.wordsData[0].first&&(this.wordsData=[]),""!==this.inputData&&""===this.searchInput){let t=this.inputData.split(" ");t=t.map((t=>t.replace(/\./gi," "))),t.length%2!==0&&t.push("");for(let e=0;e<t.length;e++)e%2===0&&this.wordsData.push({first:t[e],second:t[e+1]}),this.searchMemory=this.wordsData}this.$emit("changeCardContent",this.wordsData),this.inputData="",this.counterCheck()},removeWord(t){this.searchMemory=this.searchMemory.filter((e=>e!==this.wordsData[t])),this.wordsData=this.wordsData.filter((e=>e!==this.wordsData[t])),0===this.wordsData.length&&(this.wordsData=[{first:"add new words",second:"добавьте новые слова"}]),this.$emit("changeCardContent",this.wordsData),this.counterCheck()},saveData(){let t=[];for(let e of this.searchMemory)t.push(e.first),t.push(e.second);t=t.map((t=>t.replace(/ /gi,"."))),t=t.join(" "),navigator.clipboard.writeText(t)}}};const W=(0,w.Z)(E,[["render",_],["__scopeId","data-v-747ebc74"]]);var $=W,z={name:"App",components:{appCard:f,dictionary:$},data(){return{dictionaryOpen:!1,wordsData:[{first:"add new words",second:"добавьте новые слова"}],index:0}},methods:{closeDictionary(){this.dictionaryOpen=!1},changeCardContent(t){this.wordsData=t,this.index=0},indexUp(){this.index===this.wordsData.length-1?this.index=0:++this.index},indexDrop(){1===this.wordsData.length?this.wordsData[0]={first:"add new words",second:"добавьте новые слова"}:this.index===this.wordsData.length-1?(this.wordsData.splice(this.index,1),this.index=0):this.wordsData.splice(this.index,1)}}};const U=(0,w.Z)(z,[["render",i]]);var T=U;(0,o.ri)(T).mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,r){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],s=t[l][1],r=t[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(i=!1,r<a&&(a=r));if(i){t.splice(l--,1);var d=s();void 0!==d&&(e=d)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[o,s,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,r,a=o[0],i=o[1],c=o[2],d=0;if(a.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var l=c(n)}for(e&&e(o);d<a.length;d++)r=a[d],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(l)},o=self["webpackChunkcards"]=self["webpackChunkcards"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3817)}));o=n.O(o)})();
//# sourceMappingURL=app.1c424dae.js.map