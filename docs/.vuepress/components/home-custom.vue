<template>
  <div class="home">
    <p class="description">
      {{ $description || 'Welcome to your Blog Site' }}
    </p>
    <slot>
    </slot>
    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="stylus" scoped>
.description {
  font-size: 1.2rem;
}

.home {
}

.footer {
  position: fixed;
  bottom: 0;
  left: 40%;
  padding: 2.5rem;
  border-top: 1px solid #eaecef;
  text-align: center;
  color: #4e6e8e;
}
</style>

