import './App.css';
import Image from './Image';
import Name from './Name';
import Data  from './Data';


function App() {

  const user = [ 
    {
      name: 'Elon musk',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'Elon Musk',
      avatar: 'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    },
    {
      name: 'Chris Morgan',
      location: 'Florida',
      foodType: 'Chiken and Chips',
      age: 45,
      likes: 'Swimming and Reading',
      twitterUsername: 'Morgan45',
      avatar: 'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    
    }
  ]

  return (
    <div className="App">
      {user.map((item) =>{
        return (
          <div key={item.name}>
            <Image myItem = {item} />
            <Name myItem = {item} />
            <Data myItem = {item} />

          </div>
        )
      })}
    </div>
  );
}

export default App;
