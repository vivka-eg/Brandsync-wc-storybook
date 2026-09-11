import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,i,n as a,s as o,x as s}from"./blocks-Dao9KPCn.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./bs-composer.stories-3pR7J-A-.js";function g(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(t.h1,{id:`composer`,children:`Composer`}),`
`,(0,v.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#overview`,children:`Overview`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#generating-state`,children:`Generating state`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#disabled-state`,children:`Disabled state`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#recording-state`,children:`Recording state`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#with-attachments`,children:`With attachments`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#all-variants--states`,children:`All variants × states`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#component-api`,children:`Component API`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#events`,children:`Events`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,v.jsxs)(t.p,{children:[`A pill-shaped chat composer input for Genie AI-style conversational interfaces: a text field plus
an attach button, a mic/voice-recording toggle, and a single primary action button whose icon and
behavior change with `,(0,v.jsx)(t.code,{children:`state`}),` (send, stop generating, or confirm a voice recording).`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`When to use`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`The message-entry bar for an AI chat/assistant (`,(0,v.jsx)(t.code,{children:`variant="ai"`}),`) or a human support conversation
(`,(0,v.jsx)(t.code,{children:`variant="human"`}),`).`]}),`
`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`When not to use`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`A general-purpose text field — use `,(0,v.jsx)(t.code,{children:`bs-input`}),` instead; this component's layout and states are
purpose-built for a chat composer, not a generic form field.`]}),`
`]}),`
`,(0,v.jsx)(a,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`generating-state`,children:`Generating state`}),`
`,(0,v.jsx)(t.p,{children:`While the AI is producing a response, the primary action button switches from send to a stop
(filled square) icon so the same button can cancel generation instead of submitting again.`}),`
`,(0,v.jsx)(a,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`disabled-state`,children:`Disabled state`}),`
`,(0,v.jsxs)(t.p,{children:[`Both the mic and primary action buttons are natively `,(0,v.jsx)(t.code,{children:`disabled`}),` (not just visually muted), so
they're unreachable by keyboard and clicks are no-ops — same disabled treatment as `,(0,v.jsx)(t.code,{children:`bs-button`}),`.`]}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`recording-state`,children:`Recording state`}),`
`,(0,v.jsx)(t.p,{children:`Shows an inline static waveform placeholder next to already-typed text, and swaps the mic button
for a stop-recording square and the primary action for a checkmark (confirm).`}),`
`,(0,v.jsx)(a,{of:c}),`
`,(0,v.jsx)(t.h2,{id:`with-attachments`,children:`With attachments`}),`
`,(0,v.jsxs)(t.p,{children:[`Slot a `,(0,v.jsx)(t.code,{children:`bs-attachment-list`}),` into the `,(0,v.jsx)(t.code,{children:`attachments`}),` slot to render it `,(0,v.jsx)(t.em,{children:`inside`}),` the composer's own
bordered container, above the text field — not as a separate element floating above it. The row
only takes up space when something is actually slotted in. The `,(0,v.jsx)(t.code,{children:`bsAttach`}),` event is the hook for a
consuming app to open a file picker and add attachments to that list.`]}),`
`,(0,v.jsx)(a,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`all-variants--states`,children:`All variants × states`}),`
`,(0,v.jsxs)(t.p,{children:[`Every combination of `,(0,v.jsx)(t.code,{children:`variant`}),` and `,(0,v.jsx)(t.code,{children:`state`}),` side by side, for visual parity with the source design.`]}),`
`,(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h2,{id:`component-api`,children:`Component API`}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Customization surface`}),` (see `,(0,v.jsx)(t.code,{children:`CONVENTIONS.md`}),` in the repo root for the full convention):`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`Slots: `,(0,v.jsx)(t.code,{children:`attachments`}),`, `,(0,v.jsx)(t.code,{children:`actions-end`})]}),`
`,(0,v.jsxs)(t.li,{children:[`Shadow parts: `,(0,v.jsx)(t.code,{children:`::part(attachments)`}),`, `,(0,v.jsx)(t.code,{children:`::part(attach)`}),`, `,(0,v.jsx)(t.code,{children:`::part(input)`}),`, `,(0,v.jsx)(t.code,{children:`::part(mic)`}),`, `,(0,v.jsx)(t.code,{children:`::part(action)`})]}),`
`,(0,v.jsxs)(t.li,{children:[`CSS custom properties: `,(0,v.jsx)(t.code,{children:`--bs-composer-radius`}),`, `,(0,v.jsx)(t.code,{children:`--bs-composer-bg`}),`, `,(0,v.jsx)(t.code,{children:`--bs-composer-border`}),`,
`,(0,v.jsx)(t.code,{children:`--bs-composer-border-focus`}),`, `,(0,v.jsx)(t.code,{children:`--bs-composer-action-bg`}),`, `,(0,v.jsx)(t.code,{children:`--bs-composer-action-bg-hover`}),`,
`,(0,v.jsx)(t.code,{children:`--bs-composer-action-bg-pressed`}),`, `,(0,v.jsx)(t.code,{children:`--bs-composer-action-bg-disabled`}),`,
`,(0,v.jsx)(t.code,{children:`--bs-composer-action-icon`}),`, `,(0,v.jsx)(t.code,{children:`--bs-composer-action-icon-disabled`}),`, `,(0,v.jsx)(t.code,{children:`--bs-composer-attach-icon`}),`,
`,(0,v.jsx)(t.code,{children:`--bs-composer-mic-icon`}),`, `,(0,v.jsx)(t.code,{children:`--bs-composer-mic-icon-disabled`})]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,v.jsxs)(t.p,{children:[`| Event             | Fires when                                                        | Payload | Cancelable |
| ------------------ | ------------------------------------------------------------------ | ------- | ---------- |
| `,(0,v.jsx)(t.code,{children:`bsInput`}),`          | Every keystroke in the text field                                  | `,(0,v.jsx)(t.code,{children:`string`}),` (current value) | No |
| `,(0,v.jsx)(t.code,{children:`bsSubmit`}),`         | The primary action button is clicked while `,(0,v.jsx)(t.code,{children:`state="idle"`}),`          | `,(0,v.jsx)(t.code,{children:`void`}),`  | No |
| `,(0,v.jsx)(t.code,{children:`bsStop`}),`           | The primary action button is clicked while `,(0,v.jsx)(t.code,{children:`state="generating"`}),`    | `,(0,v.jsx)(t.code,{children:`void`}),`  | No |
| `,(0,v.jsx)(t.code,{children:`bsVoiceConfirm`}),`   | The primary action button is clicked while `,(0,v.jsx)(t.code,{children:`state="recording"`}),`     | `,(0,v.jsx)(t.code,{children:`void`}),`  | No |
| `,(0,v.jsx)(t.code,{children:`bsAttach`}),`         | The "+" attach button is clicked                                   | `,(0,v.jsx)(t.code,{children:`void`}),`  | No |
| `,(0,v.jsx)(t.code,{children:`bsMicToggle`}),`      | The mic/stop-recording button is clicked                           | `,(0,v.jsx)(t.code,{children:`void`}),`  | No |`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`The text field has no visible `,(0,v.jsx)(t.code,{children:`<label>`}),` in this design — set `,(0,v.jsx)(t.code,{children:`ariaLabel`}),` in every real usage so
the field still has an accessible name for assistive technology.`]}),`
`,(0,v.jsxs)(t.li,{children:[`The mic and primary action buttons use a native `,(0,v.jsx)(t.code,{children:`disabled`}),` attribute in `,(0,v.jsx)(t.code,{children:`state="disabled"`}),`, so
they're skipped by keyboard tab order and can't be activated, not just visually muted.`]}),`
`,(0,v.jsxs)(t.li,{children:[`The primary action button's `,(0,v.jsx)(t.code,{children:`aria-label`}),` changes with `,(0,v.jsx)(t.code,{children:`state`}),` ("Send", "Stop", "Confirm") so its
announced name always matches its current behavior.`]}),`
`,(0,v.jsxs)(t.li,{children:[`The recording-state waveform is a static, non-interactive visualization marked `,(0,v.jsx)(t.code,{children:`aria-hidden`}),`, so
it isn't announced as content — the actual "recording in progress" status is only conveyed
visually; a consumer needing an announced status update should pair this with an `,(0,v.jsx)(t.code,{children:`aria-live`}),`
region of their own.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=s(),t(),r(),l()})))()}y();export{_ as default};