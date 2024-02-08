<template>
    <div class="suggested_wrap">

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useStore } from 'vuex';

export default {
    name: "SuggestedComp"
}
</script>

<style scoped>
.suggested_wrap {
    background-color: green;
    width: 100%;
    max-width: 320px;
    min-height: 1000px;
}

/* Media Query's */
@media only screen and (max-width: 1160px) {
  .suggested_wrap{
    display: none;
  }
}
</style>