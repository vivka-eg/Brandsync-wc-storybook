import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{i as c,n as l,r as u,t as d}from"./bs-chatbot-suggestion-button.stories-BkAP99ZR.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:u}),`
`,(0,m.jsx)(t.h1,{id:`chatbot-suggestion-button`,children:`Chatbot suggestion button`}),`
`,(0,m.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#multiple-suggestions-flex-wrap-row`,children:`Multiple suggestions (flex-wrap row)`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#events`,children:`Events`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,m.jsxs)(t.p,{children:[`A pill-shaped clickable suggestion chip for a Genie AI chat panel (e.g. "How can I help you?").
One instance renders one chip -- to show several suggestion prompts side by side, render multiple
`,(0,m.jsx)(t.code,{children:`bs-chatbot-suggestion-button`}),` elements inside a plain flex-wrap container.`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`When to use`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Quick-reply/starter prompts shown above or alongside `,(0,m.jsx)(t.code,{children:`bs-composer`}),` in a Genie AI chat panel.`]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`As a general-purpose button — use `,(0,m.jsx)(t.code,{children:`bs-button`}),` instead, this component's pill shape and tonal
color treatment are specific to Genie chat suggestion prompts.`]}),`
`]}),`
`,(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`multiple-suggestions-flex-wrap-row`,children:`Multiple suggestions (flex-wrap row)`}),`
`,(0,m.jsxs)(t.p,{children:[`This component doesn't ship a separate list/group wrapper — a consumer lays out several suggestion
chips together with a plain `,(0,m.jsx)(t.code,{children:`<div>`}),` using `,(0,m.jsx)(t.code,{children:`flex-wrap: wrap`}),`, as shown here.`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,m.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Slots: default slot (label text)`}),`
`,(0,m.jsxs)(t.li,{children:[`Shadow parts: `,(0,m.jsx)(t.code,{children:`::part(button)`})]}),`
`,(0,m.jsxs)(t.li,{children:[`CSS custom properties: `,(0,m.jsx)(t.code,{children:`--bs-chatbot-suggestion-button-radius`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-chatbot-suggestion-button-border-color`}),`, `,(0,m.jsx)(t.code,{children:`--bs-chatbot-suggestion-button-bg-default`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-chatbot-suggestion-button-bg-hover`}),`, `,(0,m.jsx)(t.code,{children:`--bs-chatbot-suggestion-button-bg-pressed`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-chatbot-suggestion-button-bg-focus`}),`, `,(0,m.jsx)(t.code,{children:`--bs-chatbot-suggestion-button-text-default`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-chatbot-suggestion-button-text-hover`}),`, `,(0,m.jsx)(t.code,{children:`--bs-chatbot-suggestion-button-focus-ring-color`})]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,m.jsxs)(t.p,{children:[`| Event      | Fires when                | Payload | Cancelable |
| ---------- | -------------------------- | ------- | ---------- |
| `,(0,m.jsx)(t.code,{children:`bsSelect`}),` | The button is clicked      | `,(0,m.jsx)(t.code,{children:`void`}),`  | No         |`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Renders as a native `,(0,m.jsx)(t.code,{children:`<button>`}),`, so it's keyboard-focusable and activatable (Enter/Space) with no
extra ARIA needed.`]}),`
`,(0,m.jsxs)(t.li,{children:[`The 4 Figma-specified interaction states (Enabled/Hover/Pressed/Focus) map directly to native CSS
pseudo-classes (`,(0,m.jsx)(t.code,{children:`:hover`}),`, `,(0,m.jsx)(t.code,{children:`:active`}),`, `,(0,m.jsx)(t.code,{children:`:focus-visible`}),`) on the inner button — there's no custom
`,(0,m.jsx)(t.code,{children:`state`}),` prop.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`disabled`}),` applies the native `,(0,m.jsx)(t.code,{children:`disabled`}),` attribute, which removes the button from the tab order
and blocks both click and keyboard activation automatically.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=s(),t(),r(),c()})))()}h();export{p as default};