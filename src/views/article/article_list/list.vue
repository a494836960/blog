<template>
  <div class="article-list">
    <article-item v-for="(item, index) in list" :item="item" :key="index"></article-item>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Provide } from "vue-property-decorator";
import ArticleItem from "./component/item.vue";
import { fetchArticleList } from "@/api/article";

@Component({
  components: {
    "article-item": ArticleItem
  }
})
export default class ArticleList extends Vue {
  list = [];

  mounted() {
    this.getArticleList();
  }

  getArticleList() {
    fetchArticleList({}).then(res => {
      this.list = res.data.records;
    });
  }
}
</script>

<style lang="less" scoped>
.article-list {
  margin-bottom: 20px;
}
</style>