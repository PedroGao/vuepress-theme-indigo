<template>
  <div>
    <v-navigation-drawer app right :mobile-break-point="mobilePoint" :mini-variant.sync="miniNav" :width="180" v-model="navVisible">
      <div>
        <p></p>
        <ul class="group-items" v-if="headers.length > 0">
          <li class="sidebar-header" v-for="header in headers" :key="header.title">
            <a :class="linkLevel(header.level)" class="sidebar-link" :href="`#${header.slug}`">
              {{ header.title }}
            </a>
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
    <v-btn @click="navVisible=!navVisible" v-show="!show" fixed dark fab top class="mt-5" right small color="blue">
      <v-icon>fa fa-list-ul</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    linkLevel(level) {
      return level > 2 ? 'three' : '';
    }
  },
  data() {
    return {
      navVisible: true,
      miniNav: false,
      mobilePoint: 1264
    };
  },
  computed: {
    show() {
      return this.$vuetify.breakpoint.lgAndUp;
    },
    headers() {
      return this.$page.headers;
    }
  },
  created() {
    // console.log(this.$page.headers);
  }
};
</script>


<style lang="stylus" scoped>
@import '../styles/config.styl';

.group-items {
  transition: height 0.1s ease-out;
  overflow: hidden;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

a.sidebar-link {
  font-weight: 600;
  display: inline-block;
  color: $textColor;
  border-left: 0.25rem solid transparent;
  padding: 0.45rem 1rem 0.45rem 1.25rem;
  line-height: 1.4;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    color: $accentColor;
  }

  &.active {
    font-weight: 600;
    color: $accentColor;
    border-left-color: $accentColor;
  }

  &.three {
    font-weight: 500;
    padding-left: 1.8rem;
  }
}
</style>
