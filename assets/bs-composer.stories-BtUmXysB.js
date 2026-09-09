import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-GVjLUGEy.js";import{n as i,r as a,t as o}from"./stories-utils-DCocXmDI.js";var s=t({AllStates:()=>g,Default:()=>d,Disabled:()=>m,Generating:()=>p,Human:()=>f,Recording:()=>h,__namedExportsOrder:()=>_,default:()=>u}),c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),i(),c=[`ai`,`human`],l=[`idle`,`generating`,`disabled`,`recording`],u={title:`Genie AI Components/bs-composer`,parameters:{docs:{description:{component:o(`bs-composer`)}}},render:e=>n`
    <bs-composer
      variant=${e.variant}
      state=${e.state}
      value=${e.value}
      placeholder=${e.placeholder}
      aria-label="Message"
    ></bs-composer>
  `,argTypes:{variant:{control:`select`,options:c,description:a(`bs-composer`,`variant`)},state:{control:`select`,options:l,description:a(`bs-composer`,`state`)},value:{control:`text`,description:a(`bs-composer`,`value`)},placeholder:{control:`text`,description:a(`bs-composer`,`placeholder`)}},args:{variant:`ai`,state:`idle`,value:``,placeholder:``}},d={},f={args:{variant:`human`}},p={args:{state:`generating`,value:`Summarize this thread for me`}},m={args:{state:`disabled`}},h={args:{state:`recording`,value:`Here is what I have so far`}},g={name:`All variants × states`,render:()=>n`
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Human`,`Generating`,`Disabled`,`Recording`,`AllStates`]})))()}export{h as a,p as i,d as n,s as o,m as r,v as s,g as t};