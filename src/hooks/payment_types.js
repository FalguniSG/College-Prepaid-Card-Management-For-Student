import { fetcher } from '@/lib/axios'
import useSWR from 'swr'

export const useTransactionTypes = ({params}) => {

  const { data, error, isLoading, mutate } = useSWR({ url: '/admin/transaction_types', params: params }, fetcher, {
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
