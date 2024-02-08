<template>
    <HeaderComp />
    <SideBarComp :isPageHome="true" />
    <NavBarComp :isPageHome="true" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useStore } from 'vuex';

import HeaderComp from '../../components/global/HeaderComp.vue';
import SideBarComp from '../../components/global/SideBarComp.vue';
import NavBarComp from '../../components/global/NavBarComp.vue';

export default {
    name: "HomeView",
    components: {
        HeaderComp,
        SideBarComp,
        NavBarComp
    },
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