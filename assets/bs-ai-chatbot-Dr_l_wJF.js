import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{N as t,P as n,c as r,n as i,s as a,x as o}from"./blocks-Dao9KPCn.js";import{n as s,r as c,t as l}from"./bs-ai-chatbot.stories-BQ5952oq.js";function u(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{of:s}),`
`,(0,f.jsx)(t.h1,{id:`ai-chatbot-showcase`,children:`AI Chatbot (showcase)`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.strong,{children:`This is not a real component.`}),` `,(0,f.jsx)(t.code,{children:`bs-ai-chatbot`}),` isn't a registered custom element — this page
composes the existing Genie AI components into realistic full-panel use cases, since no single
component's own story shows how they fit together end to end.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Components used across these stories: `,(0,f.jsx)(t.code,{children:`bs-chatbot-header`}),`, `,(0,f.jsx)(t.code,{children:`bs-ai-greeting`}),`,
`,(0,f.jsx)(t.code,{children:`bs-chatbot-suggestion-button`}),`, `,(0,f.jsx)(t.code,{children:`bs-composer`}),`, `,(0,f.jsx)(t.code,{children:`bs-composer-status-banner`}),`, `,(0,f.jsx)(t.code,{children:`bs-attachment-list`}),`,
`,(0,f.jsx)(t.code,{children:`bs-attachment`}),`, `,(0,f.jsx)(t.code,{children:`bs-ai-thinking`}),`, `,(0,f.jsx)(t.code,{children:`bs-chatbot-response-action`}),`, `,(0,f.jsx)(t.code,{children:`bs-chatbot-sources-drawer`}),`,
`,(0,f.jsx)(t.code,{children:`bs-source-link`}),`, `,(0,f.jsx)(t.code,{children:`bs-ai-disclaimer`}),`.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Each use case below is its own full chat-panel composition (a dozen+ custom elements each). This
page only embeds one live preview -- mounting all six at once on a single Docs page is what was
making it hang. `,(0,f.jsx)(t.strong,{children:`Open the rest directly from the sidebar`}),` under `,(0,f.jsx)(t.code,{children:`bs-ai-chatbot`}),`: "Active
conversation", "AI is thinking", "Sources drawer open", "Uploading attachments", "Send failed".`]}),`
`,(0,f.jsx)(t.h2,{id:`empty-state`,children:`Empty state`}),`
`,(0,f.jsxs)(t.p,{children:[`Before the user has sent a message: `,(0,f.jsx)(t.code,{children:`bs-ai-greeting`}),` + starter `,(0,f.jsx)(t.code,{children:`bs-chatbot-suggestion-button`}),`
chips, above an idle composer.`]}),`
`,(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(t.h2,{id:`active-conversation`,children:`Active conversation`}),`
`,(0,f.jsxs)(t.p,{children:[`A user message, an AI response with `,(0,f.jsx)(t.code,{children:`bs-chatbot-response-action`}),` below it (including a sources
count), and the composer ready for the next message. See the "Active conversation" story.`]}),`
`,(0,f.jsx)(t.h2,{id:`ai-is-thinking`,children:`AI is thinking`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`bs-ai-thinking`}),` shown while a response is being generated; the composer's primary action switches
to "Stop" (`,(0,f.jsx)(t.code,{children:`state="generating"`}),`). See the "AI is thinking" story.`]}),`
`,(0,f.jsx)(t.h2,{id:`sources-drawer-open`,children:`Sources drawer open`}),`
`,(0,f.jsxs)(t.p,{children:[`The "N sources" flow: `,(0,f.jsx)(t.code,{children:`bs-chatbot-sources-drawer`}),` slides in as an overlay `,(0,f.jsx)(t.em,{children:`within`}),` the chat
panel's own bounds after clicking the sources button in `,(0,f.jsx)(t.code,{children:`bs-chatbot-response-action`}),` -- not a
separate side-by-side column widening the panel. The backdrop + slide-in positioning is
consumer-composed (this library doesn't ship a dedicated overlay/drawer wrapper), the same way
`,(0,f.jsx)(t.code,{children:`bs-modal`}),` demonstrates the equivalent centered-dialog pattern. See the "Sources drawer open"
story.`]}),`
`,(0,f.jsx)(t.h2,{id:`uploading-attachments`,children:`Uploading attachments`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`bs-composer-status-banner`}),` (`,(0,f.jsx)(t.code,{children:`type="info"`}),`) + `,(0,f.jsx)(t.code,{children:`bs-attachment-list`}),` (loading state) inside the
composer's `,(0,f.jsx)(t.code,{children:`attachments`}),` slot, per how those components are actually meant to compose together.
See the "Uploading attachments" story.`]}),`
`,(0,f.jsx)(t.h2,{id:`send-failed`,children:`Send failed`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`bs-composer-status-banner`}),` (`,(0,f.jsx)(t.code,{children:`type="error"`}),`, with a "Retry" action) surfacing a failed send. See
the "Send failed" story.`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=o(),t(),r(),c()})))()}p();export{d as default};