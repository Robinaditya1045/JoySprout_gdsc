import './App.css'
import { Nav, Footer } from './components';
import {
  Hero,
  CustomerReviews,  
  HealthMonitoring, 
  GetStarted, 
  Certification, 
  Solutions,
  Subscribe
} from "./sections";

function App() {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <GetStarted />
      </section>
      <section className='padding'>
        <Solutions />
      </section>
      <section className='padding-x py-10'>
        <HealthMonitoring />
      </section>
      <section className='padding'>
        <Certification />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      {/* <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section> */}
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
}

export default App;
