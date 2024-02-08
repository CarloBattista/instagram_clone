<template>
    <div class="header">
        <div class="end_region">
            <div class="searchBar_container" ref="searchBarContainer">
                <div class="wrap_searchBar">
                    <div class="wrap_search_icon search_ic_left" v-if="!mouseEnterOnSearch">
                        <svg aria-label="Cerca" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16"
                            role="img" viewBox="0 0 24 24" width="16">
                            <title>Cerca</title>
                            <path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line>
                        </svg>
                    </div>
                    <input class="searchBar" :class="{ userEnter: mouseEnterOnSearch }" v-model="searchQuery" type="text"
                        placeholder="Cerca" @mouseup="searchEnter">
                    <div class="wrap_search_icon search_ic_right" v-if="mouseEnterOnSearch" @click="closeSearch">
                        <svg aria-label="Cancella" role="img" viewBox="0 0 24 24"
                            class="x1lliihq xffa9am x1jwls1v x1n2onr6 x17fnjtu x3egl4o"
                            style="--fill: currentColor; --height: 16px; --width: 16px;">
                            <title>Cancella</title>
                            <path
                                d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm5.139 16.056a.766.766 0 1 1-1.083 1.083L12 13.083 7.944 17.14a.766.766 0 0 1-1.083-1.083L10.917 12 6.86 7.944a.766.766 0 0 1 1.083-1.083L12 10.917l4.056-4.056a.766.766 0 0 1 1.083 1.083L13.083 12Z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="btn_cta">
                <router-link to="/">
                    <div class="wrap_nav_icon">
                        <svg aria-label="Notifiche" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24"
                            role="img" viewBox="0 0 24 24" width="24">
                            <title>Notifiche</title>
                            <path
                                d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z">
                            </path>
                        </svg>
                        <div class="badge_notify" v-if="data.badgeNotify">
                            <span class="label_notify">{{ data.badgeLabel }}</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { data } from '../../data/data';

export default {
    name: "HeaderComp",
    data() {
        return {
            data,

            searchQuery: "",
            mouseEnterOnSearch: false,
        }
    },
    methods: {
        searchEnter() {
            this.mouseEnterOnSearch = true;
            console.log("SearchBar Enter");
        },
        closeSearch() {
            this.mouseEnterOnSearch = false;
            if (this.searchQuery.length >= 1) {
                this.searchQuery = "";
            }
        },
        handleOutsideClick(event) {
            const searchBarContainer = this.$refs.searchBarContainer;
            if (searchBarContainer && !searchBarContainer.contains(event.target)) {
                this.mouseEnterOnSearch = false;
            }
        }
    },
    mounted() {
        window.addEventListener('click', this.handleOutsideClick);
    },
    beforeUnmount() {
        window.removeEventListener('click', this.handleOutsideClick);
    },
}
</script>

<style scoped>
.header {
    background-color: rgb(0, 0, 0);
    position: fixed;
    z-index: 500;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    max-height: 60px;
    padding: 0 16px;
    display: none;
    align-items: center;
    border-bottom: 1px solid rgb(38, 38, 38);
}

.end_region {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-end;
}

.searchBar_container {
    position: relative;
    height: 36px;
    width: 268px;
    max-width: 268px;
}

.wrap_searchBar {
    position: relative;
    width: 100%;
    height: 100%;
}

.searchBar {
    background-color: rgb(38, 38, 38);
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 3px 16px 3px 44px;
    border: none;
    outline: none;
}

.searchBar.userEnter {
    padding: 3px 16px;
}

.searchBar::placeholder {
    color: rgb(142, 142, 142);
    font-size: 16px;
    font-weight: 400;
}

.searchBar[type=text] {
    color: rgb(245, 245, 245);
    font-size: 16px;
    font-weight: 500;
}

.wrap_search_icon {
    position: absolute;
    z-index: 10;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrap_search_icon.search_ic_left {
    left: 0;
    transform: translateX(16px);
}

.wrap_search_icon.search_ic_right {
    right: 0;
    transform: translateX(-16px);
    cursor: pointer;
}

.wrap_search_icon svg {
    color: rgb(142, 142, 142);
    fill: rgb(142, 142, 142);
    height: 16px;
    aspect-ratio: 1;
}

.btn_cta {
    position: relative;
}

.btn_cta:active {
    opacity: .5;
}

.wrap_nav_icon {
    position: relative;
    height: 24px;
    aspect-ratio: 1;
    cursor: pointer;
    transition-property: transform;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.17, 0.17, 0, 1);
}

.btn_cta:hover .wrap_nav_icon {
    transform: scale(1.05);
}

.btn_cta:active .wrap_nav_icon {
    transform: scale(0.95);
}

.wrap_nav_icon svg {
    color: rgb(245, 245, 245);
    height: 100%;
    width: 100%;
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

/* Media Query's */
@media only screen and (max-width: 767px) {
    .header {
        display: flex;
    }
}</style>