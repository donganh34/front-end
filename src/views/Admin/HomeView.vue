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
                  <v-icon color="#FB8200"  size="small">mdi mdi-star</v-icon>
                  <v-icon color="#FB8200"  size="small">mdi mdi-star</v-icon>
                  <v-icon color="#FB8200" size="small">mdi mdi-star</v-icon>
                  <v-icon color="#FB8200"  size="small">mdi mdi-star</v-icon>
                  <v-icon color="#FB8200"  size="small">mdi mdi-star-half</v-icon>
                  <v-icon color="yellow" v-if="product.feedback==5" size="x-small">mdi mdi-star</v-icon>
                  <v-icon color="yellow" v-if="product.feedback<5 && product.feedback>4" size="x-small">mdi mdi-star-half</v-icon>
                  <span style="font-size: 12px;">{{ product.feedback }}</span>
                </v-col>
              
                <v-col class="text-right" cols="6">
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
            "https://dosi-in.com/file/detailed/386/dosiin-somehow-quan-jean-nam-inf-infinity-symbol-chat-denim-co-gian-day-dan-qj-somehow-386713386713.jpg?w=1000&h=1000&fit=fill&fm=webp",
          title:
            "Quần jean nam.",
          price: "$49.50",
          reviews: "Eligible for Shipping To Mars ",
        },
        {
          class: "pa-0",
          image:
            "https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/hi03-t01-1.png",
          title:
            "Áo thun nam cổ tròn.",
          price: "$13.95",
          reviews: "1258 bids, 359 watchers $5.95 for shipping",
        },
        {
          class: "pa-0",
          image:
            "https://st.app1h.com/uploads/images/company72/images/ao-thun-nam-chat-1.jpg",
          title:
            "Áo thun",
          price: "$128.99",
          reviews: " Eligible for nothing :(",
        },
        {
          class: "pa-0",
          image:
            "https://cafefcdn.com/203337114487263232/2021/9/3/newfile-5-16306745994161147811338.jpeg",
          title:
            "Áo đá bóng club MU",
          price: "$12.48",
          reviews: "Wordwide shitting available Buyers ",
        },
        {
          class: "pa-0",
          image:
            "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass005s2/NTC_4497x500x500x4.webp",
          title:
            "Áo ngắn tay nam.",
          price: "$128.99",
          reviews: " Eligible for nothing :(",
        },
        {
          class: "pa-0",
          image:
            "https://product.hstatic.net/200000736253/product/upload_d25e69d23539495e822a30723109994a_master.jpg",
          title: "Quần jean nam.",
          price: "$128.99",
          reviews: " Showcasing onHovered state",
        },
        {
          class: "pa-0",
          image:
            "https://bizweb.dktcdn.net/thumb/1024x1024/100/369/522/products/quan-jean-nu-rach-dep-dkmv-ripped-jeans-streetwear.jpg?v=1616860987837",
          title: "Quần jean nữ. ",
          price: "$13.95",
          reviews: " 1258 bids, 359 watchers $5.95 for shipping",
        },
        {
          class: "pa-0",
          image:
            "https://bizweb.dktcdn.net/thumb/large/100/438/408/products/vpn5004-xlo-5-e018eda9-5099-45e4-8ce9-c29bcf501391.jpg?v=1688723408473",
          title:
            "Váy nữ xinh xắn.",
          price: "$23.25",
          reviews: " 1258 bids, 359 watchers $5.95 for shipping",
        },
        {
          class: "pa-0",
          image:
            "https://pubcdn.ivymoda.com/files/product/thumab/400/2024/01/18/8fe4938bfd0f9b4f7c545e62a2589d35.jpg",
          title:
            "Áo thun nữ",
          price: "$12.48",
          reviews: " Wordwide shifting available Buyers protection possible!",
        },
        {
          class: "pa-0",
          image:
            "https://golfmax.vn/wp-content/uploads/2022/10/Full-set-thoi-trang-Golf-nu-GM21345-1-1.jpg",
          title: "Set nữ thời trang",
          price: "$11.68",
          reviews: " Wordwide shifting available Buyers protection possible!",
        },
        {
          class: "pa-0",
          image:
            "https://cdn0918.cdn4s1.com/thumbs/jj0103/thiet-ke-chua-co-ten-5_thumb_350.png",
          title:
            "Quần baggy jean.",
          price: "$1.25",
          reviews: " Eligible for Shipping To Mars or somewhere else",
        },
        {
          class: "pa-0",
         image:
            "https://bizweb.dktcdn.net/100/425/004/products/300073172-118569220946036-1729531527568741581-n-1661343400964.jpg?v=1661408591763",
          title:
            "Áo dài tay nam.",
          price: "$9.50",
          reviews: "Eligible for Shipping To Mars or somewhere else",
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