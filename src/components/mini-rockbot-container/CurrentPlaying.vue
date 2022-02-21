<template>
  <div class="main">
    <el-avatar shape="square" :size="80"></el-avatar>
    <p>current song</p>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  margin-bottom: 5%;
}

.el-avatar {
  margin-left: 3%;
}

.main p {
  margin-left: 10%;
  font-weight: bold;
}
</style>