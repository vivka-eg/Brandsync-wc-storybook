import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{i as c,n as l,r as u,t as d}from"./bs-chatbot-header.stories-CZLNmcO1.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:u}),`
`,(0,m.jsx)(t.h1,{id:`chatbot-header`,children:`Chatbot header`}),`
`,(0,m.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#chat-panel-header--composer`,children:`Chat panel (header + composer)`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#events`,children:`Events`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,m.jsxs)(t.p,{children:[`The header bar that sits above `,(0,m.jsx)(t.code,{children:`bs-composer`}),` in a Genie AI chat panel: the Genie brand mark on
the left and four fixed actions (new chat, history, expand, close) on the right.`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`When to use`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`The top bar of a Genie AI chat panel, directly above a `,(0,m.jsx)(t.code,{children:`bs-composer`}),`.`]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`A generic app/page header — this component's layout and actions are purpose-built for the
Genie chat panel, not a general navigation bar.`}),`
`]}),`
`,(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`chat-panel-header--composer`,children:`Chat panel (header + composer)`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`bs-chatbot-header`}),` and `,(0,m.jsx)(t.code,{children:`bs-composer`}),` are designed to be stacked directly together to form a
complete Genie AI chat panel — the header pinned to the top, the composer below it.`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,m.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Shadow parts: `,(0,m.jsx)(t.code,{children:`::part(logo)`}),`, `,(0,m.jsx)(t.code,{children:`::part(new-chat)`}),`, `,(0,m.jsx)(t.code,{children:`::part(history)`}),`, `,(0,m.jsx)(t.code,{children:`::part(expand)`}),`, `,(0,m.jsx)(t.code,{children:`::part(close)`})]}),`
`,(0,m.jsxs)(t.li,{children:[`CSS custom properties: `,(0,m.jsx)(t.code,{children:`--bs-chatbot-header-bg`}),`, `,(0,m.jsx)(t.code,{children:`--bs-chatbot-header-border`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-chatbot-header-padding-top`}),`, `,(0,m.jsx)(t.code,{children:`--bs-chatbot-header-padding-bottom`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-chatbot-header-padding-x`}),`, `,(0,m.jsx)(t.code,{children:`--bs-chatbot-header-gap`}),`, `,(0,m.jsx)(t.code,{children:`--bs-chatbot-header-button-size`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-chatbot-header-button-radius`}),`, `,(0,m.jsx)(t.code,{children:`--bs-chatbot-header-button-hover`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-chatbot-header-button-pressed`}),`, `,(0,m.jsx)(t.code,{children:`--bs-chatbot-header-icon`})]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,m.jsxs)(t.p,{children:[`| Event       | Fires when                          | Payload | Cancelable |
| ----------- | ------------------------------------ | ------- | ---------- |
| `,(0,m.jsx)(t.code,{children:`bsNewChat`}),` | The "New chat" button is clicked     | `,(0,m.jsx)(t.code,{children:`void`}),`  | No         |
| `,(0,m.jsx)(t.code,{children:`bsHistory`}),` | The "History" button is clicked      | `,(0,m.jsx)(t.code,{children:`void`}),`  | No         |
| `,(0,m.jsx)(t.code,{children:`bsExpand`}),`  | The "Expand" button is clicked       | `,(0,m.jsx)(t.code,{children:`void`}),`  | No         |
| `,(0,m.jsx)(t.code,{children:`bsClose`}),`   | The "Close" button is clicked        | `,(0,m.jsx)(t.code,{children:`void`}),`  | No         |`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`The header renders with `,(0,m.jsx)(t.code,{children:`role="banner"`}),` and an `,(0,m.jsx)(t.code,{children:`aria-label`}),` sourced from the `,(0,m.jsx)(t.code,{children:`heading`}),` prop
(default `,(0,m.jsx)(t.code,{children:`"Genie"`}),`), giving assistive technology an accessible name for the landmark.`]}),`
`,(0,m.jsxs)(t.li,{children:[`The logo image's `,(0,m.jsx)(t.code,{children:`alt`}),` text also uses `,(0,m.jsx)(t.code,{children:`heading`}),`, so overriding it (e.g. to `,(0,m.jsx)(t.code,{children:`"Support"`}),` for a
human-support variant of the panel) updates both the landmark name and the image's accessible
name together.`]}),`
`,(0,m.jsxs)(t.li,{children:[`Each of the four icon buttons has a fixed, descriptive `,(0,m.jsx)(t.code,{children:`aria-label`}),` ("New chat", "History",
"Expand", "Close") since they're icon-only with no visible text.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=s(),t(),r(),c()})))()}h();export{p as default};