const c=n=>`rgb(var(--${n}) / <alpha-value>)`;
module.exports={content:['./app/**/*.js','./components/**/*.js'],
 theme:{extend:{colors:{bg:c('bg'),panel:c('panel'),ink:c('ink'),yel:c('yel'),red:c('red'),blu:c('blu')},
 fontFamily:{display:['var(--font-display)','Impact','sans-serif'],sans:['var(--font-sans)','Comic Sans MS','sans-serif']}}}};
