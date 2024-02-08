<template>
    <span class="_it4vx _72fik" :class="{ lba: isLoading }" v-if="isLoading"></span>
</template>

<script>
export default {
    name: "LoadingBarComp",
    props: {
        isLoading: Boolean
    }
}
</script>

<style scoped>
._72fik {
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;
}

._it4vx {
    height: 3px;
    background: #27c4f5 -webkit-gradient(linear, left top, right top, from(#27c4f5), color-stop(#a307ba), color-stop(#fd8d32), color-stop(#70c050), to(#27c4f5));
    background: #27c4f5 -webkit-linear-gradient(left, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);
    background: #27c4f5 linear-gradient(to right, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);
    background-size: 500%;
    -webkit-transform-origin: left;
    transform-origin: left;
    width: 100%
}

._it4vx.lba{
    -webkit-animation: 2s linear infinite LoadingBarProgress, .5s ease-out LoadingBarEnter;
    animation: 2s linear infinite LoadingBarProgress, .5s ease-out LoadingBarEnter;
}

@keyframes LoadingBarProgress {
    0% {
        background-position: 0% 0
    }

    to {
        background-position: 125% 0
    }
}

@keyframes LoadingBarEnter {
    0% {
        -webkit-transform: scaleX(0);
        transform: scaleX(0)
    }

    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}
</style>