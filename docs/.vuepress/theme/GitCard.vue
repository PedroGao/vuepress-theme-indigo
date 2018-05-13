<template>
  <v-layout>
    <v-flex xs12 sm6 mt-4 offset-sm3>
      <v-card v-if="profile">
        <v-card-media :src="profile.avatar_url" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ profile.name }}</h3>
            <div>
              {{ profile.location }} &nbsp;&nbsp; &nbsp;{{ profile.bio}}
            </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">点赞</v-btn>
          <v-btn flat color="orange" target="_blank" href="https://github.com/PedroGao">跳转</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      profile: null
    };
  },
  computed: {
    content() {
      return this.$site.themeConfig;
    }
  },
  created() {
    this.$nextTick(() => {
      this.getInfo();
    });
  },
  methods: {
    getInfo() {
      // const user = 'PedroGao';
      axios
        .get(`https://api.github.com/users/${this.content.github}`)
        .then(res => {
          // console.log(res.data);
          this.profile = res.data;
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>

