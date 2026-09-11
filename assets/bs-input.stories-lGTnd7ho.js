import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-JDefsfXE.js";import{n as i,r as a,t as o}from"./stories-utils-BhXuc500.js";var s=t({Default:()=>l,Disabled:()=>f,WithDescription:()=>u,WithError:()=>d,__namedExportsOrder:()=>p,default:()=>c}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),i(),c={title:`Components/bs-input`,parameters:{docs:{description:{component:o(`bs-input`)}}},render:e=>n`
    <bs-input
      label=${e.label}
      placeholder=${e.placeholder}
      description=${e.description}
      error=${e.error}
      ?disabled=${e.disabled}
    ></bs-input>
  `,argTypes:{label:{control:`text`,description:a(`bs-input`,`label`)},placeholder:{control:`text`,description:a(`bs-input`,`placeholder`)},description:{control:`text`,description:a(`bs-input`,`description`)},error:{control:`text`,description:a(`bs-input`,`error`)},disabled:{control:`boolean`,description:a(`bs-input`,`disabled`)}},args:{label:`Email address`,placeholder:`you@example.com`,description:``,error:``,disabled:!1}},l={},u={args:{description:`We'll never share your email.`}},d={args:{error:`Enter a valid email address.`}},f={args:{disabled:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    description: "We'll never share your email."
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Enter a valid email address.'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithDescription`,`WithError`,`Disabled`]})))()}export{s as a,d as i,f as n,m as o,u as r,l as t};