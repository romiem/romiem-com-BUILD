(this["webpackJsonpromiem-com"]=this["webpackJsonpromiem-com"]||[]).push([[117,126],{104:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,i){if(t.language===a){var o=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof i&&!i(e))return e;for(var r,s=o.length;-1!==t.code.indexOf(r=n(a,s));)++s;return o[s]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,i=Object.keys(t.tokenStack);!function o(s){for(var c=0;c<s.length&&!(r>=i.length);c++){var l=s[c];if("string"===typeof l||l.content&&"string"===typeof l.content){var u=i[r],p=t.tokenStack[u],f="string"===typeof l?l:l.content,g=n(a,u),m=f.indexOf(g);if(m>-1){++r;var d=f.substring(0,m),k=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),b=f.substring(m+g.length),h=[];d&&h.push.apply(h,o([d])),h.push(k),b&&h.push.apply(h,o([b])),"string"===typeof l?s.splice.apply(s,[c,1].concat(h)):l.content=h}}else l.content&&o(l.content)}return s}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]},285:function(e,n,t){"use strict";var a=t(104);function r(e){e.register(a),e.languages.liquid={comment:{pattern:/(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,lookbehind:!0},delimiter:{pattern:/^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,alias:"punctuation"},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},keyword:/\b(?:as|assign|break|continue|cycle|decrement|echo|else|elsif|(?:end)?(?:capture|case|comment|for|form|if|paginate|style|raw|tablerow|unless)|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,function:[{pattern:/(\|\s*)\w+/,lookbehind:!0,alias:"filter"},{pattern:/(\.\s*)(?:first|last|size)/,lookbehind:!0}],boolean:/\b(?:true|false|nil)\b/,range:{pattern:/\.\./,alias:"operator"},number:/\b\d+(?:\.\d+)?\b/,operator:/[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|or|contains(?=\s))\b/,punctuation:/[.,\[\]()]/},e.hooks.add("before-tokenize",(function(n){var t=!1;e.languages["markup-templating"].buildPlaceholders(n,"liquid",/\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g,(function(e){var n=/^\{%-?\s*(\w+)/.exec(e);if(n){var a=n[1];if("raw"===a&&!t)return t=!0,!0;if("endraw"===a)return t=!1,!0}return!t}))})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"liquid")}))}e.exports=r,r.displayName="liquid",r.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_liquid.e7ef546d.chunk.js.map