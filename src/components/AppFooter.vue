<template>
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li :class="{ 'is-active': isActive('/') }">
            <router-link to="/">
              <span class="icon"><i class="fa fa-star"></i></span>
              <span>Visualizar</span>
            </router-link>
          </li>
          <li :class="{ 'is-active': isActive('/About') }">
            <router-link to="/About">
              <span class="icon"><i class="fa fa-star"></i></span>
              <span>Sobre el SPA</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  methods: {
    isActive(path) {
      if (path === "/") {
        return this.$route.name == "Index";
      }
      return this.$route.path.includes(path);
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>