import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from'./components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import SingleBook from './components/SingleBook';



function App() {
  return (
    <>
      <MyNav brand="EpiBooks"/>
      <Welcome heading="Welcome to EpiBooks" subTitle="il miglior shop!"/>
      <AllTheBooks/>
      <SingleBook/>
      <MyFooter footerContent="EpiBooks"/>
    </>
  );
}

export default App;
