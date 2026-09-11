import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,i as l,n as u,r as d,t as f}from"./bs-chatbot-sources-drawer.stories-sLWYkQqH.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`chatbot-sources-drawer`,children:`Chatbot Sources Drawer`}),`
`,(0,h.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#empty`,children:`Empty`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#many-sources-scrollable`,children:`Many sources (scrollable)`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#events`,children:`Events`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,h.jsxs)(t.p,{children:[`The "Sources" panel shown alongside a Genie AI chat response — a header with a title, a count
badge, and a collapse chevron, above a stack of `,(0,h.jsx)(t.code,{children:`bs-source-link`}),` citation rows.`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`When to use`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Displaying the documents/sources a Genie response cited, typically opened from a "view sources"
action on a `,(0,h.jsx)(t.code,{children:`bs-chatbot-response-action`}),` bar.`]}),`
`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`A generic list container — this component's header (title + count + collapse) is purpose-built
for the sources use case.`}),`
`]}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`empty`,children:`Empty`}),`
`,(0,h.jsxs)(t.p,{children:[`The count badge only renders once there's at least one source (auto-detected from slotted
`,(0,h.jsx)(t.code,{children:`bs-source-link`}),` children, or overridden via `,(0,h.jsx)(t.code,{children:`count`}),`).`]}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`many-sources-scrollable`,children:`Many sources (scrollable)`}),`
`,(0,h.jsx)(t.p,{children:`The row list scrolls independently of the header, which stays pinned with a drop shadow to
separate it from the scrolled content.`}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,h.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Slots: default (one or more `,(0,h.jsx)(t.code,{children:`bs-source-link`}),` rows), `,(0,h.jsx)(t.code,{children:`collapse-icon`}),` (overrides the default
chevron)`]}),`
`,(0,h.jsxs)(t.li,{children:[`Shadow parts: `,(0,h.jsx)(t.code,{children:`::part(heading)`}),`, `,(0,h.jsx)(t.code,{children:`::part(count)`}),`, `,(0,h.jsx)(t.code,{children:`::part(collapse)`}),`, `,(0,h.jsx)(t.code,{children:`::part(list)`})]}),`
`,(0,h.jsxs)(t.li,{children:[`CSS custom properties: `,(0,h.jsx)(t.code,{children:`--bs-chatbot-sources-drawer-bg`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-chatbot-sources-drawer-header-shadow`}),`, `,(0,h.jsx)(t.code,{children:`--bs-chatbot-sources-drawer-header-padding-x`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-chatbot-sources-drawer-header-padding-top`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-chatbot-sources-drawer-header-padding-bottom`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-chatbot-sources-drawer-heading-color`}),`, `,(0,h.jsx)(t.code,{children:`--bs-chatbot-sources-drawer-count-bg`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-chatbot-sources-drawer-count-color`}),`, `,(0,h.jsx)(t.code,{children:`--bs-chatbot-sources-drawer-collapse-hover`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-chatbot-sources-drawer-section-gap`}),`, `,(0,h.jsx)(t.code,{children:`--bs-chatbot-sources-drawer-list-padding`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-chatbot-sources-drawer-list-gap`})]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,h.jsxs)(t.p,{children:[`| Event        | Fires when                     | Payload | Cancelable |
| ------------ | ------------------------------- | ------- | ---------- |
| `,(0,h.jsx)(t.code,{children:`bsCollapse`}),` | The collapse chevron is clicked | `,(0,h.jsx)(t.code,{children:`void`}),`  | No         |`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`The panel has `,(0,h.jsx)(t.code,{children:`role="region"`}),` with `,(0,h.jsx)(t.code,{children:`aria-label`}),` set to the current `,(0,h.jsx)(t.code,{children:`heading`}),`, so it's announced
as a distinct landmark.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The collapse button has a fixed `,(0,h.jsx)(t.code,{children:`aria-label="Collapse sources"`}),` since it's icon-only.`]}),`
`,(0,h.jsxs)(t.li,{children:[`This component does not hide/collapse itself on `,(0,h.jsx)(t.code,{children:`bsCollapse`}),` — the consuming app owns whether
the panel stays mounted or is removed/hidden in response to the event.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=s(),t(),r(),c()})))()}g();export{m as default};