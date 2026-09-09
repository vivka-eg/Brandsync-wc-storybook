import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{_ as c,a as l,c as u,d,f,g as p,h as m,i as h,l as g,m as _,n as v,o as y,p as b,r as x,s as S,t as C,u as w,v as T}from"./bs-button.stories-BVrDT9dC.js";function E(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(o,{of:c}),`
`,(0,O.jsx)(t.h1,{id:`button`,children:`Button`}),`
`,(0,O.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#neutral-button`,children:`Neutral button`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#subtle-button`,children:`Subtle button`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#outlined-button`,children:`Outlined button`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#success-button`,children:`Success button`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#warning-button`,children:`Warning button`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#info-button`,children:`Info button`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#error-button`,children:`Error button`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#disabled-state`,children:`Disabled state`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#sizes`,children:`Sizes`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#with-icon`,children:`With icon`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#with-end-icon`,children:`With end icon`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#icon-only-button`,children:`Icon-only button`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#long-label-edge-case`,children:`Long label (edge case)`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#all-variant-size-disabled-combinations`,children:`All variant × size × disabled combinations`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#skeleton-state`,children:`Skeleton state`})}),`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,O.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,O.jsx)(t.p,{children:`A clickable action element for the single most important action in a given context.`}),`
`,(0,O.jsx)(t.p,{children:(0,O.jsx)(t.strong,{children:`When to use`})}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsx)(t.li,{children:`The primary call to action on a screen or within a card/modal (e.g. "Book room", "Confirm").`}),`
`,(0,O.jsxs)(t.li,{children:[`Secondary, lower-emphasis actions alongside it (use `,(0,O.jsx)(t.code,{children:`variant="neutral"`}),`).`]}),`
`]}),`
`,(0,O.jsx)(t.p,{children:(0,O.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsx)(t.li,{children:`For navigation between pages — use a link/nav component instead, a button implies an in-page
action, not a destination change.`}),`
`,(0,O.jsxs)(t.li,{children:[`For more than one primary-emphasis action in the same view — pick one, demote the rest to
`,(0,O.jsx)(t.code,{children:`neutral`}),`.`]}),`
`]}),`
`,(0,O.jsx)(a,{of:g}),`
`,(0,O.jsx)(t.h2,{id:`neutral-button`,children:`Neutral button`}),`
`,(0,O.jsx)(t.p,{children:`Lower-emphasis alternative to the primary variant, for secondary actions alongside it (e.g. a
"Cancel" next to a "Confirm").`}),`
`,(0,O.jsx)(a,{of:S}),`
`,(0,O.jsx)(t.h2,{id:`subtle-button`,children:`Subtle button`}),`
`,(0,O.jsx)(t.p,{children:`A ghost/text-only style for low-priority actions that shouldn't compete visually with the
primary/neutral buttons around them (e.g. an inline "Learn more" next to a form).`}),`
`,(0,O.jsx)(a,{of:f}),`
`,(0,O.jsx)(t.h2,{id:`outlined-button`,children:`Outlined button`}),`
`,(0,O.jsxs)(t.p,{children:[`A bordered, transparent-background style for neutral actions that need more visual weight than
`,(0,O.jsx)(t.code,{children:`subtle`}),` but shouldn't draw focus away from the primary action (e.g. "Cancel" or "Back").`]}),`
`,(0,O.jsx)(a,{of:u}),`
`,(0,O.jsx)(t.h2,{id:`success-button`,children:`Success button`}),`
`,(0,O.jsxs)(t.p,{children:[`A semantic variant for actions whose outcome is predictable and clearly communicated by the
button itself (e.g. "Approve", "Mark as complete") — per BrandSync guidance, only use `,(0,O.jsx)(t.code,{children:`success`}),`
when the button's own label/action conveys that outcome, not to reflect some other element's
visual state.`]}),`
`,(0,O.jsx)(a,{of:b}),`
`,(0,O.jsx)(t.h2,{id:`warning-button`,children:`Warning button`}),`
`,(0,O.jsx)(t.p,{children:`A semantic variant for actions that need the user's attention before proceeding (e.g. "Proceed
anyway"), reserved for cases where the action's outcome is predictable and clearly communicated —
not a general-purpose "caution" color for unrelated content.`}),`
`,(0,O.jsx)(a,{of:_}),`
`,(0,O.jsx)(t.h2,{id:`info-button`,children:`Info button`}),`
`,(0,O.jsxs)(t.p,{children:[`A semantic variant for informational actions with a predictable, clearly communicated outcome
(e.g. "View details"), following the same restraint as `,(0,O.jsx)(t.code,{children:`success`}),`/`,(0,O.jsx)(t.code,{children:`warning`}),` — don't reach for it
just because something nearby happens to be styled as "info".`]}),`
`,(0,O.jsx)(a,{of:l}),`
`,(0,O.jsx)(t.h2,{id:`error-button`,children:`Error button`}),`
`,(0,O.jsxs)(t.p,{children:[`Destructive actions should always use the error variant, never `,(0,O.jsx)(t.code,{children:`neutral`}),` — using `,(0,O.jsx)(t.code,{children:`error`}),` signals
the risk of the action (e.g. "Delete account") rather than just adding visual emphasis, per
BrandSync's own destructive-action guidance.`]}),`
`,(0,O.jsx)(a,{of:x}),`
`,(0,O.jsx)(t.h2,{id:`disabled-state`,children:`Disabled state`}),`
`,(0,O.jsxs)(t.p,{children:[`Uses the native `,(0,O.jsx)(t.code,{children:`disabled`}),` attribute, not just a visual style — see Accessibility below.`]}),`
`,(0,O.jsx)(a,{of:v}),`
`,(0,O.jsx)(t.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,O.jsxs)(t.p,{children:[`Three sizes — `,(0,O.jsx)(t.code,{children:`sm`}),`, `,(0,O.jsx)(t.code,{children:`md`}),`, `,(0,O.jsx)(t.code,{children:`lg`}),` — map to `,(0,O.jsx)(t.code,{children:`brandsync-tokens`}),`' spacing scale
(`,(0,O.jsx)(t.code,{children:`--bs-spacing-500/600/700`}),`).`]}),`
`,(0,O.jsx)(a,{of:w}),`
`,(0,O.jsx)(t.h2,{id:`with-icon`,children:`With icon`}),`
`,(0,O.jsx)(t.p,{children:`An optional leading icon, slotted in before the label, for buttons where a visual cue reinforces
the action (e.g. a checkmark for "Confirm").`}),`
`,(0,O.jsx)(a,{of:p}),`
`,(0,O.jsx)(t.h2,{id:`with-end-icon`,children:`With end icon`}),`
`,(0,O.jsx)(t.p,{children:`An optional trailing icon, slotted in after the label, for actions where the icon reinforces a
direction or destination rather than the action itself (e.g. a chevron for "Next").`}),`
`,(0,O.jsx)(a,{of:m}),`
`,(0,O.jsx)(t.h2,{id:`icon-only-button`,children:`Icon-only button`}),`
`,(0,O.jsxs)(t.p,{children:[`A button can render with only the `,(0,O.jsx)(t.code,{children:`icon`}),` slot and no visible label text — the `,(0,O.jsx)(t.code,{children:`bs-button--icon-only`}),`
class adjusts padding so the button stays square instead of stretching to fit an empty label. Since
there's no visible text, `,(0,O.jsx)(t.code,{children:`aria-label`}),` is required so the button still has an accessible name for
screen readers.`]}),`
`,(0,O.jsx)(a,{of:h}),`
`,(0,O.jsx)(t.h2,{id:`long-label-edge-case`,children:`Long label (edge case)`}),`
`,(0,O.jsx)(t.p,{children:`Buttons aren't designed to wrap or truncate long labels — this shows what happens when a label
runs longer than the icon-and-text layout was designed for inside a narrow container.`}),`
`,(0,O.jsx)(a,{of:y}),`
`,(0,O.jsx)(t.h2,{id:`all-variant--size--disabled-combinations`,children:`All variant × size × disabled combinations`}),`
`,(0,O.jsxs)(t.p,{children:[`Every combination of `,(0,O.jsx)(t.code,{children:`variant`}),`, `,(0,O.jsx)(t.code,{children:`size`}),`, and `,(0,O.jsx)(t.code,{children:`disabled`}),` side by side, for a quick visual regression
check across the full matrix at once.`]}),`
`,(0,O.jsx)(a,{of:C}),`
`,(0,O.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,O.jsx)(i,{of:g}),`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,O.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`Slots: default (label), `,(0,O.jsx)(t.code,{children:`icon`}),`, `,(0,O.jsx)(t.code,{children:`end-icon`})]}),`
`,(0,O.jsxs)(t.li,{children:[`Shadow parts: `,(0,O.jsx)(t.code,{children:`::part(icon)`}),`, `,(0,O.jsx)(t.code,{children:`::part(label)`}),`, `,(0,O.jsx)(t.code,{children:`::part(end-icon)`})]}),`
`,(0,O.jsxs)(t.li,{children:[`CSS Custom Properties: `,(0,O.jsx)(t.code,{children:`--bs-button-radius`}),`, `,(0,O.jsx)(t.code,{children:`--bs-button-height-sm/md/lg`})]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`variant`}),` is one of `,(0,O.jsx)(t.code,{children:`primary`}),`, `,(0,O.jsx)(t.code,{children:`neutral`}),`, `,(0,O.jsx)(t.code,{children:`subtle`}),`, `,(0,O.jsx)(t.code,{children:`outlined`}),`, `,(0,O.jsx)(t.code,{children:`success`}),`, `,(0,O.jsx)(t.code,{children:`warning`}),`, `,(0,O.jsx)(t.code,{children:`info`}),`, `,(0,O.jsx)(t.code,{children:`error`})]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`ariaLabel`}),` prop reflects to the native `,(0,O.jsx)(t.code,{children:`aria-label`}),` attribute — required for icon-only usage`]}),`
`]}),`
`,(0,O.jsx)(t.h2,{id:`skeleton-state`,children:`Skeleton state`}),`
`,(0,O.jsxs)(t.p,{children:[`Shown in place of a `,(0,O.jsx)(t.code,{children:`bs-button`}),` while its label/action isn't known yet (e.g. still being fetched
from an API), rendered by the separate `,(0,O.jsx)(t.code,{children:`bs-button-skeleton`}),` element, sized to match `,(0,O.jsx)(t.code,{children:`bs-button`}),`'s
`,(0,O.jsx)(t.code,{children:`sm`}),`/`,(0,O.jsx)(t.code,{children:`md`}),`/`,(0,O.jsx)(t.code,{children:`lg`}),` heights.`]}),`
`,(0,O.jsx)(a,{of:d}),`
`,(0,O.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`Renders a native `,(0,O.jsx)(t.code,{children:`<button>`}),` internally, so it's keyboard-focusable and activates on
`,(0,O.jsx)(`kbd`,{children:`Enter`}),`/`,(0,O.jsx)(`kbd`,{children:`Space`}),` without any extra ARIA wiring.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`disabled`}),` uses the native `,(0,O.jsx)(t.code,{children:`disabled`}),` attribute — this removes the button from the tab order
and is announced as disabled by screen readers, not just styled to look inactive.`]}),`
`,(0,O.jsxs)(t.li,{children:[`Icon-only usage (an `,(0,O.jsx)(t.code,{children:`icon`}),` slot with no visible label) is supported, but requires passing
`,(0,O.jsx)(t.code,{children:`aria-label`}),` so the button still has an accessible name — this component doesn't infer one for
you.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`bs-button-skeleton`}),` adds `,(0,O.jsx)(t.code,{children:`role="status"`}),` and `,(0,O.jsx)(t.code,{children:`aria-label="Loading"`}),` on its placeholder so
screen readers announce the loading state; its pulse animation respects
`,(0,O.jsx)(t.code,{children:`prefers-reduced-motion`}),` and is disabled entirely for users who request reduced motion.`]}),`
`]})]})}function D(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;function k(){return(k=e((()=>{O=s(),t(),r(),T()})))()}k();export{D as default};