import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,n as i,s as a,x as o}from"./blocks-Dao9KPCn.js";import{a as s,i as c,n as l,r as u,t as d}from"./bs-data-table.stories-2n9lGvcM.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(t.h1,{id:`data-table`,children:`Data Table`}),`
`,(0,m.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#selectable-rows`,children:`Selectable rows`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#custom-cell-renderer`,children:`Custom cell renderer`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,m.jsx)(t.p,{children:`A sortable, optionally row-selectable table for tabular data.`}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`When to use`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Comparing structured records across the same set of fields (a list of people, bookings, etc.).`}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`A handful of unrelated key/value pairs — a simple list or card is lighter-weight.`}),`
`,(0,m.jsx)(t.li,{children:`Deeply nested/hierarchical data — this component renders one flat row per record.`}),`
`]}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`selectable-rows`,children:`Selectable rows`}),`
`,(0,m.jsxs)(t.p,{children:[`Adds a checkbox column; toggling one emits `,(0,m.jsx)(t.code,{children:`bsRowSelect`}),`.`]}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`custom-cell-renderer`,children:`Custom cell renderer`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`cellRenderer(row, column) => string`}),` lets a column render arbitrary HTML (e.g. an actions
button) — it's developer-supplied, trusted output (same trust model as React's
`,(0,m.jsx)(t.code,{children:`dangerouslySetInnerHTML`}),`), while the default path always renders cell values as escaped text so
untrusted row data can never be interpreted as HTML.`]}),`
`,(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`columns`}),`, `,(0,m.jsx)(t.code,{children:`rows`}),`, and `,(0,m.jsx)(t.code,{children:`cellRenderer`}),` are `,(0,m.jsx)(t.strong,{children:`JS-property-only`}),` — HTML attributes can only carry
strings, so arrays/objects/functions must be set via `,(0,m.jsx)(t.code,{children:`element.rows = [...]`}),`, not as attributes.
There's no interactive Controls table for this component because of that (Storybook's controls
panel only drives string/boolean/number attributes) — see each story's "Show code" for the actual
usage.`]}),`
`,(0,m.jsxs)(t.p,{children:[`| Prop | Type | Default |
|---|---|---|
| `,(0,m.jsx)(t.code,{children:`columns`}),` | `,(0,m.jsx)(t.code,{children:`{ key: string; label: string; sortable?: boolean }[]`}),` | `,(0,m.jsx)(t.code,{children:`[]`}),` |
| `,(0,m.jsx)(t.code,{children:`rows`}),` | `,(0,m.jsx)(t.code,{children:`(Record<string, unknown> & { id: string \\| number })[]`}),` | `,(0,m.jsx)(t.code,{children:`[]`}),` |
| `,(0,m.jsx)(t.code,{children:`sortColumn`}),` | `,(0,m.jsx)(t.code,{children:`string`}),` | `,(0,m.jsx)(t.code,{children:`undefined`}),` |
| `,(0,m.jsx)(t.code,{children:`sortDirection`}),` | `,(0,m.jsx)(t.code,{children:`'asc' \\| 'desc'`}),` | `,(0,m.jsx)(t.code,{children:`'asc'`}),` |
| `,(0,m.jsx)(t.code,{children:`selectable`}),` | `,(0,m.jsx)(t.code,{children:`boolean`}),` | `,(0,m.jsx)(t.code,{children:`false`}),` |
| `,(0,m.jsx)(t.code,{children:`cellRenderer`}),` | `,(0,m.jsx)(t.code,{children:`(row, column) => string`}),` | `,(0,m.jsx)(t.code,{children:`undefined`}),` |`]}),`
`,(0,m.jsxs)(t.p,{children:[`| Event | Detail | Fires when |
|---|---|---|
| `,(0,m.jsx)(t.code,{children:`bsSort`}),` | `,(0,m.jsx)(t.code,{children:`{ column: string; direction: 'asc' \\| 'desc' }`}),` | a sortable header is activated |
| `,(0,m.jsx)(t.code,{children:`bsRowSelect`}),` | `,(0,m.jsx)(t.code,{children:`{ id: string \\| number; selected: boolean }`}),` | a row checkbox is toggled |`]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,m.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Shadow parts: `,(0,m.jsx)(t.code,{children:`::part(table)`}),`, `,(0,m.jsx)(t.code,{children:`::part(head)`}),`, `,(0,m.jsx)(t.code,{children:`::part(body)`}),`, `,(0,m.jsx)(t.code,{children:`::part(row)`}),`,
`,(0,m.jsx)(t.code,{children:`::part(header-cell)`}),`, `,(0,m.jsx)(t.code,{children:`::part(cell)`})]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Renders real semantic `,(0,m.jsx)(t.code,{children:`<table>`}),`/`,(0,m.jsx)(t.code,{children:`<thead>`}),`/`,(0,m.jsx)(t.code,{children:`<tbody>`}),`/`,(0,m.jsx)(t.code,{children:`<th>`}),`/`,(0,m.jsx)(t.code,{children:`<td>`}),` elements, not styled `,(0,m.jsx)(t.code,{children:`<div>`}),`s.`]}),`
`,(0,m.jsxs)(t.li,{children:[`Sortable column headers are real `,(0,m.jsx)(t.code,{children:`<button>`}),` elements (keyboard-focusable, activate on
`,(0,m.jsx)(`kbd`,{children:`Enter`}),`/`,(0,m.jsx)(`kbd`,{children:`Space`}),`), each with `,(0,m.jsx)(t.code,{children:`aria-sort`}),` on its `,(0,m.jsx)(t.code,{children:`<th>`}),` reflecting the current
sort state — not just a mouse-only `,(0,m.jsx)(t.code,{children:`onClick`}),` on the header cell.`]}),`
`,(0,m.jsxs)(t.li,{children:[`Row selection uses a native `,(0,m.jsx)(t.code,{children:`<input type="checkbox">`}),`, so it's independently
keyboard/AT-accessible with no extra wiring.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=o(),t(),r(),s()})))()}h();export{p as default};