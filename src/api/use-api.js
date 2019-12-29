import { useState, useEffect } from 'react';

const useApi = (fn, resolveCondition = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const request = (...args) => {
    setLoading(true);
    fn(...args)
      .then((returnedData) => setData(returnedData))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(request, resolveCondition);

  return { data, isLoading };
};

export { useApi };
