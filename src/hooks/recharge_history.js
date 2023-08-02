import { fetcher } from "@/lib/axios"
import useSWR from 'swr'
export const useUserRechargeHistory = () => {

  const { data, isLoading, error, mutate } = useSWR({ url: '/user/recharge_history' },
    fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  })


  return {
    data,
    isLoading,
    error,
    mutate
  }
}