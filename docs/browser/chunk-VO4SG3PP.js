import{a as s}from"./chunk-UDNK7RUO.js";import{N as i,T as p}from"./chunk-SAGREHIV.js";var n="https://api.coincap.io/v2/assets";var L=(()=>{let t=class t{constructor(){this.http=p(s),this.URL=n}getCrypto(e,r){return this.http.get(`${this.URL}?limit=${e}&offset=${r}`)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();export{n as a,L as b};