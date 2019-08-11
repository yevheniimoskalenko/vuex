<template>
  <div class="photo">
    <el-row>
      <el-col :span="24" :style="{width:'640px'}">
        <el-card class="box-card" v-for="(item,index) in Photos" :key="index">
          <el-image :src="item.largeImageURL" class="image" fit="cover" lazy="true">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-card>
        <div class="card__bottom">
          <el-button type="primary" round :loading="load" @click="loadsPhoto">Загрузить</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      fit: 'cover',
      load: false,
      page: 1
    };
  },
  computed: {
    Photos() {
      return this.$store.getters.newPhoto;
    }
  },
  methods: {
    loadsPhoto() {
      this.$store.dispatch('loadPhoto', this.page++);
    }
  }
};
</script>
<style lang="scss">
.photo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card__bottom {
  padding: 20px 0px;
  display: flex;
  justify-content: center;
}
.el-card__body {
  padding: 0px;
}
.box-card {
  margin-top: 40px;
}
</style>
