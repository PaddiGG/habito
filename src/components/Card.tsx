const Card = () => {
  return (
    <div
      data-testid='card'
      className='bg-stone-800 text-white rounded-md px-4 py-2 flex items-center space-x-4 w-full max-w-md justify-between'
    >
      <label className='font-bold' htmlFor='todoCheck'>
        Some Thing
      </label>
      {/* TODO: Add Card Styles  */}
      <input type='checkbox' id='todoCheck' />
    </div>
  )
}

export default Card
