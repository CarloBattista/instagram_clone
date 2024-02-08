<template>
    <div class="dot_user_stories">
        <div class="wrap_image_profile">
            <img class="image_profile" v-if="profile?.profile_picture" :src="profile?.profile_picture"
                :alt="'Immagine del profilo di ' + profile?.profile_name">
            <img class="image_profile" v-else-if="!profile?.profile_picture" src="/_resources/imgs/profile_placeholder.jpg"
                :alt="'Immagine del profilo di ' + profile?.profile_name">
        </div>
        <div class="wrap_name">
            <p class="name_profile">{{ profile?.profile_name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "StoriesDotComp",
    props: {
        profile: Object
    }
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