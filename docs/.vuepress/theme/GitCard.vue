<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 mt-4 offset-sm3>
      <v-card v-if="profile">
        <v-card-media :src="profile.avatar_url" height="200px">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text">{{ profile.bio }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-text>
          <span class="body-1 mr-4">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
            {{ profile.name }}
          </span>
          <span class="body-1 mr-4">
            <i class="fa fa-location-arrow" aria-hidden="true"></i>
            {{ profile.location }}
          </span>
        </v-card-text>
        <v-card-actions>
          <v-chip>
            <i class="fa fa-users" aria-hidden="true">
              {{ profile.followers }}
            </i>
          </v-chip>
          <v-chip>
            <i class="fa fa-list" aria-hidden="true">
              {{ profile.public_repos }}
            </i>
          </v-chip>
          <v-spacer></v-spacer>
          <v-btn flat color="primary">点赞</v-btn>
          <v-btn flat color="primary">跳转</v-btn>
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

