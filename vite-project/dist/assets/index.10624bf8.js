import{j as n,r as l,a as u,R as f,b as m}from"./vendor.c1ad8847.js";const h=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};h();var p="/assets/icon-dice.60cce3a8.svg",g="/assets/pattern-divider-mobile.b5c73e4e.svg";const s=n.exports.jsx,d=n.exports.jsxs,v=n.exports.Fragment,y=()=>{const a="https://api.adviceslip.com/advice",[t,c]=l.exports.useState({}),o=async()=>{c({}),u.get(a).then(({data:e})=>{c(e.slip)}).catch(e=>{console.log(e),c({id:0,advice:"Sorry, there was an error"})})};return l.exports.useEffect(async()=>{await o()},[]),s("main",{children:s("div",{className:"card",children:Object.keys(t).length===0?s("h2",{className:"advice",children:"Loading..."}):d(v,{children:[d("h1",{className:"header",children:["Advice #",t==null?void 0:t.id]}),s("h2",{className:"advice",children:t==null?void 0:t.advice}),s("img",{src:g,alt:"",className:"divider"}),s("button",{className:"shuffle",onClick:()=>{console.log("click"),o()},children:s("img",{src:p,alt:"",className:"divider"})})]})})})};f.render(s(m.StrictMode,{children:s(y,{})}),document.getElementById("root"));
