(self.webpackChunkopen_git_ops=self.webpackChunkopen_git_ops||[]).push([[682],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function u(t,r,c){return o()?(e.exports=u=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),u=r(379),c=r(8206);e.exports=function(e){return n(e)||o(e)||u(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),u=r(9713),c=r(7316),a=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),i=r(3497).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=c(e,a),l=f(t),d=p.useMemo((function(){if(!r)return null;var e=s({React:p,mdx:i},l),t=Object.keys(e),u=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,t]);return p.createElement(d,s({},u))}},4895:function(e,t,r){"use strict";var n=r(7294),o=r(9931),u=r.n(o),c=function(e){var t,r=e.className,o=e.prose,c=e.offset,a=e.children,l=u()(((t={"py-8 px-6 max-w-4xl bg-white shadow-xl md:py-12 md:px-10":!0,"prose prose-lg":o,"mx-auto rounded-2xl":!c,"-mx-4 sm:mx-auto sm:rounded-2xl":c})[r]=r,t));return n.createElement("div",{className:l},a)};c.defaultProps={prose:!0,offset:!1},t.Z=c},3365:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),o=r(6725),u=r(3497),c=r(5444),a=r(8468),l=function(e){var t=e.id,r=e.title;return n.createElement(n.Fragment,null,t&&n.createElement("div",{className:"aspect-w-16 aspect-h-9 bg-light"},n.createElement("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/"+t,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:r||"",className:"absolute top-0 left-0 h-full w-full"})))},s=function(e){var t=e.children,r={Link:c.Link,YoutubeEmbed:l,Button:a.Z};return n.createElement(n.Fragment,null,n.createElement(u.MDXProvider,{components:r},n.createElement(o.MDXRenderer,null,t)))}},5518:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(5444),u=r(9905),c=r(7487),a=r(3365),l=r(2810),s=r(4895),p=r(4209);t.default=function(e){var t=e.location,r=(0,o.useStaticQuery)("807395231");return n.createElement(u.Z,{location:t},n.createElement(c.Z,{title:"Events",description:"Events",url:t.href,image:p.Z}),n.createElement(l.W,{narrow:!0,className:"pt-28 md:pt-48"},n.createElement("h1",{className:"mb-8 lg:mb-12 text-center"},"About ",n.createElement("span",{className:"text-accent"},"OpenGitOps")),n.createElement(s.Z,null,n.createElement(a.Z,null,r.mdx.body))))}},4209:function(e,t,r){"use strict";t.Z=r.p+"static/thumbnail-default-28daea91b25c13140a8352ed6a1aa031.png"}}]);
//# sourceMappingURL=component---src-pages-about-js-ab567c3dfd70dd34cf72.js.map