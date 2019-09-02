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
      this.list = res.data.record || [
        {
          id: 1,
          title: "vue-property-decorator使用指南 - 掘金",
          desc:
            "在Vue中使用TypeScript时,非常好用的一个库,使用装饰器来简化书写。 1、安装npm install --save vue-property-decorator @Component (from vue-class-component) ..."
        }
      ];
    });
  }
}
</script>

<style lang="less" scoped>
.article-list {
  margin-bottom: 20px;
}
</style>