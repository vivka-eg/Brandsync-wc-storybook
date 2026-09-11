import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{n as c,r as l,t as u}from"./bs-modal.stories-DVU-lmyZ.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`modal`,children:`Modal`}),`
`,(0,p.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#interactive-example`,children:`Interactive example`})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,p.jsxs)(t.p,{children:[`An overlay dialog that interrupts the current flow for a focused task or confirmation. Closes
itself on backdrop click, Escape, or its own close button, and emits `,(0,p.jsx)(t.code,{children:`bsClose`}),`.`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`When to use`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Confirming a consequential action (e.g. "Confirm booking") before it takes effect.`}),`
`,(0,p.jsx)(t.li,{children:`A short, focused task that doesn't warrant navigating to a new page.`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`For non-blocking status messages — use a toast/notification instead of interrupting the user.`}),`
`,(0,p.jsx)(t.li,{children:`For a long, multi-step flow — a full page or a dedicated route is usually a better fit than a
modal that just gets taller and taller.`}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`interactive-example`,children:`Interactive example`}),`
`,(0,p.jsxs)(t.p,{children:[`Click "Open modal" to see it — `,(0,p.jsx)(t.code,{children:`open`}),` must be set as a JS property (`,(0,p.jsx)(t.code,{children:`el.open = true`}),`), not an
attribute, to open it programmatically.`]}),`
`,(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,p.jsx)(i,{of:u}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,p.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`Slots: default (body), `,(0,p.jsx)(t.code,{children:`footer`})]}),`
`,(0,p.jsxs)(t.li,{children:[`Shadow parts: `,(0,p.jsx)(t.code,{children:`::part(backdrop)`}),`, `,(0,p.jsx)(t.code,{children:`::part(dialog)`}),`, `,(0,p.jsx)(t.code,{children:`::part(header)`}),`, `,(0,p.jsx)(t.code,{children:`::part(close)`}),`,
`,(0,p.jsx)(t.code,{children:`::part(body)`}),`, `,(0,p.jsx)(t.code,{children:`::part(footer)`})]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`The dialog has `,(0,p.jsx)(t.code,{children:`role="dialog"`}),`, `,(0,p.jsx)(t.code,{children:`aria-modal="true"`}),`, and `,(0,p.jsx)(t.code,{children:`aria-label`}),` (from `,(0,p.jsx)(t.code,{children:`heading`}),`).`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Focus management`}),`: on open, the previously-focused element is remembered and focus moves
into the dialog; on close, focus returns to whatever triggered the modal.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Focus containment`}),`: while open, any focus that lands outside the dialog (e.g. via a
programmatic `,(0,p.jsx)(t.code,{children:`.focus()`}),` call elsewhere) is redirected back into it, so keyboard/AT users can't
silently tab into background page content.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(`kbd`,{children:`Escape`}),` closes the dialog from anywhere on the page while it's open.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=s(),t(),r(),l()})))()}m();export{f as default};