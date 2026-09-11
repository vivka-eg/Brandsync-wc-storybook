import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{i as c,n as l,r as u,t as d}from"./bs-ai-greeting.stories-Dsn3JaDH.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:u}),`
`,(0,m.jsx)(t.h1,{id:`ai-greeting`,children:`AI greeting`}),`
`,(0,m.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#without-product-name`,children:`Without product name`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,m.jsxs)(t.p,{children:[`The centered welcome heading shown at the top of an empty Genie AI chat panel: a bold "Hi. I'm
`,(0,m.jsx)(t.code,{children:`assistantName`}),`, your AI assistant." heading plus a "How can I help you with `,(0,m.jsx)(t.code,{children:`productName`}),` today?"
subtext.`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`When to use`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`The empty/initial state of a Genie AI chat panel, before the user has sent a message.`}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Once a conversation has started — this is a one-time empty-state greeting, not a persistent
header (see `,(0,m.jsx)(t.code,{children:`bs-chatbot-header`}),` for that).`]}),`
`]}),`
`,(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`without-product-name`,children:`Without product name`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`productName`}),` is optional. Figma's copy has a `,(0,m.jsx)(t.code,{children:`[product_name]`}),` placeholder for the consuming app
to fill in, but omitting it falls back to a product-agnostic subtext instead of rendering an empty
placeholder.`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,m.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Slots: none`}),`
`,(0,m.jsxs)(t.li,{children:[`Shadow parts: `,(0,m.jsx)(t.code,{children:`::part(heading)`}),`, `,(0,m.jsx)(t.code,{children:`::part(subtext)`})]}),`
`,(0,m.jsxs)(t.li,{children:[`CSS custom properties: `,(0,m.jsx)(t.code,{children:`--bs-ai-greeting-gap`}),`, `,(0,m.jsx)(t.code,{children:`--bs-ai-greeting-max-width`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-ai-greeting-heading-color`}),`, `,(0,m.jsx)(t.code,{children:`--bs-ai-greeting-heading-font-size`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-ai-greeting-heading-line-height`}),`, `,(0,m.jsx)(t.code,{children:`--bs-ai-greeting-heading-weight`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-ai-greeting-heading-gap`}),`, `,(0,m.jsx)(t.code,{children:`--bs-ai-greeting-subtext-color`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-ai-greeting-subtext-font-size`}),`, `,(0,m.jsx)(t.code,{children:`--bs-ai-greeting-subtext-line-height`})]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Renders as plain centered text with no interactive elements — no extra ARIA is needed.`}),`
`,(0,m.jsxs)(t.li,{children:[`The heading uses `,(0,m.jsx)(t.code,{children:`<p>`}),` tags, not `,(0,m.jsx)(t.code,{children:`<h1>`}),`/`,(0,m.jsx)(t.code,{children:`<h2>`}),`, since this is decorative empty-state copy, not a
page/section heading a screen reader user would navigate to via heading shortcuts.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=s(),t(),r(),c()})))()}h();export{p as default};