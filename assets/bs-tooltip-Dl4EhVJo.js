import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{i as c,n as l,r as u,t as d}from"./bs-tooltip.stories-Dr53RrUy.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:u}),`
`,(0,m.jsx)(t.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,m.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#positioned-against-a-trigger`,children:`Positioned against a trigger`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,m.jsx)(t.p,{children:`A dark tooltip bubble with a pointer arrow, used to surface a short hint of extra information
next to a trigger element.`}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`When to use`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`A short, contextual hint of extra information shown next to a trigger element on hover/focus,
where the host app owns the show/hide and positioning logic.`}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`A component that manages its own trigger interaction (hover/focus listeners) or positioning --
this component intentionally does not do that; wire that up in the consuming app instead.`}),`
`]}),`
`,(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`positioned-against-a-trigger`,children:`Positioned against a trigger`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`bs-tooltip`}),` is a purely presentational bubble -- like `,(0,m.jsx)(t.code,{children:`bs-menu`}),`, it doesn't manage its own
visibility or positioning relative to a trigger element. This story shows the intended consumption
pattern: a wrapping `,(0,m.jsx)(t.code,{children:`position: relative`}),` container with the tooltip absolutely positioned below its
trigger (the arrow points up, toward the trigger), the same approach `,(0,m.jsx)(t.code,{children:`bs-chatbot-response-action`}),`
uses for its own `,(0,m.jsx)(t.code,{children:`menu`}),` slot.`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,m.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Slots: default (the tooltip's message content)`}),`
`,(0,m.jsxs)(t.li,{children:[`Shadow parts: `,(0,m.jsx)(t.code,{children:`::part(bubble)`}),`, `,(0,m.jsx)(t.code,{children:`::part(arrow)`})]}),`
`,(0,m.jsxs)(t.li,{children:[`CSS custom properties: `,(0,m.jsx)(t.code,{children:`--bs-tooltip-bg`}),`, `,(0,m.jsx)(t.code,{children:`--bs-tooltip-color`}),`, `,(0,m.jsx)(t.code,{children:`--bs-tooltip-radius`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-tooltip-padding-x`}),`, `,(0,m.jsx)(t.code,{children:`--bs-tooltip-padding-y`}),`, `,(0,m.jsx)(t.code,{children:`--bs-tooltip-max-width`}),`,
`,(0,m.jsx)(t.code,{children:`--bs-tooltip-shadow`}),`, `,(0,m.jsx)(t.code,{children:`--bs-tooltip-font-size`}),`, `,(0,m.jsx)(t.code,{children:`--bs-tooltip-line-height`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`placement`}),` prop: only `,(0,m.jsx)(t.code,{children:`'top'`}),` is implemented today (arrow at the top of the bubble, pointing
up toward a trigger above it) -- the only variant confirmed from the source Figma component.`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`bs-tooltip`}),` renders purely visual markup with no ARIA role, `,(0,m.jsx)(t.code,{children:`aria-describedby`}),` wiring, or
focus management -- a consuming app is responsible for associating the bubble with its trigger
(e.g. `,(0,m.jsx)(t.code,{children:`aria-describedby`}),`) and for showing/hiding it on hover and keyboard focus, not just hover
alone.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=s(),t(),r(),c()})))()}h();export{p as default};