import homeBg from "../../images/home/home-bg.png"
const Home = () => {
  return (
    <div>
      <img className='absolute hidden top-0 right-0 -z-10 sm:block' src={homeBg} alt="home-background" />

    </div>
  )
}

export default Home