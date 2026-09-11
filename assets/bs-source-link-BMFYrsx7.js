import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,i as l,n as u,r as d,t as f}from"./bs-source-link.stories-DF4c6qCq.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`source-link`,children:`Source Link`}),`
`,(0,h.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#without-version`,children:`Without version`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#without-source-or-version`,children:`Without source or version`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#events`,children:`Events`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,h.jsxs)(t.p,{children:[`A single citation row inside `,(0,h.jsx)(t.code,{children:`bs-chatbot-sources-drawer`}),` — a file icon + filename on the first
line, the originating system and version on the second, and a trailing "open" arrow.`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`When to use`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`One row per source Genie cited in a response, slotted into `,(0,h.jsx)(t.code,{children:`bs-chatbot-sources-drawer`}),`.`]}),`
`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Outside the sources drawer context — this is a purpose-built citation row, not a generic
link/list-item component.`}),`
`]}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`without-version`,children:`Without version`}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`without-source-or-version`,children:`Without source or version`}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,h.jsxs)(t.p,{children:[`Every story above renders with no `,(0,h.jsx)(t.code,{children:`href`}),` by default — the row is a `,(0,h.jsx)(t.code,{children:`<button>`}),` rather than an `,(0,h.jsx)(t.code,{children:`<a>`}),`
so it doesn't navigate away when clicked in Storybook; the consuming app handles the open behavior
itself via `,(0,h.jsx)(t.code,{children:`bsOpen`}),`. Set `,(0,h.jsx)(t.code,{children:`href`}),` via the control below to see the `,(0,h.jsx)(t.code,{children:`<a>`}),` rendering instead.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,h.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Slots: `,(0,h.jsx)(t.code,{children:`icon`}),` (overrides the default file icon)`]}),`
`,(0,h.jsxs)(t.li,{children:[`Shadow parts: `,(0,h.jsx)(t.code,{children:`::part(icon)`}),`, `,(0,h.jsx)(t.code,{children:`::part(filename)`}),`, `,(0,h.jsx)(t.code,{children:`::part(source)`}),`, `,(0,h.jsx)(t.code,{children:`::part(version)`}),`,
`,(0,h.jsx)(t.code,{children:`::part(arrow)`})]}),`
`,(0,h.jsxs)(t.li,{children:[`CSS custom properties: `,(0,h.jsx)(t.code,{children:`--bs-source-link-radius`}),`, `,(0,h.jsx)(t.code,{children:`--bs-source-link-padding`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-source-link-gap`}),`, `,(0,h.jsx)(t.code,{children:`--bs-source-link-icon-gap`}),`, `,(0,h.jsx)(t.code,{children:`--bs-source-link-hover`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-source-link-pressed`}),`, `,(0,h.jsx)(t.code,{children:`--bs-source-link-focus`}),`, `,(0,h.jsx)(t.code,{children:`--bs-source-link-filename-color`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-source-link-meta-color`}),`, `,(0,h.jsx)(t.code,{children:`--bs-source-link-icon-color`}),`, `,(0,h.jsx)(t.code,{children:`--bs-source-link-dot-color`})]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,h.jsxs)(t.p,{children:[`| Event    | Fires when                          | Payload | Cancelable |
| -------- | ------------------------------------ | ------- | ---------- |
| `,(0,h.jsx)(t.code,{children:`bsOpen`}),` | The row is clicked/activated         | `,(0,h.jsx)(t.code,{children:`void`}),`  | No         |`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Renders as a real `,(0,h.jsx)(t.code,{children:`<a>`}),` (when `,(0,h.jsx)(t.code,{children:`href`}),` is set) or `,(0,h.jsx)(t.code,{children:`<button>`}),` (otherwise) — native keyboard
activation and focus behavior, not a `,(0,h.jsx)(t.code,{children:`<div>`}),` with a click handler.`]}),`
`,(0,h.jsxs)(t.li,{children:[`A link opens with `,(0,h.jsx)(t.code,{children:`rel="noopener noreferrer"`}),` by default, regardless of `,(0,h.jsx)(t.code,{children:`target`}),`.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The separator dot between source name and version is a plain decorative `,(0,h.jsx)(t.code,{children:`<span>`}),` with no
announced role — the two text values are read in sequence by assistive tech.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=s(),t(),r(),c()})))()}g();export{m as default};