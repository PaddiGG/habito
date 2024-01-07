const Card = () => {
  return (
    <div
      data-testid='card'
      className='bg-blue-900 text-white rounded-md flex px-4 py-2 space-x-4'
    >
      <div>Card Title</div>
      <input type='checkbox' />
    </div>
  )
}

export default Card
