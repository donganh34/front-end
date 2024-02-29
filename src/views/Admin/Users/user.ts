import { ref } from "vue";
import { userServiceApi } from "@/service/user.api";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { IUser } from "../Product/interfaces";
export const useUser=()=>{
    const users = ref<IUser[]>([])
    const query=DEFAULT_COMMON_LIST_QUERY
    const getAll = async () => {
        try {
          const res = await userServiceApi._getList<IUser>(query);
          console.log(res);
          
          if(res.success)
          {
            return {
              data:res.data.items,
              totalItems:res.data.totalItems
            }
          }
          return null
        } catch (error) {
          console.error('Error fetching user:', error);
          return null
        }
      };
      return{
        getAll,
        query,
        users,
      }
}
