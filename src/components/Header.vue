<template>
  <div class="loyalHead" v-if="initialData">
    <h1>{{ initialData.attributes.name }}</h1>
    <div>
      <div class="loyalProfile">
        <i class="icon-profile"></i>
        <span>+{{ initialData.attributes.points_settings.welcome_bonus }}</span>
      </div>
      <a href="#" class="hamMenu" :class="{'active': hamMenu}" @click.prevent="hamMenu = !hamMenu"></a>
    </div>
    <nav v-if="hamMenu" class="menuNav bg-white px-3 rounded">
      <router-link to="/" @click.native="hamMenu = false">
        <i class="icon-home"></i> Home
      </router-link>
      <router-link to="/profile" @click.native="hamMenu = false">
        <i class="icon-profile"></i>
        View Profile
      </router-link>
      <router-link to="/events" @click.native="hamMenu = false">
        <i class="icon-calendar"></i> Events
      </router-link>
      <router-link to="/mypoints" @click.native="hamMenu = false">
        <i class="icon-star"></i>
        My Lifetime Points
      </router-link>
      <router-link to="/history" @click.native="hamMenu = false">
        <i class="icon-history"></i>
        Transaction History
      </router-link>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  props: {
    path: String
  },
  data: function() {
    return {
      hamMenu: false
    };
  },
  computed: {
    ...mapState(["initialData"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@theme-color: #ffc300;
@theme-text: #fff;
@grey: #ccc;
.loyalHead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  h1 {
    color: @theme-text;
    font-size: 1.5em;
    margin: 0;
  }
  > div {
    display: flex;
    align-items: center;
  }
  .loyalProfile {
    width: 3em;
    height: 3em;
    margin: 0 1em;
    display: inline-block;
    background-color: #fff;
    border: 2px dashed @theme-color;
    border-radius: 50%;
    position: relative;
    text-align: center;
    i {
      color: @theme-color;
      font-size: 1.9em;
      transform: translateY(5px);
      display: block;
    }
    span {
      padding: 5px;
      background-color: @theme-color;
      border-radius: 10px;
      color: @theme-text;
      font-size: 0.9em;
      line-height: 1;
      min-width: 100%;
      position: absolute;
      right: 50%;
      bottom: 0;
      transform: translate(50%, 50%);
    }
  }
  .hamMenu {
    display: block;
    width: 2em;
    position: relative;
    z-index: 5;
    &:before,
    &:after {
      background-color: #fff;
      content: "";
      display: block;
      height: 3px;
      transition: all 200ms ease-in-out;
    }
    &:before {
      box-shadow: 0 10px 0 #fff;
      margin-bottom: 16px;
    }
    &.active:before {
      box-shadow: 0 0 0 #fff;
      transform: translateY(10px) rotate(45deg);
    }
    &.active:after {
      transform: translateY(-10px) rotate(-45deg);
    }
  }
  .menuNav {
    box-shadow: 0 0 0 500em rgba(72, 72, 72, 0.8);
    position: absolute;
    right: 0;
    top: 130%;
    display: flex;
    flex-direction: column;
    min-width: 300px;
    z-index: 2;
    a {
      color: #828282;
      padding: 1em 0;
      line-height: 1;
      text-decoration: none;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        right: 0.5em;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        width: 0.5em;
        height: 0.5em;
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;
      }
      &:not(:last-child) {
        border-bottom: 1px solid #ccc;
      }
      &.active {
        color: #000;
      }
    }
    i {
      font-size: 1.2em;
      padding-right: 0.5em;
    }
  }
}
</style>
