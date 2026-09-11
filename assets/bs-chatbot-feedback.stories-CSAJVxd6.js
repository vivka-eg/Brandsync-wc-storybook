import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-JDefsfXE.js";import{n as i,r as a,t as o}from"./stories-utils-BhXuc500.js";var s=t({AllStates:()=>h,Default:()=>l,FiveStarsSubmitted:()=>m,FourStarsSubmitted:()=>p,OneStarSubmitted:()=>u,ThreeStarsSubmitted:()=>f,TwoStarsSubmitted:()=>d,__namedExportsOrder:()=>g,default:()=>c}),c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),i(),c={title:`Genie AI Components/bs-chatbot-feedback`,parameters:{docs:{description:{component:o(`bs-chatbot-feedback`)}}},render:e=>n`
    <bs-chatbot-feedback rating=${e.rating} ?submitted=${e.submitted} comment=${e.comment}></bs-chatbot-feedback>
  `,argTypes:{rating:{control:{type:`range`,min:0,max:5,step:1},description:a(`bs-chatbot-feedback`,`rating`)},submitted:{control:`boolean`,description:a(`bs-chatbot-feedback`,`submitted`)},comment:{control:`text`,description:a(`bs-chatbot-feedback`,`comment`)}},args:{rating:0,submitted:!1,comment:``}},l={},u={name:`1 star (submitted)`,args:{rating:1,submitted:!0,comment:`The response was helpful ....`}},d={name:`2 stars (submitted)`,args:{rating:2,submitted:!0,comment:`The response was helpful ....`}},f={name:`3 stars (submitted)`,args:{rating:3,submitted:!0,comment:`The response was helpful ....`}},p={name:`4 stars (submitted)`,args:{rating:4,submitted:!0,comment:`The response was helpful ....`}},m={name:`5 stars (submitted)`,args:{rating:5,submitted:!0,comment:`The response was helpful ....`}},h={name:`All states`,render:()=>n`
    <div style="display: grid; grid-template-columns: repeat(3, minmax(280px, 1fr)); gap: 16px;">
      <bs-chatbot-feedback></bs-chatbot-feedback>
      <bs-chatbot-feedback rating="1" submitted comment="The response was helpful ...."></bs-chatbot-feedback>
      <bs-chatbot-feedback rating="2" submitted comment="The response was helpful ...."></bs-chatbot-feedback>
      <bs-chatbot-feedback rating="3" submitted comment="The response was helpful ...."></bs-chatbot-feedback>
      <bs-chatbot-feedback rating="4" submitted comment="The response was helpful ...."></bs-chatbot-feedback>
      <bs-chatbot-feedback rating="5" submitted comment="The response was helpful ...."></bs-chatbot-feedback>
    </div>
  `},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '1 star (submitted)',
  args: {
    rating: 1,
    submitted: true,
    comment: 'The response was helpful ....'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '2 stars (submitted)',
  args: {
    rating: 2,
    submitted: true,
    comment: 'The response was helpful ....'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '3 stars (submitted)',
  args: {
    rating: 3,
    submitted: true,
    comment: 'The response was helpful ....'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '4 stars (submitted)',
  args: {
    rating: 4,
    submitted: true,
    comment: 'The response was helpful ....'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '5 stars (submitted)',
  args: {
    rating: 5,
    submitted: true,
    comment: 'The response was helpful ....'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'All states',
  render: () => html\`
    <div style="display: grid; grid-template-columns: repeat(3, minmax(280px, 1fr)); gap: 16px;">
      <bs-chatbot-feedback></bs-chatbot-feedback>
      <bs-chatbot-feedback rating="1" submitted comment="The response was helpful ...."></bs-chatbot-feedback>
      <bs-chatbot-feedback rating="2" submitted comment="The response was helpful ...."></bs-chatbot-feedback>
      <bs-chatbot-feedback rating="3" submitted comment="The response was helpful ...."></bs-chatbot-feedback>
      <bs-chatbot-feedback rating="4" submitted comment="The response was helpful ...."></bs-chatbot-feedback>
      <bs-chatbot-feedback rating="5" submitted comment="The response was helpful ...."></bs-chatbot-feedback>
    </div>
  \`
}`,...h.parameters?.docs?.source}}},g=[`Default`,`OneStarSubmitted`,`TwoStarsSubmitted`,`ThreeStarsSubmitted`,`FourStarsSubmitted`,`FiveStarsSubmitted`,`AllStates`]})))()}export{f as a,u as i,l as n,s as o,m as r,_ as s,h as t};