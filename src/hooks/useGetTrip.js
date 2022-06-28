import { useState, useEffect} from 'react';
import { getTrips } from '../services/ApiRequest';

const useGetTrip = () => {
  const [ data, setData ] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    setLoading(true);
    setData(await getTrips());
    setLoading(false);
  }

  return { data, loading, handleGetData };
}

export default useGetTrip;
