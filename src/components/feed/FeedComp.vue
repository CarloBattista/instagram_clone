<template>
    <div class="feed_wrap">
        <StoriesComp />
        <PostUserComp />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useStore } from 'vuex';

import StoriesComp from '../carousel/StoriesComp.vue';
import PostUserComp from '../feed/PostUserComp.vue';

export default {
    name: "FeedComp",
    components: {
        StoriesComp,
        PostUserComp
    },
}
</script>

<style scoped>
.feed_wrap {
    width: 100%;
    max-width: 630px;
    min-height: 1000px;
}

/* Media Query's */
/* @media only screen and (max-width: 767px) */
</style>