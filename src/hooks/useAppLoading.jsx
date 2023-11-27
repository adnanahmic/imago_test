import { useEffect, useState } from 'react';
import apiInstance from '../services';

const useAppLoading = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    apiInstance.interceptors.request.use((config) => {
      setCount((prev) => prev + 1);
      return config;
    });

    apiInstance.interceptors.response.use(
      (response) => {
        setCount((prev) => prev - 1);
        return response;
      },
      (error) => {
        setCount((prev) => prev - 1);
        return Promise.reject(error);
      }
    );
  }, []);

  return !!count;
};

export default useAppLoading;
