<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-text-field v-model="search" @keyup.enter="searchData()"
            style="background-color: white"
            density="compact"
            variant="outlined"
            label="Tìm kiếm"
            append-inner-icon="mdi mdi-magnify"
            single-line
            hide-details
            class="mr-2"
          ></v-text-field>
        </v-col>
        <v-col cols="9" class="text-right">
          <v-btn style="font-weight: 400;font-family:Public Sans,sans-serif;font-size:14px;line height:16px;align:Center"
            @click="dialog = true"
            color="#0F60FF"
            prepend-icon="mdi mdi-plus"
            class="text-uppercase"
            >tạo mới</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-left" style="opacity:0.5;font-family:Public Sans,sans-serif; font-size:13px;" layout="width:41px;height:15px">AVATAR</th>
                  <th class="text-left" style="opacity:0.5;font-family:Public Sans,sans-serif; font-size:13px;" layout="width:41px;height:15px">TÊN NGƯỜI DÙNG</th>
                  <th class="text-left" style="opacity:0.5;font-family:Public Sans,sans-serif; font-size:13px;" layout="width:41px;height:15px">EMAIL</th>
                  <th class="text-left" style="opacity:0.5;font-family:Public Sans,sans-serif; font-size:13px;" layout="width:41px;height:15px">NGÀY SINH </th>
                  <th class="text-left" style="opacity:0.5;font-family:Public Sans,sans-serif; font-size:13px;" layout="width:41px;height:15px">SỐ ĐIỆN THOẠI</th>
                  <th class="text-center" style="opacity:0.5;font-family:Public Sans,sans-serif; font-size:13px;" layout="width:41px;height:15px">HÀNH ĐỘNG</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in users" :key="i">
                  <td>
                    <v-img 
                      style="width: 36px; height: 50px; radius: 2px"
                      height="50"
                      :src="i.imageUrl"
                    ></v-img>
                  </td>
                  <td style="font-weight: 600;font-family:Public Sans,sans-serif;font-size:15px;line height:22px;">{{ i.name }}</td>
                  <td style="font-weight: 400;font-family:Public Sans,sans-serif;font-size:15px;line height:22px;">{{i.email}}</td>
                  <td style="font-weight: 400;font-family:Public Sans,sans-serif;font-size:15px;line height:22px;" >{{i.birthday}}</td>
                  <td style="font-weight: 400;font-family:Public Sans,sans-serif;font-size:15px;line height:22px;">{{i.phonenumber}}</td>                 
                  <td class="text-center">
                    <v-btn variant="text" @click="idEdit=i.id;dialog=true"> 
                      <v-img layout="width: 24px; height: 24px;" src="https://res.cloudinary.com/dyo42vgdj/image/upload/v1709200255/edit_sh0ub9.png"
                      width="24px" height="24px"></v-img>
                      </v-btn>
                      <!-- <v-img src="https://res.cloudinary.com/dyo42vgdj/image/upload/v1709200255/edit_sh0ub9.png"
                      width="24px" height="24px"></v-img> -->
                     <v-btn variant="text" @click="idDelete=i.id;dialogDelete=true">
                      <v-img layout="width: 24px; height: 24px;" src="https://res.cloudinary.com/dyo42vgdj/image/upload/v1709200260/trash_wsowgu.png"
                      width="24px" height="24px"></v-img>
                      </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
            <v-row class="ma-2">
              <v-col cols="8">
                <v-row>
                  <p class="mt-5 opacity">Showing</p>
                  <v-col cols="2">
                    <v-select v-model="Showing"
                      density="compact"
                      :items="['10', '20', '25', '30',  ]"
                      variant="outlined"
                    ></v-select>
                  </v-col>
                  <p class="mt-5 opacity">of 50</p>
                </v-row>
              </v-col>
              <v-col cols="4" class="text-right">
                <v-pagination v-model="page" active-color="#0F60FF"
                  variant="text "
                  density="compact"
                  :length="5"
                ></v-pagination>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
     <DialogVue v-model="dialog" @close="close()" :idEdit="idEdit" />
      <DeleteVue v-model="dialogDelete" :idDelete="idDelete" @delete="DeleteUserById" />
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user/userStore";
import { onMounted, ref, watch } from "vue";
import DeleteVue from '@/components/Confirm/IndexView.vue'
import DialogVue from "../../../components/User/DialogView.vue";
const dialog=ref(false)
const dialogDelete = ref(false)
const idDelete = ref(null) 
const idEdit=ref(null)
const search= ref(null)
const page = ref(1)
const Showing=ref(10)

import {useUser} from './user'
import { userServiceApi} from"@/service/user.api";
import { showSuccessNotification} from"@/common/helper/helpers";

const {users, query, getAll} = useUser()
  onMounted(async =>{
    query.keyword=""
    query.page=1
    query.limit=10
    getData()
  })




const getData = async()=>{
  const res = await getAll()
    console.log(res)
    users.value = res.data
}
const DeleteUserById=async(id)=>{
  const res=await userServiceApi._delete(id)
  if(res.success)
  {
    dialogDelete.value=false
    showSuccessNotification("Xóa thành công")
    getData()
  }
  else
  {
    alert(res.message)
  }
}
const searchData=async()=>{
  query.keyword=search.value
  getData()
}
watch(page,(newvalue)=>{
  query.page= newvalue
  getData()
})
watch(Showing,(newvalue)=>{
  query.limit= newvalue
  getData()
})
const close=()=>
{
  dialog.value=false
  dialogDelete.value= false
}
</script>

<style>
</style>