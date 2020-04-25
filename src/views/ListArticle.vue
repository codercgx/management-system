<template>
  <div>
    <el-table :data="articles"  style="width: 100%, height:100%">
      <el-table-column prop="title" label="标题" width="200"></el-table-column>
      <el-table-column prop="body" label="内容" width="600"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="show(scope.row._id)" type="text" size="small">查看</el-button>
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {showarticle ,deleteById} from '../network/home'
import {request} from '../network/request'
export default {
  data() {
    return {
      articles: []
    };
  },
  props:{
    
  },
  created() {
    console.log("request articles");
    this.fetch();
  },
  methods: {
    fetch() {
     showarticle().then(res => {
        console.log(res.data);
        this.articles = res.data;
      });
    },
    edit(id) {
      console.log(id)
      this.$router.push(`/articles/edit/${id}`)
    },
    show(id) {
      console.log(id)
      this.$router.push(`/articles/show/${id}`)
    },
    remove(id) {
      deleteById(`articles/${id}`).then(res => {
        this.$message({
          message: "文章添加成功！",
          type: "success"
        });
        this.fetch();
        console.log(res.data);
       
      });
      

    }
  }
};
</script>

<style scoped>

</style>