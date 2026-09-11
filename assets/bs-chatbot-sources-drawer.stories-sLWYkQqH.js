import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-JDefsfXE.js";import{n as i,r as a,t as o}from"./stories-utils-BhXuc500.js";var s=t({Default:()=>u,Empty:()=>d,ManySources:()=>f,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),i(),c=n`
  <bs-source-link file-name="Employee Handbook 2026" source-name="HoltePortalen" version="v3.2"></bs-source-link>
  <bs-source-link file-name="Payroll Processing Guide" source-name="WorkdayHQ" version="v2.4"></bs-source-link>
  <bs-source-link file-name="Benefits & Leave Policy" source-name="PeopleOps Wiki" version="v1.8"></bs-source-link>
`,l={title:`Genie AI Components/bs-chatbot-sources-drawer`,parameters:{docs:{description:{component:o(`bs-chatbot-sources-drawer`)}}},render:e=>n`
    <div style="max-width: 380px; height: 400px; border: 1px solid var(--bs-border-default); border-radius: var(--bs-border-radius-150); overflow: hidden;">
      <bs-chatbot-sources-drawer heading=${e.heading}>${c}</bs-chatbot-sources-drawer>
    </div>
  `,argTypes:{heading:{control:`text`,description:a(`bs-chatbot-sources-drawer`,`heading`)}},args:{heading:`Sources`}},u={},d={render:e=>n`
    <div style="max-width: 380px; height: 200px; border: 1px solid var(--bs-border-default); border-radius: var(--bs-border-radius-150); overflow: hidden;">
      <bs-chatbot-sources-drawer heading=${e.heading}></bs-chatbot-sources-drawer>
    </div>
  `},f={name:`Many sources (scrollable)`,render:e=>n`
    <div style="max-width: 380px; height: 300px; border: 1px solid var(--bs-border-default); border-radius: var(--bs-border-radius-150); overflow: hidden;">
      <bs-chatbot-sources-drawer heading=${e.heading}>
        ${c}
        <bs-source-link file-name="Onboarding Checklist" source-name="HoltePortalen" version="v1.0"></bs-source-link>
        <bs-source-link file-name="IT Security Policy" source-name="WorkdayHQ" version="v4.1"></bs-source-link>
        <bs-source-link file-name="Remote Work Guidelines" source-name="PeopleOps Wiki" version="v2.0"></bs-source-link>
      </bs-chatbot-sources-drawer>
    </div>
  `},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <div style="max-width: 380px; height: 200px; border: 1px solid var(--bs-border-default); border-radius: var(--bs-border-radius-150); overflow: hidden;">
      <bs-chatbot-sources-drawer heading=\${args.heading}></bs-chatbot-sources-drawer>
    </div>
  \`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Many sources (scrollable)',
  render: args => html\`
    <div style="max-width: 380px; height: 300px; border: 1px solid var(--bs-border-default); border-radius: var(--bs-border-radius-150); overflow: hidden;">
      <bs-chatbot-sources-drawer heading=\${args.heading}>
        \${SAMPLE_SOURCES}
        <bs-source-link file-name="Onboarding Checklist" source-name="HoltePortalen" version="v1.0"></bs-source-link>
        <bs-source-link file-name="IT Security Policy" source-name="WorkdayHQ" version="v4.1"></bs-source-link>
        <bs-source-link file-name="Remote Work Guidelines" source-name="PeopleOps Wiki" version="v2.0"></bs-source-link>
      </bs-chatbot-sources-drawer>
    </div>
  \`
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Empty`,`ManySources`]})))()}export{m as a,s as i,d as n,f as r,u as t};