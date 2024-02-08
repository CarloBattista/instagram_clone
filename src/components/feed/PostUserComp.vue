<template>
    <div class="post_users_container">
        <div class="row__post_user" v-for="(post, index) in getPosts" :key="index">
            <div class="sec_wt section_post_heading">
                <div class="post__start_region">
                    <div class="wrap_image_profile">
                        <img class="image_profile" v-if="post?.profile_picture" :src="post?.profile_picture"
                            :alt="'Immagine del profilo di ' + post?.profile_name">
                        <img class="image_profile" v-else-if="!post?.profile_picture" src="/_resources/imgs/profile_placeholder.jpg"
                            :alt="'Immagine del profilo di ' + post?.profile_name">
                    </div>
                    <div class="wrap_info_post">
                        <div class="top_info">
                            <h2 class="profile_name">{{ post?.profile_name }}</h2>
                            <div class="postDate">
                                <span class="separator_dot">•</span>
                                <span class="date_post">1 g</span>
                            </div>
                        </div>
                        <div class="bottom_info">
                            <p class="geo_location">Milan, Italy</p>
                        </div>
                    </div>
                </div>
                <div class="post__end_region"></div>
            </div>
            <div class="sec_wt section_post_body">
                <div class="post_profile_image">
                    <img class="post_image" :src="post?.post_image" :alt="'Post di ' + post?.profile_name">
                </div>
            </div>
            <div class="sec_wt section_post_footer"></div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useStore } from 'vuex';

export default {
    name: "PostUserComp",
    computed: {
        ...mapGetters(['getPosts']),
    },
}
</script>

<style scoped>
.post_users_container {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.row__post_user {
    width: 100%;
    max-width: 470px;
    padding-bottom: 16px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(38, 38, 38);
}

.sec_wt {
    width: 100%;
}

.section_post_heading {
    width: 100%;
    height: 46px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.post__start_region {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.wrap_image_profile {
    position: relative;
    height: 32px;
    border-radius: 50%;
    aspect-ratio: 1;
}

.wrap_image_profile::before {
    position: absolute;
    top: -3px;
    left: -3px;
    content: "";
    height: 38px;
    width: auto;
    aspect-ratio: 1;
    background-image: url("/_resources/imgs/story_ring.svg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
}

.wrap_image_profile .image_profile {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.wrap_info_post {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
}

.top_info {
    display: flex;
    align-items: center;
}

.profile_name {
    color: rgb(245, 245, 245);
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
}

.separator_dot {
    color: rgb(168, 168, 168);
    font-size: 14px;
    font-weight: 400;
    margin: 0 4px;
}

.date_post {
    color: rgb(168, 168, 168);
    font-size: 14px;
    font-weight: 400;
}

.geo_location {
    color: rgb(245, 245, 245);
    font-size: 12px;
    font-weight: 400;
}

.post_profile_image{
    background-color: rgb(38, 38, 38);
    width: 100%;
    height: 585px;
    min-height: 470px;
    max-height: 585px;
    border-radius: 6px;
}

.post_image{
    width: 100%;
    height: 100%;
    border-radius: 6px;
    object-fit: cover;
}
</style>