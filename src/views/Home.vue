<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <GetJewlery /> -->
    <NewComponent cateName="Electronics" :fechDataUrl="GetElectronicsProducts" />
    <NewComponent cateName="Jewelery" :fechDataUrl="GetJeweleryProducts" />
    <NewComponent cateName="Men's clothings" :fechDataUrl="GetMenClothingProducts" />
    <NewComponent cateName="Women's clothings" :fechDataUrl="GetWomenClothingProducts" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GetJewlery from "@/components/GetJewelery.vue";
import NewComponent from "@/components/NewComponent.vue"
import { GetElectronicsProducts, GetJeweleryProducts, GetMenClothingProducts, GetWomenClothingProducts } from '@/Service/getHttpData'

export default Vue.extend({
  name: 'Home',
  components: {
    GetJewlery,
    NewComponent,
  },
  methods: {
    GetElectronicsProducts,
    GetJeweleryProducts,
    GetMenClothingProducts,
    GetWomenClothingProducts
  }
  
});
</script>
