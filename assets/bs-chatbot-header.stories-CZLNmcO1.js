import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-B9Mpa5Rp.js";import{n as i,r as a,t as o}from"./stories-utils-CW0P0Irj.js";var s=t({Default:()=>l,WithComposer:()=>u,__namedExportsOrder:()=>d,default:()=>c}),c,l,u,d;function f(){return(f=e((()=>{r(),i(),c={title:`Genie AI Components/bs-chatbot-header`,parameters:{docs:{description:{component:o(`bs-chatbot-header`)}}},render:e=>n` <bs-chatbot-header heading=${e.heading}></bs-chatbot-header> `,argTypes:{heading:{control:`text`,description:a(`bs-chatbot-header`,`heading`)}},args:{heading:`Genie`}},l={},u={name:`Chat panel (header + composer)`,render:()=>n`
      <div
        class="story-chat-panel"
        style="display:flex; flex-direction:column; width: 420px; height: 600px; border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden; transition: width 0.2s, height 0.2s;"
      >
        <bs-chatbot-header heading="Genie" @bsExpand=${e=>{let t=e.currentTarget.closest(`.story-chat-panel`);t&&(e.detail?(t.style.width=`100vw`,t.style.height=`100vh`,t.style.maxWidth=`100vw`,t.style.borderRadius=`0`):(t.style.width=`420px`,t.style.height=`600px`,t.style.maxWidth=`420px`,t.style.borderRadius=`12px`))}}></bs-chatbot-header>
        <div style="flex: 1; min-height: 0;"></div>
        <div style="padding: 16px;">
          <bs-composer variant="ai" aria-label="Message"></bs-composer>
        </div>
      </div>
    `},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Chat panel (header + composer)',
  render: () => {
    // Demonstrates the intended integration pattern: bs-chatbot-header only tracks/emits the
    // expanded toggle -- it has no visibility into the surrounding layout, so it can't resize
    // anything itself. The consuming app (here, this story) owns the chat panel container and is
    // responsible for actually resizing it in response to bsExpand.
    const onExpand = (ev: CustomEvent<boolean>) => {
      const panel = (ev.currentTarget as HTMLElement).closest('.story-chat-panel') as HTMLElement;
      if (!panel) return;
      if (ev.detail) {
        panel.style.width = '100vw';
        panel.style.height = '100vh';
        panel.style.maxWidth = '100vw';
        panel.style.borderRadius = '0';
      } else {
        panel.style.width = '420px';
        panel.style.height = '600px';
        panel.style.maxWidth = '420px';
        panel.style.borderRadius = '12px';
      }
    };
    return html\`
      <div
        class="story-chat-panel"
        style="display:flex; flex-direction:column; width: 420px; height: 600px; border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden; transition: width 0.2s, height 0.2s;"
      >
        <bs-chatbot-header heading="Genie" @bsExpand=\${onExpand}></bs-chatbot-header>
        <div style="flex: 1; min-height: 0;"></div>
        <div style="padding: 16px;">
          <bs-composer variant="ai" aria-label="Message"></bs-composer>
        </div>
      </div>
    \`;
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`WithComposer`]})))()}export{f as i,u as n,s as r,l as t};