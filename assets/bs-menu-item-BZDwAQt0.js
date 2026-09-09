import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,i as l,n as u,r as d,t as f}from"./bs-menu-item.stories-By8vGYGY.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`menu-item`,children:`Menu item`}),`
`,(0,h.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#with-an-icon`,children:`With an icon`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#in-a-bs-menu`,children:`In a bs-menu`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#events`,children:`Events`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,h.jsxs)(t.p,{children:[`A single selectable row inside a `,(0,h.jsx)(t.code,{children:`bs-menu`}),`: an optional icon plus a text label, rendered as a real
`,(0,h.jsx)(t.code,{children:`<button>`}),` for correct keyboard/click semantics.`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`When to use`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`As a child of `,(0,h.jsx)(t.code,{children:`bs-menu`}),`, one per selectable action/option.`]}),`
`]}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Outside of `,(0,h.jsx)(t.code,{children:`bs-menu`}),` -- this component's sizing/hover treatment is designed to sit inside the
menu's rounded, padded list box.`]}),`
`]}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`with-an-icon`,children:`With an icon`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`icon`}),` slot is optional and has no default fallback glyph -- unlike some other components in
this library, `,(0,h.jsx)(t.code,{children:`bs-menu-item`}),` is generic and has no confirmed default icon, so every usage supplies
its own. When nothing is slotted, no icon space is reserved.`]}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`in-a-bs-menu`,children:`In a bs-menu`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`bs-menu-item`}),` is designed to be used as a child of `,(0,h.jsx)(t.code,{children:`bs-menu`}),`, which supplies the rounded,
elevated, padded list box around a stack of items.`]}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,h.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Slots: `,(0,h.jsx)(t.code,{children:`icon`}),`, default (label text)`]}),`
`,(0,h.jsxs)(t.li,{children:[`Shadow parts: `,(0,h.jsx)(t.code,{children:`::part(item)`}),`, `,(0,h.jsx)(t.code,{children:`::part(icon)`}),`, `,(0,h.jsx)(t.code,{children:`::part(label)`})]}),`
`,(0,h.jsxs)(t.li,{children:[`CSS custom properties: `,(0,h.jsx)(t.code,{children:`--bs-menu-item-radius`}),`, `,(0,h.jsx)(t.code,{children:`--bs-menu-item-padding-y`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-menu-item-padding-x`}),`, `,(0,h.jsx)(t.code,{children:`--bs-menu-item-gap`}),`, `,(0,h.jsx)(t.code,{children:`--bs-menu-item-hover`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-menu-item-pressed`}),`, `,(0,h.jsx)(t.code,{children:`--bs-menu-item-color`}),`, `,(0,h.jsx)(t.code,{children:`--bs-menu-item-font-size`}),`,
`,(0,h.jsx)(t.code,{children:`--bs-menu-item-line-height`})]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,h.jsxs)(t.p,{children:[`| Event      | Fires when             | Payload | Cancelable |
| ---------- | ----------------------- | ------- | ---------- |
| `,(0,h.jsx)(t.code,{children:`bsSelect`}),` | The item is clicked      | `,(0,h.jsx)(t.code,{children:`void`}),`  | No         |`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Renders a real `,(0,h.jsx)(t.code,{children:`<button type="button">`}),` with `,(0,h.jsx)(t.code,{children:`role="menuitem"`}),`, so it participates correctly in
tab order and native click/keyboard activation (`,(0,h.jsx)(`kbd`,{children:`Enter`}),`/`,(0,h.jsx)(`kbd`,{children:`Space`}),`).`]}),`
`,(0,h.jsxs)(t.li,{children:[`The icon slot is `,(0,h.jsx)(t.code,{children:`aria-hidden`}),` at the consumer's discretion (icons are typically decorative next
to a visible text label) -- `,(0,h.jsx)(t.code,{children:`bs-menu-item`}),` itself does not add `,(0,h.jsx)(t.code,{children:`aria-hidden`}),` to slotted icon
content, so a consumer slotting in a meaningful icon should add that themselves.`]}),`
`,(0,h.jsxs)(t.li,{children:[`No arrow-key roving focus between sibling items is implemented -- users move between items with
`,(0,h.jsx)(`kbd`,{children:`Tab`}),`, same as any list of buttons.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=s(),t(),r(),c()})))()}g();export{m as default};