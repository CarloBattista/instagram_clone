<template>
    <div class="navbar_container">
        <ul class="list_nav_page">
            <li class="nav_item">
                <router-link to="/">
                    <div class="wrap_nav_icon">
                        <svg v-if="!isPageHome" aria-label="Home" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor"
                            height="24" role="img" viewBox="0 0 24 24" width="24">
                            <title>Home</title>
                            <path
                                d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                                fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                        <svg v-else-if="isPageHome" aria-label="Home" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor"
                            height="24" role="img" viewBox="0 0 24 24" width="24">
                            <title>Home</title>
                            <path
                                d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z">
                            </path>
                        </svg>
                        <div class="badge_notify" v-if="data.badgeNotify">
                            <span class="label_notify">{{ data.badgeLabel }}</span>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="nav_item">
                <router-link to="/discover">
                    <div class="wrap_nav_icon">
                        <svg aria-label="Esplora" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24"
                            role="img" viewBox="0 0 24 24" width="24">
                            <title>Esplora</title>
                            <polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            </polygon>
                            <polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056">
                            </polygon>
                            <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                        </svg>
                        <div class="badge_notify" v-if="data.badgeNotify">
                            <span class="label_notify">{{ data.badgeLabel }}</span>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="nav_item">
                <router-link to="/reels">
                    <div class="wrap_nav_icon">
                        <svg aria-label="Reels" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img"
                            viewBox="0 0 24 24" width="24">
                            <title>Reels</title>
                            <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="2.049"
                                x2="21.95" y1="7.002" y2="7.002"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line>
                            <path
                                d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"></path>
                            <path
                                d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                                fill-rule="evenodd"></path>
                        </svg>
                        <div class="badge_notify" v-if="data.badgeNotify">
                            <span class="label_notify">{{ data.badgeLabel }}</span>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="nav_item">
                <router-link to="/create">
                    <div class="wrap_nav_icon">
                        <svg aria-label="Nuovo post" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24"
                            role="img" viewBox="0 0 24 24" width="24">
                            <title>Nuovo post</title>
                            <path
                                d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"></path>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
                        </svg>
                        <div class="badge_notify" v-if="data.badgeNotify">
                            <span class="label_notify">{{ data.badgeLabel }}</span>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="nav_item">
                <router-link to="/direct">
                    <div class="wrap_nav_icon">
                        <svg aria-label="Direct" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24"
                            role="img" viewBox="0 0 24 24" width="24">
                            <title>Direct</title>
                            <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22"
                                x2="9.218" y1="3" y2="10.083"></line>
                            <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
                        </svg>
                        <div class="badge_notify" v-if="data.badgeNotify">
                            <span class="label_notify">{{ data.badgeLabel }}</span>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="nav_item">
                <router-link to="/profile">
                    <div class="wrap_nav_profile_image">
                        <img class="img_profile" src="/_resources/imgs/profile_placeholder.jpg"
                            alt="profile image placeholder">
                        <div class="badge_notify" v-if="data.badgeNotify">
                            <span class="label_notify">{{ data.badgeLabel }}</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { data } from '../../data/data';

export default {
    name: "NavBarComp",
    props: {
        isPageHome: Boolean
    },
    data() {
        return {
            data
        }
    }
}
</script>

<style scoped>
.navbar_container {
    background-color: rgb(0, 0, 0);
    position: fixed;
    z-index: 500;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    max-height: 48px;
    display: none;
    align-items: center;
    justify-content: space-evenly;
    border-top: 1px solid rgb(38, 38, 38);
}

.list_nav_page {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.nav_item {
    position: relative;
    height: 48px;
    width: 48px;
    aspect-ratio: 1;
}

.nav_item:active {
    opacity: .5;
}

.nav_item a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.badge_notify {
    background-color: rgb(255, 48, 64);
    position: absolute;
    top: -7px;
    right: -7px;
    height: 21px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1.5px solid rgb(0, 0, 0);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.badge_notify .label_notify {
    color: rgb(245, 245, 245);
    font-size: .6875rem;
    font-weight: 500;
    padding: 3px 5px;
}

.wrap_nav_icon {
    position: relative;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    transition-property: transform;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.17, 0.17, 0, 1);
}

.wrap_nav_icon svg {
    color: rgb(245, 245, 245);
}

.nav_item:hover .wrap_nav_icon{
    transform: scale(1.05);
}

.nav_item:active .wrap_nav_icon{
    transform: scale(0.95);
}

.wrap_nav_profile_image {
    position: relative;
    background-color: rgb(18, 18, 18);
    height: 24px;
    border-radius: 50%;
    aspect-ratio: 1;
    transition-property: transform;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.17, 0.17, 0, 1);
}

.wrap_nav_profile_image .img_profile {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
}

/* Media Query's */
@media only screen and (max-width: 767px) {
    .navbar_container {
        display: flex;
    }
}
</style>