<template>
  <div>
    <v-navigation-drawer app right :mobile-break-point="mobilePoint" :mini-variant.sync="miniNav" :width="150" v-model="navVisible">
      <slot>
      </slot>
    </v-navigation-drawer>
    <v-btn @click="navVisible=!navVisible" v-show="!show" fixed dark fab top class="mt-5" right small color="blue">
      <v-icon>fa fa-list-ul</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
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
    }
  },
  created() {
    // console.log(this.$vuetify.breakpoint);
  }
};
</script>


