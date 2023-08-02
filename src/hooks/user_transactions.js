import { postFetcher } from "@/lib/axios"
import useSWR from 'swr'
export const useUserTransaction = ({ postData } = {}) => {

  const { data, isLoading, error, mutate } = useSWR({ url: '/user/transaction_history', postData: postData },
    postFetcher, {
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