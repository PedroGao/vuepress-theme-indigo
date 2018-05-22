<template>
  <v-card>
    <v-card-title>
      <span class="headline">评论区</span>
    </v-card-title>
    <v-card-text>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
          <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
          <v-list-tile v-else :key="item.title" avatar @click="">
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <editor />
    </v-card-text>
  </v-card>
</template>
<script>
import Editor from '../Editor';
export default {
  data() {
    return {
      items: [
        { header: '评论列表' },
        { divider: true, inset: true },
        {
          avatar: '/avatar.jpg',
          title: '打得不错',
          subtitle:
            "<span class='text--primary'>pedro</span> &mdash; 666666666666666666666666666666666666"
        },
        { divider: true, inset: true },
        {
          avatar: '/avatar.jpg',
          title: '圣光背叛了你',
          subtitle:
            "<span class='text--primary'>pedro</span> &mdash; put your faith into the light!"
        },
        { divider: true, inset: true },
        {
          avatar: '/avatar.jpg',
          title: '纯粹的力量',
          subtitle:
            "<span class='text--primary'>pedro</span> &mdash; 只有纯粹的力量才能带来纯粹的胜利！"
        }
      ]
    };
  },
  components: {
    Editor
  },
  name: ''
};
</script>
<style lang="stylus">
</style>
