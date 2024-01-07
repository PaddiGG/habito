import Card from '../components/Card'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <h1>Home</h1>
        <Card />
      </div>
    </Layout>
  )
}

export default Home
