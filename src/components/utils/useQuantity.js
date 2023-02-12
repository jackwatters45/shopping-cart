import { useState } from 'react';

const useQuantity = (initial) => {
  const [quantity, setQuantity] = useState(initial);
  const handleChange = (e) => setQuantity(parseInt(e.target.value));

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return {
    quantity,
    setQuantity,
    handleChange,
    increment,
    decrement,
  };
};

export default useQuantity;
