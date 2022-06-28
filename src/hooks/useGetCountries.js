import { useState, useEffect} from 'react';
import { getCountries } from '../services/ApiRequest';

const useGetCountries = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    handleGetCountries();
  }, []);

  const handleGetCountries = async () => {
    setData(await getCountries());
  }
  return { data };
}

export default useGetCountries;
