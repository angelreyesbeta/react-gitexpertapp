import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['Dragon Ball'])

    return (
        <>
            <div id="idDiv">
                <h1>GifExpertApp</h1>
                <hr/>
                <AddCategory setcategories={setcategories}/>
            </div>
            <br/>
            
            <div>
                <form id="idDivFormu">
                    <div><h1 id="titulo">Listado de imagenes gifs</h1></div>
                    
                    <ol>
                    {
                    categories.map(category=>(
                        <GifGrid
                            key={category}
                            category={category}
                        />

                    ))
                    }
                    </ol>
                </form>
            </div>
         
                

        </>
    )
}
