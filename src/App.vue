<template>
  <div id="app">
    <section class="hero is-success is-fullheight">
      <!-- Hero head: will stick at the top -->
      <app-header></app-header>
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container">
          <router-view/>
        </div>
      </div>
      <!-- Hero footer: will stick at the bottom -->
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader

  },
};
</script>

<style>
.container{
  width: 100%;
}
</style>;
