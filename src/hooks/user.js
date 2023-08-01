import { fetcher, logout } from '@/lib/axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useSWR from 'swr'

export const useUser = ({ middleware, redirectIfAuthenticated, options } = {}) => {
  const router = useRouter()

  const { data, error, isLoading, mutate } = useSWR({ url: '/my_profile' }, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    dedupingInterval: 5000
  })


  useEffect(() => {

    if (middleware === 'guest' && redirectIfAuthenticated && data) {
      router.push("/" + data?.data?.type)
    }

    if (middleware === 'auth' && error) {
      logout(mutate)
    }

    if (middleware === "auth" && data && !router.asPath.includes(data?.data?.type)) {
      router.push("/" + data?.data?.type)
    }

  }, [middleware, redirectIfAuthenticated, data, error, router, mutate])

  return {
    data,
    error,
    isLoading,
    mutate
  }
}
