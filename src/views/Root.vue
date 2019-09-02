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
