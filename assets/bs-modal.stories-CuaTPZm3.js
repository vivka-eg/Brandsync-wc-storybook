import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r,t as i}from"./stories-utils-CW0P0Irj.js";var a=t({Default:()=>s,__namedExportsOrder:()=>c,default:()=>o}),o,s,c;function l(){return(l=e((()=>{n(),o={title:`Components/bs-modal`,parameters:{docs:{description:{component:i(`bs-modal`)}}},argTypes:{heading:{control:`text`,description:r(`bs-modal`,`heading`)},size:{control:`select`,options:[`sm`,`md`,`lg`],description:r(`bs-modal`,`size`)}},args:{heading:`Confirm booking`,size:`md`}},s={render:e=>{let t=document.createElement(`div`),n=document.createElement(`bs-button`);n.textContent=`Open modal`;let r=document.createElement(`bs-modal`);return r.heading=e.heading,r.size=e.size,r.innerHTML=`
      <p>Meeting Room 4B, 2:00pm - 3:00pm. This will send a calendar invite to all attendees.</p>
      <bs-button slot="footer" variant="neutral" size="sm">Cancel</bs-button>
      <bs-button slot="footer" size="sm">Confirm</bs-button>
    `,n.addEventListener(`click`,()=>{r.open=!0}),r.addEventListener(`bsClose`,()=>{r.open=!1}),t.appendChild(n),t.appendChild(r),t}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement('div');
    const trigger = document.createElement('bs-button');
    trigger.textContent = 'Open modal';
    const modal = document.createElement('bs-modal') as HTMLElement & {
      open: boolean;
      heading: string;
      size: string;
    };
    modal.heading = args.heading;
    modal.size = args.size;
    modal.innerHTML = \`
      <p>Meeting Room 4B, 2:00pm - 3:00pm. This will send a calendar invite to all attendees.</p>
      <bs-button slot="footer" variant="neutral" size="sm">Cancel</bs-button>
      <bs-button slot="footer" size="sm">Confirm</bs-button>
    \`;
    trigger.addEventListener('click', () => {
      modal.open = true;
    });
    modal.addEventListener('bsClose', () => {
      modal.open = false;
    });
    container.appendChild(trigger);
    container.appendChild(modal);
    return container;
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`]})))()}export{a as n,l as r,s as t};