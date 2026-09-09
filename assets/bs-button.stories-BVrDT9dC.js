import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-B9Mpa5Rp.js";import{n as i,r as a,t as o}from"./stories-utils-CW0P0Irj.js";var s=t({AllCombinations:()=>E,Disabled:()=>y,Error:()=>v,IconOnly:()=>w,Info:()=>_,LongLabel:()=>T,Neutral:()=>f,NeutralDisabled:()=>b,Outlined:()=>m,Primary:()=>d,Sizes:()=>x,Skeleton:()=>D,Subtle:()=>p,Success:()=>h,Warning:()=>g,WithEndIcon:()=>C,WithIcon:()=>S,__namedExportsOrder:()=>O,default:()=>u}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{r(),i(),c=[`primary`,`neutral`,`subtle`,`outlined`,`success`,`warning`,`info`,`error`],l=[`sm`,`md`,`lg`],u={title:`Components/bs-button`,parameters:{docs:{description:{component:o(`bs-button`)}}},render:e=>n`
    <bs-button variant=${e.variant} size=${e.size} type=${e.type} ?disabled=${e.disabled}>
      ${e.label}
    </bs-button>
  `,argTypes:{variant:{control:`select`,options:c,description:a(`bs-button`,`variant`)},size:{control:`select`,options:l,description:a(`bs-button`,`size`)},disabled:{control:`boolean`,description:a(`bs-button`,`disabled`)},type:{control:`select`,options:[`button`,`submit`,`reset`],description:a(`bs-button`,`type`)},label:{control:`text`,description:`Slotted label content (not a real attribute -- see the default slot).`}},args:{variant:`primary`,size:`md`,disabled:!1,type:`button`,label:`Click me`}},d={},f={args:{variant:`neutral`}},p={args:{variant:`subtle`}},m={args:{variant:`outlined`}},h={args:{variant:`success`}},g={args:{variant:`warning`}},_={args:{variant:`info`}},v={args:{variant:`error`}},y={args:{disabled:!0}},b={name:`Neutral, disabled`,args:{variant:`neutral`,disabled:!0}},x={render:()=>n`
    <div style="display:flex; gap:12px; align-items:center;">
      <bs-button size="sm">Small</bs-button>
      <bs-button size="md">Medium</bs-button>
      <bs-button size="lg">Large</bs-button>
    </div>
  `},S={name:`With icon`,render:e=>n`
    <bs-button variant=${e.variant} size=${e.size} ?disabled=${e.disabled}>
      <svg slot="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M13 4L6 11L3 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ${e.label}
    </bs-button>
  `},C={name:`With end icon`,render:e=>n`
    <bs-button variant=${e.variant} size=${e.size} ?disabled=${e.disabled}>
      ${e.label}
      <svg slot="end-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </bs-button>
  `},w={name:`Icon-only`,render:e=>n`
    <bs-button variant=${e.variant} size=${e.size} ?disabled=${e.disabled} aria-label="Delete">
      <svg slot="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M2 4H14M6 4V2.5C6 2.22386 6.22386 2 6.5 2H9.5C9.77614 2 10 2.22386 10 2.5V4M12.5 4L12 13.5C12 13.7761 11.7761 14 11.5 14H4.5C4.22386 14 4 13.7761 4 13.5L3.5 4"
          stroke="currentColor"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </bs-button>
  `},T={name:`Long label (edge case)`,args:{label:`This button has a much longer label than the icon-and-text layout was designed for`},render:e=>n`
    <div style="max-width: 220px;">
      <bs-button variant=${e.variant} size=${e.size} ?disabled=${e.disabled}> ${e.label} </bs-button>
    </div>
  `},E={name:`All variant × size × disabled combinations`,render:()=>n`
    <table style="border-collapse: collapse;">
      <thead>
        <tr>
          <th style="text-align:left; padding: 4px 12px;">Variant</th>
          ${l.map(e=>n`<th style="text-align:left; padding: 4px 12px;">${e}</th>`)}
          ${l.map(e=>n`<th style="text-align:left; padding: 4px 12px;">${e} (disabled)</th>`)}
        </tr>
      </thead>
      <tbody>
        ${c.map(e=>n`
            <tr>
              <td style="padding: 8px 12px; font-family: monospace;">${e}</td>
              ${l.map(t=>n`<td style="padding: 8px 12px;"><bs-button variant=${e} size=${t}>Button</bs-button></td>`)}
              ${l.map(t=>n`<td style="padding: 8px 12px;"><bs-button variant=${e} size=${t} disabled>Button</bs-button></td>`)}
            </tr>
          `)}
      </tbody>
    </table>
  `},D={render:()=>n`
    <div style="display:flex; gap:12px; align-items:center;">
      <bs-button-skeleton size="sm"></bs-button-skeleton>
      <bs-button-skeleton size="md"></bs-button-skeleton>
      <bs-button-skeleton size="lg"></bs-button-skeleton>
    </div>
  `},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'subtle'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Neutral, disabled',
  args: {
    variant: 'neutral',
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; gap:12px; align-items:center;">
      <bs-button size="sm">Small</bs-button>
      <bs-button size="md">Medium</bs-button>
      <bs-button size="lg">Large</bs-button>
    </div>
  \`
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With icon',
  render: args => html\`
    <bs-button variant=\${args.variant} size=\${args.size} ?disabled=\${args.disabled}>
      <svg slot="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M13 4L6 11L3 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      \${args.label}
    </bs-button>
  \`
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'With end icon',
  render: args => html\`
    <bs-button variant=\${args.variant} size=\${args.size} ?disabled=\${args.disabled}>
      \${args.label}
      <svg slot="end-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </bs-button>
  \`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Icon-only',
  render: args => html\`
    <bs-button variant=\${args.variant} size=\${args.size} ?disabled=\${args.disabled} aria-label="Delete">
      <svg slot="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M2 4H14M6 4V2.5C6 2.22386 6.22386 2 6.5 2H9.5C9.77614 2 10 2.22386 10 2.5V4M12.5 4L12 13.5C12 13.7761 11.7761 14 11.5 14H4.5C4.22386 14 4 13.7761 4 13.5L3.5 4"
          stroke="currentColor"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </bs-button>
  \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Long label (edge case)',
  args: {
    label: 'This button has a much longer label than the icon-and-text layout was designed for'
  },
  render: args => html\`
    <div style="max-width: 220px;">
      <bs-button variant=\${args.variant} size=\${args.size} ?disabled=\${args.disabled}> \${args.label} </bs-button>
    </div>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'All variant × size × disabled combinations',
  render: () => html\`
    <table style="border-collapse: collapse;">
      <thead>
        <tr>
          <th style="text-align:left; padding: 4px 12px;">Variant</th>
          \${sizes.map(size => html\`<th style="text-align:left; padding: 4px 12px;">\${size}</th>\`)}
          \${sizes.map(size => html\`<th style="text-align:left; padding: 4px 12px;">\${size} (disabled)</th>\`)}
        </tr>
      </thead>
      <tbody>
        \${variants.map(variant => html\`
            <tr>
              <td style="padding: 8px 12px; font-family: monospace;">\${variant}</td>
              \${sizes.map(size => html\`<td style="padding: 8px 12px;"><bs-button variant=\${variant} size=\${size}>Button</bs-button></td>\`)}
              \${sizes.map(size => html\`<td style="padding: 8px 12px;"><bs-button variant=\${variant} size=\${size} disabled>Button</bs-button></td>\`)}
            </tr>
          \`)}
      </tbody>
    </table>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; gap:12px; align-items:center;">
      <bs-button-skeleton size="sm"></bs-button-skeleton>
      <bs-button-skeleton size="md"></bs-button-skeleton>
      <bs-button-skeleton size="lg"></bs-button-skeleton>
    </div>
  \`
}`,...D.parameters?.docs?.source}}},O=[`Primary`,`Neutral`,`Subtle`,`Outlined`,`Success`,`Warning`,`Info`,`Error`,`Disabled`,`NeutralDisabled`,`Sizes`,`WithIcon`,`WithEndIcon`,`IconOnly`,`LongLabel`,`AllCombinations`,`Skeleton`]})))()}export{s as _,_ as a,m as c,D as d,p as f,S as g,C as h,w as i,d as l,g as m,y as n,T as o,h as p,v as r,f as s,E as t,x as u,k as v};