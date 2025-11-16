import { useContext } from 'react';
import { AuthContext } from '..';
import { useNavigate } from 'react-router-dom';

const Component1 = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleComponent2 = () => {
    login({ name: 'David' });
    navigate('/component2');
  };
  const handleComponent3 = () => {
    login({ name: 'John', age: 30 });
    navigate('/component3');
  };

  return (
    <>
      <button onClick={handleComponent2}> Component 2</button>
      <button onClick={handleComponent3}> Component 3</button>
    </>
  );
};

export default Component1;
