(this["webpackJsonpromiem-com"]=this["webpackJsonpromiem-com"]||[]).push([[203,39,204],{110:function(e,s,n){"use strict";function t(e){!function(e){function s(e,s){return e.replace(/<<(\d+)>>/g,(function(e,n){return"(?:"+s[+n]+")"}))}function n(e,n,t){return RegExp(s(e,n),t||"")}function t(e,s){for(var n=0;n<s;n++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var r="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",a="class enum interface struct",i="add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where",o="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function c(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var u=c(a),l=RegExp(c(r+" "+a+" "+i+" "+o)),p=c(a+" "+i+" "+o),d=c(r+" "+a+" "+o),g=t(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),b=t(/\((?:[^()]|<<self>>)*\)/.source,2),f=/@?\b[A-Za-z_]\w*\b/.source,h=s(/<<0>>(?:\s*<<1>>)?/.source,[f,g]),m=s(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[p,h]),k=/\[\s*(?:,\s*)*\]/.source,y=s(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[m,k]),w=s(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[g,b,k]),v=s(/\(<<0>>+(?:,<<0>>+)+\)/.source,[w]),x=s(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[v,m,k]),$={keyword:l,punctuation:/[<>()?,.:[\]]/},S=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,E=/"(?:\\.|[^\\"\r\n])*"/.source,R=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:n(/(^|[^$\\])<<0>>/.source,[R]),lookbehind:!0,greedy:!0},{pattern:n(/(^|[^@$\\])<<0>>/.source,[E]),lookbehind:!0,greedy:!0},{pattern:RegExp(S),greedy:!0,alias:"character"}],"class-name":[{pattern:n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[m]),lookbehind:!0,inside:$},{pattern:n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[f,x]),lookbehind:!0,inside:$},{pattern:n(/(\busing\s+)<<0>>(?=\s*=)/.source,[f]),lookbehind:!0},{pattern:n(/(\b<<0>>\s+)<<1>>/.source,[u,h]),lookbehind:!0,inside:$},{pattern:n(/(\bcatch\s*\(\s*)<<0>>/.source,[m]),lookbehind:!0,inside:$},{pattern:n(/(\bwhere\s+)<<0>>/.source,[f]),lookbehind:!0},{pattern:n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[y]),lookbehind:!0,inside:$},{pattern:n(/\b<<0>>(?=\s+(?!<<1>>)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[x,d,f]),inside:$}],keyword:l,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:n(/([(,]\s*)<<0>>(?=\s*:)/.source,[f]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[f]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:n(/(\b(?:default|typeof|sizeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[b]),lookbehind:!0,alias:"class-name",inside:$},"return-type":{pattern:n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[x,m]),inside:$,alias:"class-name"},"constructor-invocation":{pattern:n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[x]),lookbehind:!0,inside:$,alias:"class-name"},"generic-method":{pattern:n(/<<0>>\s*<<1>>(?=\s*\()/.source,[f,g]),inside:{function:n(/^<<0>>/.source,[f]),generic:{pattern:RegExp(g),alias:"class-name",inside:$}}},"type-list":{pattern:n(/\b((?:<<0>>\s+<<1>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>)(?:\s*,\s*(?:<<3>>|<<4>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[u,h,f,x,l.source]),lookbehind:!0,inside:{keyword:l,"class-name":{pattern:RegExp(x),greedy:!0,inside:$},punctuation:/,/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var _=E+"|"+S,B=s(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[_]),j=t(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[B]),2),z=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,N=s(/<<0>>(?:\s*\(<<1>>*\))?/.source,[m,j]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[z,N]),lookbehind:!0,greedy:!0,inside:{target:{pattern:n(/^<<0>>(?=\s*:)/.source,[z]),alias:"keyword"},"attribute-arguments":{pattern:n(/\(<<0>>*\)/.source,[j]),inside:e.languages.csharp},"class-name":{pattern:RegExp(m),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var T=/:[^}\r\n]+/.source,A=t(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[B]),2),J=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[A,T]),C=t(s(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[_]),2),F=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[C,T]);function O(s,t){return{interpolation:{pattern:n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[s]),lookbehind:!0,inside:{"format-string":{pattern:n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[t,T]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[J]),lookbehind:!0,greedy:!0,inside:O(J,A)},{pattern:n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[F]),lookbehind:!0,greedy:!0,inside:O(F,C)}]})}(e),e.languages.dotnet=e.languages.cs=e.languages.csharp}e.exports=t,t.displayName="csharp",t.aliases=["dotnet","cs"]},116:function(e,s,n){"use strict";function t(e){!function(e){function s(e,s,n){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:s,alias:n}}}}e.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(n){var t=e.languages[n],r="language-"+n;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:s("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:s("=",t,r),"class-feature":s("\\+",t,r),standard:s("",t,r)}}}}})}(e)}e.exports=t,t.displayName="t4Templating",t.aliases=[]},365:function(e,s,n){"use strict";var t=n(116),r=n(110);function a(e){e.register(t),e.register(r),e.languages.t4=e.languages["t4-cs"]=e.languages["t4-templating"].createT4("csharp")}e.exports=a,a.displayName="t4Cs",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_t4Cs.a99b6ea4.chunk.js.map