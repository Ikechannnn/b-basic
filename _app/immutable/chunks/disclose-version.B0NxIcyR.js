import{c as _}from"./runtime.D-PKGVEq.js";function l(n){console.warn("hydration_mismatch")}const w=1,g=2,x=4,O=8,b=16,T=1,I=2,E="[",y="[!",R="]",m={},C=Symbol();let a=!1;function D(n){a=n}let r;function f(n){if(n===null)throw l(),m;return r=n}function v(){return f(r.nextSibling)}function L(n){if(a){if(r.nextSibling!==null)throw l(),m;r=n}}function M(){a&&v()}function U(){for(var n=0,e=r;;){if(e.nodeType===8){var t=e.data;if(t===R){if(n===0)return e;n-=1}else(t===E||t===y)&&(n+=1)}var s=e.nextSibling;e.remove(),e=s}}var d;function H(){if(d===void 0){d=window;var n=Element.prototype;n.__click=void 0,n.__className="",n.__attributes=null,n.__e=void 0,Text.prototype.__t=void 0}}function c(){return document.createTextNode("")}function Y(n){if(!a)return n.firstChild;var e=r.firstChild;return e===null&&(e=r.appendChild(c())),f(e),e}function B(n,e){if(!a){var t=n.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}return r}function k(n,e=!1){if(!a)return n.nextSibling;var t=r.nextSibling,s=t.nodeType;if(e&&s!==3){var i=c();return t==null||t.before(i),f(i),i}return f(t),t}function F(n){n.textContent=""}function N(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function o(n,e){var t;(t=_).nodes??(t.nodes={start:n,end:e})}function Z(n,e){var t=(e&T)!==0,s=(e&I)!==0,i,h=!n.startsWith("<!>");return()=>{if(a)return o(r,null),r;i||(i=N(h?n:"<!>"+n),t||(i=i.firstChild));var u=s?document.importNode(i,!0):i.cloneNode(!0);if(t){var p=u.firstChild,S=u.lastChild;o(p,S)}else o(u,u);return u}}function j(){if(!a){var n=c();return o(n,n),n}var e=r;return e.nodeType!==3&&(e.before(e=c()),f(e)),o(e,e),e}function q(){if(a)return o(r,null),r;var n=document.createDocumentFragment(),e=document.createComment(""),t=c();return n.append(e,t),o(e,t),n}function z(n,e){if(a){_.nodes.end=r,v();return}n!==null&&n.before(e)}const A="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(A);export{j as A,E as H,x as P,C as U,z as a,m as b,Y as c,D as d,c as e,B as f,f as g,v as h,r as i,R as j,l as k,H as l,F as m,M as n,a as o,o as p,q,L as r,k as s,Z as t,y as u,U as v,w,g as x,O as y,b as z};