<template lang="pug">
div
  title-link(h3) 1. Download from NPM
  .ml5
    ssh-pre.vue-install.mb0(language="shell") npm i wave-ui # Vue 3.
    .w-flex.align-center
      | or
      ssh-pre.vue-install.grow.ml2(language="shell") npm i wave-ui@legacy # Vue 2.x.

  title-link(h3) 2. Import in your project
  .ml5
    p Import Wave UI library at the root of your app - usually #[span.code main.js].
    w-flex(basis-zero wrap :gap="4")
      ssh-pre.grow.ma2.mt8(language="js" label="VUE 3 - main.js" style="min-width: 290px").
        // VUE 3.
        import { createApp } from 'vue'
        import App from './App.vue'
        import WaveUI from 'wave-ui'
        import 'wave-ui/dist/wave-ui.css'

        const app = createApp(App)

        new WaveUI(app, {
          // Some Wave UI options.
        })

        app.mount('#app')

      ssh-pre.grow.ma2.mt8(language="js" label="VUE 2.x - main.js" style="min-width: 290px").
        // VUE 2.x.
        import Vue from 'vue'
        import App from './App.vue'
        import WaveUI from 'wave-ui'
        import 'wave-ui/dist/wave-ui.css'

        Vue.use(WaveUI)

        const waveui = new WaveUI({
          // Some Wave UI options.
        })

        new Vue({
          waveui,
          render: h => h(App)
        }).$mount('#app')

    p.mt2.grey-light1
      w-icon.mr1 wi-chevron-right
      | Edit a
      a.mx1(href="https://codepen.io/antoniandre/pen/RwaXMLd?editors=1010" target="_blank")
        | #[strong Vue 3] Wave UI demo on Codepen
        w-icon.ml1 mdi mdi-open-in-new
      | or a
      a.ml1(href="https://codepen.io/antoniandre/pen/KKyoKrZ?editors=1010" target="_blank")
        | #[strong Vue 2] Wave UI demo on Codepen
        w-icon.ml1 mdi mdi-open-in-new
      | .

  title-link(h3).mt8 3. Place a #[span.code w-app] at the root of your app
  .ml5
    ssh-pre(v-show="$store.state.usePug" language="pug" label="App.vue").
      w-app
        //- All your app content goes here.

        //- Also try to add a button!
        w-button My Button
    ssh-pre(v-show="!$store.state.usePug" language="html-vue" label="App.vue").
      &lt;w-app&gt;
        &lt;!-- All your app content goes here. --&gt;

        &lt;!-- Also try to add a button! --&gt;
        &lt;w-button&gt;My Button&lt;/w-button&gt;
      &lt;/w-app&gt;
    .caption.grey-light1.pb6
      | The &lt;w-app&gt; is required for Wave UI base styles and for a few components needing to be moved in the DOM.#[br]
      | There should only be one &lt;w-app&gt; in your whole app.

    p Now check your app in the browser!
</template>
