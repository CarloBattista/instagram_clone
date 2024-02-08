<template>
    <HeaderComp />
    <SideBarComp :isPageHome="true" />
    <NavBarComp :isPageHome="true" />
    <div class="mainView">
        <div class="feed_container">
            <FeedComp />
            <SuggestedComp />
        </div>
    </div>
    <FooterComp />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useStore } from 'vuex';

import HeaderComp from '../../components/global/HeaderComp.vue';
import SideBarComp from '../../components/global/SideBarComp.vue';
import NavBarComp from '../../components/global/NavBarComp.vue';
import FeedComp from '../../components/feed/FeedComp.vue';
import SuggestedComp from '../../components/feed/SuggestedComp.vue';
import FooterComp from '../../components/global/FooterComp.vue';

export default {
    name: "HomeView",
    components: {
        HeaderComp,
        SideBarComp,
        NavBarComp,
        FeedComp,
        SuggestedComp,
        FooterComp
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