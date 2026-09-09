import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./stories-utils-CW0P0Irj.js";var i=t({Default:()=>c,Selectable:()=>l,WithCustomCellRenderer:()=>u,__namedExportsOrder:()=>d,default:()=>a}),a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a={title:`Components/bs-data-table`,parameters:{docs:{description:{component:r(`bs-data-table`)}}}},o=[{key:`name`,label:`Name`,sortable:!0},{key:`department`,label:`Department`,sortable:!0},{key:`status`,label:`Status`}],s=[{id:1,name:`Amelia Torres`,department:`Facilities`,status:`Active`},{id:2,name:`Noah Whitfield`,department:`Engineering`,status:`Active`},{id:3,name:`Priya Nair`,department:`Design`,status:`On leave`}],c={render:()=>{let e=document.createElement(`bs-data-table`);return e.columns=o,e.rows=s,e.addEventListener(`bsSort`,e=>{console.log(`bsSort`,e.detail)}),e}},l={render:()=>{let e=document.createElement(`bs-data-table`);return e.columns=o,e.rows=s,e.selectable=!0,e.addEventListener(`bsRowSelect`,e=>{console.log(`bsRowSelect`,e.detail)}),e}},u={render:()=>{let e=document.createElement(`bs-data-table`);return e.columns=[...o,{key:`actions`,label:`Actions`}],e.rows=s,e.cellRenderer=(e,t)=>t.key===`actions`?`<button type="button">Edit</button>`:String(e[t.key]??``),e}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const table = document.createElement('bs-data-table') as HTMLElement & {
      columns: BsDataTableColumn[];
      rows: BsDataTableRow[];
    };
    table.columns = columns;
    table.rows = rows;
    table.addEventListener('bsSort', (ev: Event) => {
      // eslint-disable-next-line no-console
      console.log('bsSort', (ev as CustomEvent).detail);
    });
    return table;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const table = document.createElement('bs-data-table') as HTMLElement & {
      columns: BsDataTableColumn[];
      rows: BsDataTableRow[];
      selectable: boolean;
    };
    table.columns = columns;
    table.rows = rows;
    table.selectable = true;
    table.addEventListener('bsRowSelect', (ev: Event) => {
      // eslint-disable-next-line no-console
      console.log('bsRowSelect', (ev as CustomEvent).detail);
    });
    return table;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const table = document.createElement('bs-data-table') as HTMLElement & {
      columns: BsDataTableColumn[];
      rows: BsDataTableRow[];
      cellRenderer: (row: BsDataTableRow, column: BsDataTableColumn) => string;
    };
    table.columns = [...columns, {
      key: 'actions',
      label: 'Actions'
    }];
    table.rows = rows;
    table.cellRenderer = (row, column) => {
      if (column.key === 'actions') {
        return \`<button type="button">Edit</button>\`;
      }
      return String(row[column.key] ?? '');
    };
    return table;
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Selectable`,`WithCustomCellRenderer`]})))()}export{f as a,i,l as n,u as r,c as t};