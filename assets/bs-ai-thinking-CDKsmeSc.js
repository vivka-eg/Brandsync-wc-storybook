import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{n as c,r as l,t as u}from"./bs-ai-thinking.stories-Cgpg3fWh.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`ai-thinking`,children:`AI thinking`}),`
`,(0,p.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,p.jsx)(t.p,{children:`A small inline status indicator for a Genie AI chat panel: the colorful Genie mark next to a label
(e.g. "Retrieving", "Thinking", "Searching") whose text shimmers with a moving highlight band while
an operation is in progress.`}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`When to use`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Inline in a Genie AI chat transcript to show what the assistant is currently doing while a
response is being generated.`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`A blocking/full-panel loading state — this is a small inline indicator, not a spinner overlay.`}),`
`]}),`
`,(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,p.jsx)(i,{of:u}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,p.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Slots: none`}),`
`,(0,p.jsxs)(t.li,{children:[`Shadow parts: `,(0,p.jsx)(t.code,{children:`::part(icon)`}),`, `,(0,p.jsx)(t.code,{children:`::part(label)`})]}),`
`,(0,p.jsxs)(t.li,{children:[`CSS custom properties: `,(0,p.jsx)(t.code,{children:`--bs-ai-thinking-gap`}),`, `,(0,p.jsx)(t.code,{children:`--bs-ai-thinking-icon-size`}),`,
`,(0,p.jsx)(t.code,{children:`--bs-ai-thinking-text`}),`, `,(0,p.jsx)(t.code,{children:`--bs-ai-thinking-shimmer-highlight`}),`, `,(0,p.jsx)(t.code,{children:`--bs-ai-thinking-font-size`}),`,
`,(0,p.jsx)(t.code,{children:`--bs-ai-thinking-line-height`}),`, `,(0,p.jsx)(t.code,{children:`--bs-ai-thinking-cycle-duration`})]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`The root element is `,(0,p.jsx)(t.code,{children:`role="status"`}),` with `,(0,p.jsx)(t.code,{children:`aria-live="polite"`}),`, so assistive tech announces the
label when it changes (e.g. "Retrieving" → "Thinking") without needing focus.`]}),`
`,(0,p.jsxs)(t.li,{children:[`The icon is decorative (`,(0,p.jsx)(t.code,{children:`alt=""`}),`, `,(0,p.jsx)(t.code,{children:`aria-hidden="true"`}),`) — the label text is the only accessible
content.`]}),`
`,(0,p.jsxs)(t.li,{children:[`The label's shimmer animation is disabled under `,(0,p.jsx)(t.code,{children:`prefers-reduced-motion: reduce`}),` (text renders as
a plain solid color instead).`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=s(),t(),r(),l()})))()}m();export{f as default};