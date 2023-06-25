import React, {useState} from "react";
import {capitalizeFirstLetter} from "../../utils/helpers"

function Nav(){
    const [categories] = useState([
        { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
        { name: 'portraits', description: 'Portraits of people in my life' },
        { name: 'food', description: 'Delicious delicacies' },
        { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
      ]);
    
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/" style={{ whiteSpace: 'nowrap' }}>
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" style={{ whiteSpace: 'nowrap' }}>
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActve'}`} key={category.name}>
                            <span onClick={() => setCurrentCategory(category)}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}



export default Nav;