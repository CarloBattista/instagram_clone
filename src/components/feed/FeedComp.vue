<template>
    <div class="feed_wrap">
        <StoriesComp />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useStore } from 'vuex';

import StoriesComp from '../carousel/StoriesComp.vue';

export default {
    name: "FeedComp",
    components: {
        StoriesComp
    },
}
</script>

<style scoped>
.feed_wrap {
    background-color: blue;
    width: 100%;
    max-width: 630px;
    min-height: 1000px;
}

/* Media Query's */
/* @media only screen and (max-width: 767px) */
</style>