import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{n as c,r as l,t as u}from"./bs-menu.stories-DqpzT--J.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`menu`,children:`Menu`}),`
`,(0,p.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,p.jsxs)(t.p,{children:[`A generic dropdown/popup menu container: a rounded, elevated list of items (typically
`,(0,p.jsx)(t.code,{children:`bs-menu-item`}),` elements).`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`When to use`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`A popup list of actions/options triggered by another control (e.g. a "more options" kebab
button), such as `,(0,p.jsx)(t.code,{children:`bs-chatbot-response-action`}),`'s `,(0,p.jsx)(t.code,{children:`menu`}),` slot.`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`A persistent, always-visible list of options -- this component is purpose-built as a popup
surface (rounded corners, elevation shadow), not a plain list.`}),`
`]}),`
`,(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,p.jsx)(i,{of:u}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,p.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`Slots: default (accepts `,(0,p.jsx)(t.code,{children:`bs-menu-item`}),` elements, or any other content)`]}),`
`,(0,p.jsxs)(t.li,{children:[`Shadow parts: `,(0,p.jsx)(t.code,{children:`::part(list)`})]}),`
`,(0,p.jsxs)(t.li,{children:[`CSS custom properties: `,(0,p.jsx)(t.code,{children:`--bs-menu-bg`}),`, `,(0,p.jsx)(t.code,{children:`--bs-menu-radius`}),`, `,(0,p.jsx)(t.code,{children:`--bs-menu-padding-y`}),`, `,(0,p.jsx)(t.code,{children:`--bs-menu-gap`}),`,
`,(0,p.jsx)(t.code,{children:`--bs-menu-shadow`})]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`The host renders with `,(0,p.jsx)(t.code,{children:`role="menu"`}),` on its inner box (via the `,(0,p.jsx)(t.code,{children:`list`}),` part).`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`bs-menu`}),` itself does not manage focus or keyboard navigation between items -- it's a visual
container only. Pairing it with `,(0,p.jsx)(t.code,{children:`bs-menu-item`}),` (a real `,(0,p.jsx)(t.code,{children:`<button>`}),` per item) gives correct native
tab/click semantics, but arrow-key roving focus between items is not implemented.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=s(),t(),r(),l()})))()}m();export{f as default};