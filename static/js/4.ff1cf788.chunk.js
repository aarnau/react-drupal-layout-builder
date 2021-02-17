(this["webpackJsonpreact-drupal-layout-builder-example"]=this["webpackJsonpreact-drupal-layout-builder-example"]||[]).push([[4],{134:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(90),i=n.n(a),s=n(28),c=n.n(s),u=n(27);function f(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var l={};function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&l[t[0]]||("string"===typeof t[0]&&(l[t[0]]=new Date),f.apply(void 0,t))}function d(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return p("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!i(r,e)||o&&!i(a,e))))}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=({items:e,formatter:t})=>{const n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,o=Object(r.useContext)(u.a)||{},a=o.i18n,s=o.defaultNS,c=n||a||Object(u.d)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new u.b),!c){p("You will need to pass in an i18next instance by using initReactI18next");var f=function(e){return Array.isArray(e)?e[e.length-1]:e},l=[f,{},!1];return l.t=f,l.i18n={},l.ready=!1,l}c.options.react&&void 0!==c.options.react.wait&&p("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=y(y(y({},Object(u.c)()),c.options.react),t),m=b.useSuspense,v=e||s||c.options&&c.options.defaultNS;v="string"===typeof v?[v]:v||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(v);var h=(c.isInitialized||c.initializedStoreOnce)&&v.every((function(e){return g(e,c,b)}));function O(){return{t:c.getFixedT(null,"fallback"===b.nsMode?v:v[0])}}var w=Object(r.useState)(O()),j=i()(w,2),S=j[0],x=j[1],k=Object(r.useRef)(!0);Object(r.useEffect)((function(){var e=b.bindI18n,t=b.bindI18nStore;function n(){k.current&&x(O())}return k.current=!0,h||m||d(c,v,(function(){k.current&&x(O())})),e&&c&&c.on(e,n),t&&c&&c.store.on(t,n),function(){k.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,n)})),t&&c&&t.split(" ").forEach((function(e){return c.store.off(e,n)}))}}),[v.join()]);var I=[S.t,c,h];if(I.t=S.t,I.i18n=c,I.ready=h,h)return I;if(!h&&!m)return I;throw new Promise((function(e){d(c,v,(function(){e()}))}))}("ns",{useSuspense:!1}).t,a={default:["on_label","off_label"],"yes-no":[n("Yes"),n("No")],"true-false":[n("True"),n("False")],"on-off":[n("On"),n("Off")],"enabled-disabled":[n("Enabled"),n("Disabled")],boolean:[1,0],"unicode-yes-no":["\u2714","\u2716"]};return"custom"===t.settings.format?e.map((e,n)=>o.a.createElement("div",{key:n},e?t.settings.format_custom_true:t.settings.format_custom_false)):e.map((e,n)=>o.a.createElement("div",{key:n},e?a[t.settings.format][0]:a[t.settings.format][1]))}},90:function(e,t,n){var r=n(91),o=n(92),a=n(93),i=n(95);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()}},91:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},92:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}}},93:function(e,t,n){var r=n(94);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},94:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},95:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=4.ff1cf788.chunk.js.map