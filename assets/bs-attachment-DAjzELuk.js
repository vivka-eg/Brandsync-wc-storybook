import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./bs-attachment.stories-Owsyd5Ul.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(t.h1,{id:`attachment`,children:`Attachment`}),`
`,(0,v.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#pdf--document`,children:`PDF / Document`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#loading`,children:`Loading`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#gallery`,children:`Gallery`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#events`,children:`Events`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,v.jsxs)(t.p,{children:[`A single file attachment preview for `,(0,v.jsx)(t.code,{children:`bs-composer`}),`: an image thumbnail, or a filename card with a
colored file-type badge, with an optional upload-in-progress spinner and a hover/focus-revealed
remove button.`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`When to use`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`Rendered by the consuming app for each file a user has attached to a Genie AI chat message,
typically alongside or inside `,(0,v.jsx)(t.code,{children:`bs-composer`}),`.`]}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`A generic file-upload control — this is a preview-only presentational component. The consuming
app owns the actual file picker/upload logic and drives `,(0,v.jsx)(t.code,{children:`loading`}),` from that state.`]}),`
`]}),`
`,(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h2,{id:`pdf--document`,children:`PDF / Document`}),`
`,(0,v.jsx)(a,{of:c}),`
`,(0,v.jsx)(a,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`loading`,children:`Loading`}),`
`,(0,v.jsxs)(t.p,{children:[`Set `,(0,v.jsx)(t.code,{children:`loading`}),` while the file is still uploading. Images blur with a centered spinner overlay;
PDF/Document cards swap the file-type icon for a spinner inside the same colored badge.`]}),`
`,(0,v.jsx)(a,{of:u}),`
`,(0,v.jsx)(a,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`gallery`,children:`Gallery`}),`
`,(0,v.jsxs)(t.p,{children:[`For a fixed, wrapping layout, a consumer can lay out several attachments with a plain `,(0,v.jsx)(t.code,{children:`<div>`}),` using
`,(0,v.jsx)(t.code,{children:`flex-wrap: wrap`}),`, as shown here. For a horizontally-scrolling row (e.g. inside `,(0,v.jsx)(t.code,{children:`bs-composer`}),`'s
`,(0,v.jsx)(t.code,{children:`attachments`}),` slot), use `,(0,v.jsx)(t.code,{children:`bs-attachment-list`}),` instead.`]}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,v.jsx)(i,{of:h}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,v.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Slots: none`}),`
`,(0,v.jsxs)(t.li,{children:[`Shadow parts: `,(0,v.jsx)(t.code,{children:`::part(thumbnail)`}),`, `,(0,v.jsx)(t.code,{children:`::part(card)`}),`, `,(0,v.jsx)(t.code,{children:`::part(filename)`}),`, `,(0,v.jsx)(t.code,{children:`::part(badge)`}),`,
`,(0,v.jsx)(t.code,{children:`::part(remove)`})]}),`
`,(0,v.jsxs)(t.li,{children:[`CSS custom properties: `,(0,v.jsx)(t.code,{children:`--bs-attachment-size`}),`, `,(0,v.jsx)(t.code,{children:`--bs-attachment-radius`}),`,
`,(0,v.jsx)(t.code,{children:`--bs-attachment-border-color`}),`, `,(0,v.jsx)(t.code,{children:`--bs-attachment-card-bg`}),`, `,(0,v.jsx)(t.code,{children:`--bs-attachment-filename-color`}),`,
`,(0,v.jsx)(t.code,{children:`--bs-attachment-badge-bg-pdf`}),`, `,(0,v.jsx)(t.code,{children:`--bs-attachment-badge-bg-document`}),`,
`,(0,v.jsx)(t.code,{children:`--bs-attachment-remove-bg`}),`, `,(0,v.jsx)(t.code,{children:`--bs-attachment-remove-hover`}),`, `,(0,v.jsx)(t.code,{children:`--bs-attachment-remove-pressed`}),`,
`,(0,v.jsx)(t.code,{children:`--bs-attachment-remove-focus`})]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,v.jsxs)(t.p,{children:[`| Event      | Fires when                    | Payload | Cancelable |
| ---------- | ------------------------------ | ------- | ---------- |
| `,(0,v.jsx)(t.code,{children:`bsRemove`}),` | The remove button is clicked   | `,(0,v.jsx)(t.code,{children:`void`}),`  | No         |`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`The remove button is a real `,(0,v.jsx)(t.code,{children:`<button>`}),` with `,(0,v.jsx)(t.code,{children:`aria-label="Remove attachment"`}),` — keyboard
focusable and reachable via Tab even though it's visually hidden until hover/focus (opacity, not
`,(0,v.jsx)(t.code,{children:`display: none`}),`), so keyboard users can always reach it.`]}),`
`,(0,v.jsxs)(t.li,{children:[`The host has `,(0,v.jsx)(t.code,{children:`aria-busy="true"`}),` while `,(0,v.jsx)(t.code,{children:`loading`}),` is set.`]}),`
`,(0,v.jsxs)(t.li,{children:[`The spinner has `,(0,v.jsx)(t.code,{children:`role="status"`}),` with `,(0,v.jsx)(t.code,{children:`aria-label="Uploading"`}),`, and its rotation is disabled under
`,(0,v.jsx)(t.code,{children:`prefers-reduced-motion: reduce`}),`.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=s(),t(),r(),l()})))()}y();export{_ as default};