import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data
  } else {
    console.error(error)
    errorMessage = 'Unknown error'
  }

  return (
    <div className='flex flex-col h-screen justify-center items-center gap-8'>
      <h1 className='font-bold text-4xl text-gray-700'>Oops!</h1>
      <p className='text-gray-700 font-medium'>
        Sorry, an unexpected error has occurred.
      </p>
      <p className='text-gray-500 italic font-normal'>{errorMessage}</p>
    </div>
  )
}

export default ErrorPage
