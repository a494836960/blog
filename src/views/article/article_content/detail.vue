<template>
  <div>
    <h2 class="article-title">{{article.title}}</h2>
    <div class="article-content">{{article.content}}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { fetchArticleDetail } from "@/api/article.ts";

@Component
export default class ArticleDetail extends Vue {
  article = {};
  id = 1;

  mounted() {
    this.id = this.$router.history.current.params.id;
    this.getArticleDetail();
  }

  getArticleDetail() {
    fetchArticleDetail({ id: this.id }).then(res => {
      this.article = {
        title: "title",
        content: "content",
        next: "",
        prev: "",
        id: ""
      };
    });
  }
}
</script>

<style lang="less" scoped>
.article-title {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
.article-content {
  padding: 20px 15px;
  line-height: 24px;
  font-size: 14px;
}
</style>