import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./bs-chatbot-feedback.stories-CSAJVxd6.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h1,{id:`chatbot-feedback`,children:`Chatbot Feedback`}),`
`,(0,_.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#submitted`,children:`Submitted`})}),`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#all-states`,children:`All states`})}),`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#events`,children:`Events`})}),`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,_.jsx)(t.p,{children:`A star-rating feedback card shown at the end of a Genie AI chat: a heading/subtitle, a 5-star
rating, an optional comment, and either "Submit feedback" + "Start new chat" (before submitting)
or just "Start new chat" (after).`}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`When to use`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Prompting for feedback on a Genie response or chat session, typically after the user ends or
restarts a conversation.`}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`A generic star-rating input elsewhere in the product — this component's copy and layout are
purpose-built for the Genie feedback flow, not a reusable rating control.`}),`
`]}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`submitted`,children:`Submitted`}),`
`,(0,_.jsx)(t.p,{children:`The heading and subtitle aren't freeform — before submitting they're always the fixed "How was
your experience..." copy; after submitting, they're determined entirely by the rating (1-2 stars
reads apologetic, 3 neutral, 4-5 positive), matching the source design exactly. "Start new chat"
also switches from outlined to the primary (filled) treatment once it's the only action left.`}),`
`,(0,_.jsx)(a,{of:l}),`
`,(0,_.jsx)(a,{of:c}),`
`,(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`all-states`,children:`All states`}),`
`,(0,_.jsx)(a,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,_.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Slots: none`}),`
`,(0,_.jsxs)(t.li,{children:[`Shadow parts: `,(0,_.jsx)(t.code,{children:`::part(close)`}),`, `,(0,_.jsx)(t.code,{children:`::part(heading)`}),`, `,(0,_.jsx)(t.code,{children:`::part(subtitle)`}),`, `,(0,_.jsx)(t.code,{children:`::part(star)`}),`,
`,(0,_.jsx)(t.code,{children:`::part(label)`}),`, `,(0,_.jsx)(t.code,{children:`::part(textarea)`}),`, `,(0,_.jsx)(t.code,{children:`::part(comment)`}),`, `,(0,_.jsx)(t.code,{children:`::part(submit)`}),`, `,(0,_.jsx)(t.code,{children:`::part(new-chat)`})]}),`
`,(0,_.jsxs)(t.li,{children:[`CSS custom properties: `,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-bg`}),`, `,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-border`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-radius`}),`, `,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-padding-x`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-padding-y`}),`, `,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-max-width`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-gap`}),`, `,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-top-gap`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-heading-color`}),`, `,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-subtitle-color`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-star-filled`}),`, `,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-star-empty`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-comment-color`}),`, `,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-close-hover`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-primary-bg`}),`, `,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-primary-bg-hover`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-primary-bg-disabled`}),`, `,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-outlined-border`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-outlined-hover`}),`, `,(0,_.jsx)(t.code,{children:`--bs-chatbot-feedback-outlined-text`})]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,_.jsxs)(t.p,{children:[`| Event             | Fires when                                    | Payload                             | Cancelable |
| ----------------- | ---------------------------------------------- | ------------------------------------ | ---------- |
| `,(0,_.jsx)(t.code,{children:`bsRatingChange`}),`  | A star is clicked (before submitting)          | `,(0,_.jsx)(t.code,{children:`number`}),` (1-5)                       | No         |
| `,(0,_.jsx)(t.code,{children:`bsCommentInput`}),`  | Every keystroke in the comment textarea        | `,(0,_.jsx)(t.code,{children:`string`}),` (current value)             | No         |
| `,(0,_.jsx)(t.code,{children:`bsSubmit`}),`        | "Submit feedback" is clicked                   | `,(0,_.jsx)(t.code,{children:`{ rating: number, comment: string }`}),`| No         |
| `,(0,_.jsx)(t.code,{children:`bsNewChat`}),`       | "Start new chat" is clicked                    | `,(0,_.jsx)(t.code,{children:`void`}),`                               | No         |
| `,(0,_.jsx)(t.code,{children:`bsClose`}),`         | The close button is clicked                    | `,(0,_.jsx)(t.code,{children:`void`}),`                               | No         |`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`The five stars form a `,(0,_.jsx)(t.code,{children:`role="radiogroup"`}),` of `,(0,_.jsx)(t.code,{children:`role="radio"`}),` buttons with `,(0,_.jsx)(t.code,{children:`aria-checked`}),`, so
assistive tech announces the rating as a single choice among 5, not five independent toggles.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Stars are natively `,(0,_.jsx)(t.code,{children:`disabled`}),` once `,(0,_.jsx)(t.code,{children:`submitted`}),` is true, so they're unreachable by keyboard and
clicks are no-ops — not just visually inert.`]}),`
`,(0,_.jsxs)(t.li,{children:[`"Submit feedback" is natively `,(0,_.jsx)(t.code,{children:`disabled`}),` until a rating is given, preventing an empty submission.`]}),`
`,(0,_.jsxs)(t.li,{children:[`The close button has a fixed `,(0,_.jsx)(t.code,{children:`aria-label="Close"`}),` since it's icon-only.`]}),`
`,(0,_.jsxs)(t.li,{children:[`This component does not remove or reset itself in response to any event — the consuming app owns
visibility (in response to `,(0,_.jsx)(t.code,{children:`bsClose`}),`) and resetting `,(0,_.jsx)(t.code,{children:`rating`}),`/`,(0,_.jsx)(t.code,{children:`submitted`}),`/`,(0,_.jsx)(t.code,{children:`comment`}),` (in response
to `,(0,_.jsx)(t.code,{children:`bsNewChat`}),`).`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=s(),t(),r(),p()})))()}v();export{g as default};