<template>
  <div>
    <Header />
    <div class="hd-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import Header from "@/components/header/index.vue";

@Component({
  components: {
    Header
  }
})
export default class Home extends Vue {
  @Provide() obj: Object = {};
}
</script>

<style lang="less" scoped>
.hd-content {
  width: @container-width;
  margin: 20px auto 0;
  min-height: 90vh;
  background: #fff;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25)
}
</style>