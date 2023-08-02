import { fetcher, postFetcher } from "@/lib/axios"
import useSWR from 'swr'
export const useAdminTransactions = ({ queryParams } = {}) => {

  const { data, isLoading, error, mutate } = useSWR(queryParams?.student_id ? { url: `/${queryParams?.admin_type}/transaction_history`, params: queryParams } : "",
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