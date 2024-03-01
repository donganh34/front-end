<template>
  <v-app-bar >
    <div>
        <p class="ml-4" style="font-family: Public Sans,sans-serif; font-size: 24px; line-height: 22px; font-weight: 600;">Danh sách sản phẩm</p>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-item>
        <v-btn>
            <v-icon>mdi mdi-bell</v-icon>
            <v-badge content="9+" color="red">
            </v-badge>
        </v-btn>
       <v-menu >
                <template v-slot:activator="{ props }">
                        <v-avatar style="cursor: pointer;" class="mr-5" v-bind="props">
                            <v-img src="https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-1/428616105_122096399804227342_4016606850515938829_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ZSmPqoVbuZsAX9JvBzo&_nc_ht=scontent.fhan1-1.fna&oh=00_AfBqhjVA_oQ5at35wcl-sVL-EcAOtGu1ohtdzYa7dHz62Q&oe=65E65B2A"
                                alt="Duc" layout="width: 38px; height: 38px;">
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