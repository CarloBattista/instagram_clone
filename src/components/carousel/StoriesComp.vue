<template>
    <div class="stories_carousel_container">
        <Splide :options="options">
            <SplideSlide v-for="(profile, index) in getProfiles" :key="index">
                <StoriesDotComp :profile="profile" />
            </SplideSlide>
        </Splide>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { mapActions, mapGetters } from 'vuex';
import { useStore } from 'vuex';

import StoriesDotComp from '../ig/StoriesDotComp.vue'

export default {
    name: "StoriesComp",
    components: {
        Splide,
        SplideSlide,
        StoriesDotComp
    },
    computed: {
        ...mapGetters(['getProfiles']),
    },
    setup() {
        const options = {
            rewind: false,
            perPage: 8,
            perMove: 8,
            pagination: false,
            drag: false,
            // gap: '3px',
            breakpoints: {
                767: {
                    perPage: 6,
                    perMove: 6,
                },
            }
        };

        return { options };
    },
}
</script>

<style scoped>
.stories_carousel_container{
    width: 100%;
}
</style>