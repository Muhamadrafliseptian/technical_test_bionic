<template>
  <HeaderComponents/>
  <router-view></router-view>
  <FooterComponents/>
</template>
<script>
import HeaderComponents from '@/components/layouts/HeaderComponents.vue';
import FooterComponents from './components/layouts/FooterComponents.vue';
export default {
  components: {
    HeaderComponents,
    FooterComponents
  },
};
</script>