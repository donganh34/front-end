<template>
  <v-app>
    <NavBar />
    <v-container fluid>
      <v-toolbar color="transparent" class="mt-10">
        <v-btn class="mr-5" variant="text" color="">Realate</v-btn>
        <v-chip class="mr-5">Worldwide shipping</v-chip>
        <v-chip class="mr-5">under $50</v-chip>
        <v-chip class="mr-5">Kitten</v-chip>
        <v-chip class="mr-5">Plastic plugs</v-chip>
        <v-chip class="mr-5">pucker shoes</v-chip>
        <v-chip class="mr-5">vintage typewrite</v-chip>
      </v-toolbar>
      <v-row>
        <v-col cols="12" sm="3" v-for="(product, i) in products" :key="i">
          <v-card height="auto" align="center" variant="flat" hover>
            <v-img
              :src="product.image"
              style="width: 100%"
              height="200"
              contain
            ></v-img>
            <v-card-text class="mt-n1 text-left" style="font-size: 16px">
              <strong>{{ product.title }}</strong>
            </v-card-text>
            <v-card-text class="mt-n4 text-left" style="font-size: 24px">
              <strong>{{ product.price }}</strong>
            </v-card-text>
            <v-card-text class="mt-n4 text-left">
              <strong style="opacity: 0.5">{{ product.reviews }}</strong>
              <v-spacer></v-spacer>
              <v-row>
                <v-col cols="5">
                  <v-icon color="yellow" size="small">mdi mdi-star</v-icon>
                  <v-icon color="yellow" size="small">mdi mdi-star</v-icon>
                  <v-icon color="yellow" size="small">mdi mdi-star</v-icon>
                  <v-icon color="yellow" size="small">mdi mdi-star</v-icon>
                  <v-icon color="yellow" size="small">mdi mdi-star-half</v-icon>
                </v-col>
                <v-col cols="3"></v-col>
                <v-col cols="3">
                  <v-btn
                    prepend-icon="mdi mdi-heart-outline"
                    class="text-capitalize mb-2"
                    size="small"
                    color="primary"
                    variant="outlined"
                  >
                    watch
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-spacer></v-spacer>
    </v-container>
    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import NavBar from "@/components/NavBar.vue";
import FooterView from "@/components/FooterView.vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    return {
      product: true,
      other: false,
      slider2: 50,
      products: [
        {
          class: "pa-0",
          image:
            "https://assets.architecturaldigest.in/photos/638dc400d8be961106a0cdc1/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg",
          title:
            "vintage typewrite to post awesome stories about UI design and webdev",
          price: "$49.50",
          reviews: " Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://assets.architecturaldigest.in/photos/638dc400d8be961106a0cdc1/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg",
          title:
            "Lee Pucker design. Leather botinki for handsome designers. Free shipping.",
          price: "$13.95",
          reviews: "1258 bids, 359 watchers $5.95 for shipping",
        },
        {
          class: "pa-0",
          image:
            "https://assets.architecturaldigest.in/photos/638dc400d8be961106a0cdc1/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg",
          title:
            "Timesaving kitten to save month on development.Playfull, cute, cheap!",
          price: "$128.99",
          reviews: " Eligible for nothing :(",
        },
        {
          class: "pa-0",
          image:
            "https://assets.architecturaldigest.in/photos/638dc400d8be961106a0cdc1/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg",
          title:
            "Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!",
          price: "$12.48",
          reviews: "Wordwide shitting available Buyers protection possible! ",
        },
        {
          class: "pa-0",
          image:
            "https://assets.architecturaldigest.in/photos/638dc400d8be961106a0cdc1/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg",
          title:
            "Creativity stimulating lotion. Drink every morning to generate better ideas!",
          price: "$12.48",
          reviews: " Wordwide shifting available Buyers protection possible!",
        },
        {
          class: "pa-0",
          image:
            "https://assets.architecturaldigest.in/photos/638dc400d8be961106a0cdc1/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg",
          title: "Tai nghe có dây",
          price: "$128.99",
          reviews: " Showcasing onHovered state",
        },
        {
          class: "pa-0",
          image:
            "https://assets.architecturaldigest.in/photos/638dc400d8be961106a0cdc1/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg",
          title: "John Von Ebalkin SPRING ",
          price: "$13.95",
          reviews: " 1258 bids, 359 watchers $5.95 for shipping",
        },
        {
          class: "pa-0",
          image:
            "https://assets.architecturaldigest.in/photos/638dc400d8be961106a0cdc1/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "$9.50",
          reviews: "Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://assets.architecturaldigest.in/photos/638dc400d8be961106a0cdc1/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg",
          title:
            "Professional teadrinking set for every designer and developer",
          price: "$128.99",
          reviews: " Eligible for nothing :(",
        },
        {
          class: "pa-0",
          image:
            "https://assets.architecturaldigest.in/photos/638dc400d8be961106a0cdc1/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg",
          title: "One string Bonsai description",
          price: "$11.68",
          reviews: " Wordwide shifting available Buyers protection possible!",
        },
        {
          class: "pa-0",
          image:
            "https://assets.architecturaldigest.in/photos/638dc400d8be961106a0cdc1/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg",
          title:
            "Simply best item in town to shine bright with your Nine Inch Nails",
          price: "$1.25",
          reviews: " Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://assets.architecturaldigest.in/photos/638dc400d8be961106a0cdc1/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg",
          title:
            "KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!",
          price: "$23.25",
          reviews: " 1258 bids, 359 watchers $5.95 for shipping",
        },
      ],
    };
  },
  components: {
    NavBar,
    FooterView,
  },
});
</script>
<style scoped>
.v-container {
  width: 100%;
  padding: 16px 0px !important;
  margin-right: auto;
  margin-left: auto;
}
.v-card.borderme {
  border: 2px solid black !important;
}
.v-card.borderout {
  border: 1px solid #d5f0db !important;
}
</style>