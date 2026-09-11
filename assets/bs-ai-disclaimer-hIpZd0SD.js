import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{n as c,r as l,t as u}from"./bs-ai-disclaimer.stories-kVV5nOdX.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`ai-disclaimer`,children:`AI disclaimer`}),`
`,(0,p.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,p.jsx)(t.p,{children:`A centered caption disclaimer for a Genie AI chat panel, e.g. "AI can make mistakes. Please verify
important information."`}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`When to use`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`Below or above `,(0,p.jsx)(t.code,{children:`bs-composer`}),` in a Genie AI chat panel, to remind users AI output can be wrong.`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`General-purpose caption/helper text unrelated to AI — use plain text or `,(0,p.jsx)(t.code,{children:`bs-input`}),`'s description
slot instead.`]}),`
`]}),`
`,(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,p.jsx)(i,{of:u}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,p.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Slots: default slot (the disclaimer text/content)`}),`
`,(0,p.jsxs)(t.li,{children:[`Shadow parts: `,(0,p.jsx)(t.code,{children:`::part(text)`})]}),`
`,(0,p.jsxs)(t.li,{children:[`CSS custom properties: `,(0,p.jsx)(t.code,{children:`--bs-ai-disclaimer-padding-x`}),`, `,(0,p.jsx)(t.code,{children:`--bs-ai-disclaimer-text-color`}),`,
`,(0,p.jsx)(t.code,{children:`--bs-ai-disclaimer-font-size`}),`, `,(0,p.jsx)(t.code,{children:`--bs-ai-disclaimer-line-height`})]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Renders as plain centered text with no interactive elements — no extra ARIA is needed.`}),`
`,(0,p.jsxs)(t.li,{children:[`The default slot accepts rich content (e.g. a link to a help/policy page), so a consuming app can
add one without this component needing an invented `,(0,p.jsx)(t.code,{children:`href`}),` prop.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=s(),t(),r(),l()})))()}m();export{f as default};