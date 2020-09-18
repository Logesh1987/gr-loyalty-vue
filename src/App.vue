<template>
  <div id="app" class="loyalWrapper">
    <a href="#" class="loyalClose">
      <i class="far fa-times-circle"></i>
    </a>
    <HeaderAsset path="https://logesh1987.github.io/gr-loyalty/images/comp/img-header.jpg" />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div class="loyalBody" style="background-image: url(https://logesh1987.github.io/gr-loyalty/images/comp/bg_pattern.jpg);">
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
export default {
  components: { HeaderAsset, Footer, Header }
};
</script>

<style lang="less">
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
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
