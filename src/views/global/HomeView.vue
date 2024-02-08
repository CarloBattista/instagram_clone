<template></template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useStore } from 'vuex';
import axios from 'axios';

export default {
    name: "HomeView",
    computed: {
        ...mapGetters(['getProfiles', 'getPosts']),
    },
    methods: {
        ...mapActions(['fetchProfiles', 'fetchPost']),
    },
    mounted() {
        this.fetchProfiles();
        this.fetchPost();
    }
}
</script>

<style scoped></style>