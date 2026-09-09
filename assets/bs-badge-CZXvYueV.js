import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,i as l,n as u,r as d,t as f}from"./bs-badge.stories-fHNcuqJu.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`badge`,children:`Badge`}),`
`,(0,h.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#all-variants`,children:`All variants`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#long-text-edge-case`,children:`Long text (edge case)`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,h.jsx)(t.p,{children:`A small status or category pill, usually paired with a label or list item.`}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`When to use`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Communicating a short, fixed status (e.g. "Active", "On leave") or category label.`}),`
`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`As an interactive/clickable element — a badge is a label, not a control. Use a button or chip
component if it needs to be clickable.`}),`
`,(0,h.jsx)(t.li,{children:`For long text — badges are sized for one or two words.`}),`
`]}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`all-variants`,children:`All variants`}),`
`,(0,h.jsxs)(t.p,{children:[`Every value of the `,(0,h.jsx)(t.code,{children:`variant`}),` prop also has its own individually-controllable story in the
sidebar (`,(0,h.jsx)(t.code,{children:`Primary`}),`, `,(0,h.jsx)(t.code,{children:`DefaultVariant`}),`, `,(0,h.jsx)(t.code,{children:`Success`}),`, `,(0,h.jsx)(t.code,{children:`Warning`}),`, `,(0,h.jsx)(t.code,{children:`Info`}),`, `,(0,h.jsx)(t.code,{children:`Error`}),`, `,(0,h.jsx)(t.code,{children:`Neutral`}),`,
`,(0,h.jsx)(t.code,{children:`Inverse`}),`) — this canvas shows them side by side for comparison. `,(0,h.jsx)(t.code,{children:`Inverse`}),` is shown against a
dark background, since it's designed to sit on a dark/inverse surface.`]}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`long-text-edge-case`,children:`Long text (edge case)`}),`
`,(0,h.jsx)(t.p,{children:`Badges are sized for one or two words (see "When not to use" above) — this shows what happens
when that guidance is ignored: the pill grows to fit the text rather than truncating, which can
overflow a narrow layout.`}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,h.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Slots: default (label)`}),`
`,(0,h.jsxs)(t.li,{children:[`Shadow parts: `,(0,h.jsx)(t.code,{children:`::part(container)`})]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Renders as a plain `,(0,h.jsx)(t.code,{children:`<span>`}),` — purely informational text, not an interactive element, so it
needs no keyboard handling or ARIA role by default.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Every variant's text/background pairing comes from `,(0,h.jsx)(t.code,{children:`brandsync-tokens`}),`' semantic color scale,
which ships pre-computed WCAG contrast ratios (`,(0,h.jsx)(t.code,{children:`accessibility.json`}),`) — this component doesn't
independently re-verify contrast, it inherits whatever the token pairing provides.`]}),`
`,(0,h.jsxs)(t.li,{children:[`If a badge communicates a status change that should be announced live (e.g. updating from
"Pending" to "Active" without a page reload), wrap it with `,(0,h.jsx)(t.code,{children:`aria-live="polite"`}),` at the point
where it's used — this component doesn't add that itself, since not every usage is dynamic.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=s(),t(),r(),c()})))()}g();export{m as default};