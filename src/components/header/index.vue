<template>
  <el-header class="hd-header">header</el-header>
</template>

<script>
import { Vue } from 'vue-property-decorator'

export default class Header extends Vue {}
</script>

<style lang="less">
.hd-header {
    background: @primary-color;
}
</style>
