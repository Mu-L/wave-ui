import{r as d,o as u,f as h,a as l,w as t,b as i,e,h as o,d as k,i as x,_ as v,S as y}from"./index.372af10f.js";const V={class:"lists-demo"},j=i("p",null,[e("The "),i("span",{class:"code"},"w-list"),e(" component has multiple uses:")],-1),A=e("Simple list with or without icons"),S=e("Checklists"),T=e("Navigation menus"),$=e("List of selectable items"),E=e("Basic lists"),D={class:"w-flex wrap"},U={class:"grow"},W=i("div",{class:"title3"},"Most basic",-1),N={class:"grow"},P=i("div",{class:"title3"},"With icons",-1),z=e(`.w-flex.wrap
  .grow
    .title3 Most basic
    w-list(:items="items")
  .grow
    .title3 With icons
    w-list(:items="items" icon="wi-check")`),K=e(`<w-flex wrap>
  <div class="grow">
    <div class="title3 mb6">Most basic</div>
    <w-list :items="items"></w-list>
  </div>

  <div class="grow">
    <div class="title3 mb6">With icons</div>
    <w-list :items="items" icon="wi-check"></w-list>
  </div>
</w-flex>`),M=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' },
    { label: 'Item 5', disabled: true }
  ]
})
`),O=e("Color & hoverable"),R=i("p",null,[e("Like in most components, you can set a "),i("code",null,"color"),e(" for the text and a "),i("code",null,"bg-color"),e(` for the
background.`)],-1),B=i("br",null,null,-1),L=e(`w-list(:items="items" color="pink" hover)
br
w-list(:items="items" bg-color="blue-light5" color="primary" hover)`),Y=e(`<w-list
  :items="items"
  color="pink"
  hover>
</w-list>

<br />
<w-list
  :items="items"
  bg-color="blue-light5"
  color="primary"
  hover>
</w-list>`),q=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' }
  ]
})
`),F=e("Different color per item"),G=e('w-list(:items="items" hover)'),H=e('<w-list :items="items" hover></w-list>'),J=e(`data: () => ({
  items: [
    { label: 'Item 1', color: 'amber' },
    { label: 'Item 2', color: 'warning' },
    { label: 'Item 3', color: 'error' },
    { label: 'Item 4', color: 'pink' }
  ]
})
`),Q=e("Selection-only color"),X=x(`<p class="grey-light1">In addition to the hover effect, the items may also be selectable (as per the
<a href="#selectable-list-items">Selectable list items example</a>),
but in this example we are only demonstrating the selection color.</p><p>You may want a default color for all the items, but a different color for the selection only.<br>
You can use the <code>selection-color</code> option for this purpose.</p><p>If no <code>color</code> and no <code>selection-color</code> are set, the <code>selection-color</code> will be set
to primary by default.<br>
In that case, if you don&#39;t want to default to the primary color, you can explicitly set
<code>selection-color</code> to a falsy value (false, null, or empty string), or another color.</p>`,3),Z=e(`w-list(
  :model-value="['Item 2']"
  :items="items"
  selection-color="pink"
  multiple)`),ee=e(`<w-list
  :model-value="['Item 2']"
  :items="items"
  selection-color="pink"
  multiple>
</w-list>`),te=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' }
  ]
})
`),le=e("Custom rendering"),ie=i("p",null,[e("In this example, we don't use the component's data at all."),i("br"),e(`
You can easily define items directly in the template and have a different custom layout for every
list item just like in this example.`)],-1),se=i("strong",null,"This is the great item #3",-1),oe=e(`w-list(:items="5" hover)
  template(#item="{ index }")
    | Item `+o("{{ index }}")+`
  template(#item.3)
    strong This is the great item #3`),ne=e(`<w-list :items="5" hover>
  <template #item="{ index }">`+o("{{ index }}")+`</template>
  <template #item.3>
    <strong>This is the great item #3</strong>
  </template>
</w-list>
`),ae=i("p",null,[e("It's up to you to define your your list contents in the component's data or directly in the template."),i("br"),e(`
In this example each item has a different icon stored in the data object.`)],-1),ce={class:"w-flex align-center justify-space-between"},me=e(`data: () => ({
  items: [
    { label: 'Star', icon: 'mdi mdi-star' },
    { label: 'Check', icon: 'mdi mdi-check' },
    { label: 'Cross', icon: 'mdi mdi-close' },
    { label: 'Info', icon: 'mdi mdi-information' },
    { label: 'Warning', icon: 'mdi mdi-alert' },
    { label: 'Disabled', icon: 'mdi mdi-minus-circle' }
  ]
})
`),re=e("Selectable list items"),de=i("p",null,[e("If you provide a "),i("code",null,"v-model"),e(" or a "),i("code",null,"model-value"),e(", the list items become selectable.")],-1),ue={key:0},he=i("div",{class:"title3"},[e("clicked item ("),i("span",{class:"code"},"item-click"),e(" event):")],-1),pe=i("br",null,null,-1),be={class:"code"},we={class:"title3 mt2"},ve=e("Selected item:"),_e={key:0,class:"ml2"},fe={key:1,class:"ml2"},ge=e(`w-radios.mb6(v-model="multiple" :items="radios" inline)
w-flex(wrap align-center)
  w-list.mt6.grow.mr4(
    v-model="selection"
    :items="items"
    color="deep-purple"
    :multiple="multiple"
    @item-click="itemClicked = $event")
  div(v-if="itemClicked")
    .title3 clicked item:
    br
    code `+o("{{ itemClicked }}")+`
.title3.mt2
  | Selected item:
  code.ml2(v-if="!multiple || Array.isArray&#40;selection&#41;").
    `+o("{{ selection || 'null' }}")+`
  code.ml2(v-else-if="multiple").
    `+o("{{ selection ? [selection] : '[]' }}")),ke=e(`<w-radios v-model="multiple" :items="radios" inline></w-radios>

<w-flex wrap align-center>
  <w-list
    v-model="selection"
    :items="items"
    color="deep-purple"
    :multiple="multiple"
    @item-click="itemClicked = $event"
    class="mt6 mr4 grow">
  </w-list>

  <div v-if="itemClicked">
    <div class="title3">Clicked item:</div>
    <code>`+o("{{ itemClicked }}")+`</code>
  </div>
</w-flex>

<div class="title3 mt2">
  Selected item:
  <code v-if="!multiple || Array.isArray(selection)" class="ml2">
    `+o("{{ selection || 'null' }}")+`
  </code>
  <code v-else-if="multiple" class="ml2">
    `+o("{{ selection ? [selection] : '[]' }}")+`
  </code>
</div>`),ye=e(`data: () => ({
  radios: [
    { label: 'Single selection', value: false },
    { label: 'Multiple selections', value: true }
  ],
  multiple: false,
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
    { label: 'Item 4', value: 4 },
    { label: 'Item 5', value: 5, disabled: true }
  ],
  selection: 2,
  itemClicked: null
})`),Ie=i("p",null,[e("Note: you can get the list selection from the v-model, or by listening to the "),i("span",{class:"code"},"input"),e(" event.")],-1),Ce=e("Checklists"),xe={class:"grow"},Ve=i("div",{class:"title3 mb4"},"Default",-1),je={class:"grow"},Ae=i("div",{class:"title3 mb4"},"Round checkboxes",-1),Se={class:"grow"},Te=i("div",{class:"title3 mb4"},"Custom rendering, default styles",-1),$e=i("div",{class:"spacer"},null,-1),Ee={class:"grow"},De=i("div",{class:"title3 mb4"},"Custom rendering & styles",-1),Ue=i("div",{class:"spacer"},null,-1),We=e(`data: () => ({
  listItems1: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
    { label: 'Item 4', value: 4 },
    { label: 'Item 5', value: 5, disabled: true }
  ],
  listItems2: [
    { label: 'Star', id: 'star', icon: 'mdi mdi-star' },
    { label: 'Check', id: 'check', icon: 'mdi mdi-check' },
    { label: 'Cross', id: 'cross', icon: 'mdi mdi-close' },
    { label: 'Info', id: 'info', icon: 'mdi mdi-information' },
    { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert' },
    { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', disabled: true }
  ],
  selection1: [1, 3],
  selection2: [1, 3],
  selection3: ['star', 'cross'],
  selection4: ['star', 'cross']
})`),Ne=e(`.w-list.custom .w-list__item-label:before {display: none;}
.w-list.custom .w-list__item-label label {
  position: relative;
  transition: 0.3s ease-in-out;
}
.w-list.custom .w-list__item-label--active label {
  opacity: 0.6;
  color: #999;
}
.w-list.custom .w-list__item-label label:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 0;
  border-top: 1px solid #999;
  pointer-events: none;
  transition: 0.3s ease-in-out;
}
.w-list.custom .w-list__item-label--active label:before {
  width: 100%;
}
`),Pe=e("Checklist colors"),ze=i("p",null,"A checklist can have all the color options that the normal list can have, even a different color per item.",-1),Ke=e('w-list(v-model="selection5" :items="items" checklist)'),Me=e(`<w-list
  v-model="selection"
  :items="items"
  checklist>
</w-list>`),Oe=e(`data: () => ({
  items: [
    { label: 'Item 1', value: 1, color: 'amber' },
    { label: 'Item 2', value: 2, color: 'warning' },
    { label: 'Item 3', value: 3, color: 'error' },
    { label: 'Item 4', value: 4, color: 'pink' }
  ],
  selection: [1, 2, 3, 4]
})
`),Re=e("Navigation lists"),Be=i("p",null,[e("The navigation list expects a "),i("code",null,"route"),e(" attribute in the items that are links."),i("br"),e(`
If you are using Vue Router, all the links will automatically be `),i("strong",{class:"code"},"router-link"),e("s."),i("br")],-1),Le=i("p",null,[e("It is possible to disable a link with a "),i("code",null,"disabled: true"),e(" attribute in the item.")],-1),Ye=i("div",{class:"spacer"},null,-1),qe=e(`data: () => ({
  items: [
    { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '/w-list/star' },
    { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '/w-list/check' },
    { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '/w-list/cross' },
    { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '/w-list/info' },
    { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '/w-list/warning' },
    { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '/w-list/disabled', disabled: true }
  ]
})`);function Fe(s,a,_,f,g,p){const c=d("w-list"),m=d("title-link"),r=d("example"),b=d("w-icon"),I=d("w-radios"),w=d("w-flex"),C=d("router-view");return u(),h("div",V,[j,l(c,{items:4,icon:"wi-check"},{"item.1":t(()=>[A]),"item.2":t(()=>[S]),"item.3":t(()=>[T]),"item.4":t(()=>[$]),_:1}),l(m,{h2:""},{default:t(()=>[E]),_:1}),l(r,null,{pug:t(()=>[z]),html:t(()=>[K]),js:t(()=>[M]),default:t(()=>[i("div",D,[i("div",U,[W,l(c,{items:s.listItems1},null,8,["items"])]),i("div",N,[P,l(c,{items:s.listItems1,icon:"wi-check"},null,8,["items"])])])]),_:1}),l(m,{h2:""},{default:t(()=>[O]),_:1}),R,l(r,null,{pug:t(()=>[L]),html:t(()=>[Y]),js:t(()=>[q]),default:t(()=>[l(c,{items:s.listItems4,color:"pink",hover:""},null,8,["items"]),B,l(c,{items:s.listItems4,"bg-color":"blue-light5",color:"primary",hover:""},null,8,["items"])]),_:1}),l(m,{h3:""},{default:t(()=>[F]),_:1}),l(r,null,{pug:t(()=>[G]),html:t(()=>[H]),js:t(()=>[J]),default:t(()=>[l(c,{items:s.listItems5,hover:""},null,8,["items"])]),_:1}),l(m,{h3:""},{default:t(()=>[Q]),_:1}),X,l(r,null,{pug:t(()=>[Z]),html:t(()=>[ee]),js:t(()=>[te]),default:t(()=>[l(c,{"model-value":["Item 2"],items:s.listItems4,"selection-color":"pink",multiple:""},null,8,["items"])]),_:1}),l(m,{h2:""},{default:t(()=>[le]),_:1}),ie,l(r,null,{pug:t(()=>[oe]),html:t(()=>[ne]),default:t(()=>[l(c,{items:5,hover:""},{item:t(({index:n})=>[e("Item "+o(n),1)]),"item.3":t(()=>[se]),_:1})]),_:1}),ae,l(r,null,{pug:t(()=>[e(`w-list(:items="items" hover)
  template(#item="{ item }")
    w-flex(align-center justify-space-between)
      | `+o("{{ item.label }}")+`
      w-icon(md) `+o("{{ item.icon }}"),1)]),html:t(()=>[e(`<w-list :items="items" hover>
  <template #item="{ item }">
    <w-flex align-center justify-space-between>
      `+o("{{ item.label }}")+`
      <w-icon md>`+o("{{ item.icon }}")+`</w-icon>
    </w-flex>
  </template>
</w-list>`,1)]),js:t(()=>[me]),default:t(()=>[l(c,{items:s.listItems2,hover:""},{item:t(({item:n})=>[i("div",ce,[e(o(n.label),1),l(b,{md:""},{default:t(()=>[e(o(n.icon),1)]),_:2},1024)])]),_:1},8,["items"])]),_:1}),l(m,{h2:""},{default:t(()=>[re]),_:1}),de,l(r,null,{pug:t(()=>[ge]),html:t(()=>[ke]),js:t(()=>[ye]),default:t(()=>[l(I,{class:"mb6",modelValue:s.multiple,"onUpdate:modelValue":a[0]||(a[0]=n=>s.multiple=n),items:s.radios,inline:""},null,8,["modelValue","items"]),l(w,{wrap:"","align-center":""},{default:t(()=>[l(c,{class:"grow mr4",modelValue:s.selection1,"onUpdate:modelValue":a[1]||(a[1]=n=>s.selection1=n),items:s.listItems1,color:"deep-purple",multiple:s.multiple,onItemClick:a[2]||(a[2]=n=>s.itemClicked=n)},null,8,["modelValue","items","multiple"]),s.itemClicked?(u(),h("div",ue,[he,pe,i("span",be,o(s.itemClicked),1)])):k("",!0)]),_:1}),i("div",we,[ve,!s.multiple||Array.isArray(s.selection1)?(u(),h("code",_e,o(s.selection1||"null"),1)):s.multiple?(u(),h("code",fe,o(s.selection1?[s.selection1]:"[]"),1)):k("",!0)])]),_:1}),Ie,l(m,{h2:""},{default:t(()=>[Ce]),_:1}),l(r,null,{pug:t(()=>[e(`w-flex(wrap basis-zero :gap="3")
  .grow
    .title3.mb4 Default
    w-list(
      v-model="selection1"
      :items="listItems1"
      checklist
      color="green")
  .grow
    .title3.mb4 Round checkboxes
    w-list(
      v-model="selection2"
      :items="listItems1"
      checklist
      round-checkboxes
      color="green")

w-flex.mt4(wrap basis-zero :gap="3")
  .grow
    .title3.mb4 Custom rendering, default styles
    w-list(
      v-model="selection3"
      :items="listItems2"
      item-value-key="id"
      checklist
      color="primary")
      template(#item="{ item }")
        span `+o("{{ item.label }}")+`
        .spacer
        w-icon(md) `+o("{{ item.icon }}")+`
  .grow
    .title3.mb4 Custom rendering & styles
    w-list.custom(
      v-model="selection4"
      :items="listItems2"
      item-value-key="id"
      checklist
      color="primary")
      template(#item="{ item }")
        span `+o("{{ item.label }}")+`
        .spacer
        w-icon(md) `+o("{{ item.icon }}"),1)]),html:t(()=>[e(`<w-flex wrap basis-zero :gap="3">
  <div class="grow">
    <p class="title3 mb4">Default</p>
    <w-list
      v-model="selection1"
      :items="listItems1"
      checklist
      color="green">
    </w-list>
  </div>
  <div class="grow">
    <p class="title3 mb4">Round checkboxes</p>
    <w-list
      v-model="selection2"
      :items="listItems1"
      checklist
      round-checkboxes
      color="green">
    </w-list>
  </div>
</w-flex>

<w-flex wrap basis-zero :gap="3" class="mt4">
  <div class="grow">
    <p class="title3 mb4">Custom rendering, default styles</p>
    <w-list
      v-model="selection3"
      :items="listItems2"
      item-value-key="id"
      checklist
      color="primary">
      <template #item="{ item }">
        <span>`+o("{{ item.label }}")+`</span>
        <div class="spacer"></div>
        <w-icon md>`+o("{{ item.icon }}")+`</w-icon>
      </template>
    </w-list>
  </div>
  <div class="grow">
    <p class="title3 mb4">Custom rendering & styles</p>
    <w-list
      v-model="selection4"
      :items="listItems2"
      item-value-key="id"
      checklist
      color="primary"
      class="custom">
      <template #item="{ item }">
        <span>`+o("{{ item.label }}")+`</span>
        <div class="spacer"></div>
        <w-icon md>`+o("{{ item.icon }}")+`</w-icon>
      </template>
    </w-list>
  </div>
</w-flex>`,1)]),js:t(()=>[We]),css:t(()=>[Ne]),default:t(()=>[l(w,{wrap:"","basis-zero":"",gap:3},{default:t(()=>[i("div",xe,[Ve,l(c,{modelValue:s.selection3,"onUpdate:modelValue":a[3]||(a[3]=n=>s.selection3=n),items:s.listItems1,checklist:"",color:"green"},null,8,["modelValue","items"])]),i("div",je,[Ae,l(c,{modelValue:s.selection4,"onUpdate:modelValue":a[4]||(a[4]=n=>s.selection4=n),items:s.listItems1,checklist:"","round-checkboxes":"",color:"green"},null,8,["modelValue","items"])])]),_:1}),l(w,{class:"mt4",wrap:"","basis-zero":"",gap:3},{default:t(()=>[i("div",Se,[Te,l(c,{modelValue:s.selection6,"onUpdate:modelValue":a[5]||(a[5]=n=>s.selection6=n),items:s.listItems2,"item-value-key":"id",checklist:"",color:"primary"},{item:t(({item:n})=>[i("span",null,o(n.label),1),$e,l(b,{md:""},{default:t(()=>[e(o(n.icon),1)]),_:2},1024)]),_:1},8,["modelValue","items"])]),i("div",Ee,[De,l(c,{class:"custom",modelValue:s.selection7,"onUpdate:modelValue":a[6]||(a[6]=n=>s.selection7=n),items:s.listItems2,"item-value-key":"id",checklist:"",color:"primary"},{item:t(({item:n})=>[i("span",null,o(n.label),1),Ue,l(b,{md:""},{default:t(()=>[e(o(n.icon),1)]),_:2},1024)]),_:1},8,["modelValue","items"])])]),_:1})]),_:1}),l(m,{h3:""},{default:t(()=>[Pe]),_:1}),ze,l(r,null,{pug:t(()=>[Ke]),html:t(()=>[Me]),js:t(()=>[Oe]),default:t(()=>[l(c,{modelValue:s.selection5,"onUpdate:modelValue":a[7]||(a[7]=n=>s.selection5=n),items:s.listItems5,checklist:""},null,8,["modelValue","items"])]),_:1}),l(m,{h2:""},{default:t(()=>[Re]),_:1}),Be,Le,l(r,null,{pug:t(()=>[e(`w-list(:items="items" nav color="primary")
  template(#item="{ item }")
    span `+o("{{ item.label }")+`}
    .spacer
    w-icon(md) `+o("{{ item.icon }}"),1)]),html:t(()=>[e(`<w-list :items="items" nav color="primary">
  <template #item="{ item }">
    <span>`+o("{{ item.label }}")+`</span>
    <div class="spacer"></div>
    <w-icon md>`+o("{{ item.icon }}")+`</w-icon>
  </template>
</w-list>`,1)]),js:t(()=>[qe]),default:t(()=>[l(c,{items:s.listItems2,nav:"",color:"primary"},{item:t(({item:n})=>[i("span",null,o(n.label),1),Ye,l(b,{md:""},{default:t(()=>[e(o(n.icon),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),l(C)])}const Ge={data:()=>({radios:[{label:"Single selection",value:!1},{label:"Multiple selections",value:!0}],multiple:!1,listItems1:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3},{label:"Item 4",value:4},{label:"Item 5",value:5,disabled:!0}],listItems2:[{label:"Star",id:"star",icon:"mdi mdi-star",route:"/w-list/star"},{label:"Check",id:"check",icon:"mdi mdi-check",route:"/w-list/check"},{label:"Cross",id:"cross",icon:"mdi mdi-close",route:"/w-list/cross"},{label:"Info",id:"info",icon:"mdi mdi-information",route:"/w-list/info"},{label:"Warning",id:"warning",icon:"mdi mdi-alert",route:"/w-list/warning"},{label:"Disabled",id:"disabled",icon:"mdi mdi-minus-circle",route:"/w-list/disabled",disabled:!0}],listItems3:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],listItems4:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}],listItems5:[{label:"Item 1",value:1,color:"amber"},{label:"Item 2",value:2,color:"warning"},{label:"Item 3",value:3,color:"error"},{label:"Item 4",value:4,color:"pink"}],selection1:2,selection2:"check",selection3:[1,3],selection4:[1,3],selection5:[1,2,3,4],selection6:["star","cross"],selection7:["star","cross"],itemClicked:null})};var He=v(Ge,[["render",Fe]]);const Je=i("div",{class:"w-divider my12"},null,-1),Qe=e("API");function Xe(s,a,_,f,g,p){const c=d("title-link"),m=d("component-api");return u(),h("div",null,[Je,l(c,{class:"title1",h2:""},{default:t(()=>[Qe]),_:1}),l(m,{class:"mt0",items:p.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(m,{items:s.slots,title:"Slots"},null,8,["items"]),l(m,{items:p.events,title:"Events"},null,8,["items"])])}const Ze={items:'Expecting an array of objects. Each object being a list item, it should include at least a <code>label</code> attribute.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the list. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item.',modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Provide an array of values if <code>multiple</code> is set to true, or a single value otherwise, to dictate the selected state of the list items.<br>Also accepts full objects when <code>return-object</code> is set to true.<br>This value gets updated when using a v-model.',checklist:"Sets the type of list to checklist: each item has a checkbox.",roundCheckboxes:"When <code>checklist</code> is true, displays round checkboxes instead of square ones.",multiple:"When selectable, allows multiple selections. A checklist always has multiple selections.",addIds:"When set to true, will add an id on the list and all the list items.<br>Useful for accessibility aria fields for instance.",hover:"On mouseover, highlights the list items with the given <code>color</code>. Also adds a small vertical padding on the list items to space them.",color:`Applies a color to the list items's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the list items's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,selectionColor:`Applies a color to the selected list items's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,nav:"Set the list as a navigation menu. All the items having a `route` attribute will be converted to link or router-link if vue-router is present.",icon:"A global icon string to apply to all the list items. E.g. <code>mdi mdi-home</code>.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item.',itemClassKey:'The property name (aka "key") in each item object where to find an optional CSS class for this item.',itemColorKey:'The property name (aka "key") in each item object where to find an optional color for this item.',itemRouteKey:'The property name (aka "key") in each item object where to find an optional route for this item, to be used in <code>nav</code> lists.<br>Since we usually set a <code>to</code> prop for router-links/nuxt-links, and <code>href</code> for <span class="code">&lt;a&gt;</span> tags, the <code>route</code> option unifies both.',itemClass:"Applies a custom CSS class to every list item.",depth:!1,returnObject:"The current list selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.",arrowsNavigation:'Allows the navigation through the list items with the keyboard arrows up and down, when set to true and when the items are selectable (the <strong class="code">w-list</strong> has a <code>value</code> or <code>v-model</code>, or is a <code>nav</code> or <code>checklist</code>).',noUnselect:"Once at least one item is selected, prevents the list to have no selection. Clicking an item when only this one is selected will not unselect it."},et={item:{description:"Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.",params:{item:"The current item object.",index:"The item index in the list. Starts at 1 to be consistent with the <code>item.x</code> slot.",selected:"A boolean representing the selected state of the current item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the list. Starts at 1 to be consistent with the slot name.",selected:"A boolean representing the selected state of the current item."}}},tt={input:{description:"Emitted each time the state of the list changes.<br>Updates the <code>v-model</code> value in Vue 2.x only.",params:{"[Array]":"An array of values of all the selected list items."}},"update:modelValue":{description:"Emitted each time the state of the list changes (when an item is selected or unselected).<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of values of all the selected list items."}},"item-click":{description:"Emitted on each list item click.",params:{"[Object]":"The clicked list item's object."}},"item-select":{description:"Emitted on each list item selection or unselection (via click or keyboard <kbd>enter</kbd> key when focused).",params:{"[Object]":"The selected list item's object."}},"keydown:enter":{description:"Emitted on <kbd>enter</kbd> key down, when the focus is on any of the list items."},"keydown:escape":{description:"Emitted on <kbd>escape</kbd> key down, when the focus is on any of the list items."}},lt={data:()=>({propsDescs:Ze,slots:et}),computed:{props(){return y.props},events(){return y.emits.reduce((s,a)=>(s[a]=tt[a]||{})&&s,{})}}};var it=v(lt,[["render",Xe]]);const st=e("w-list");function ot(s,a,_,f,g,p){const c=d("ui-component-title"),m=d("examples"),r=d("api");return u(),h("main",null,[l(c,null,{default:t(()=>[st]),_:1}),l(m),l(r)])}const nt={components:{Examples:He,Api:it}};var ct=v(nt,[["render",ot]]);export{ct as default};
