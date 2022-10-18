(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function L(){}function ae(e){return e()}function le(){return Object.create(null)}function K(e){e.forEach(ae)}function fe(e){return typeof e=="function"}function ue(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let B;function ce(e,t){return B||(B=document.createElement("a")),B.href=t,e===B.href}function $e(e){return Object.keys(e).length===0}let G=!1;function be(){G=!0}function xe(){G=!1}function Ee(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function we(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let a=0;a<t.length;a++){const d=t[a];d.claim_order!==void 0&&c.push(d)}t=c}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let c=0;c<t.length;c++){const a=t[c].claim_order,d=(r>0&&t[n[r]].claim_order<=a?r+1:Ee(1,r,x=>t[n[x]].claim_order,a))-1;i[c]=n[d]+1;const u=d+1;n[u]=c,r=Math.max(u,r)}const s=[],l=[];let o=t.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(s.push(t[c-1]);o>=c;o--)l.push(t[o]);o--}for(;o>=0;o--)l.push(t[o]);s.reverse(),l.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<l.length;c++){for(;a<s.length&&l[c].claim_order>=s[a].claim_order;)a++;const d=a<s.length?s[a]:null;e.insertBefore(l[c],d)}}function f(e,t){if(G){for(we(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function de(e,t,n){G&&!n?f(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function C(){return b(" ")}function Se(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e){return Array.from(e.childNodes)}function Ae(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function _e(e,t,n,i,r=!1){Ae(e);const s=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const o=e[l];if(t(o)){const c=n(o);return c===void 0?e.splice(l,1):e[l]=c,r||(e.claim_info.last_index=l),o}}for(let l=e.claim_info.last_index-1;l>=0;l--){const o=e[l];if(t(o)){const c=n(o);return c===void 0?e.splice(l,1):e[l]=c,r?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,o}}return i()})();return s.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,s}function Ne(e,t,n,i){return _e(e,r=>r.nodeName===t,r=>{const s=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];n[o.name]||s.push(o.name)}s.forEach(l=>r.removeAttribute(l))},()=>i(t))}function g(e,t,n){return Ne(e,t,n,h)}function E(e,t){return _e(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>b(t),!0)}function V(e){return E(e," ")}function ke(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let Y;function I(e){Y=e}const j=[],oe=[],q=[],se=[],Le=Promise.resolve();let U=!1;function Ce(){U||(U=!0,Le.then(he))}function X(e){q.push(e)}const R=new Set;let P=0;function he(){const e=Y;do{for(;P<j.length;){const t=j[P];P++,I(t),Ve(t.$$)}for(I(null),j.length=0,P=0;oe.length;)oe.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];R.has(n)||(R.add(n),n())}q.length=0}while(j.length);for(;se.length;)se.pop()();U=!1,R.clear(),I(e)}function Ve(e){if(e.fragment!==null){e.update(),K(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}const D=new Set;let je;function me(e,t){e&&e.i&&(D.delete(e),e.i(t))}function Ie(e,t,n,i){if(e&&e.o){if(D.has(e))return;D.add(e),je.c.push(()=>{D.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Oe(e){e&&e.c()}function Me(e,t){e&&e.l(t)}function pe(e,t,n,i){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),i||X(()=>{const l=e.$$.on_mount.map(ae).filter(fe);e.$$.on_destroy?e.$$.on_destroy.push(...l):K(l),e.$$.on_mount=[]}),s.forEach(X)}function ge(e,t){const n=e.$$;n.fragment!==null&&(K(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Te(e,t){e.$$.dirty[0]===-1&&(j.push(e),Ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,i,r,s,l,o=[-1]){const c=Y;I(e);const a=e.$$={fragment:null,ctx:[],props:s,update:L,not_equal:r,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:le(),dirty:o,skip_bound:!1,root:t.target||c.$$.root};l&&l(a.root);let d=!1;if(a.ctx=n?n(e,t.props||{},(u,x,...N)=>{const y=N.length?N[0]:x;return a.ctx&&r(a.ctx[u],a.ctx[u]=y)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](y),d&&Te(e,u)),x}):[],a.update(),d=!0,K(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){be();const u=v(t.target);a.fragment&&a.fragment.l(u),u.forEach(m)}else a.fragment&&a.fragment.c();t.intro&&me(e.$$.fragment),pe(e,t.target,t.anchor,t.customElement),xe(),he()}I(c)}class ye{$destroy(){ge(this,1),this.$destroy=L}$on(t,n){if(!fe(n))return L;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!$e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Be="/assets/svelte.a39f39b7.svg";function Pe(e){let t,n,i,r,s;return{c(){t=h("button"),n=b("count is "),i=b(e[0])},l(l){t=g(l,"BUTTON",{});var o=v(t);n=E(o,"count is "),i=E(o,e[0]),o.forEach(m)},m(l,o){de(l,t,o),f(t,n),f(t,i),r||(s=Se(t,"click",e[1]),r=!0)},p(l,[o]){o&1&&ke(i,l[0])},i:L,o:L,d(l){l&&m(t),r=!1,s()}}}function qe(e,t,n){let i=0;return[i,()=>{n(0,i+=1)}]}class De extends ye{constructor(t){super(),ve(this,t,qe,Pe,ue,{})}}function Ke(e){let t,n,i,r,s,l,o,c,a,d,u,x,N,y,w,H,S,F,A,W,z,J,k,Q,O;return w=new De({}),{c(){t=h("main"),n=h("div"),i=h("a"),r=h("img"),l=C(),o=h("a"),c=h("img"),d=C(),u=h("h1"),x=b("Vite + Svelte"),N=C(),y=h("div"),Oe(w.$$.fragment),H=C(),S=h("p"),F=b("Check out "),A=h("a"),W=b("SvelteKit"),z=b(", the official Svelte app framework powered by Vite!"),J=C(),k=h("p"),Q=b("Click on the Vite and Svelte logos to learn more"),this.h()},l($){t=g($,"MAIN",{});var p=v(t);n=g(p,"DIV",{});var M=v(n);i=g(M,"A",{href:!0,target:!0});var Z=v(i);r=g(Z,"IMG",{src:!0,class:!0,alt:!0}),Z.forEach(m),l=V(M),o=g(M,"A",{href:!0,target:!0});var ee=v(o);c=g(ee,"IMG",{src:!0,class:!0,alt:!0}),ee.forEach(m),M.forEach(m),d=V(p),u=g(p,"H1",{});var te=v(u);x=E(te,"Vite + Svelte"),te.forEach(m),N=V(p),y=g(p,"DIV",{class:!0});var ne=v(y);Me(w.$$.fragment,ne),ne.forEach(m),H=V(p),S=g(p,"P",{});var T=v(S);F=E(T,"Check out "),A=g(T,"A",{href:!0,target:!0});var re=v(A);W=E(re,"SvelteKit"),re.forEach(m),z=E(T,", the official Svelte app framework powered by Vite!"),T.forEach(m),J=V(p),k=g(p,"P",{class:!0});var ie=v(k);Q=E(ie,"Click on the Vite and Svelte logos to learn more"),ie.forEach(m),p.forEach(m),this.h()},h(){ce(r.src,s="/vite.svg")||_(r,"src",s),_(r,"class","logo svelte-c9fbf7"),_(r,"alt","Vite Logo"),_(i,"href","https://vitejs.dev"),_(i,"target","_blank"),ce(c.src,a=Be)||_(c,"src",a),_(c,"class","logo svelte svelte-c9fbf7"),_(c,"alt","Svelte Logo"),_(o,"href","https://svelte.dev"),_(o,"target","_blank"),_(y,"class","card"),_(A,"href","https://github.com/sveltejs/kit#readme"),_(A,"target","_blank"),_(k,"class","read-the-docs svelte-c9fbf7")},m($,p){de($,t,p),f(t,n),f(n,i),f(i,r),f(n,l),f(n,o),f(o,c),f(t,d),f(t,u),f(u,x),f(t,N),f(t,y),pe(w,y,null),f(t,H),f(t,S),f(S,F),f(S,A),f(A,W),f(S,z),f(t,J),f(t,k),f(k,Q),O=!0},p:L,i($){O||(me(w.$$.fragment,$),O=!0)},o($){Ie(w.$$.fragment,$),O=!1},d($){$&&m(t),ge(w)}}}class Ge extends ye{constructor(t){super(),ve(this,t,null,Ke,ue,{})}}new Ge({target:document.getElementById("app")});
