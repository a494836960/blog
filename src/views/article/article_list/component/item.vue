<template>
  <div class="article-item">
    <router-link class="article-item-title" :to="{path: `/detail/${item.id}`}">{{item.title}}</router-link>
    <div class="article-item-desc">{{item.desc}}</div>
  </div>
</template>

<script lang='ts'>
import { Vue, Provide, Prop, Component } from "vue-property-decorator";

@Component
export default class ArticleItem extends Vue {
  @Prop(Object) item: Object;
}
</script>

<style scoped lang='less'>
.article-item {
  padding: 10px 0;
  border-bottom: 1px solid #e1e1e1;
  &:last-of-type {
    border: 0;
  }
}

.article-item-title {
  color: @primary-color;
  font-size: 16px;
  font-weight: bold;
}
.article-item-desc {
  margin-top: 10px;
  font-size: 14px;
  line-height: 24px;
  line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 100px;
}
</style>