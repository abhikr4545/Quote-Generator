import { useEffect, useState } from 'react'

import divider from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'

const QuoteGenerator = () => {

  const url = 'https://api.adviceslip.com/advice';

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [change, setChange] = useState(true)

  useEffect(() => {
      const fetchUserDetails = async () => {
          const response = await fetch(url);
          const data = await response.json();
          setUsers(data);
          setIsLoading(false);
      }
      fetchUserDetails();
  }, [change]);

  if(isLoading) return <div>Loading...</div>

  return (
    <div className='sm:w-card-width w-5/6 rounded-md bg-dark-grayish-blue text-center shadow-lg py-12 relative'>
      <h4 className='text-neon-green text-xs tracking-cardLetterSpace pb-8'>ADVICE # {users.slip.id}</h4>
      <h1 className='text-white font-bold pb-8 px-6'> "{ users.slip.advice }" </h1>
      <img src={divider} alt="divider" className='w-96 mx-auto pb-3' />
      <div onClick={() => setChange(!change)} className='rounded-full absolute p-4 mx-auto inset-x-0 w-12 -bottom-6 bg-neon-green flex items-center justify-center cursor-pointer'>
        <img src={ dice } alt="dice" />
      </div>
    </div>
  )
}

export default QuoteGenerator