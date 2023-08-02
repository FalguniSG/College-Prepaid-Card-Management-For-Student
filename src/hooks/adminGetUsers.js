import { useUserSearchContext } from "@/contexts/usersSearchContext";
import { postFetcher } from "@/lib/axios"
import { useEffect, useState } from "react";
import useSWR from 'swr'
export const useGetUsers = ({ postData } = {}) => {
  const { setUserSearchData } = useUserSearchContext();
  const { data, isLoading, error, mutate } = useSWR(postData ? { url: "/admin/get_users", postData: postData } : "",
    postFetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  })


  useEffect(() => {
    if (error) {
      setUserSearchData(error?.respose?.data?.message)
    } else if (data) {
      setUserSearchData(data);
    }
  }, [data, error, setUserSearchData]);

  return {
    data,
    isLoading,
    error,
    mutate
  }
}