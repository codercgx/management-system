<template>
  <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

import {editarticle,getArticle} from '../network/home'
export default {
  data() {
    return {
      article: {}
    };
  },
  props:{
  
  },
  methods: {
    saveArticle() {
      editarticle(`articles/${this.$route.params.id}`, this.article).then(res => {
        this.$confirm(`是否修改为${this.article.title}?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
            
          });          
        });
        this.$router.push("/articles/list");
        console.log(res.data);
      });
    },
    fetch() {
      getArticle(`/articles/${this.$route.params.id}`)
        .then(res => {
          this.article = res.data;
        });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style scoped>
</style>