import{o as u,c as d,u as o,w as g,n as c,e as m,a as l,d as e}from"./app.644b5070.js";var A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAABGdBTUEAALGPC/xhBQAAAD9JREFUKM9j+P//PwMh3N3d/R+XHAOxBuAyhCQDsBlCsgHohpBlALIhWCWJxRQbAMKUu4DiMKB7LAxcSsQlBwB1RFITkvfTEAAAAABJRU5ErkJggg==";const p=["src","alt","title"],i={props:{item:String},setup(t){function s(n){const r=n.replace("_"," ").split(" ");for(let a=0;a<r.length;a++)r[a]=r[a][0].toUpperCase()+r[a].substr(1);return r.join(" ")}return(n,r)=>t.item?(u(),d("img",{key:0,src:o(g)(`/assets/items/${t.item}.png`),style:c(`padding: 5px; width: 75px; background: url(${o(g)("/assets/common/slot.png")}); background-size: cover; background-repeat: no-repeat; center;`),alt:s(t.item),title:s(t.item)},null,12,p)):m("v-if",!0)}};const y={class:"crafting-table",style:{"image-rendering":"pixelated"}},w=l("p",{class:"title",style:{"padding-left":"10px"}},"Crafting Table",-1),_={style:{display:"grid",padding:"10px","padding-top":"0"}},h=l("img",{src:A,style:{width:"75px",padding:"5px","grid-column-start":"4","grid-row-start":"2"},alt:"Arrow"},null,-1),B={props:{input:Array,output:String},setup(t){return(s,n)=>(u(),d("div",y,[w,l("div",_,[e(i,{item:t.input[0],style:{"grid-column-start":"1","grid-row-start":"1"}},null,8,["item"]),e(i,{item:t.input[1],style:{"grid-column-start":"2","grid-row-start":"1"}},null,8,["item"]),e(i,{item:t.input[2],style:{"grid-column-start":"3","grid-row-start":"1"}},null,8,["item"]),e(i,{item:t.input[3],style:{"grid-column-start":"1","grid-row-start":"2"}},null,8,["item"]),e(i,{item:t.input[4],style:{"grid-column-start":"2","grid-row-start":"2"}},null,8,["item"]),e(i,{item:t.input[5],style:{"grid-column-start":"3","grid-row-start":"2"}},null,8,["item"]),e(i,{item:t.input[6],style:{"grid-column-start":"1","grid-row-start":"3"}},null,8,["item"]),e(i,{item:t.input[7],style:{"grid-column-start":"2","grid-row-start":"3"}},null,8,["item"]),e(i,{item:t.input[8],style:{"grid-column-start":"3","grid-row-start":"3"}},null,8,["item"]),h,e(i,{item:t.output,style:{"grid-column-start":"5","grid-row-start":"2"}},null,8,["item"])])]))}};export{B as _,i as a,A as b};
