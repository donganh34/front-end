import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants"
import { productServiceApi } from "@/service/product.api"
import { ref } from "vue"

export const useProduct = () => {
    const products = ref([])
    const query = DEFAULT_COMMON_LIST_QUERY
    const getAll = async () => {
        try {
            const res = await productServiceApi._getList(query)
            console.log(res);
            
            if (res.success) {
                return {
                    data: res.data.items,
                    totalItems: res.data.totalItems
                }
            }
            return null
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    return {
        products,
        query,
        getAll,
    }
}