import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./bs-chatbot-response-action.stories-CcdVDEwT.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h1,{id:`chatbot-response-action`,children:`Chatbot response action`}),`
`,(0,g.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#without-sources`,children:`Without sources`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#in-an-ai-response-message`,children:`In an AI response message`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#more-options-menu`,children:`More options menu`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#events`,children:`Events`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,g.jsx)(t.p,{children:`The row of action buttons that appears below an AI response message in a Genie chat panel: like,
dislike, copy, regenerate, and more-options icon buttons, plus an optional "N sources" button.`}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`When to use`})}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Directly below an AI-generated response message in a Genie chat panel.`}),`
`]}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Below a user's own message -- these actions (regenerate, like/dislike a response, etc.) only
make sense for AI-generated content.`}),`
`]}),`
`,(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`without-sources`,children:`Without sources`}),`
`,(0,g.jsxs)(t.p,{children:[`When `,(0,g.jsx)(t.code,{children:`sourcesCount`}),` is unset or `,(0,g.jsx)(t.code,{children:`0`}),`, the "N sources" button is not rendered at all -- only the
five icon buttons appear.`]}),`
`,(0,g.jsx)(a,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`in-an-ai-response-message`,children:`In an AI response message`}),`
`,(0,g.jsx)(t.p,{children:`Demonstrates the intended integration: the action row sits directly below the response text,
left-aligned with the message content.`}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`more-options-menu`,children:`More options menu`}),`
`,(0,g.jsxs)(t.p,{children:[`The "more options" (kebab) button exposes a `,(0,g.jsx)(t.code,{children:`menu`}),` named slot, rendered in a popup positioned
directly below it, shown only while `,(0,g.jsx)(t.code,{children:`menuOpen`}),` is `,(0,g.jsx)(t.code,{children:`true`}),`. This component doesn't own any
menu content itself -- pair it with a `,(0,g.jsx)(t.code,{children:`bs-menu`}),` containing `,(0,g.jsx)(t.code,{children:`bs-menu-item`}),`s, wiring the button's
`,(0,g.jsx)(t.code,{children:`bsMenuOpen`}),` event to toggle the menu's visibility, mirroring how `,(0,g.jsx)(t.code,{children:`bs-chatbot-header`}),`'s
`,(0,g.jsx)(t.code,{children:`WithComposer`}),` story wires `,(0,g.jsx)(t.code,{children:`bsExpand`}),` to resize the surrounding panel.`]}),`
`,(0,g.jsx)(a,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,g.jsx)(i,{of:p}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,g.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`Slots: `,(0,g.jsx)(t.code,{children:`like-icon`}),`, `,(0,g.jsx)(t.code,{children:`dislike-icon`}),`, `,(0,g.jsx)(t.code,{children:`copy-icon`}),`, `,(0,g.jsx)(t.code,{children:`regenerate-icon`}),`, `,(0,g.jsx)(t.code,{children:`menu-icon`}),`, `,(0,g.jsx)(t.code,{children:`menu`}),`, `,(0,g.jsx)(t.code,{children:`sources-icon`})]}),`
`,(0,g.jsxs)(t.li,{children:[`Shadow parts: `,(0,g.jsx)(t.code,{children:`::part(like)`}),`, `,(0,g.jsx)(t.code,{children:`::part(dislike)`}),`, `,(0,g.jsx)(t.code,{children:`::part(copy)`}),`, `,(0,g.jsx)(t.code,{children:`::part(regenerate)`}),`,
`,(0,g.jsx)(t.code,{children:`::part(menu)`}),`, `,(0,g.jsx)(t.code,{children:`::part(sources)`})]}),`
`,(0,g.jsxs)(t.li,{children:[`CSS custom properties: `,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-gap`}),`,
`,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-padding-top`}),`, `,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-padding-bottom`}),`,
`,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-button-size`}),`, `,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-button-radius`}),`,
`,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-button-hover`}),`, `,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-button-pressed`}),`,
`,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-icon`}),`, `,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-sources-gap`}),`,
`,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-sources-padding-left`}),`,
`,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-sources-padding-right`}),`,
`,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-sources-color`}),`, `,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-sources-font-size`}),`,
`,(0,g.jsx)(t.code,{children:`--bs-chatbot-response-action-sources-line-height`})]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,g.jsxs)(t.p,{children:[`| Event             | Fires when                          | Payload | Cancelable |
| ----------------- | ------------------------------------ | ------- | ---------- |
| `,(0,g.jsx)(t.code,{children:`bsLike`}),`          | The "Like" button is clicked         | `,(0,g.jsx)(t.code,{children:`void`}),`  | No         |
| `,(0,g.jsx)(t.code,{children:`bsDislike`}),`       | The "Dislike" button is clicked      | `,(0,g.jsx)(t.code,{children:`void`}),`  | No         |
| `,(0,g.jsx)(t.code,{children:`bsCopy`}),`          | The "Copy" button is clicked         | `,(0,g.jsx)(t.code,{children:`void`}),`  | No         |
| `,(0,g.jsx)(t.code,{children:`bsRegenerate`}),`    | The "Regenerate" button is clicked   | `,(0,g.jsx)(t.code,{children:`void`}),`  | No         |
| `,(0,g.jsx)(t.code,{children:`bsMenuOpen`}),`      | The "More options" button is clicked, or the menu closes (click outside, Escape) | `,(0,g.jsx)(t.code,{children:`boolean`}),` (new `,(0,g.jsx)(t.code,{children:`menuOpen`}),` value) | No         |
| `,(0,g.jsx)(t.code,{children:`bsSourcesClick`}),`  | The "N sources" button is clicked    | `,(0,g.jsx)(t.code,{children:`void`}),`  | No         |`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`Each of the five icon buttons has a fixed, descriptive `,(0,g.jsx)(t.code,{children:`aria-label`}),` ("Like", "Dislike", "Copy",
"Regenerate", "More options") since they're icon-only with no visible text.`]}),`
`,(0,g.jsxs)(t.li,{children:[`The "N sources" button has a visible text label (e.g. "3 sources"), so it does not need an
additional `,(0,g.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,g.jsx)(t.li,{children:`There is no toggled/pressed state for like/dislike in this component -- the Figma design only
specifies a single default state, so tracking "liked"/"disliked" as a visual/ARIA state is left
to the consuming app.`}),`
`,(0,g.jsxs)(t.li,{children:[`The "More options" button has `,(0,g.jsx)(t.code,{children:`aria-haspopup="menu"`}),` and `,(0,g.jsx)(t.code,{children:`aria-expanded`}),` reflecting `,(0,g.jsx)(t.code,{children:`menuOpen`}),`.
The menu popup itself is only present in the DOM (and accessibility tree) while `,(0,g.jsx)(t.code,{children:`menuOpen`}),` is
`,(0,g.jsx)(t.code,{children:`true`}),` -- it's not just visually hidden while closed.`]}),`
`,(0,g.jsxs)(t.li,{children:[`The menu closes on a click outside the component, or on `,(0,g.jsx)(`kbd`,{children:`Escape`}),`, matching the pattern
used by `,(0,g.jsx)(t.code,{children:`bs-modal`}),`.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=s(),t(),r(),d()})))()}_();export{h as default};