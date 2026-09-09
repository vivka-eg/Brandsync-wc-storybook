import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./bs-input.stories-BItLYnCl.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h1,{id:`input`,children:`Input`}),`
`,(0,g.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#with-description`,children:`With description`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#with-error`,children:`With error`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#disabled-state`,children:`Disabled state`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,g.jsx)(t.p,{children:`A single-line text field with an optional label, description, and error state.`}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`When to use`})}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Collecting a single line of free-text, email, password, or numeric input.`}),`
`,(0,g.jsxs)(t.li,{children:[`Pair with `,(0,g.jsx)(t.code,{children:`error`}),` for inline validation feedback tied to that specific field.`]}),`
`]}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`Multi-line text — this component has no `,(0,g.jsx)(t.code,{children:`textarea`}),` mode.`]}),`
`,(0,g.jsx)(t.li,{children:`A fixed set of choices — use a select/radio/checkbox component instead of free text.`}),`
`]}),`
`,(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`with-description`,children:`With description`}),`
`,(0,g.jsx)(t.p,{children:`Helper text shown below the field when there's no error.`}),`
`,(0,g.jsx)(a,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`with-error`,children:`With error`}),`
`,(0,g.jsxs)(t.p,{children:[`Error text replaces the description when both would otherwise show, and sets `,(0,g.jsx)(t.code,{children:`aria-invalid`}),` on
the field (see Accessibility below).`]}),`
`,(0,g.jsx)(a,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`disabled-state`,children:`Disabled state`}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,g.jsx)(i,{of:p}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,g.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`Shadow parts: `,(0,g.jsx)(t.code,{children:`::part(label)`}),`, `,(0,g.jsx)(t.code,{children:`::part(control)`}),`, `,(0,g.jsx)(t.code,{children:`::part(description)`}),`, `,(0,g.jsx)(t.code,{children:`::part(error)`})]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`The `,(0,g.jsx)(t.code,{children:`<label>`}),` is programmatically associated with the `,(0,g.jsx)(t.code,{children:`<input>`}),` via `,(0,g.jsx)(t.code,{children:`for`}),`/`,(0,g.jsx)(t.code,{children:`id`}),` (scoped to this
instance's own Shadow DOM, so it's always unique) — a screen reader announces the label when the
field receives focus.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`description`}),`/`,(0,g.jsx)(t.code,{children:`error`}),` text is linked to the input via `,(0,g.jsx)(t.code,{children:`aria-describedby`}),`, so it's announced
alongside the label, not just visually placed nearby.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Setting `,(0,g.jsx)(t.code,{children:`error`}),` also sets `,(0,g.jsx)(t.code,{children:`aria-invalid="true"`}),` on the input.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=s(),t(),r(),d()})))()}_();export{h as default};