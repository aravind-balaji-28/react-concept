import { useContext } from 'react';
import { AuthContext } from '..';

const Component3 = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <h2>{user?.name}</h2>
      <h3>{user?.age}</h3>
    </>
  );
};
export default Component3;
