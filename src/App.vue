<template>
  <div id="app" class="loyalWrapper">
    <a href="#" class="loyalClose">
      <i class="far fa-times-circle"></i>
    </a>
    <HeaderAsset
      v-if="initialData"
      :path="'https://s3.us-east-1.amazonaws.com/devam.pro/gr/master/'+initialData.attributes.image_url"
    />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div
      class="loyalBody"
      style="background-image: url(https://logesh1987.github.io/gr-loyalty/images/comp/bg_pattern.jpg);"
    >
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import HeaderAsset from "./components/HeaderAsset";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { mapActions, mapState } from "vuex";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

export default {
  components: { HeaderAsset, Footer, Header },
  computed: {
    ...mapState(["initialData"])
  },
  methods: {
    ...mapActions(["getData"])
  },
  mounted: async function() {
    const dd = await this.getData();
    console.log(dd);
  }
};
</script>

<style lang="less">
@theme-color: #ffc300;
@theme-text: #fff;
@grey: #ccc;

.themeColor {
  color: @theme-color;
}
.themeBg {
  background-color: @theme-color;
}
.themeTextColor {
  color: @theme-text;
}
body {
  font-family: "Inter", sans-serif;
  margin: 0;
}

.loyalWrapper {
  margin: 50px auto;
  max-width: 460px;
  position: relative;
  .loyalClose {
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #000;
    border-radius: 50%;
    font-size: 1.5em;
    transform: translate(50%, -50%);
    line-height: 1;
  }
}

.loyalBody {
  min-height: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding: 30px 30px 0;
}
</style>
