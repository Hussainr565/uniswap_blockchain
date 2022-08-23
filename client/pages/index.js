
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'
import Navbar from '../components/Navbar'
 

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <Main />
      <TransactionHistory />
    </div>
  )
}