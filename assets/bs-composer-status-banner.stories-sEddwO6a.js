import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-JDefsfXE.js";import{n as i,r as a,t as o}from"./stories-utils-BhXuc500.js";var s=t({AboveComposer:()=>_,AllTypes:()=>h,Default:()=>u,Info:()=>d,Neutral:()=>f,Warning:()=>p,WithAction:()=>m,__namedExportsOrder:()=>v,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),i(),c=[`error`,`info`,`neutral`,`warning`],l={title:`Genie AI Components/bs-composer-status-banner`,parameters:{docs:{description:{component:o(`bs-composer-status-banner`)}}},render:e=>n`
    <bs-composer-status-banner
      type=${e.type}
      message=${e.message}
      ?show-icon=${e.showIcon}
      ?show-button=${e.showButton}
      action-label=${e.actionLabel}
      ?allow-close=${e.allowClose}
    ></bs-composer-status-banner>
  `,argTypes:{type:{control:`select`,options:c,description:a(`bs-composer-status-banner`,`type`)},message:{control:`text`,description:a(`bs-composer-status-banner`,`message`)},showIcon:{control:`boolean`,description:a(`bs-composer-status-banner`,`showIcon`)},showButton:{control:`boolean`,description:a(`bs-composer-status-banner`,`showButton`)},actionLabel:{control:`text`,description:a(`bs-composer-status-banner`,`actionLabel`)},allowClose:{control:`boolean`,description:a(`bs-composer-status-banner`,`allowClose`)}},args:{type:`error`,message:`This is a message`,showIcon:!0,showButton:!1,actionLabel:`Continue`,allowClose:!0}},u={},d={args:{type:`info`}},f={args:{type:`neutral`}},p={args:{type:`warning`}},m={name:`With action button`,args:{showButton:!0}},h={name:`All types`,render:()=>n`
    <div style="display:flex; flex-direction:column; gap:8px; max-width: 600px;">
      ${c.map(e=>n` <bs-composer-status-banner type=${e} show-button></bs-composer-status-banner> `)}
    </div>
  `},g=`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop`,_={name:`Above bs-composer`,render:()=>n`
    <div style="display:flex; flex-direction:column; max-width: 420px;">
      <bs-composer-status-banner
        type="info"
        message="Uploading files, please wait."
        style="margin-bottom: calc(-1 * var(--bs-spacing-150));"
      ></bs-composer-status-banner>
      <bs-composer aria-label="Message">
        <bs-attachment-list slot="attachments">
          <bs-attachment type="image" image-src=${g} loading></bs-attachment>
          <bs-attachment type="pdf" file-name="Dummy-pdf-in-here" loading></bs-attachment>
        </bs-attachment-list>
      </bs-composer>
    </div>
  `},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'neutral'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With action button',
  args: {
    showButton: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'All types',
  render: () => html\`
    <div style="display:flex; flex-direction:column; gap:8px; max-width: 600px;">
      \${types.map(type => html\` <bs-composer-status-banner type=\${type} show-button></bs-composer-status-banner> \`)}
    </div>
  \`
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Above bs-composer',
  render: () => html\`
    <div style="display:flex; flex-direction:column; max-width: 420px;">
      <bs-composer-status-banner
        type="info"
        message="Uploading files, please wait."
        style="margin-bottom: calc(-1 * var(--bs-spacing-150));"
      ></bs-composer-status-banner>
      <bs-composer aria-label="Message">
        <bs-attachment-list slot="attachments">
          <bs-attachment type="image" image-src=\${SAMPLE_IMAGE} loading></bs-attachment>
          <bs-attachment type="pdf" file-name="Dummy-pdf-in-here" loading></bs-attachment>
        </bs-attachment-list>
      </bs-composer>
    </div>
  \`
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Info`,`Neutral`,`Warning`,`WithAction`,`AllTypes`,`AboveComposer`]})))()}export{f as a,s as c,d as i,y as l,h as n,p as o,u as r,m as s,_ as t};