<template>
  <div id="app">
    <el-container class="bgImage" style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-loading"></i>内容管理
            </template>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container class="content">
        <!-- 头部组件 -->
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>博客</span>
        </el-header>

        <el-main>
          <!-- 路由 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
  /*created(){
   reqApi().then(res=>{
        console.log(res)
        this.article.push(...res.data)
        console.log(this.article)
      })
  },
  methods: {
    del(index){
       this.article.splice(index,1)
        
    }
  },*/
};
</script>

<style  >
html,
body {
  padding: 0;
  margin: 0;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>