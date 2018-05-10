<template>
  <v-toolbar app dark scroll-off-screen color="primary" :height="56" :scroll-threshold="100" class="blog-toolbar">
    <v-btn icon @click="toggleNav">
      <i class="fa fa-bars"></i>
    </v-btn>
    <v-toolbar-title>{{$page.title || $siteTitle}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <search-box></search-box>
    <!-- <v-btn icon>
      <i class="fa fa-search"></i>
    </v-btn> -->
    <Share origin="top right">
      <v-btn icon>
        <i class="fa fa-share-alt"></i>
      </v-btn>
    </Share>
  </v-toolbar>
</template>
<script>
import Share from './components/Share';
import SearchBox from './components/SearchBox';

export default {
  components: {
    Share,
    SearchBox
  },
  props: {
    layout: String
  },
  methods: {
    toggleNav() {
      this.$emit('toggleNav');
    }
  }
};
</script>
<style lang="stylus">
@import './styles/config.styl';

.blog-toolbar {
  .toolbar__title {
    font-size: 18px;
  }
}
</style>
