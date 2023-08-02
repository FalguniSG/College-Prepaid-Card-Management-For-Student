import { useUserSearchContext } from "@/contexts/usersSearchContext";
import { postFetcher } from "@/lib/axios"
import { useEffect, useState } from "react";
import useSWR from 'swr'
export const useGetUsers = ({ postData } = {}) => {
  const { setUserData } = useUserSearchContext();
  const { data, isLoading, error, mutate } = useSWR(postData ? { url: "/admin/get_users", postData: postData } : "",
    postFetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  })


  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data, setUserData]);

  return {
    data,
    isLoading,
    error,
    mutate
  }
}