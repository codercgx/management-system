<template>
  <div class="container">
    <div class="aTitle">{{article.title}}</div>
    <div class="aBody">{{article.body}}</div>
   
  </div>
</template>

<script>
import {getArticle} from '../network/home'
export default {
  data() {
    return {
      article: {}
    };
  },
  props:{
    
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
     const res= await getArticle(`/articles/${this.$route.params.id}`)
         this.article = res.data;
       }
    
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.aTitle {
  display: block;
  color: black;
  
}
.aBody {
  display: block;
  color: blue;
  text-align: center;
}
</style>