import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-JDefsfXE.js";import{n as i,r as a,t as o}from"./stories-utils-BhXuc500.js";var s=t({Default:()=>l,SuggestionRow:()=>u,__namedExportsOrder:()=>d,default:()=>c}),c,l,u,d;function f(){return(f=e((()=>{r(),i(),c={title:`Genie AI Components/bs-chatbot-suggestion-button`,parameters:{docs:{description:{component:o(`bs-chatbot-suggestion-button`)}}},render:e=>n`
    <bs-chatbot-suggestion-button ?disabled=${e.disabled}>${e.label}</bs-chatbot-suggestion-button>
  `,argTypes:{label:{control:`text`,description:`Default slot: the suggestion label text.`},disabled:{control:`boolean`,description:a(`bs-chatbot-suggestion-button`,`disabled`)}},args:{label:`How can I help you?`,disabled:!1}},l={},u={name:`Multiple suggestions (flex-wrap row)`,render:()=>n`
    <div style="display: flex; flex-wrap: wrap; gap: 8px; max-width: 420px;">
      <bs-chatbot-suggestion-button>How can I help you?</bs-chatbot-suggestion-button>
      <bs-chatbot-suggestion-button>Summarize this document</bs-chatbot-suggestion-button>
      <bs-chatbot-suggestion-button>Draft a follow-up email</bs-chatbot-suggestion-button>
      <bs-chatbot-suggestion-button>Explain this in simple terms</bs-chatbot-suggestion-button>
    </div>
  `},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Multiple suggestions (flex-wrap row)',
  render: () => html\`
    <div style="display: flex; flex-wrap: wrap; gap: 8px; max-width: 420px;">
      <bs-chatbot-suggestion-button>How can I help you?</bs-chatbot-suggestion-button>
      <bs-chatbot-suggestion-button>Summarize this document</bs-chatbot-suggestion-button>
      <bs-chatbot-suggestion-button>Draft a follow-up email</bs-chatbot-suggestion-button>
      <bs-chatbot-suggestion-button>Explain this in simple terms</bs-chatbot-suggestion-button>
    </div>
  \`
}`,...u.parameters?.docs?.source}}},d=[`Default`,`SuggestionRow`]})))()}export{f as i,u as n,s as r,l as t};