const Card = () => {
  return (
    <div
      data-testid='card'
      className='bg-stone-800 text-white rounded-xl flex flex-col items-center w-full max-w-md space-y-4 p-4'
    >
      <div>Name of Habit</div>
      <div>
        <button>-</button>
        <button>100g</button>
        <button>+</button>
      </div>
      <div className='w-full flex space-x-4 items-center'>
        <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
          <div
            className='bg-blue-600 h-2.5 rounded-full'
            style={{ width: '45%' }}
          ></div>
        </div>
        <div>25/30g</div>
      </div>
    </div>
  )
}

export default Card
