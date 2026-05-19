import { FaStar } from 'react-icons/fa';

function Star({ selected, onClick }) {
  return (
    <FaStar
      color={selected ? '#f5c518' : '#555'}
      size={42}
      onClick={onClick}
      style={{ cursor: 'pointer', transition: 'color 0.2s' }}
    />
  );
}
 
export default Star;