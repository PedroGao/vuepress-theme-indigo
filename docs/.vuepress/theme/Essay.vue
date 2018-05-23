<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-media :src="bg" height="400px">
            <v-layout column class="media">
              <v-card-title class="white--text pl-5 pt-5">
                <div class="display-1 pl-5 pt-5">随笔</div>
              </v-card-title>
            </v-layout>
          </v-card-media>
          <v-card-text>
            <Content>
              <router-view>
              </router-view>
            </Content>
            <v-list class="mt-3" v-if="articles.length > 0">
              <template v-for="article in articles">
                <v-list-tile :key="article.path" @click="push(article.path)">
                  <v-list-tile-action>
                    <v-icon v-if="article.frontmatter.icon" color="blue">{{ article.frontmatter.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="article.title"></v-list-tile-title>
                  </v-list-tile-content>
                  <span v-show="show" class="body-2"> {{ article.excerpt }} </span>
                  <!-- <v-spacer /> -->
                  <v-chip v-for="tag in article.frontmatter.tags" :key="tag" small>
                    {{ tag }}
                  </v-chip>
                </v-list-tile>
                <v-divider/>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'essay',
  methods: {
    push(path) {
      this.$router.push({ path });
    }
  },
  data() {
    return {
      bg: require('./imgs/xun.jpg')
    };
  },
  computed: {
    articles() {
      return this.$site.pages.filter(page => {
        return page.path.indexOf('essay') > 0;
      });
    },
    show() {
      return this.$vuetify.breakpoint.mdAndUp;
    }
  },
  mounted() {
    // console.log(this.$vuetify.breakpoint);
    // console.log(this.$site.pages);
  },
  components: {}
};
</script>
<style lang="stylus">
</style>
