import { fetcher } from '@/lib/axios'
import useSWR from 'swr'

export const useCanteenProds = ({ queryParams } = {}) => {
  console.log(queryParams);

  const { data, error, isLoading, mutate } = useSWR({ url: '/canteen/get_items', params: queryParams?.search_term ? queryParams : { all: true } }, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    dedupingInterval: 5000
  })


  return {
    data,
    error,
    isLoading,
    mutate
  }
}
