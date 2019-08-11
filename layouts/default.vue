<template>
  <div>
    <el-container>
      <el-header>
        <el-menu router :default-active="$route.path" mode="horizontal">
          <el-menu-item index></el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>
