<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3" sm="4" md="4" lg="3">
          <v-text-field
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
                  <th class="text-left">Tên sản phẩm</th>
                  <th class="text-left">Giá</th>
                  <th class="text-left">Số lượng</th>
                  <th class="text-left">Mô tả</th>
                  <th class="text-left">Ảnh</th>
                  <th class="text-center">Acction</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in products" :key="i">
                  <td>{{ i.name }}</td>
                  <td>{{i.price }}</td>
                  <td>{{i.quantity}}</td>
                  <td style="width: 250px" class="v-text-truncate">
                    {{i.description}}
                  </td>
                  <td>
                    <v-img
                      width="60"
                      height="50"
                      :src="i.imageUrl"
                    ></v-img>
                  </td>
                  <td class="text-center">
                    <v-btn variant="text" @click="idEdit=i.id;dialog=true"
                      ><v-icon>mdi mdi-pencil</v-icon></v-btn
                    >
                    <v-btn variant="text" @click="idDelete=i.id;dialogDelete=true"><v-icon style="opacity: 0.5">
                      mdi mdi-trash-can-outline</v-icon></v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
            <v-row class="ma-2">
              <v-col cols="8">
                <v-row>
                  <p class="mt-5 opacity">Showing</p>
                  <v-col cols="2">
                    <v-select
                      density="compact"
                      :items="['10', '20', '25', '30', 'All']"
                      variant="outlined"
                    ></v-select>
                  </v-col>
                  <p class="mt-5 opacity">of 50</p>
                </v-row>
              </v-col>
              <v-col cols="4" class="text-right">
                <v-pagination
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
    <DialogVue v-model="dialog" :idEdit="idEdit" />
    <DeleteVue v-model="dialogDelete" :idDelete="idDelete" @delete="DeleteProductById" />
  </div>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import DeleteVue from '@/components/Confirm/IndexView.vue'
import DialogVue from "../../../components/Product/DialogView.vue";
const dialog=ref(false)
const dialogDelete = ref(false)
const idDelete = ref(null) 
const idEdit=ref(null)
import {useProduct} from '../Product/Product'
import { productServiceApi} from"@/service/product.api";
import { showSuccessNotification} from"@/common/helper/helpers";
const {products, query, getAll} = useProduct()
  onMounted(async =>{
    getData()
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




</script>

<style>
</style>