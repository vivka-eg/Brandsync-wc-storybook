import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-JDefsfXE.js";import{n as i,r as a,t as o}from"./stories-utils-BhXuc500.js";var s=t({AllStates:()=>_,Default:()=>d,Disabled:()=>m,Generating:()=>p,Human:()=>f,Recording:()=>h,WithAttachments:()=>g,__namedExportsOrder:()=>v,default:()=>u}),c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),i(),c=[`ai`,`human`],l=[`idle`,`generating`,`disabled`,`recording`],u={title:`Genie AI Components/bs-composer`,parameters:{docs:{description:{component:o(`bs-composer`)}}},render:e=>n`
    <bs-composer
      variant=${e.variant}
      state=${e.state}
      value=${e.value}
      placeholder=${e.placeholder}
      aria-label="Message"
    ></bs-composer>
  `,argTypes:{variant:{control:`select`,options:c,description:a(`bs-composer`,`variant`)},state:{control:`select`,options:l,description:a(`bs-composer`,`state`)},value:{control:`text`,description:a(`bs-composer`,`value`)},placeholder:{control:`text`,description:a(`bs-composer`,`placeholder`)}},args:{variant:`ai`,state:`idle`,value:``,placeholder:``}},d={},f={args:{variant:`human`}},p={args:{state:`generating`,value:`Summarize this thread for me`}},m={args:{state:`disabled`}},h={args:{state:`recording`,value:`Here is what I have so far`}},g={name:`With attachments`,render:()=>n`
    <div style="max-width: 420px;">
      <bs-composer aria-label="Message">
        <bs-attachment-list slot="attachments">
          <bs-attachment type="image" image-src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop"></bs-attachment>
          <bs-attachment type="pdf" file-name="Dummy-pdf-in-here"></bs-attachment>
        </bs-attachment-list>
      </bs-composer>
    </div>
  `},_={name:`All variants × states`,render:()=>n`
    <div style="display:flex; flex-direction:column; gap:24px; max-width: 420px;">
      ${c.map(e=>n`
          <div style="display:flex; flex-direction:column; gap:12px;">
            <h4 style="margin:0; font-family: sans-serif; text-transform: capitalize;">${e}</h4>
            ${l.map(t=>n`
                <div>
                  <div style="font-size: 12px; font-family: monospace; color: #888; margin-bottom: 4px;">${t}</div>
                  <bs-composer
                    variant=${e}
                    state=${t}
                    value=${t===`recording`?`Here is what I have so far`:``}
                    aria-label="Message"
                  ></bs-composer>
                </div>
              `)}
          </div>
        `)}
    </div>
  `},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'human'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'generating',
    value: 'Summarize this thread for me'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'recording',
    value: 'Here is what I have so far'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With attachments',
  render: () => html\`
    <div style="max-width: 420px;">
      <bs-composer aria-label="Message">
        <bs-attachment-list slot="attachments">
          <bs-attachment type="image" image-src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop"></bs-attachment>
          <bs-attachment type="pdf" file-name="Dummy-pdf-in-here"></bs-attachment>
        </bs-attachment-list>
      </bs-composer>
    </div>
  \`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'All variants × states',
  render: () => html\`
    <div style="display:flex; flex-direction:column; gap:24px; max-width: 420px;">
      \${variants.map(variant => html\`
          <div style="display:flex; flex-direction:column; gap:12px;">
            <h4 style="margin:0; font-family: sans-serif; text-transform: capitalize;">\${variant}</h4>
            \${states.map(state => html\`
                <div>
                  <div style="font-size: 12px; font-family: monospace; color: #888; margin-bottom: 4px;">\${state}</div>
                  <bs-composer
                    variant=\${variant}
                    state=\${state}
                    value=\${state === 'recording' ? 'Here is what I have so far' : ''}
                    aria-label="Message"
                  ></bs-composer>
                </div>
              \`)}
          </div>
        \`)}
    </div>
  \`
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Human`,`Generating`,`Disabled`,`Recording`,`WithAttachments`,`AllStates`]})))()}export{h as a,y as c,p as i,d as n,g as o,m as r,s,_ as t};