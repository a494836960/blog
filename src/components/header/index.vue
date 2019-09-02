<template>
  <div class="hd-header">header</div>
</template>

<script>
import { Vue } from "vue-property-decorator";

export default class Header extends Vue {}
</script>

<style lang="less">
.hd-header {
  background: @primary-color;
  line-height: 60px;
  text-align: center;
}
</style>
