<template>
  <LoadingBarComp :isLoading="isLoading" />
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import LoadingBarComp from './components/ig/LoadingBarComp.vue';

export default {
  name: "App",
  components: {
    LoadingBarComp
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    fetchLoading() {
      if (this.isLoading === false) {
        this.isLoading = true;

        setTimeout(() => {
          this.isLoading = false
        }, 600) // 600ms
      }
    }
  },
  mounted() {
    this.fetchLoading();
  }
}
</script>

<style scoped></style>