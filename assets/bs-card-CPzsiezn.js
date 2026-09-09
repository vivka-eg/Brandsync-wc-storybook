import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,i as l,n as u,r as d,t as f}from"./bs-card.stories-BJDUzgSC.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`card`,children:`Card`}),`
`,(0,h.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#base-surface`,children:`Base surface`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#container-surface`,children:`Container surface`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,h.jsx)(t.p,{children:`A bounded surface for grouping related content — a summary, a form section, a list item.`}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`When to use`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Grouping a self-contained piece of content that needs visual separation from the page
background (e.g. a booking summary, a settings section).`}),`
`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`As the only structural element on a page — cards group content, they don't replace layout.`}),`
`,(0,h.jsx)(t.li,{children:`For a dismissible/transient message — use a modal or a dedicated notification component.`}),`
`]}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`base-surface`,children:`Base surface`}),`
`,(0,h.jsx)(t.p,{children:`Flat background, no shadow — for content already inside a raised/bordered parent.`}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`container-surface`,children:`Container surface`}),`
`,(0,h.jsx)(t.p,{children:`Slightly tinted background — for grouping within a busier layout.`}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,h.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Slots: `,(0,h.jsx)(t.code,{children:`header`}),`, default (body), `,(0,h.jsx)(t.code,{children:`footer`})]}),`
`,(0,h.jsxs)(t.li,{children:[`Shadow parts: `,(0,h.jsx)(t.code,{children:`::part(container)`}),`, `,(0,h.jsx)(t.code,{children:`::part(header)`}),`, `,(0,h.jsx)(t.code,{children:`::part(body)`}),`, `,(0,h.jsx)(t.code,{children:`::part(footer)`})]}),`
`,(0,h.jsxs)(t.li,{children:[`Reuses `,(0,h.jsx)(t.code,{children:`brandsync-tokens`}),`' Paper token set — there's no dedicated Card token set yet.`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Renders as a plain, non-semantic container (no implicit ARIA role) — a card groups content
visually, it doesn't assert a specific document landmark. If the card's content should be
announced as a distinct region, wrap it with an appropriate `,(0,h.jsx)(t.code,{children:`role`}),`/heading in the slotted
content itself.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Interactive elements slotted into `,(0,h.jsx)(t.code,{children:`header`}),`/`,(0,h.jsx)(t.code,{children:`footer`}),` (e.g. `,(0,h.jsx)(t.code,{children:`bs-button`}),`) keep their own native
accessibility — the card itself adds no keyboard behavior.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=s(),t(),r(),c()})))()}g();export{m as default};