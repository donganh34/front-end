<template>
  <v-app-bar elevation="0">
    <div>
        <p class="ml-4" style="font-family: Public Sans,sans-serif; font-size: 24px; line-height: 22px; font-weight: 600;">Danh sách sản phẩm</p>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-item>
        <v-btn>
            <v-icon layout="width:27.56px; height:37px;">mdi mdi-bell</v-icon>
            <v-badge content="9+" color="red">
            </v-badge>
        </v-btn>
       <v-menu >
                <template v-slot:activator="{ props }">
                        <v-avatar style="cursor: pointer;" class="mr-5" v-bind="props">
                            <v-img layout="width: 38px; height:38px;top:-0.5px;radius:100px;" src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/428616105_122096399804227342_4016606850515938829_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0dKMp4tt-VcAX8blUnY&_nc_ht=scontent.fhan17-1.fna&oh=00_AfC4zzdWFris3EucS8x-fquwS7w3dv7qDXnnF_n5eKyq-Q&oe=65EC49EA"
                                alt="DA">
                            </v-img>
                        </v-avatar>
                </template>
                <v-list>
                    <v-list-item><v-list-item-title>
                        <router-link style="text-decoration: none; color: black;" to="/login">Đăng xuất</router-link>
                    </v-list-item-title></v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-item>
    </v-app-bar>
</template>
  
<script>
export default {
    name: 'TopBar'
}
</script>
  
<style></style>