import Header from './Header'

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='p-4 bg-[#392A23] h-full'>{children}</div>
    </div>
  )
}

export default Layout
