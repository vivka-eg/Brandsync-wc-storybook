import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-JDefsfXE.js";import{n as i,r as a,t as o}from"./stories-utils-BhXuc500.js";var s=t({ManyAttachments:()=>f,OneAttachment:()=>u,ThreeAttachments:()=>d,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),i(),c=`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop`,l={title:`Genie AI Components/bs-attachment-list`,parameters:{docs:{description:{component:o(`bs-attachment-list`)}}},argTypes:{ariaLabel:{control:`text`,description:a(`bs-attachment-list`,`ariaLabel`)}},args:{ariaLabel:`Attachments`}},u={name:`One attachment`,render:e=>n`
    <bs-attachment-list aria-label=${e.ariaLabel}>
      <bs-attachment type="image" image-src=${c}></bs-attachment>
    </bs-attachment-list>
  `},d={name:`Three attachments`,render:e=>n`
    <bs-attachment-list aria-label=${e.ariaLabel}>
      <bs-attachment type="image" image-src=${c}></bs-attachment>
      <bs-attachment type="pdf" file-name="Dummy-pdf-in-here"></bs-attachment>
      <bs-attachment type="document" file-name="Dummy-pdf-in-here"></bs-attachment>
    </bs-attachment-list>
  `},f={name:`Many attachments (scrollable)`,render:e=>n`
    <div style="max-width: 400px; border: 1px dashed #c2c7d3;">
      <bs-attachment-list aria-label=${e.ariaLabel}>
        <bs-attachment type="pdf" file-name="Dummy-pdf-in-here"></bs-attachment>
        <bs-attachment type="pdf" file-name="Dummy-pdf-in-here"></bs-attachment>
        <bs-attachment type="document" file-name="Dummy-pdf-in-here"></bs-attachment>
        <bs-attachment type="document" file-name="Dummy-pdf-in-here"></bs-attachment>
        <bs-attachment type="document" file-name="Dummy-pdf-in-here"></bs-attachment>
        <bs-attachment type="image" image-src=${c}></bs-attachment>
      </bs-attachment-list>
    </div>
  `},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'One attachment',
  render: args => html\`
    <bs-attachment-list aria-label=\${args.ariaLabel}>
      <bs-attachment type="image" image-src=\${SAMPLE_IMAGE}></bs-attachment>
    </bs-attachment-list>
  \`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Three attachments',
  render: args => html\`
    <bs-attachment-list aria-label=\${args.ariaLabel}>
      <bs-attachment type="image" image-src=\${SAMPLE_IMAGE}></bs-attachment>
      <bs-attachment type="pdf" file-name="Dummy-pdf-in-here"></bs-attachment>
      <bs-attachment type="document" file-name="Dummy-pdf-in-here"></bs-attachment>
    </bs-attachment-list>
  \`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Many attachments (scrollable)',
  render: args => html\`
    <div style="max-width: 400px; border: 1px dashed #c2c7d3;">
      <bs-attachment-list aria-label=\${args.ariaLabel}>
        <bs-attachment type="pdf" file-name="Dummy-pdf-in-here"></bs-attachment>
        <bs-attachment type="pdf" file-name="Dummy-pdf-in-here"></bs-attachment>
        <bs-attachment type="document" file-name="Dummy-pdf-in-here"></bs-attachment>
        <bs-attachment type="document" file-name="Dummy-pdf-in-here"></bs-attachment>
        <bs-attachment type="document" file-name="Dummy-pdf-in-here"></bs-attachment>
        <bs-attachment type="image" image-src=\${SAMPLE_IMAGE}></bs-attachment>
      </bs-attachment-list>
    </div>
  \`
}`,...f.parameters?.docs?.source}}},p=[`OneAttachment`,`ThreeAttachments`,`ManyAttachments`]})))()}export{m as a,s as i,u as n,d as r,f as t};