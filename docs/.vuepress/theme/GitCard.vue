<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 mt-4 offset-sm3>
      <v-card v-cloak v-if="profile">
        <v-card-media :src="profile.avatar_url" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <h3 class="headline mb-0">{{ profile.name }}</h3>
        </v-card-title>
        <v-card-text>
          <div>
            <v-chip color="primary" text-color="white">地址：</v-chip>
            {{ profile.location }}
            <v-chip color="primary" text-color="white">签名：</v-chip>
            {{ profile.bio }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-badge color="blue" right>
            <span slot="badge">{{ profile.public_repos }}</span>
            <span>public_repos</span>
          </v-badge>
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <v-badge color="blue" right>
            <span slot="badge">{{ profile.followers }}</span>
            <span>followers</span>
          </v-badge>
          <v-spacer />
          <v-btn flat color="orange">点赞</v-btn>
          <v-btn flat color="orange" target="_blank" href="https://github.com/PedroGao">跳转</v-btn>
        </v-card-actions>
      </v-card>
      <content-placeholders v-else :rounded="true">
        <content-placeholders-img />
        <content-placeholders-text :lines="3" />
      </content-placeholders>
    </v-flex>
    <v-flex xs12 sm6 mt-4 offset-sm1>
      <Content></Content>
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

