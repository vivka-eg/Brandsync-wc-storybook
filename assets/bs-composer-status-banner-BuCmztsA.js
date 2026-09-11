import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./bs-composer-status-banner.stories-sEddwO6a.js";function _(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{of:l}),`
`,(0,y.jsx)(t.h1,{id:`composer-status-banner`,children:`Composer Status Banner`}),`
`,(0,y.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:(0,y.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,y.jsx)(t.li,{children:(0,y.jsx)(t.a,{href:`#info--neutral--warning`,children:`Info / Neutral / Warning`})}),`
`,(0,y.jsx)(t.li,{children:(0,y.jsx)(t.a,{href:`#with-action-button`,children:`With action button`})}),`
`,(0,y.jsx)(t.li,{children:(0,y.jsx)(t.a,{href:`#all-types`,children:`All types`})}),`
`,(0,y.jsx)(t.li,{children:(0,y.jsx)(t.a,{href:`#above-bs-composer`,children:`Above bs-composer`})}),`
`,(0,y.jsx)(t.li,{children:(0,y.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,y.jsx)(t.li,{children:(0,y.jsx)(t.a,{href:`#events`,children:`Events`})}),`
`,(0,y.jsx)(t.li,{children:(0,y.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,y.jsxs)(t.p,{children:[`A full-width status banner for use directly above `,(0,y.jsx)(t.code,{children:`bs-composer`}),`, surfacing a message about the
composer's current state (e.g. a send failure, an informational notice) with an optional
"Continue"-style action button and an optional close button.`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`When to use`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`A message tied to the composer itself (send failed, rate-limited, draft restored, etc.) that
needs to sit directly above it.`}),`
`]}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`A toast/snackbar notification unrelated to the composer — this component is not self-dismissing
and has no positioning of its own (it's a static block, not an overlay).`}),`
`]}),`
`,(0,y.jsx)(a,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`info--neutral--warning`,children:`Info / Neutral / Warning`}),`
`,(0,y.jsx)(a,{of:u}),`
`,(0,y.jsx)(a,{of:c}),`
`,(0,y.jsx)(a,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`with-action-button`,children:`With action button`}),`
`,(0,y.jsxs)(t.p,{children:[`Set `,(0,y.jsx)(t.code,{children:`showButton`}),` to render a secondary action alongside the message (e.g. "Retry"). Its color
follows `,(0,y.jsx)(t.code,{children:`type`}),`, except `,(0,y.jsx)(t.code,{children:`type="neutral"`}),`, whose action button is outlined instead of solid since
there's no strong "neutral action" brand color to fill it with.`]}),`
`,(0,y.jsx)(a,{of:h}),`
`,(0,y.jsx)(t.h2,{id:`all-types`,children:`All types`}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`above-bs-composer`,children:`Above bs-composer`}),`
`,(0,y.jsxs)(t.p,{children:[`The intended real-world placement: `,(0,y.jsx)(t.code,{children:`bs-attachment-list`}),` goes `,(0,y.jsx)(t.em,{children:`inside`}),` `,(0,y.jsx)(t.code,{children:`bs-composer`}),` (via its
`,(0,y.jsx)(t.code,{children:`attachments`}),` slot), not as a separate element outside it -- only the banner sits outside, tucked
slightly behind the composer's top edge (a negative `,(0,y.jsx)(t.code,{children:`margin-bottom`}),` on the banner, matching the
source design) so the two read as one continuous surface instead of two stacked cards with a
visible seam.`]}),`
`,(0,y.jsx)(a,{of:g}),`
`,(0,y.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,y.jsx)(i,{of:m}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,y.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Slots: `,(0,y.jsx)(t.code,{children:`icon`}),` (overrides the default clock icon)`]}),`
`,(0,y.jsxs)(t.li,{children:[`Shadow parts: `,(0,y.jsx)(t.code,{children:`::part(icon)`}),`, `,(0,y.jsx)(t.code,{children:`::part(message)`}),`, `,(0,y.jsx)(t.code,{children:`::part(action)`}),`, `,(0,y.jsx)(t.code,{children:`::part(close)`})]}),`
`,(0,y.jsxs)(t.li,{children:[`CSS custom properties: `,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-radius`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-padding-x`}),`, `,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-padding-top`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-padding-bottom`}),`, `,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-gap`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-icon-gap`}),`, `,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-error-bg`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-error-text`}),`, `,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-error-action-bg`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-error-action-bg-hover`}),`, `,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-info-bg`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-info-text`}),`, `,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-info-action-bg`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-info-action-bg-hover`}),`, `,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-neutral-bg`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-neutral-text`}),`, `,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-neutral-action-bg`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-neutral-action-bg-hover`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-neutral-action-border`}),`, `,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-warning-bg`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-warning-text`}),`, `,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-warning-action-bg`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-warning-action-bg-hover`}),`,
`,(0,y.jsx)(t.code,{children:`--bs-composer-status-banner-close-hover-bg`})]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,y.jsxs)(t.p,{children:[`| Event      | Fires when                    | Payload | Cancelable |
| ---------- | ------------------------------ | ------- | ---------- |
| `,(0,y.jsx)(t.code,{children:`bsAction`}),` | The action button is clicked   | `,(0,y.jsx)(t.code,{children:`void`}),`  | No         |
| `,(0,y.jsx)(t.code,{children:`bsClose`}),`  | The close button is clicked    | `,(0,y.jsx)(t.code,{children:`void`}),`  | No         |`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`The close button has a fixed `,(0,y.jsx)(t.code,{children:`aria-label="Dismiss"`}),` since it's icon-only with no visible text.`]}),`
`,(0,y.jsxs)(t.li,{children:[`The leading icon is `,(0,y.jsx)(t.code,{children:`aria-hidden`}),` — it's decorative, the message text itself conveys the status.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Both buttons use the standard focus-visible outline (`,(0,y.jsx)(t.code,{children:`--bs-border-neutral-focus`}),`), so keyboard
users get a visible focus ring regardless of `,(0,y.jsx)(t.code,{children:`type`}),`.`]}),`
`,(0,y.jsxs)(t.li,{children:[`This component does not remove itself from the DOM on close — the consumer owns visibility
(e.g. toggling a prop that controls whether it's rendered at all) in response to `,(0,y.jsx)(t.code,{children:`bsClose`}),`.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=s(),t(),r(),d()})))()}b();export{v as default};