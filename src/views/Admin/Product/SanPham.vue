<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3" sm="4" md="4" lg="3">
          <v-text-field
            style="width: 262px; height: 21px; font-family:Public Sans,sans-serif; font-size:13px;"
            density="compact"
            variant="outlined"
            v-model="key"
            label="Tìm kiếm"
            append-inner-icon="mdi mdi-magnify"
            single-line
            hide-details
            class="mr-2"
          ></v-text-field>
        </v-col>
        <v-col cols="7" class="text-right" lg="9" sm="8" md="8">
          <v-btn
            @click="dialog = true"
            color="primary"
            prepend-icon="mdi mdi-plus"
            class="text-uppercase"
            >Thêm</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-left" style="opacity:0.5;font-family:Public Sans,sans-serif; font-size:13px;" layout="width:41px;height:15px">TÊN SẢN PHẨM</th>
                  <th class="text-left" style="opacity:0.5;font-family:Public Sans,sans-serif; font-size:13px;" layout="width:41px;height:15px">GIÁ</th>
                  <th class="text-left" style="opacity:0.5;font-family:Public Sans,sans-serif; font-size:13px;" layout="width:41px;height:15px">SỐ LƯỢNG</th>
                  <th class="text-left" style="opacity:0.5;font-family:Public Sans,sans-serif; font-size:13px;" layout="width:41px;height:15px">MÔ TẢ</th>
                  <th class="text-center" style="opacity:0.5;font-family:Public Sans,sans-serif; font-size:13px;" layout="width:41px;height:15px">ẢNH</th>
                  <th class="text-center" style="opacity:0.5;font-family:Public Sans,sans-serif; font-size:13px;" layout="width:41px;height:15px">HÀNH ĐỘNG</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in search" :key="i">
                  <td style="font-weight: 600;font-family:Public Sans,sans-serif;font-size:15px;">{{ i.name }}</td>
                  <td style="font-weight: 400;font-family:Public Sans,sans-serif;font-size:15px;">${{i.price }}</td>
                  <td style="font-weight: 400;font-family:Public Sans,sans-serif;font-size:15px;">{{i.quantity}}</td>
                  <td style="font-weight: 400;font-family:Public Sans,sans-serif;font-size:15px;">{{i.description}}</td>
                  <td>
                    <v-img style=" width=36px; height=36px;radius=2px"
                      :src="i.imageUrl"
                    ></v-img>
                  </td>
                  <td class="text-center">
                    <v-btn variant="text" @click="idEdit=i.id;dialog=true">
                      <v-img src="https://res.cloudinary.com/dyo42vgdj/image/upload/v1709200255/edit_sh0ub9.png"
                      width="24px" height="24px"></v-img></v-btn>
                    <v-btn variant="text" @click="idDelete=i.id;dialogDelete=true">
                      <v-img src="https://res.cloudinary.com/dyo42vgdj/image/upload/v1709200260/trash_wsowgu.png"
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
                      :items="['10', '20', '25', '30',]"
                      variant="outlined"
                    ></v-select>
                  </v-col>
                  <p class="mt-5 opacity">of 50</p>
                </v-row>
              </v-col>
              <v-col cols="4" class="text-right">
                <v-pagination v-model="page" active-color="#0F60FF"
                  variant="text"
                  
                  density="compact"
                  :length="10"
                ></v-pagination>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <DialogVue v-model="dialog" @close="close()" :idEdit="idEdit" />
    <DeleteVue v-model="dialogDelete" :idDelete="idDelete" @delete="DeleteProductById" />
  </div>
</template>

<script setup>
import {ref,onMounted, computed,watch} from 'vue'
import DeleteVue from '@/components/Confirm/IndexView.vue'
import DialogVue from "../../../components/Product/DialogView.vue";
const dialog=ref(false)
const dialogDelete = ref(false)
const idDelete = ref(null) 
const idEdit=ref(null)
const page = ref(1)
const Showing=ref(10)
import {useProduct} from '../Product/Product'
import { productServiceApi} from"@/service/product.api";
import { showSuccessNotification} from"@/common/helper/helpers";
const {products, query, getAll} = useProduct()
  onMounted(async =>{
     query.keyword=""
    query.page=1
    query.limit=5
    getData()
  })

  const key = ref('')

  const search = computed(() => {
    const key_word = key.value.toLocaleLowerCase()
    return products.value.filter((p) => p.name.toLocaleLowerCase().includes(key_word))
  })


const getData = async()=>{
  const res = await getAll()
    console.log(res)
    products.value = res.data
}
const DeleteProductById=async(id)=>{
  const res=await productServiceApi._delete(id)
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