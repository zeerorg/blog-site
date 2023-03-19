import Router from './Components/Router';
import HomeHead from 'main/pages/Components/PageHead';

export default function Home() {
  return (
    <>
      <HomeHead />
      <main>
        <Router />
      </main>
    </>
  )
}
