(this["webpackJsonpromiem-com"]=this["webpackJsonpromiem-com"]||[]).push([[21],{200:function(e,r,t){"use strict";function i(e){!function(e){var r=/%%?[~:\w]+%?|!\S+!/,t={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}},i=/"(?:[\\"]"|[^"])*"(?!")/,n=/(?:\b|-)\d+\b/;e.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/^for\b|\b(?:in|do)\b/i,string:i,parameter:t,variable:r,number:n,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|[^\s"]\S*))/im,lookbehind:!0,inside:{keyword:/^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,string:i,parameter:t,variable:r,number:n,operator:/\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:i,parameter:t,variable:[r,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:n,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^\w+\b/i,string:i,parameter:t,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:"property"},variable:r,number:n,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}}(e)}e.exports=i,i.displayName="batch",i.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_batch.99ce01ea.chunk.js.map