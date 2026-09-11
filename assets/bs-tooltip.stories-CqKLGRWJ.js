import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-JDefsfXE.js";import{n as i,t as a}from"./stories-utils-BhXuc500.js";var o=t({Default:()=>c,WithTrigger:()=>l,__namedExportsOrder:()=>u,default:()=>s}),s,c,l,u;function d(){return(d=e((()=>{r(),i(),s={title:`Components/bs-tooltip`,parameters:{docs:{description:{component:a(`bs-tooltip`)}}},render:e=>n`<bs-tooltip>${e.message}</bs-tooltip>`,argTypes:{message:{control:`text`,description:`Slotted message content (not a real attribute -- see the default slot).`}},args:{message:`I'm a tooltip. I show extra information when you hover or focus.`}},c={},l={name:`Positioned against a trigger (consumer pattern)`,render:()=>n`
    <div style="position: relative; display: inline-block;">
      <bs-button>Hover me</bs-button>
      <div style="position: absolute; top: calc(100% + 6px); left: 50%; transform: translateX(-50%);">
        <bs-tooltip>I'm a tooltip. I show extra information when you hover or focus.</bs-tooltip>
      </div>
    </div>
  `},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Positioned against a trigger (consumer pattern)',
  render: () => html\`
    <div style="position: relative; display: inline-block;">
      <bs-button>Hover me</bs-button>
      <div style="position: absolute; top: calc(100% + 6px); left: 50%; transform: translateX(-50%);">
        <bs-tooltip>I'm a tooltip. I show extra information when you hover or focus.</bs-tooltip>
      </div>
    </div>
  \`
}`,...l.parameters?.docs?.source}}},u=[`Default`,`WithTrigger`]})))()}export{d as i,l as n,o as r,c as t};