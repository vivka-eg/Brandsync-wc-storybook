import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-GVjLUGEy.js";import{n as i,r as a,t as o}from"./stories-utils-DCocXmDI.js";var s=t({AllVariants:()=>_,DefaultVariant:()=>u,Error:()=>m,Info:()=>p,Inverse:()=>g,LongText:()=>v,Neutral:()=>h,Primary:()=>l,Success:()=>d,Warning:()=>f,__namedExportsOrder:()=>y,default:()=>c}),c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),i(),c={title:`Components/bs-badge`,parameters:{docs:{description:{component:o(`bs-badge`)}}},render:e=>n`<bs-badge variant=${e.variant}>${e.label}</bs-badge>`,argTypes:{variant:{control:`select`,options:[`default`,`primary`,`success`,`warning`,`info`,`error`,`neutral`,`inverse`],description:a(`bs-badge`,`variant`)},label:{control:`text`,description:`Slotted label content (not a real attribute -- see the default slot).`}},args:{variant:`primary`,label:`New`}},l={},u={args:{variant:`default`,label:`Default`}},d={args:{variant:`success`,label:`Active`}},f={args:{variant:`warning`,label:`Pending`}},p={args:{variant:`info`,label:`Info`}},m={args:{variant:`error`,label:`Failed`}},h={args:{variant:`neutral`,label:`Archived`}},g={args:{variant:`inverse`,label:`Inverse`},parameters:{backgrounds:{default:`dark`}}},_={render:()=>n`
    <div style="display:flex; gap:8px; flex-wrap:wrap;">
      <bs-badge variant="default">Default</bs-badge>
      <bs-badge variant="primary">Primary</bs-badge>
      <bs-badge variant="success">Success</bs-badge>
      <bs-badge variant="warning">Warning</bs-badge>
      <bs-badge variant="info">Info</bs-badge>
      <bs-badge variant="error">Error</bs-badge>
      <bs-badge variant="neutral">Neutral</bs-badge>
      <bs-badge variant="inverse">Inverse</bs-badge>
    </div>
  `},v={name:`Long text (edge case)`,args:{variant:`primary`,label:`This is a much longer status label than a badge is designed to hold`},render:e=>n`
    <div style="max-width: 160px;">
      <bs-badge variant=${e.variant}>${e.label}</bs-badge>
    </div>
  `},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    label: 'Default'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    label: 'Active'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    label: 'Pending'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    label: 'Info'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    label: 'Failed'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    label: 'Archived'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inverse',
    label: 'Inverse'
  },
  parameters: {
    // Inverse pairs a light label with a dark background -- render it on a dark surface so it's
    // legible in the docs canvas instead of looking like an accessibility bug against the default
    // (light) Storybook canvas background.
    backgrounds: {
      default: 'dark'
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; gap:8px; flex-wrap:wrap;">
      <bs-badge variant="default">Default</bs-badge>
      <bs-badge variant="primary">Primary</bs-badge>
      <bs-badge variant="success">Success</bs-badge>
      <bs-badge variant="warning">Warning</bs-badge>
      <bs-badge variant="info">Info</bs-badge>
      <bs-badge variant="error">Error</bs-badge>
      <bs-badge variant="neutral">Neutral</bs-badge>
      <bs-badge variant="inverse">Inverse</bs-badge>
    </div>
  \`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Long text (edge case)',
  args: {
    variant: 'primary',
    label: 'This is a much longer status label than a badge is designed to hold'
  },
  render: args => html\`
    <div style="max-width: 160px;">
      <bs-badge variant=\${args.variant}>\${args.label}</bs-badge>
    </div>
  \`
}`,...v.parameters?.docs?.source}}},y=[`Primary`,`DefaultVariant`,`Success`,`Warning`,`Info`,`Error`,`Neutral`,`Inverse`,`AllVariants`,`LongText`]})))()}export{b as a,s as i,v as n,l as r,_ as t};