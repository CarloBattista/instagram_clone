<template>
    <div class="post_users_container">
        <div class="row__post_user with_video_ambient" v-if="true">
            <div class="sec_wt section_post_heading">
                <div class="post__start_region">
                    <div class="wrap_image_profile">
                        <img class="image_profile" v-if="post?.profile_picture" :src="post?.profile_picture"
                            :alt="'Immagine del profilo di ' + post?.profile_name">
                        <img class="image_profile" v-else-if="!post?.profile_picture"
                            src="/_resources/imgs/profile_placeholder.jpg"
                            :alt="'Immagine del profilo di ' + post?.profile_name">
                    </div>
                    <div class="wrap_info_post">
                        <div class="top_info">
                            <h2 class="profile_name">NetflixIt</h2>
                            <div class="postDate">
                                <span class="separator_dot">•</span>
                                <span class="date_post">2g</span>
                            </div>
                        </div>
                        <div class="bottom_info">
                            <p class="geo_location">Milan, Italy</p>
                        </div>
                    </div>
                </div>
                <div class="post__end_region"></div>
            </div>
            <div class="sec_wt section_post_body" ref="videoContainer" @click="handlePlayPause">
                <div class="post_profile_image" @dblclick="handleTriggerLike">
                    <img v-if="false" class="post_image" :src="post?.post_image" :alt="'Post di ' + post?.profile_name">
                    <video class="post_video" src="/_resources/imgs/testVideo.mp4" ref="video" autoplay muted loop></video>
                    <video class="post_video ambient" src="/_resources/imgs/testVideo.mp4" ref="videoAmbient" autoplay
                        muted loop></video>
                    <div class="like_heart_animation">
                        <div class="instagram_heart" :class="{ isLiked: likeHeartAnimationIsVisible }"></div>
                    </div>
                    <div class="playPause_container">
                        <div class="btn_toggle" v-if="!isPlaying">
                            <div class="play_icon"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sec_wt section_post_footer">
                <div class="container_cta">
                    <div class="cta_start_region">
                        <div class="btn_cta">
                            <div class="wrap_icon">
                                <svg aria-label="Mi piace" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24"
                                    role="img" viewBox="0 0 24 24" width="24">
                                    <title>Mi piace</title>
                                    <path
                                        d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="btn_cta">
                            <div class="wrap_icon">
                                <svg aria-label="Commenta" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24"
                                    role="img" viewBox="0 0 24 24" width="24">
                                    <title>Commenta</title>
                                    <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none"
                                        stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="btn_cta">
                            <div class="wrap_icon">
                                <svg aria-label="Condividi il post" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor"
                                    height="24" role="img" viewBox="0 0 24 24" width="24">
                                    <title>Condividi il post</title>
                                    <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22"
                                        x2="9.218" y1="3" y2="10.083"></line>
                                    <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                        stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="cta_end_region">
                        <div class="btn_cta">
                            <div class="wrap_icon">
                                <svg aria-label="Salva" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24"
                                    role="img" viewBox="0 0 24 24" width="24">
                                    <title>Salva</title>
                                    <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useStore } from 'vuex';

export default {
    name: "PostUserComp",
    data() {
        return {
            likeHeartAnimationIsVisible: false,
            isPlaying: false,
            currentDate: new Date(), // Assumi che `currentDate` sia la data corrente
            videoRefs: []
        }
    },
    computed: {
        ...mapGetters(['getPosts', 'arePostsLoading']),
    },
    methods: {
        handleTriggerLike() {
            if (this.likeHeartAnimationIsVisible === false) {
                this.likeHeartAnimationIsVisible = true;

                setTimeout(() => {
                    this.likeHeartAnimationIsVisible = false;
                }, 1000)
            }
        },
        formatDate(date) {
            const postDate = new Date(date);
            const currentDate = this.currentDate;
            const diffTime = Math.abs(currentDate - postDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return `${diffDays} g`;
        },
        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Quando l'elemento è visibile, avvia il video
                    this.$refs.video.play();
                    this.$refs.videoAmbient.play();
                    this.isPlaying = true;
                } else {
                    // Se l'elemento non è visibile, metti in pausa il video
                    this.$refs.video.pause();
                    this.$refs.videoAmbient.pause();
                    this.isPlaying = false;
                }
            });
        },
        handlePlayPause() {
            const video = this.$refs.video;
            const videoAmbient = this.$refs.videoAmbient;
            if (video.paused) {
                video.play();
                videoAmbient.play();
                this.isPlaying = true;
            } else {
                video.pause();
                videoAmbient.pause();
                this.isPlaying = false;
            }
        }
    },
    mounted() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Cambia questo valore a seconda di quando vuoi far partire il video
        };

        const observer = new IntersectionObserver(this.handleIntersection, options);
        observer.observe(this.$refs.videoContainer);
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

.post_profile_image {
    background-color: rgb(38, 38, 38);
    background-color: #000;
    border: 1px solid rgb(38, 38, 38);
    position: relative;
    width: 100%;
    height: 585px;
    min-height: 470px;
    max-height: 585px;
    border-radius: 6px;
    cursor: pointer;
}

.like_heart_animation,
.playPause_container {
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn_toggle {
    height: 135px;
    aspect-ratio: 1;
}

.btn_toggle .play_icon {
    background-image: url("https://static.cdninstagram.com/rsrc.php/v3/ya/r/FM_vuA6unUv.png");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 271px 149px;
    width: 135px;
    height: 135px;
}

.instagram_heart {
    width: 140px;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: url("/_resources/imgs/heart.png") no-repeat center/contain;
    opacity: 0;
    transform: scale(0);
}

.instagram_heart.isLiked {
    animation-duration: 1000ms;
    animation-name: like-heart-animation;
    animation-timing-function: ease-in-out;
}

@keyframes like-heart-animation {
    0% {
        opacity: 0;
        transform: scale(0);
    }

    15% {
        opacity: 0.9;
        transform: scale(1.2);
    }

    30% {
        transform: scale(0.95);
    }

    45%,
    80% {
        opacity: 0.9;
        transform: scale(1);
    }
}

.post_image {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    object-fit: cover;
}

.post_image.ambient{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(135px) brightness(.4);
}

.post_video {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    object-fit: contain;
}

.post_video.ambient {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(135px) brightness(.7);
}

.container_cta {
    width: 100%;
    height: 40px;
    margin: 4px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cta_start_region,
.cta_end_region {
    display: flex;
    align-items: center;
}

.btn_cta {
    height: 40px;
    padding: 8px;
    aspect-ratio: 1;
    cursor: pointer;
}

.btn_cta .wrap_icon {
    height: 100%;
    width: 100%;
}

.btn_cta .wrap_icon svg {
    color: rgb(245, 245, 245);
    fill: rgb(245, 245, 245);
}

.btn_cta:hover .wrap_icon svg {
    color: rgb(168, 168, 168);
    fill: rgb(168, 168, 168);
}
</style>