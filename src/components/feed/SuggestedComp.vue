<template>
  <div class="suggested_wrap">
    <div class="container_heading">
      <h2 class="heading">Suggeriti per te</h2>
      <span class="see_all">Mostra tutti</span>
    </div>
    <div class="container_list_suggested_peoples">
      <div class="row_sugg_people" v-for="(suggPeople, index) in limitedProfiles" :key="index">
        <div class="row_start">
          <div class="wrap_image_profile">
            <img class="image_profile" v-if="suggPeople?.profile_picture" :src="suggPeople?.profile_picture"
              :alt="'Immagine del profilo di ' + suggPeople?.profile_name">
            <img class="image_profile" v-else-if="!suggPeople?.profile_picture"
              src="/_resources/imgs/profile_placeholder.jpg" :alt="'Immagine del profilo di ' + suggPeople?.profile_name">
          </div>
          <div class="wrap_info_profile">
            <div class="top_info">
              <h2 class="profile_name">{{ suggPeople?.profile_name }}</h2>
            </div>
            <div class="bottom_info">
              <p class="sugg">Consigliato da Instagram</p>
            </div>
          </div>
        </div>
        <div class="row_end"></div>
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useStore } from 'vuex';

import FooterComp from '../global/FooterComp.vue';

export default {
  name: "SuggestedComp",
  components: {
    FooterComp
  },
  computed: {
    ...mapGetters(['getProfiles']),

    limitedProfiles() {
      // Permetter di far visualizzare un massimo di (index) profili
      return this.getProfiles.slice(0, 4);
    },
  },
}
</script>

<style scoped>
.suggested_wrap {
  width: 100%;
  max-width: 320px;
}

.container_heading {
  width: 100%;
  height: 20px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.heading {
  color: rgb(168, 168, 168);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
}

.see_all{
  color: rgb(245, 245, 245);
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  cursor: pointer;
}

.see_all:hover{
  color: rgb(168, 168, 168);
}

.container_list_suggested_peoples {
  width: 100%;
  padding: 0 16px;
  margin: 8px 0;
  display: flex;
  flex-direction: column;
}

.row_sugg_people {
  width: 100%;
  margin: 8px 0;
  cursor: pointer;
}

.row_start,
.row_end {
  display: flex;
  align-items: center;
}

.wrap_image_profile {
  position: relative;
  height: 44px;
  border-radius: 50%;
  aspect-ratio: 1;
}

.wrap_image_profile .image_profile {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.wrap_info_profile {
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

.sugg {
  color: rgb(168, 168, 168);
  font-size: 12px;
  font-weight: 400;
}

/* Media Query's */
@media only screen and (max-width: 1160px) {
  .suggested_wrap {
    display: none;
  }
}
</style>