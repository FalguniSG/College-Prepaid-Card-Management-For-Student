import { fetcher } from '@/lib/axios'
import useSWR from 'swr'

export const useAdminTypes = () => {

  const { data, error, isLoading, mutate } = useSWR({ url: '/admin/admin_types' }, fetcher, {
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
