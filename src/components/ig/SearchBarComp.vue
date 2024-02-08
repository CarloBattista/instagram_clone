<template>
    <div class="searchBar_container" ref="searchBarContainer">
        <div class="wrap_searchBar">
            <div class="wrap_search_icon search_ic_left" v-if="!mouseEnterOnSearch">
                <svg aria-label="Cerca" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16" role="img"
                    viewBox="0 0 24 24" width="16">
                    <title>Cerca</title>
                    <path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        x1="16.511" x2="22" y1="16.511" y2="22"></line>
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
</template>

<script>
import { data } from '../../data/data';

export default {
    name: "SearchBarComp",
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
</style>