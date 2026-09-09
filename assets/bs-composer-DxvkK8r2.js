import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./bs-composer.stories-C5k2--52.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h1,{id:`composer`,children:`Composer`}),`
`,(0,_.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#generating-state`,children:`Generating state`})}),`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#disabled-state`,children:`Disabled state`})}),`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#recording-state`,children:`Recording state`})}),`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#all-variants--states`,children:`All variants × states`})}),`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#events`,children:`Events`})}),`
`,(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,_.jsxs)(t.p,{children:[`A pill-shaped chat composer input for Genie AI-style conversational interfaces: a text field plus
an attach button, a mic/voice-recording toggle, and a single primary action button whose icon and
behavior change with `,(0,_.jsx)(t.code,{children:`state`}),` (send, stop generating, or confirm a voice recording).`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`When to use`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`The message-entry bar for an AI chat/assistant (`,(0,_.jsx)(t.code,{children:`variant="ai"`}),`) or a human support conversation
(`,(0,_.jsx)(t.code,{children:`variant="human"`}),`).`]}),`
`]}),`
`,(0,_.jsx)(t.p,{children:(0,_.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`A general-purpose text field — use `,(0,_.jsx)(t.code,{children:`bs-input`}),` instead; this component's layout and states are
purpose-built for a chat composer, not a generic form field.`]}),`
`]}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`generating-state`,children:`Generating state`}),`
`,(0,_.jsx)(t.p,{children:`While the AI is producing a response, the primary action button switches from send to a stop
(filled square) icon so the same button can cancel generation instead of submitting again.`}),`
`,(0,_.jsx)(a,{of:l}),`
`,(0,_.jsx)(t.h2,{id:`disabled-state`,children:`Disabled state`}),`
`,(0,_.jsxs)(t.p,{children:[`Both the mic and primary action buttons are natively `,(0,_.jsx)(t.code,{children:`disabled`}),` (not just visually muted), so
they're unreachable by keyboard and clicks are no-ops — same disabled treatment as `,(0,_.jsx)(t.code,{children:`bs-button`}),`.`]}),`
`,(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`recording-state`,children:`Recording state`}),`
`,(0,_.jsx)(t.p,{children:`Shows an inline static waveform placeholder next to already-typed text, and swaps the mic button
for a stop-recording square and the primary action for a checkmark (confirm).`}),`
`,(0,_.jsx)(a,{of:c}),`
`,(0,_.jsx)(t.h2,{id:`all-variants--states`,children:`All variants × states`}),`
`,(0,_.jsxs)(t.p,{children:[`Every combination of `,(0,_.jsx)(t.code,{children:`variant`}),` and `,(0,_.jsx)(t.code,{children:`state`}),` side by side, for visual parity with the source design.`]}),`
`,(0,_.jsx)(a,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,_.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`Shadow parts: `,(0,_.jsx)(t.code,{children:`::part(attach)`}),`, `,(0,_.jsx)(t.code,{children:`::part(input)`}),`, `,(0,_.jsx)(t.code,{children:`::part(mic)`}),`, `,(0,_.jsx)(t.code,{children:`::part(action)`})]}),`
`,(0,_.jsxs)(t.li,{children:[`CSS custom properties: `,(0,_.jsx)(t.code,{children:`--bs-composer-radius`}),`, `,(0,_.jsx)(t.code,{children:`--bs-composer-bg`}),`, `,(0,_.jsx)(t.code,{children:`--bs-composer-border`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-composer-border-focus`}),`, `,(0,_.jsx)(t.code,{children:`--bs-composer-action-bg`}),`, `,(0,_.jsx)(t.code,{children:`--bs-composer-action-bg-hover`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-composer-action-bg-pressed`}),`, `,(0,_.jsx)(t.code,{children:`--bs-composer-action-bg-disabled`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-composer-action-icon`}),`, `,(0,_.jsx)(t.code,{children:`--bs-composer-action-icon-disabled`}),`, `,(0,_.jsx)(t.code,{children:`--bs-composer-attach-icon`}),`,
`,(0,_.jsx)(t.code,{children:`--bs-composer-mic-icon`}),`, `,(0,_.jsx)(t.code,{children:`--bs-composer-mic-icon-disabled`})]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,_.jsxs)(t.p,{children:[`| Event             | Fires when                                                        | Payload | Cancelable |
| ------------------ | ------------------------------------------------------------------ | ------- | ---------- |
| `,(0,_.jsx)(t.code,{children:`bsInput`}),`          | Every keystroke in the text field                                  | `,(0,_.jsx)(t.code,{children:`string`}),` (current value) | No |
| `,(0,_.jsx)(t.code,{children:`bsSubmit`}),`         | The primary action button is clicked while `,(0,_.jsx)(t.code,{children:`state="idle"`}),`          | `,(0,_.jsx)(t.code,{children:`void`}),`  | No |
| `,(0,_.jsx)(t.code,{children:`bsStop`}),`           | The primary action button is clicked while `,(0,_.jsx)(t.code,{children:`state="generating"`}),`    | `,(0,_.jsx)(t.code,{children:`void`}),`  | No |
| `,(0,_.jsx)(t.code,{children:`bsVoiceConfirm`}),`   | The primary action button is clicked while `,(0,_.jsx)(t.code,{children:`state="recording"`}),`     | `,(0,_.jsx)(t.code,{children:`void`}),`  | No |
| `,(0,_.jsx)(t.code,{children:`bsAttach`}),`         | The "+" attach button is clicked                                   | `,(0,_.jsx)(t.code,{children:`void`}),`  | No |
| `,(0,_.jsx)(t.code,{children:`bsMicToggle`}),`      | The mic/stop-recording button is clicked                           | `,(0,_.jsx)(t.code,{children:`void`}),`  | No |`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`The text field has no visible `,(0,_.jsx)(t.code,{children:`<label>`}),` in this design — set `,(0,_.jsx)(t.code,{children:`ariaLabel`}),` in every real usage so
the field still has an accessible name for assistive technology.`]}),`
`,(0,_.jsxs)(t.li,{children:[`The mic and primary action buttons use a native `,(0,_.jsx)(t.code,{children:`disabled`}),` attribute in `,(0,_.jsx)(t.code,{children:`state="disabled"`}),`, so
they're skipped by keyboard tab order and can't be activated, not just visually muted.`]}),`
`,(0,_.jsxs)(t.li,{children:[`The primary action button's `,(0,_.jsx)(t.code,{children:`aria-label`}),` changes with `,(0,_.jsx)(t.code,{children:`state`}),` ("Send", "Stop", "Confirm") so its
announced name always matches its current behavior.`]}),`
`,(0,_.jsxs)(t.li,{children:[`The recording-state waveform is a static, non-interactive visualization marked `,(0,_.jsx)(t.code,{children:`aria-hidden`}),`, so
it isn't announced as content — the actual "recording in progress" status is only conveyed
visually; a consumer needing an announced status update should pair this with an `,(0,_.jsx)(t.code,{children:`aria-live`}),`
region of their own.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=s(),t(),r(),p()})))()}v();export{g as default};