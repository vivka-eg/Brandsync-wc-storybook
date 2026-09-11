import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,i as l,n as u,r as d,t as f}from"./bs-attachment-list.stories-Bq0oDPDH.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`attachment-list`,children:`Attachment List`}),`
`,(0,h.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#three-attachments`,children:`Three attachments`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#many-attachments-scrollable`,children:`Many attachments (scrollable)`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,h.jsxs)(t.p,{children:[`A horizontally-scrolling row wrapper for one or more `,(0,h.jsx)(t.code,{children:`bs-attachment`}),` previews, for slotting into
`,(0,h.jsx)(t.code,{children:`bs-composer`}),`'s `,(0,h.jsx)(t.code,{children:`attachments`}),` slot when a Genie AI chat message has file attachments.`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`When to use`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Wrapping any number of `,(0,h.jsx)(t.code,{children:`bs-attachment`}),` elements the user has attached to a message, so they lay
out in a single row and scroll horizontally instead of wrapping/overflowing once there are more
than fit the available width.`]}),`
`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`A single attachment on its own — just render `,(0,h.jsx)(t.code,{children:`bs-attachment`}),` directly, this wrapper's
scroll/fade affordance only matters once there's more content than fits.`]}),`
`]}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`three-attachments`,children:`Three attachments`}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`many-attachments-scrollable`,children:`Many attachments (scrollable)`}),`
`,(0,h.jsx)(t.p,{children:`Once the slotted attachments no longer fit the available width, the row becomes horizontally
scrollable, a right-edge fade appears to hint there's more content, and a scrollbar thumb reveals
on hover/focus.`}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,h.jsx)(i,{of:u}),`
`,(0,h.jsxs)(t.p,{children:[`Layout and scroll behavior are automatic based on the slotted content's width relative to the
container — `,(0,h.jsx)(t.code,{children:`aria-label`}),` is the only prop.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,h.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Slots: default (one or more `,(0,h.jsx)(t.code,{children:`bs-attachment`}),` elements)`]}),`
`,(0,h.jsxs)(t.li,{children:[`Shadow parts: `,(0,h.jsx)(t.code,{children:`::part(row)`}),`, `,(0,h.jsx)(t.code,{children:`::part(fade)`})]}),`
`,(0,h.jsxs)(t.li,{children:[`CSS custom properties: `,(0,h.jsx)(t.code,{children:`--bs-attachment-list-gap`}),`, `,(0,h.jsx)(t.code,{children:`--bs-attachment-list-padding`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-attachment-list-fade-color`}),`, `,(0,h.jsx)(t.code,{children:`--bs-attachment-list-fade-width`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-attachment-list-scrollbar-thumb`})]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`The scrollable row has `,(0,h.jsx)(t.code,{children:`role="group"`}),` and `,(0,h.jsx)(t.code,{children:`aria-label="Attachments"`}),` by default (override via
`,(0,h.jsx)(t.code,{children:`aria-label`}),`), so assistive tech announces it as a distinct region rather than an unlabeled
scroll container.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The fade overlay is `,(0,h.jsx)(t.code,{children:`aria-hidden`}),` and `,(0,h.jsx)(t.code,{children:`pointer-events: none`}),` — purely a visual hint, never
intercepts clicks or gets announced.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The scrollbar thumb only differs in color on hover/focus; the scroll track itself is always
present and keyboard-scrollable (native `,(0,h.jsx)(t.code,{children:`overflow-x: auto`}),` + arrow/Page keys once the row has
focus).`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=s(),t(),r(),c()})))()}g();export{m as default};