<template>
 <div class="d-flex justify-space-between " style="margin-top: 40px;margin-bottom: 10px;">
    <v-card  class="pa-5 d-flex flex-column justify-center align-center rounded-1"
      style="min-height: 156px; background-color: #EDEDF0; width: 32%;">
      <img width="80" height="80" :src="footer1">
      <v-card-title class="text-center" style="font-family: Quicksand,sans-serif;font-weight: 700;font-size: 20px;">Clear & Usable user flows</v-card-title>
      <v-card-subtitle class="text-center" style="font-family: 'Inter', sans-serif;font-size: 14px;">Let’s boost your marketplace</v-card-subtitle>
    </v-card>
    <v-card class="pa-5 d-flex flex-column justify-center align-center rounded-1"
      style="min-height: 156px; background-color: #EDEDF0; width: 32%;">
      <img width="80" height="80" :src="footer2">
      <v-card-title class="text-center" style="font-family: Quicksand,sans-serif;font-weight: 700;font-size: 20px;">Fine & Styled components</v-card-title>
      <v-card-subtitle class="text-center" style="font-family: 'Inter', sans-serif;font-size: 14px;">Speed up with Setproduct templates</v-card-subtitle>
    </v-card>
    <v-card class="pa-5 d-flex flex-column justify-center align-center rounded-1"
      style="min-height: 156px; background-color: #EDEDF0; width: 32%;">
      <img width="80" height="80" :src="footer3">
      <v-card-title class="text-center" style="font-family: Quicksand,sans-serif;font-weight: 700;font-size: 20px;">Customizable & Reusable</v-card-title>
      <v-card-subtitle class="text-center" style="font-family: 'Inter', sans-serif;font-size: 14px;">Take our UX patterns and rebuild</v-card-subtitle>
    </v-card>
  </div>
</template>

<script setup>
  import footer1 from "@/assets/icon/footer1.png"
  import footer2 from "@/assets/icon/footer2.png"
  import footer3 from "@/assets/icon/footer3.png"
</script>

<style>
.v-footer {
    padding: 8px 0 !important;
}
</style>