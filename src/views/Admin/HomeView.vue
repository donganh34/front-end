<template>
  <v-app>
    <NavBar />
    <v-container fluid>
      <v-toolbar color="transparent" class="mt-2">
        <v-chip variant="text"><span class="mt-2 ml-3" style="font-weight: 560;">Related</span></v-chip>
        <v-chip class="mr-2 mt-2">worldwide shipping</v-chip>
        <v-chip class="mr-2 mt-2">under $50</v-chip>
        <v-chip class="mr-2 mt-2">Kitten</v-chip>
        <v-chip class="mr-2 mt-2">Plastic plugs</v-chip>
        <v-chip class="mr-2 mt-2">pucker shoes</v-chip>
        <v-chip class="mr-2 mt-2">vintage typewrite</v-chip>
      </v-toolbar>
      <v-row>
        <v-col class="d-flex flex-column justify-center align-center" v-for="(product, i) in products" :key="i" cols="12" sm="3" md="4" lg="3">
            <v-card hover variant="flat" style="min-height: 472px;width: 250px;" class="mb-3 my-card">
            <v-img class="mx-auto mt-2" width="227px" height="224px" top="16px" left="16px" radius="4px"
              :src="product.image"></v-img>
            <v-card-text class="my-card-text" style="max-width: 227px;font-size: 16px;line-height: 24px; height: 90px;font-family: 'Inter', sans-serif;color: #19191D;">
              <strong>{{ product.title }}</strong>
            </v-card-text>
            <v-card-text class="mt-2 mx-auto" style="font-family: 'Inter', sans-serif;color:#000000;max-width: 250px;font-size: 24px;font-weight: 400;padding: auto;height: 36px;">
              <strong>{{ product.price }}</strong>
            </v-card-text>
            <v-card-text >
              <p class="ml-4; text-left" style="margin-top: 8px;;height: 41px;font-size: 14px;font-family: 'Inter', sans-serif;color: #787885;">{{ product.reviews }}</p>
           
              <v-row >
                <v-col cols="6" >
                  <v-icon color="#FB8200"  size="small">mdi mdi-star</v-icon>
                  <v-icon color="#FB8200"  size="small">mdi mdi-star</v-icon>
                  <v-icon color="#FB8200" size="small">mdi mdi-star</v-icon>
                  <v-icon color="#FB8200"  size="small">mdi mdi-star-half</v-icon>
                  <!-- <v-icon color="yellow" v-if="product.feedback==5" size="x-small">mdi mdi-star</v-icon> -->
                  <v-icon color="yellow" v-if="product.feedback<5 && product.feedback>4" size="x-small">mdi mdi-star-half</v-icon>
                  <span style="font-weight:500; font-size: 12px;line height:22px;letter:0.1px">4.05 </span>
                </v-col>
              
                <v-col class="text-right" cols="6">
                <v-btn class="text-capitalize" style="margin-right: 6px;font-family: 'Inter', sans-serif;font-weight:500; font-size: 14px;line height:20.02px;letter:1.8%;align:righ" color="#2264D1" size="small" prepend-icon="mdi-heart-outline"
                variant="outlined">
                Watch
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
            "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2024/01/ao-polo-nam-gucci-polo-shirt-768641-forrm-to-mau-trang-hoa-tiet-size-xs-65951b357979d-03012024153045.jpg",
          title:
            "Áo Polo Nam Gucci Polo Shirt 768641 Forrm To Màu Trắng Họa Tiết ",
          price: "$49.50",
          reviews: "Eligible for Shipping To Mars or somewhere else ",
        },
        {
          class: "pa-0",
          image:
            "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/06/ao-phong-nam-gucci-tshirt-in-white-mau-trang-647dab1bbcbf9-05062023163003.jpg",
          title:
            "Áo Phông Unisex Gucci Tshirt In White Màu Trắng ",
          price: "$13.95",
          reviews: "1258 bids, 359 watchers $5.95 for shipping",
        },
        {
          class: "pa-0",
          image:
            "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/09/ao-phong-nu-gucci-navy-with-gg-lame-logo-printed-tshirt-526759-x9w83-4921-mau-xanh-phoi-vang-65052f1220621-16092023112906.jpg",
          title:
            "Áo Phông Nữ Gucci Navy With GG Lame Logo Printed Tshirt ",
          price: "$128.99",
          reviews: " Eligible for nothing :( ",
        },
        {
          class: "pa-0",
          image:
            "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2024/02/a-o-so-mi-nam-dolce-gabbana-d-g-gold-g5gb3z-shirt-mau-trang-size-38-65d2d7d2da5e2-19022024112346.jpg ",
          title:
            "Áo Sơ Mi Nam Dolce & Gabbana D&G GOLD G5GB3Z Shirt ",
          price: "$12.48",
          reviews: "Wordwide shitting available Buyers protection possible! ",
        },
        {
          class: "pa-0",
          image:
            "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/06/quan-short-nam-gucci-ken-scott-printed-silk-shorts-mau-den-size-46-648695f032586-12062023105008.jpg",
          title:
            "Quần Short Nam Gucci Ken Scott - Printed Silk Shorts ",
          price: "$128.99",
          reviews: "Wordwide shifting available Buyers protection possible!",
        },
        {
          class: "pa-0",
          image:
            "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/06/quan-dai-nam-gucci-gg-cotton-60s-trousers-with-web-mau-kaki-6490146584898-19062023154005.jpg",
          title: "Quần Dài Nam Gucci GG Cotton 60s Trousers With Web Màu Kaki",
          price: "$128.99",
          reviews: "Showcasing onHovered state",
        },
        {
          class: "pa-0",
          image:
            "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/07/quan-short-nu-mlb-new-york-yankees-3fspb0433-50bks-mau-den-size-xs-64b4bd5665e7b-17072023110230.jpg",
          title: "Quần Short Nữ MLB New York Yankees 3FSPB0433-50BKS ",
          price: "$13.95",
          reviews: "1258 bids, 359 watchers $5.95 for shipping",
        },
        {
          class: "pa-0",
          image:
            "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2024/02/quan-jean-nam-dolce-gabbana-d-g-logo-low-rise-tapered-denim-gy07lz-mau-den-xam-size-48-65dc5047e5ab3-26022024154807.jpg",
          title:
            "Quần Jean Nam Dolce & Gabbana D&G Logo Low Rise Tapered Denim ",
          price: "$23.25",
          reviews: " Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
          image:
            "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2024/02/ao-polo-dai-tay-nam-lacoste-smart-paris-long-sleeve-stretch-cotton-polo-shirt-ph2481-10-mau-den-65d95e25c7967-24022024101029.jpg",
          title:
            "Áo Polo Dài Tay Nam Lacoste Smart Paris Long Sleeve Stretch ",
          price: "$12.48",
          reviews: "Eligible for nothing :(",
        },
        {
          class: "pa-0",
          image:
            "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2024/02/ao-thun-nike-jordan-essentials-festive-tshirt-fd7010-010-mau-den-size-s-65d6f7b1d41d5-22022024142849.jpg",
          title: "Áo Thun Nike Jordan Essentials Festive Tshirt ",
          price: "$11.68",
          reviews: " Wordwide shifting available Buyers protection possible!",
        },
        {
          class: "pa-0",
          image:
            "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/05/quan-shorts-lacoste-gh4766-rolan-garos-x-jocovitch-mau-trang-626f5baa62a43-02052022111850.jpg",
          title:
            "Quần Shorts Lacoste GH4766 Rolan Garos x Jocovitch",
          price: "$1.25",
          reviews: " Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
         image:
            "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2024/02/quan-jean-nam-dsquared2-wash-rach-2-dui-khoa-do-skater-s74lb1451-s30357-900-mau-den-xam-65c0a8c227bd1-05022024162210.jpg",
          title:
            "Quần Jean Nam Dsquared2 Wash Rạch 2 Đùi Khóa Đỏ Skater S74LB1451 S30357",
          price: "$9.50",
          reviews: "1258 bids, 359 watchers $5.95 for shipping",
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