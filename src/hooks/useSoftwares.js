import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { softwares as softwares_imp } from '../database/Softwares';
import { set } from '../features/softwaresSlice';

function useSoftwares() {
  const [softwares, fetched] = useSelector(state => [
    state.softwares.list,
    state.softwares.fetched,
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSoftwares = async () => {
      const softwares = await softwares_imp.getSoftwares();
      dispatch(set(softwares));
    };

    if (!fetched) fetchSoftwares();
  }, []);

  return [softwares, fetched];
}

export default useSoftwares;
