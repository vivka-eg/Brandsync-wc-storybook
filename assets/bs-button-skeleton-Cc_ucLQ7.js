import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{i as c,n as l,r as u,t as d}from"./bs-button-skeleton.stories-BzwWJwbQ.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:u}),`
`,(0,m.jsx)(t.h1,{id:`button-skeleton`,children:`Button skeleton`}),`
`,(0,m.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#sizes`,children:`Sizes`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,m.jsxs)(t.p,{children:[`A shape-matched loading placeholder for `,(0,m.jsx)(t.code,{children:`bs-button`}),`, shown while the real label/action isn't
known yet.`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`When to use`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`In place of a `,(0,m.jsx)(t.code,{children:`bs-button`}),` whose label/visibility depends on data that hasn't loaded yet.`]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`While a button's own click handler is running (e.g. a submit request in flight) — render the
real `,(0,m.jsx)(t.code,{children:`bs-button`}),` and use its own busy/spinner state instead; this component is not a
submit-in-progress spinner.`]}),`
`]}),`
`,(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,m.jsxs)(t.p,{children:[`Three sizes — `,(0,m.jsx)(t.code,{children:`sm`}),`, `,(0,m.jsx)(t.code,{children:`md`}),`, `,(0,m.jsx)(t.code,{children:`lg`}),` — mirror `,(0,m.jsx)(t.code,{children:`bs-button`}),`'s own height tokens
(`,(0,m.jsx)(t.code,{children:`--bs-spacing-500/600/700`}),`), so a skeleton and the real button it stands in for don't shift the
layout when swapped.`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,m.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Shadow parts: `,(0,m.jsx)(t.code,{children:`::part(container)`})]}),`
`,(0,m.jsxs)(t.li,{children:[`CSS Custom Properties: `,(0,m.jsx)(t.code,{children:`--bs-button-skeleton-height-sm/md/lg`}),`, `,(0,m.jsx)(t.code,{children:`--bs-button-skeleton-width`})]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Renders as a `,(0,m.jsx)(t.code,{children:`<span role="status" aria-label="Loading">`}),`, so screen readers announce the
loading state instead of relying on the visual pulse animation alone.`]}),`
`,(0,m.jsxs)(t.li,{children:[`The pulse animation respects `,(0,m.jsx)(t.code,{children:`prefers-reduced-motion`}),` and is disabled entirely for users who
request reduced motion.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=s(),t(),r(),c()})))()}h();export{p as default};