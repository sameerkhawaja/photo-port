import React from "react";
import {capitalizeFirstLetter} from "../../utils/helpers"

function Nav(props){
    // destructure the properties in props to assign them to variables
    // if categories is not provided, default to empty array
    const{
        categories =[],
        setCurrentCategory,
        currentCategory
    } = props

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