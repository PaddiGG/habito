import Header from './Header'

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='p-4 bg-[hsl(19,24%,40%)] h-full flex flex-col'>
        {children}
      </div>
    </div>
  )
}

export default Layout
