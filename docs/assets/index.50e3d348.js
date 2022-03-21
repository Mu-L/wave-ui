import{n as e,i as r}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var l=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("alert",{attrs:{info:""}},[n("ul",[n("li",{staticClass:"title4"},[t._v("The purpose of the "),n("strong",{staticClass:"code"},[t._v("w-confirm")]),t._v(` component is to quickly set up a
confirmation prompt to confirm a critical action.`)]),n("li",[t._v("The "),n("strong",{staticClass:"code"},[t._v("w-confirm")]),t._v(" component uses "),n("strong",{staticClass:"code"},[t._v("w-menu")]),t._v(`, and
`),n("strong",{staticClass:"code"},[t._v("w-buttons")]),t._v(` components.
`)])])]),n("title-link",{attrs:{h2:""}},[t._v("Basic")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-confirm Delete")]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm>Delete</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",[t._v("Delete")])],1),n("title-link",{attrs:{h2:""}},[t._v("Icon button")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-confirm(icon="mdi mdi-delete")')]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm icon="mdi mdi-delete">
  Delete
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{icon:"mdi mdi-delete"}})],1),n("title-link",{attrs:{h2:""}},[t._v("Colors")]),t._m(0),t._m(1),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm.mb2(bg-color="success") Ask for confirm
w-confirm.mb2(bg-color="info" color="yellow") Ask for confirm
w-confirm(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm bg-color="success" class="mb2">
  Ask for confirm
</w-confirm>

<w-confirm bg-color="info" color="yellow" class="mb2">
  Ask for confirm
</w-confirm>

<w-confirm :menu="{ bgColor: 'indigo-light1', color: 'white' }">
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{staticClass:"mb2",attrs:{"bg-color":"success"}},[t._v("Ask for confirm")]),n("w-confirm",{staticClass:"mb2",attrs:{"bg-color":"info",color:"yellow"}},[t._v("Ask for confirm")]),n("w-confirm",{attrs:{menu:{bgColor:"indigo-light1",color:"white"}}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h2:""}},[t._v("Positions & alignments")]),n("title-link",{attrs:{h3:""}},[t._v("Positions")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm.my5(top) Top
w-confirm.my5(right) Right
w-confirm.my5(bottom) Bottom
w-confirm.my5(left) Left`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm top class="my5">
  Top
</w-confirm>

<w-confirm right class="my5">
  Right
</w-confirm>

<w-confirm bottom class="my5">
  Bottom
</w-confirm>

<w-confirm left class="my5">
  Left
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{staticClass:"my5",attrs:{top:""}},[t._v("Top")]),n("w-confirm",{staticClass:"my5",attrs:{right:""}},[t._v("Right")]),n("w-confirm",{staticClass:"my5",attrs:{bottom:""}},[t._v("Bottom")]),n("w-confirm",{staticClass:"my5",attrs:{left:""}},[t._v("Left")])],1),n("title-link",{attrs:{h3:""}},[t._v("Alignments")]),n("title-link",{attrs:{h4:""}},[t._v("Horizontal")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex(justify-center)
  w-confirm.ma2(top align-left) Top, align left
  w-confirm.ma2(top) Top, align center
  w-confirm.ma2(top align-right) Top, align right

w-flex(justify-center)
  w-confirm.ma2(bottom align-left) Bottom, align left
  w-confirm.ma2(bottom) Bottom, align center
  w-confirm.ma2(bottom align-right) Bottom, align right`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex justify-center>
  <w-confirm top align-left class="ma2">
    Top, align left
  </w-confirm>

  <w-confirm top class="ma2">
    Top, align center
  </w-confirm>

  <w-confirm top align-right class="ma2">
    Top, align right
  </w-confirm>
</w-flex>

<w-flex justify-center>
  <w-confirm bottom align-left class="ma2">
    Bottom, align left
  </w-confirm>

  <w-confirm bottom class="ma2">
    Bottom, align center
  </w-confirm>

  <w-confirm bottom align-right class="ma2">
    Bottom, align right
  </w-confirm>
</w-flex>
`)]},proxy:!0}])},[n("w-flex",{staticClass:"mt12",attrs:{"justify-center":""}},[n("w-confirm",{staticClass:"ma2",attrs:{top:"","align-left":""}},[t._v("Top, align left")]),n("w-confirm",{staticClass:"ma2",attrs:{top:""}},[t._v("Top, align center")]),n("w-confirm",{staticClass:"ma2",attrs:{top:"","align-right":""}},[t._v("Top, align right")])],1),n("w-flex",{attrs:{"justify-center":""}},[n("w-confirm",{staticClass:"ma2",attrs:{bottom:"","align-left":""}},[t._v("Bottom, align left")]),n("w-confirm",{staticClass:"ma2",attrs:{bottom:""}},[t._v("Bottom, align center")]),n("w-confirm",{staticClass:"ma2",attrs:{bottom:"","align-right":""}},[t._v("Bottom, align right")])],1)],1),n("title-link",{attrs:{h4:""}},[t._v("Vertical")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex.text-center(justify-center)
  div
    w-confirm.ma2(left align-top) Left, align top
    w-confirm.ma2(left) Left, align center
    w-confirm.ma2(left align-bottom) Left, align bottom

  div
    w-confirm.ma2(right align-top) Right, align top
    w-confirm.ma2(right) Right, align center
    w-confirm.ma2(right align-bottom) Right, align bottom`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex justify-center class="text-center">
  <div>
    <w-confirm left align-top class="ma2">
      Left, align top
    </w-confirm>

    <w-confirm left class="ma2">
      Left, align center
    </w-confirm>

    <w-confirm left align-bottom class="ma2">
      Left, align bottom
    </w-confirm>
  </div>

  <div>
    <w-confirm right align-top class="ma2">
      Right, align top
    </w-confirm>

    <w-confirm right class="ma2">
      Right, align center
    </w-confirm>

    <w-confirm right align-bottom class="ma2">
      Right, align bottom
    </w-confirm>
  </div>
</w-flex>
`)]},proxy:!0}])},[n("w-flex",{staticClass:"text-center",attrs:{"justify-center":""}},[n("div",[n("w-confirm",{staticClass:"ma2",attrs:{left:"","align-top":""}},[t._v("Left, align top")]),n("w-confirm",{staticClass:"ma2",attrs:{left:""}},[t._v("Left, align center")]),n("w-confirm",{staticClass:"ma2",attrs:{left:"","align-bottom":""}},[t._v("Left, align bottom")])],1),n("div",[n("w-confirm",{staticClass:"ma2",attrs:{right:"","align-top":""}},[t._v("Right, align top")]),n("w-confirm",{staticClass:"ma2",attrs:{right:""}},[t._v("Right, align center")]),n("w-confirm",{staticClass:"ma2",attrs:{right:"","align-bottom":""}},[t._v("Right, align bottom")])],1)])],1),n("title-link",{attrs:{h2:""}},[t._v("Persistent")]),n("p",[t._v("A click outside of the menu will not close it.")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-confirm(persistent) Ask for confirm")]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm persistent>
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{persistent:""}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h2:""}},[t._v("Inline question")]),n("p",[t._v("Displays the question inline with the buttons inside the menu.")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-confirm(inline) Ask for confirm")]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm inline>
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{inline:""}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h2:""}},[t._v("Custom question")]),t._m(2),n("title-link",{attrs:{h3:"",slug:"using-question-prop"}},[t._v("Using the "),n("code",[t._v("question")]),t._v(" prop")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm(question="Are you sure you want to delete this?").
  Ask for confirm`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm question="Are you sure you want to delete this?">
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{question:"Are you sure you want to delete this?"}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h3:"",slug:"using-question-slot"}},[t._v("Using the "),n("code",[t._v("#question")]),t._v(" slot")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm
  | Ask for confirm
  template(#question) Are you sure you want to delete this?`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm>
  Ask for confirm
  <template #question>
    Are you sure you want to delete this?
  </template>
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{scopedSlots:t._u([{key:"question",fn:function(){return[t._v("Are you sure you want to delete this?")]},proxy:!0}])},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h2:""}},[t._v("Cancel & confirm buttons")]),t._m(3),n("title-link",{attrs:{h3:""}},[t._v("Custom buttons labels")]),t._m(4),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm(cancel="No" confirm="Yes").
  Ask for confirm`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm cancel="No" confirm="Yes">
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{cancel:"No",confirm:"Yes"}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h3:""}},[t._v("No cancel button")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-confirm(:cancel="false") Ask for confirm')]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm :cancel="false">
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{cancel:!1}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h3:""}},[t._v("Full custom buttons")]),t._m(5),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
  | Ask for confirm`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }">
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{inline:"",cancel:{bgColor:"error-dark1",color:"white",icon:"mdi mdi-close"},confirm:{bgColor:"green-dark1",color:"white",icon:"mdi mdi-check"}}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h3:"",slug:"custom-label-in-object"}},[t._v("Custom button label in the "),n("span",{staticClass:"code"},[t._v("Object")]),t._v(" form")]),t._m(6),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }")
  | Ask for confirm`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }">
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{inline:"",cancel:{bgColor:"error-dark1",color:"white",label:"No"},confirm:{bgColor:"green-dark1",color:"white",label:"Yes"}}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h2:""}},[t._v("No arrow")]),t._m(7),n("example",{staticClass:"example--no-arrow",attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
w-confirm.ma2(no-arrow right) Right
w-confirm.ma2.mb12(:menu="{ noPosition: true }") No position`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm
  no-arrow
  :menu="{ bgColor: 'blue-light5' }"
  class="ma2">
  Bottom
</w-confirm>

<w-confirm no-arrow right class="ma2">
  Right
</w-confirm>

<w-confirm
  :menu="{ noPosition: true }"
  class="ma2">
  No position
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{staticClass:"ma2",attrs:{"no-arrow":"",menu:{bgColor:"blue-light5"}}},[t._v("Bottom")]),n("w-confirm",{staticClass:"ma2",attrs:{"no-arrow":"",right:""}},[t._v("Right")]),n("w-confirm",{staticClass:"ma2 mb12",attrs:{menu:{noPosition:!0,appendTo:".example--no-arrow"}}},[t._v("No position")])],1),n("title-link",{attrs:{h2:""}},[t._v("Transitions")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex(wrap)
  w-confirm.ma1 Default (scale-fade)
  w-confirm.ma1(transition="fade") Fade
  w-confirm.ma1(transition="slide-fade-up") Slide fade up
  w-confirm.ma1(transition="slide-fade-right") Slide fade right
  w-confirm.ma1(transition="slide-fade-down") Slide fade down
  w-confirm.ma1(transition="slide-fade-left") Slide fade left
  w-confirm.ma1(transition="scale") Scale
  w-confirm.ma1(transition="bounce") Bounce
  w-confirm.ma1(transition="twist") Twist`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm class="ma1">
  Default (scale-fade)
</w-confirm>

<w-confirm
  transition="fade"
  class="ma1">
  Fade
</w-confirm>

<w-confirm
  transition="slide-fade-up"
  class="ma1">
  Slide fade up
</w-confirm>

<w-confirm
  transition="slide-fade-right"
  class="ma1">
  Slide fade right
</w-confirm>

<w-confirm
  transition="slide-fade-down"
  class="ma1">
  Slide fade down
</w-confirm>

<w-confirm
  transition="slide-fade-left"
  class="ma1">
  Slide fade left
</w-confirm>

<w-confirm
  transition="scale"
  class="ma1">
  Scale
</w-confirm>

<w-confirm
  transition="bounce"
  class="ma1">
  Bounce
</w-confirm>

<w-confirm
  transition="twist"
  class="ma1">
  Twist
</w-confirm>
`)]},proxy:!0}])},[n("w-flex",{attrs:{wrap:""}},[n("w-confirm",{staticClass:"ma1"},[t._v("Default (scale-fade)")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"fade"}},[t._v("Fade")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"slide-fade-up"}},[t._v("Slide fade up")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"slide-fade-right"}},[t._v("Slide fade right")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"slide-fade-down"}},[t._v("Slide fade down")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"slide-fade-left"}},[t._v("Slide fade left")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"scale"}},[t._v("Scale")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"bounce"}},[t._v("Bounce")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"twist"}},[t._v("Twist")])],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Events")]),t._m(8),t._m(9),t._m(10),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm(
  @cancel="$waveui.notify&#40;'Canceled.', 'error'&#41;"
  @confirm="$waveui.notify&#40;'Confirmed!', 'success'&#41;") Ask for confirm`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm
  @cancel="$waveui.notify('Canceled.', 'error')"
  @confirm="$waveui.notify('Confirmed!', 'success')">
  Ask for confirm
</w-confirm>`)]},proxy:!0}])},[n("w-confirm",{on:{cancel:function(a){return t.$waveui.notify("Canceled.","error")},confirm:function(a){return t.$waveui.notify("Confirmed!","success")}}},[t._v("Ask for confirm")])],1)],1)},m=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("The "),n("code",[t._v("bg-color")]),t._v(" & "),n("code",[t._v("color")]),t._v(" props apply to the button you first see."),n("br"),t._v(`
To apply colors (or other props) to the menu or the buttons inside the menu, you can do it via:`)])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("ul",[n("li",[n("code",[t._v("menu")]),t._v(" "),n("small",{staticClass:"grey"},[t._v("E.g. "),n("code",{staticClass:"grey"},[t._v(`:menu="{ bgColor: 'green' }"`)])])]),n("li",[n("code",[t._v("cancel")]),t._v(" "),n("small",{staticClass:"grey"},[t._v("E.g. "),n("code",{staticClass:"grey"},[t._v(`:cancel="{ bgColor: 'green' }"`)])])]),n("li",[n("code",[t._v("confirm")]),t._v(" "),n("small",{staticClass:"grey"},[t._v("E.g. "),n("code",{staticClass:"grey"},[t._v(`:confirm="{ bgColor: 'green' }"`)])])])])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v('By default the question is "Are you sure?". But both the '),n("code",[t._v("question")]),t._v(` prop and the
`),n("code",[t._v("#question")]),t._v(` slot allow you to specify your own question. The slot is more
customizable as you can add components in it but more verbose to write.`),n("br"),t._v(`
If both a slot and a prop are given, the slot takes precedence.
`)])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("The cancel & confirm buttons can be customized through the "),n("code",[t._v("cancel")]),t._v(` &
`),n("code",[t._v("confirm")]),t._v(" props. These props accept either a "),n("span",{staticClass:"code"},[t._v("String")]),t._v(` for the button
label, or an `),n("span",{staticClass:"code"},[t._v("Object")]),t._v(" in order to define w-button props."),n("br"),t._v(`
The cancel button can also be set to `),n("code",[t._v("false")]),t._v(" in order to remove it.")])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("You can use the "),n("code",[t._v("cancel")]),t._v(" & "),n("code",[t._v("confirm")]),t._v(" "),n("strong",[t._v("props or slots")]),t._v(` to override the
cancel & confirm buttons labels.`)])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("The cancel and confirm buttons can be customized as much as a standard "),n("strong",{staticClass:"code"},[t._v("w-button")]),t._v(`
via the `),n("code",[t._v("cancel")]),t._v(" & "),n("code",[t._v("confirm")]),t._v(` props which accept an object of
props to pass down to the `),n("strong",{staticClass:"code"},[t._v("w-button")]),t._v(".")])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v(`If you're using the object form, you can define a custom label in it
(or you could also use the `),n("code",[t._v("#cancel")]),t._v(" & "),n("code",[t._v("#confirm")]),t._v(` slots
for more flexibility).`)])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v(`By default, the w-confirm component displays an arrow on the edge of the menu to designate
which action you have clicked requiring a confirmation.`),n("br"),t._v(`
You can disable the arrow via the `),n("code",[t._v("no-arrow")]),t._v(" option.")])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("2 events are emitted from the "),n("strong",{staticClass:"code"},[t._v("w-confirm")]),t._v(" component:")])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("ul",[n("li",[n("code",[t._v("cancel")]),t._v(" on cancel button click.")]),n("li",[n("code",[t._v("confirm")]),t._v(" on confirm button click.")])])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("You can listen to them to trigger an action."),n("br"),t._v(`
In this example, a notification is displayed when clicking on the cancel or confirm button.`)])}];const f={data:()=>({bgColor:"green"}),mounted(){setTimeout(()=>{this.bgColor="amber"},5e3)}},i={};var u=e(f,l,m,!1,p,null,null,null);function p(t){for(let o in i)this[o]=i[o]}var h=function(){return u.exports}(),d=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("div",{staticClass:"w-divider my12"}),n("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),n("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),n("component-api",{attrs:{items:t.slots,title:"Slots"}}),n("component-api",{attrs:{items:t.events,title:"Events"}})],1)},_=[];const v={color:`Applies a color to the main button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the main button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:"Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",mainButton:'For more customization, this prop accepts an object of props to pass down to the main button (all the options that the <strong class="code">w-button</strong> component can handle).',cancel:'Accept either <code>false</code> to remove the button, a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Cancel".',confirm:'Accept either a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Confirm".',inline:"Displays the question inline with the buttons, inside the menu.",menu:'For more customization, this prop accepts an object of props to pass down to the menu (all the options that the <strong class="code">w-menu</strong> component can handle).',noArrow:"By default the confirmation menu displays an arrow pointing toward the main button.<br>The arrow can simply be removed with this prop.",top:"Places the menu above the main button.",bottom:"Places the below the main button.",left:"Places the menu on the left of the main button.",right:"Places the menu at the right of the main button.",alignTop:"Aligns the top of the menu with the top of the main button.",alignBottom:"Aligns the bottom of the menu with the bottom of the main button.",alignLeft:"Aligns the left side of the menu with the left side of the main button.",alignRight:"Aligns the right side of the menu with the right side of the main button.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',persistent:"When set to <code>true</code>, clicking outside of the menu will not close the menu."},w={default:{description:"The main button contents."},question:{description:"The question to ask for confirmation in the menu."},cancel:{description:"The cancel button contents, in the menu."},confirm:{description:"The confirm button contents, in the menu."}},g={cancel:"Emitted on cancel button click. The menu will also close.",confirm:"Emitted on confirm button click. The menu will also close."},b={data:()=>({propsDescs:v,slots:w}),computed:{props(){return r.props},events(){return r.emits.reduce((t,o)=>(t[o]={description:g[o]||""})&&t,{})}}},s={};var y=e(b,d,_,!1,k,null,null,null);function k(t){for(let o in s)this[o]=s[o]}var x=function(){return y.exports}(),C=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("main",[n("ui-component-title",[t._v("w-confirm")]),n("examples"),n("api")],1)},A=[];const S={components:{Examples:h,Api:x}},c={};var T=e(S,C,A,!1,$,null,null,null);function $(t){for(let o in c)this[o]=c[o]}var q=function(){return T.exports}();export{q as default};
