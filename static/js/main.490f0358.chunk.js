(this["webpackJsonpodin-shop"]=this["webpackJsonpodin-shop"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(20),s=n.n(a),r=(n(27),n(5)),o=(n(28),n(7)),d=n(3),l=Object(c.createContext)(),u=n(0),p=function(){var e=Object(c.useContext)(l).shoppingCart;return Object(c.useEffect)((function(){!function(){var t=document.getElementById("navShoppingCartNumber");e.length<1?t.style.display="none":t.style.display="inline"}()}),[e]),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{className:"navLinkContainer",children:[Object(u.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(u.jsx)("li",{className:"navLinks",children:"Home"})}),Object(u.jsx)(o.b,{to:"/shopMain",style:{textDecoration:"none"},children:Object(u.jsx)("li",{className:"navLinks",children:"Store"})}),Object(u.jsx)(o.b,{to:"/shoppingCart",style:{textDecoration:"none"},children:Object(u.jsx)("li",{className:"navLinks",children:"Cart"})}),Object(u.jsx)("div",{id:"navShoppingCartNumber",children:e.length})]})})},h=n(11);function j(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var m=function(){var e=Object(c.useContext)(l),t=e.shoppingCart,n=e.setShoppingCart,i=0;return 0===t.length?Object(u.jsx)("div",{id:"shoppingCartEmpty",children:Object(u.jsx)("p",{id:"shoppingCartEmptyText",children:" Empty Cart"})}):Object(u.jsxs)("div",{id:"shoppingCartScreen",children:[Object(u.jsx)("div",{id:"shoppingCartData",children:t.map((function(e){var c=e.quantity*e.price;return i+=c,Object(u.jsxs)("div",{id:e.id,className:"shoppingCartItem",children:[Object(u.jsx)("div",{className:"shoppingCartItemName",children:e.name}),Object(u.jsx)("img",{className:"shoppingCartItemImg",src:e.imgSrc}),Object(u.jsxs)("div",{className:"shoppingCartItemSubContainer",children:[Object(u.jsx)("div",{className:"shoppingCartItemSubContainerTitle",children:"Quantity"}),Object(u.jsx)("input",{className:"shoppingCartItemQuantityInput",type:"number",value:e.quantity,onChange:function(c){!function(e,c,i,a,s){if(!0===e){if(i<1||i>99)return;!0!==a&&!0!==s||(i=1===i?0:1);var r=Object(h.a)(t),o=r.findIndex((function(e){return e.id===c}));r[o].quantity=i,n(r)}}(!0,e.id,c.target.value,e.legendary,e.mythical)}})]}),Object(u.jsxs)("div",{className:"shoppingCartItemSubContainer",children:[Object(u.jsx)("div",{className:"shoppingCartItemSubContainerTitle",children:"Price per"}),Object(u.jsxs)("div",{className:"shoppingCartItemSubContainerNumber",children:[j(e.price)," Pokecoins"]})]}),Object(u.jsxs)("div",{className:"shoppingCartItemSubContainer",children:[Object(u.jsx)("div",{className:"shoppingCartItemSubContainerTitle",children:"Item sub total"}),Object(u.jsxs)("div",{className:"shoppingCartItemSubContainerNumber",children:[j(c)," PokeCoins"]})]}),Object(u.jsx)("button",{class:"shoppingCartItemRemoveBtn",onClick:function(){!function(e,c,a){if(!0===a){var s=Object(h.a)(t),r=s.findIndex((function(t){return t.id===e}));s.splice(r,1),n(s),i-=c}}(e.id,c,!0)},children:"Remove Item"})]})}))}),Object(u.jsxs)("div",{className:"shoppingCartCumulativeTotals",children:[Object(u.jsxs)("div",{className:"shoppingCartCumulativeTotalsContainers",children:[Object(u.jsx)("div",{className:"shoppingCartCumulativeTotalsTitles",children:"Sub Total "})," ",Object(u.jsxs)("div",{className:"shoppingCartCumulativeTotalsNumbers",children:[j(i)," PokeCoins"]})]}),Object(u.jsxs)("div",{className:"shoppingCartCumulativeTotalsContainers",children:[Object(u.jsx)("div",{className:"shoppingCartCumulativeTotalsTitles",children:"Sinnoh Provincal Tax"}),Object(u.jsxs)("div",{className:"shoppingCartCumulativeTotalsNumbers",children:[j(Math.round(.13*i*100)/100)," ","PokeCoins"]})]}),Object(u.jsxs)("div",{className:"shoppingCartCumulativeTotalsContainers",children:[Object(u.jsx)("div",{className:"shoppingCartCumulativeTotalsTitles",children:"Grand Total"}),Object(u.jsxs)("div",{className:"shoppingCartCumulativeTotalsNumbers",children:[j(Math.round(1.13*i*100)/100)," ","PokeCoins"]})]})]})]})},f=function(){return Object(u.jsxs)("div",{id:"shopMainScreen",children:[Object(u.jsx)(o.b,{to:"./shopPokemon",children:Object(u.jsx)("div",{className:"shopMainImgPokemon"})}),Object(u.jsx)(o.b,{to:"./shopPokeballs",style:{textDecoration:"none"},children:Object(u.jsx)("div",{className:"shopMainImgItems"})})]})},b=n(2),x=n.n(b),v=n(4);var O=function(){var e=Object(c.useContext)(l).LoadingScreen,t=Object(c.useState)([]),n=Object(r.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)(0),d=Object(r.a)(s,2),p=d[0],h=d[1];Object(c.useEffect)((function(){j()}),[p]);var j=function(){var e=Object(v.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=21&offset=".concat(p));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,m(n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(v.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t.map(function(){var e=Object(v.a)(x.a.mark((function e(t){var c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:return c=e.sent,e.next=5,c.json();case 5:i=e.sent,n.push(i),21===n.length&&a(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i?Object(u.jsxs)("div",{className:"showcasePokemonScreen",children:[Object(u.jsx)("div",{className:"showcasePokemonTitle",children:"Browse all the Pokemon we have availible at our store here!"}),Object(u.jsx)("div",{className:"showcasePokemonCards",children:i.map((function(e){return Object(u.jsx)("div",{className:"shopPokemonCard",id:e.id,children:Object(u.jsxs)(o.b,{to:"/shopPokemon/".concat(e.id),style:{textDecoration:"none"},children:[Object(u.jsx)("img",{src:e.sprites.front_default,alt:"Fetching",className:"shopPokemonCardImage"}),Object(u.jsxs)("div",{className:"shopPokemonCardText",children:["#",e.id," ",(t=e.name,t.charAt(0).toUpperCase()+t.slice(1))]})]})});var t}))}),Object(u.jsxs)("div",{id:"pageTrackingManagement",children:[Object(u.jsx)("button",{className:"changePokemonPage",id:"previousPokemonPage",onClick:function(){p>=20&&h(p-20)},children:"\ud83e\udca6"}),Object(u.jsxs)("div",{id:"pageTracker",children:[p/20+1," / ",40]}),Object(u.jsx)("button",{className:"changePokemonPage",id:"nextPokemonPage",onClick:function(){780!=p&&h(p+20)},children:"\ud83e\udca7"})]})]}):Object(u.jsx)(e,{})};function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e){return C(e.toLowerCase()).replace(/[^a-zA-Z\\xe9\\xc9\\u2019]/g," ")}var S=function(e){var t=e.match,n=Object(c.useContext)(l),i=n.shoppingCart,a=n.setShoppingCart,s=n.LoadingScreen,o=t.params.id;Object(c.useEffect)((function(){T(),w()}),[]);var d=Object(c.useState)(null),p=Object(r.a)(d,2),j=p[0],m=p[1],f=Object(c.useState)(null),b=Object(r.a)(f,2),O=b[0],S=b[1],k=Object(c.useState)(0),N=Object(r.a)(k,2),P=N[0],y=N[1],T=function(){var e=Object(v.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(o));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,m(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(v.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(o));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,S(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!j||!O)return Object(u.jsx)(s,{});var I,L=j.color.name,D=Math.floor(1/j.capture_rate*1e5),R=function(e,t,n,c,i){if(!0!==c&&!0!==i||!1!==n||!0!==t)if(!0!==c&&!0!==i||null!==n||!1!==t)if(!0===c||!0===i)y(1);else if(P>0&&!0===t&&!1===n)y(P-1);else if(!0===t&&!0===n){y(P+1)}else!1===t&&isFinite(e.target.value)&&y(parseInt(e.target.value));else 1===P?y(0):0===P&&y(1);else y(0);e.preventDefault()},B=function(e,t,n){var c=document.getElementById("cartUpdatingNotice");"addToCart"===e?c.innerText="Added to Cart":"updatingQuantity"===e&&!1===t&&!1===n?c.innerText="Updated Quantity":!0!==t&&!0!==n||(c.innerText="Cannot add this same Lengendary"),c.style.display="flex",setTimeout((function(){c.style.display="none"}),1500)};return Object(u.jsx)("div",{className:"showcaseSpecificPokemonScreen",children:Object(u.jsxs)("div",{className:"shopSpecificPokemonCard",id:O.id,children:[Object(u.jsxs)("div",{className:"shopSpecificPokemonCardLeftSide",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardLeftSideName",style:{color:L},children:C(O.name)}),Object(u.jsxs)("div",{className:"shopSpecificPokemonCardLeftSideImages",children:[Object(u.jsx)("img",{src:O.sprites.front_default,alt:"Fetching",className:"shopSpecificPokemonCardLeftSideImage"}),Object(u.jsx)("img",{src:O.sprites.back_default,alt:"Fetching",className:"shopSpecificPokemonCardLeftSideImage"})]}),Object(u.jsx)("div",{id:"cartUpdatingNotice",class:"cartUpdatingNotice",children:"Added to cart"}),Object(u.jsxs)("form",{onSubmit:function(e){!function(e,t,n,c,s,r){if(c<=0||0===n)e.preventDefault();else{e.preventDefault();var o={id:1e3*Math.random(),name:t,imgSrc:O.sprites.front_default,quantity:n,price:c,legendary:s,mythical:r},d=Object(h.a)(i);if(d.some((function(e){return e.name===o.name}))){var l=d.findIndex((function(e){return e.name===o.name}));!0===!d[l].legendary&&!0===!d[l].mythical&&(d[l].quantity+=o.quantity,d[l].quantity>99&&(d[l].quantity=99)),a(d),B("updatingQuantity",s,r)}else a(i.concat(o)),B("addToCart")}}(e,C(O.name),P,D,j.is_legendary,j.is_mythical)},children:[Object(u.jsxs)("div",{className:"shopSpecificPokemonCardLeftSideQuantity",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardLeftSideButtonIncDec",onClick:function(e){R(e,!0,!1,j.is_mythical,j.is_legendary)},children:"-"}),Object(u.jsx)("input",{className:"shopSpecificPokemonCardLeftSideInput",value:P,type:"number",min:"1",max:"99",required:!0,onChange:function(e){R(e,!1,null,j.is_mythical,j.is_legendary)}}),Object(u.jsx)("div",{className:"shopSpecificPokemonCardLeftSideButtonIncDec",onClick:function(e){R(e,!0,!0,j.is_mythical,j.is_legendary)},children:"+"})]}),Object(u.jsx)("button",{className:"addToCart",type:"submit",children:"Add to Cart"})]})]}),Object(u.jsxs)("div",{className:"shopSpecificPokemonCardRightSide",children:[Object(u.jsxs)("div",{className:"shopSpecificPokemonCardRightSideDetailsTitle",children:["Pokedex Entry #",O.id]}),Object(u.jsxs)("div",{className:"shopSpecificPokemonCardRightSideTextBlocks",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideSubTitle",children:"Description"}),Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideDescription",children:g(j.flavor_text_entries[6].flavor_text)})]}),Object(u.jsxs)("div",{className:"shopSpecificPokemonCardRightSideTextBlocks",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideSubTitle",children:"Potential Moves"}),Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideDescription",children:"(This is NOT a full list)"}),Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideDescription",children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:C(O.moves[0].move.name)}),Object(u.jsx)("div",{children:C(O.moves[1].move.name)}),Object(u.jsx)("div",{children:C(O.moves[2].move.name)}),Object(u.jsx)("div",{children:C(O.moves[3].move.name)})]})})})]}),Object(u.jsxs)("div",{className:"shopSpecificPokemonCardRightSideTextBlocks",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideSubTitle",children:"Base Stats"}),Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideDescription",children:O.stats.map((function(e){return Object(u.jsxs)("div",{children:[C(e.stat.name)," : ",e.base_stat]})}))})]}),Object(u.jsxs)("div",{className:"shopSpecificPokemonCardRightSideTextBlocks",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideSubTitle",children:"Cost of Acquistion"}),Object(u.jsxs)("div",{className:"shopSpecificPokemonCardRightSideDescription",children:[(I=D,I.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))," PokeCoins"]})]})]})]})})};var k=function(){var e=Object(c.useContext)(l).LoadingScreen,t=Object(c.useState)([]),n=Object(r.a)(t,2),i=n[0],a=n[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){var e=Object(v.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/item/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d(n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(v.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t.map(function(){var e=Object(v.a)(x.a.mark((function e(t){var c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:return c=e.sent,e.next=5,c.json();case 5:i=e.sent,n.push(i),20===n.length&&a(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i?Object(u.jsxs)("div",{id:"showcasePokeballsScreen",children:[Object(u.jsx)("div",{className:"showcasePokemonTitle",children:"View our selection of pokeball's and extras!"}),Object(u.jsx)("div",{className:"showcasePokemonCards",children:i.map((function(e){return Object(u.jsx)("div",{className:"shopPokemonCard",children:Object(u.jsxs)(o.b,{to:"/shopPokeballs/".concat(e.id),style:{textDecoration:"none"},children:[Object(u.jsx)("img",{className:"shopPokemonCardImage",src:e.sprites.default}),Object(u.jsx)("div",{className:"shopPokemonCardText",children:(t=e.name,t.charAt(0).toUpperCase()+t.slice(1))})]})});var t}))})]}):Object(u.jsx)(e,{})};function N(e){return e.charAt(0).toUpperCase()+e.slice(1)}function P(e){return e.replace(/[^a-zA-Z]/g," ")}var y=function(e){var t=e.match,n=Object(c.useContext)(l),i=n.shoppingCart,a=n.setShoppingCart,s=n.LoadingScreen,o=Object(c.useState)(),d=Object(r.a)(o,2),p=d[0],j=d[1],m=Object(c.useState)(0),f=Object(r.a)(m,2),b=f[0],O=f[1];Object(c.useEffect)((function(){C()}),[]);var C=function(){var e=Object(v.a)(x.a.mark((function e(){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/item/".concat(t.params.id));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,j(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!p)return Object(u.jsx)(s,{});var g=function(e,t,n){if(b>0&&!0===t&&!1===n)O(b-1);else if(!0===t&&!0===n){O(b+1)}else!1===t&&isFinite(e.target.value)&&O(parseInt(e.target.value));e.preventDefault()},S=function(e){var t=document.getElementById("cartUpdatingNotice");"addToCart"===e?t.innerText="Added to Cart":"updatingQuantity"===e?t.innerText="Updated Quantity":"cannotAdd"===e&&(t.innerText="Item not in stock"),t.style.display="flex",setTimeout((function(){t.style.display="none"}),1500)};return Object(u.jsx)("div",{className:"showcaseSpecificPokemonScreen",children:Object(u.jsxs)("div",{className:"shopSpecificPokemonCard",children:[Object(u.jsxs)("div",{className:"shopSpecificPokemonCardLeftSide",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardLeftSideName",children:N(p.name)}),Object(u.jsx)("img",{className:"shopSpecificPokeballLeftSideImage",src:p.sprites.default}),Object(u.jsx)("div",{id:"cartUpdatingNotice",class:"cartUpdatingNotice",children:"Added to cart"}),Object(u.jsxs)("form",{onSubmit:function(e){!function(e,t,n,c){if(c<=0)return e.preventDefault(),void S("cannotAdd");e.preventDefault();var s={id:1e3*Math.random(),name:t,imgSrc:p.sprites.default,quantity:n,price:c,legendary:!1,mythical:!1},r=Object(h.a)(i);if(r.some((function(e){return e.name===s.name}))){var o=r.findIndex((function(e){return e.name===s.name}));r[o].quantity+=s.quantity,a(r),S("updatingQuantity")}else a(i.concat(s)),S("addToCart")}(e,N(p.name),b,p.cost)},children:[Object(u.jsxs)("div",{className:"shopSpecificPokemonCardLeftSideQuantity",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardLeftSideButtonIncDec",onClick:function(e){g(e,!0,!1)},children:"-"}),Object(u.jsx)("input",{className:"shopSpecificPokemonCardLeftSideInput",value:b,type:"number",min:"1",max:"99",required:!0,onChange:function(e){g(e,!1)}}),Object(u.jsx)("div",{className:"shopSpecificPokemonCardLeftSideButtonIncDec",onClick:function(e){g(e,!0,!0)},children:"+"})]}),Object(u.jsx)("button",{className:"addToCart",type:"submit",children:"Add to Cart"})]})]}),Object(u.jsxs)("div",{className:"shopSpecificPokemonCardRightSide",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideDetailsTitle",children:"Details"}),Object(u.jsxs)("div",{className:"shopSpecificPokemonCardRightSideTextBlocks",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideSubTitle",children:"Category"}),Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideDescription",children:N(p.category.name)})]}),Object(u.jsxs)("div",{className:"shopSpecificPokemonCardRightSideTextBlocks",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideSubTitle",children:"Effect Entry"}),Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideDescription",children:P(p.effect_entries[0].effect)})]}),Object(u.jsxs)("div",{className:"shopSpecificPokemonCardRightSideTextBlocks",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideSubTitle",children:"Our humble opinion"}),Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideDescription",children:P(p.flavor_text_entries[2].text)})]}),Object(u.jsxs)("div",{className:"shopSpecificPokemonCardRightSideTextBlocks",children:[Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideSubTitle",children:"Price Per Unit"}),Object(u.jsx)("div",{className:"shopSpecificPokemonCardRightSideDescription",children:function(){var e=p.cost;return e>0?"".concat(e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")," PokeCoins"):"Currently Out of Stock"}()})]})]})]})})};function T(e){return e.charAt(0).toUpperCase()+e.slice(1)}var w=function(){var e=Object(c.useContext)(l).LoadingScreen,t=Object(c.useState)([]),n=Object(r.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)([]),d=Object(r.a)(s,2),p=d[0],h=d[1],j=Object(c.useState)([]),m=Object(r.a)(j,2),f=m[0],b=m[1],O=Object(c.useState)([]),C=Object(r.a)(O,2),g=C[0],S=C[1];Object(c.useEffect)((function(){k(),P()}),[]);var k=function(){var e=Object(v.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=801&offset=0");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,N(n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t.map(function(){var e=Object(v.a)(x.a.mark((function e(t){var c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:return c=e.sent,e.next=5,c.json();case 5:i=e.sent,n.push(i),799===n.length&&a(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(v.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/item/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,y(n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(v.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t.map(function(){var e=Object(v.a)(x.a.mark((function e(t){var c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:return c=e.sent,e.next=5,c.json();case 5:i=e.sent,n.push(i),20===n.length&&h(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(!i||!p)return Object(u.jsx)(e,{});return Object(u.jsxs)("div",{id:"homeScreen",children:[Object(u.jsxs)("div",{id:"homeScreenWelcome",children:[Object(u.jsxs)("div",{id:"homeScreenWelcomeTitle",children:["Welcome to the ",Object(u.jsx)("i",{children:"Pokemon Hub"}),"!"]})," ",Object(u.jsx)("div",{id:"homeScreenWelcomeMessage",children:"Browse our selection of 821 Pokemon and Pokemon related items! Know exactly what your're looking for? Feel free to use our master search bar here and find it instantly!"}),Object(u.jsxs)("div",{id:"homeScreenCommandNote",children:["(The ",Object(u.jsx)("i",{children:"ShowAll"})," command will pull all data up at once)"]}),Object(u.jsx)("input",{type:"text",id:"searchItems",onChange:function(e){!function(e,t,n){if(""===n)b([]),S([]);else if("ShowAll"===n){var c=e.filter((function(e){return e.name.toLowerCase().includes("")})),i=t.filter((function(e){return e.name.toLowerCase().includes("")}));b(c),S(i)}else{var a=e.filter((function(e){var t=n.toLowerCase();return e.name.toLowerCase().includes(t)})),s=t.filter((function(e){var t=n.toLowerCase();return e.name.toLowerCase().includes(t)}));b(a),S(s)}}(i,p,e.target.value)}})]}),Object(u.jsx)("div",{className:"showcaseAllScreen",children:Object(u.jsxs)("div",{className:"showcaseHomeCards",children:[f.map((function(e){return Object(u.jsx)("div",{className:"shopPokemonCard",id:e.id,children:Object(u.jsxs)(o.b,{to:"/shopPokemon/".concat(e.id),style:{textDecoration:"none"},children:[Object(u.jsx)("img",{src:e.sprites.front_default,alt:e.name,className:"shopPokemonCardImage"}),Object(u.jsxs)("div",{className:"shopPokemonCardText",children:["#",e.id," ",T(e.name)]})]})})})),g.map((function(e){return Object(u.jsx)("div",{className:"shopPokemonCard",id:e.id,children:Object(u.jsxs)(o.b,{to:"/shopPokeballs/".concat(e.id),style:{textDecoration:"none"},children:[Object(u.jsx)("img",{className:"shopPokemonCardImage",src:e.sprites.default}),Object(u.jsx)("div",{className:"shopPokemonCardText",children:T(e.name)})]})})}))]})})]})};var I=function(){return Object(u.jsx)("div",{id:"loadingContainer",children:Object(u.jsx)("div",{class:"spinner-4"})})},L=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(u.jsx)(l.Provider,{value:{shoppingCart:n,setShoppingCart:i,LoadingScreen:I},children:Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"organize",children:[Object(u.jsx)(p,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/",component:w}),Object(u.jsx)(d.a,{path:"/shoppingCart",component:m}),Object(u.jsx)(d.a,{path:"/shopMain",component:f}),Object(u.jsx)(d.a,{exact:!0,path:"/shopPokemon",component:O}),Object(u.jsx)(d.a,{path:"/shopPokemon/:id",component:S}),Object(u.jsx)(d.a,{exact:!0,path:"/shopPokeballs",component:k}),Object(u.jsx)(d.a,{path:"/shopPokeballs/:id",component:y})]})]})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),D()}},[[36,1,2]]]);
//# sourceMappingURL=main.490f0358.chunk.js.map