import React, {useState, useEffect} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import { capitalizeFirstLetter } from './utils/helpers';

function App() {
  const [categories] = useState([
    { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]); //default state is commercial


  // useEffect has two arguments: 
  // a callback (anonymous function in curly brace) and an array of dependencies [currentCategories]
  // when currentCategory value is changed, the effect is triggered i.e. rerender the component
  useEffect(()=> {
    document.title = capitalizeFirstLetter(currentCategory.name);
  },[currentCategory]);

  return(
    <div>
      {/* we are passing the properties (2 objects and a function) as props in the Nav component */}
      <Nav 
        categories={categories} 
        setCurrentCategory={setCurrentCategory} 
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
