<template>
  <!-- <v-toolbar-title>SHOP</v-toolbar-title>
    <v-row>
    <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    > -->
  <v-row>
    <v-col cols="5">
      <v-row>
        <v-select
          class="mr-4"
          label="Useless first"
          :items="['All', 'Quần', 'Áo']"
          variant="outlined"
        ></v-select>
        <v-select
          label="Condition"
          :items="['Giá cao->Giá thấp', 'Giá thấp->Giá Cao']"
          variant="outlined"
        ></v-select>
        <v-select
          class="ml-4"
          label="Delivery options"
          :items="['California', 'Colorado','Flolida','Texas']"
          variant="outlined"
        ></v-select>
      </v-row>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="6">
      <v-row>
        <v-btn
          class="text-capitalize mt-2"
          variant="text"
          size="large"
          style="background-color: #ebf2ff"
          >Show all</v-btn
        >
        <v-btn
          class="text-capitalize mt-2"
          elevation="2"
          size="large"
          style="color: #2264d1"
          >Auction</v-btn
        >
        <v-btn
          class="text-capitalize mt-2"
          variant="text"
          size="large"
          style="background-color: #ebf2ff"
          >But now</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
          class="mt-2"
          variant="text"
          size="large"
          style="background-color: #ebf2ff"
        >
          <v-icon>mdi mdi-menu</v-icon>
        </v-btn>
        <v-btn class="mt-2" size="large">
          <v-icon>mdi mdi-microsoft</v-icon>
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
</style>