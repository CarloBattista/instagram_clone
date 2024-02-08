<template>
    <div class="dot_user_stories" :class="{ curNone: areProfilesLoading }">
        <div class="wrap_image_profile" v-if="!areProfilesLoading">
            <img class="image_profile" v-if="profile?.profile_picture" :src="profile?.profile_picture"
                :alt="'Immagine del profilo di ' + profile?.profile_name">
            <img class="image_profile" v-else-if="!profile?.profile_picture" src="/_resources/imgs/profile_placeholder.jpg"
                :alt="'Immagine del profilo di ' + profile?.profile_name">
        </div>
        <div class="wrap_image_profile loading" :class="'load_pulse_' + index" v-else-if="areProfilesLoading"></div>
        <div class="wrap_name">
            <p class="name_profile" v-if="!areProfilesLoading">{{ profile?.profile_name }}</p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "StoriesDotComp",
    props: {
        profile: Object,
        index: String
    },
    computed: {
        ...mapGetters(['areProfilesLoading']),
    },
}
</script>

<style scoped>
.dot_user_stories {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.dot_user_stories.curNone{
    cursor: default;
}

.wrap_image_profile {
    position: relative;
    height: 56px;
    border-radius: 50%;
    aspect-ratio: 1;
}

.wrap_image_profile::before {
    position: absolute;
    top: -4px;
    left: -4px;
    content: "";
    height: 64px;
    width: auto;
    aspect-ratio: 1;
    background-image: url("/_resources/imgs/story_ring.svg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
}

.wrap_image_profile.loading{
    background-color: rgb(38, 38, 38);
    animation: pulse 1.5s ease 0s infinite;
}

.wrap_image_profile.loading.load_pulse_0{ animation-delay: 0s; }
.wrap_image_profile.loading.load_pulse_1{ animation-delay: .2s; }
.wrap_image_profile.loading.load_pulse_2{ animation-delay: .4s; }
.wrap_image_profile.loading.load_pulse_3{ animation-delay: .6s; }
.wrap_image_profile.loading.load_pulse_4{ animation-delay: .8s; }
.wrap_image_profile.loading.load_pulse_5{ animation-delay: 1s; }
.wrap_image_profile.loading.load_pulse_6{ animation-delay: 1.2s; }
.wrap_image_profile.loading.load_pulse_7{ animation-delay: 1.4s; }
.wrap_image_profile.loading.load_pulse_8{ animation-delay: 1.6s; }

@keyframes pulse {
    0% {
        background-color: rgb(38, 38, 38);
    } 50% {
        background-color: rgb(71, 71, 71);
    } 100% {
        background-color: rgb(38, 38, 38);
    }
}

.wrap_image_profile.loading::before{
    display: none;
}

.wrap_image_profile .image_profile {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.wrap_name {
    width: 100%;
    margin-top: 8px;
    max-width: 56px;
    text-align: center;
}

.name_profile {
    color: rgb(245, 245, 245);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: .01em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>