import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r}from"./iframe-JDefsfXE.js";import{n as i,r as a,t as o}from"./stories-utils-BhXuc500.js";var s=t({Default:()=>u,Document:()=>f,Gallery:()=>h,ImageLoading:()=>p,Pdf:()=>d,PdfLoading:()=>m,__namedExportsOrder:()=>g,default:()=>l}),c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),i(),c=`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop`,l={title:`Genie AI Components/bs-attachment`,parameters:{docs:{description:{component:o(`bs-attachment`)}}},render:e=>n`
    <bs-attachment
      type=${e.type}
      file-name=${e.fileName}
      image-src=${e.imageSrc}
      ?loading=${e.loading}
      ?removable=${e.removable}
    ></bs-attachment>
  `,argTypes:{type:{control:`select`,options:[`image`,`pdf`,`document`],description:a(`bs-attachment`,`type`)},fileName:{control:`text`,description:a(`bs-attachment`,`fileName`)},imageSrc:{control:`text`,description:a(`bs-attachment`,`imageSrc`)},loading:{control:`boolean`,description:a(`bs-attachment`,`loading`)},removable:{control:`boolean`,description:a(`bs-attachment`,`removable`)}},args:{type:`image`,fileName:`Dummy-pdf-in-here`,imageSrc:c,loading:!1,removable:!0}},u={},d={args:{type:`pdf`}},f={args:{type:`document`}},p={name:`Image (loading)`,args:{loading:!0}},m={name:`PDF (loading)`,args:{type:`pdf`,loading:!0}},h={render:()=>n`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <bs-attachment type="image" image-src=${c}></bs-attachment>
      <bs-attachment type="pdf" file-name="Dummy-pdf-in-here"></bs-attachment>
      <bs-attachment type="document" file-name="Dummy-pdf-in-here"></bs-attachment>
      <bs-attachment type="image" image-src=${c} loading></bs-attachment>
      <bs-attachment type="pdf" file-name="Dummy-pdf-in-here" loading></bs-attachment>
      <bs-attachment type="document" file-name="Dummy-pdf-in-here" loading></bs-attachment>
    </div>
  `},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'pdf'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'document'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Image (loading)',
  args: {
    loading: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'PDF (loading)',
  args: {
    type: 'pdf',
    loading: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <bs-attachment type="image" image-src=\${SAMPLE_IMAGE}></bs-attachment>
      <bs-attachment type="pdf" file-name="Dummy-pdf-in-here"></bs-attachment>
      <bs-attachment type="document" file-name="Dummy-pdf-in-here"></bs-attachment>
      <bs-attachment type="image" image-src=\${SAMPLE_IMAGE} loading></bs-attachment>
      <bs-attachment type="pdf" file-name="Dummy-pdf-in-here" loading></bs-attachment>
      <bs-attachment type="document" file-name="Dummy-pdf-in-here" loading></bs-attachment>
    </div>
  \`
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Pdf`,`Document`,`ImageLoading`,`PdfLoading`,`Gallery`]})))()}export{d as a,_ as c,p as i,f as n,m as o,h as r,s,u as t};