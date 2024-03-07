<template>
    <v-row class="ml-3 mt-3">
      <v-col cols="4" sm="6" md="6" lg="2">
        <!-- <v-select v-model="SortCategory" density="compact" label="SORT BY" :items="['Quần', 'Áo', 'All']"
              variant="outlined"></v-select> -->
              <v-select v-model="sort" density="compact" label="SORT BY" :items="['Áo', 'Quần', 'All']"
          variant="outlined"></v-select>
          </v-col>
      <v-col cols="4" sm="6" md="6" lg="2">
        <!-- <v-select v-model="selectedSort" label="Giá" density="compact" :items="['Từ cao -> thấp','Từ thấp -> cao']"
          variant="outlined"></v-select> -->
           <v-select v-model="Condition" density="compact"  :items="['Từ cao -> thấp','Từ thấp -> cao']"
          variant="outlined"></v-select>        
      </v-col>
      <v-col cols="4" sm="6" md="6" lg="2">
        <v-select v-model="Delivery" density="compact"  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming','Ha Noi']"
          variant="outlined"></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" class="text-right">
        <v-btn  style="background-color: rgb(212, 227, 255);color:#0f0f13" class="rounded-1 text-capitalize" variant="tonal">
          Show all
        </v-btn>
        <v-btn style="font-weight: 400;color: rgb(34, 100, 209);" bg-color="white" class="rounded-1 text-capitalize"
        variant="elevated" elevation="3">
          Action
        </v-btn>
        <v-btn style="background-color:rgb(212, 227, 255);color:#0f0f13" class="rounded-1 text-capitalize" variant="tonal">
          Buy now
        </v-btn>
        <v-btn  style="background-color: rgb(212, 227, 255)" class="ml-5" ariant="tonal" elevation="0">
          <v-icon>mdi mdi-menu</v-icon>
        </v-btn>
        <v-btn class="mr-5"  variant="elevated">
          <v-icon style="color: #0c5bda;">mdi mdi-microsoft</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
import { ref } from "vue";

  const sort=ref("Useless first")
  const Condition=ref("Condition")
  const Delivery =ref("Delivery options")
  </script>
  
  <style>
  </style>