import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';

import './charList.scss';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

function CharList({ onCharSelected }) {

    const [list, setList] = useState([])
    const [selected, setSelected] = useState(1)
    const [offset, setOffset] = useState(210);

    const { loading, error, getAllCharacters } = useMarvelService(); // add service to variable and create instance of it

    // #add components in the start
    useEffect(() => {
        // console.log('mount')
        newRandomChars();
    }, []);

    // #get new random char from server
    const newRandomChars = (characters = 9) => {
        
        getAllCharacters(characters, offset) // get element and change, filter it data
            // .then(data => data.forEach(() => onFilterSame(list))) // filter element info 
            .then(data => data.map(item => onCharGenerate(item))) // filter element info 

    
        setOffset(offset + characters)
    }

    // #create new filtered char and add it to array
    const onCharGenerate = char => {
        
        const charInfo = { // filter char info
            name: char.name,
            thumbnail: char.thumbnail,
            id: char.id
        } 

        setList(list => [...list, charInfo])        
    }

    // #generate html list and pull info from state.list
    const renderItems = (arr) => {
        
        const newList = arr.map((item, i) => { // change array with chars and add to variable

            const {name, thumbnail, id} = item; // get info of item
            let imgStyle = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: 'contain'} : null

            const handleKeyPress = event => {
                if (event.key === 'Enter' || event.key === 'Space') {
                    onCharSelected(id);
                }
            }
            
            return ( // return custom html(xhtml) code to variable
                
                <li onClick={ // check selected item and add class for it
    
                    () => { onCharSelected(id); setSelected(i) } /* check id and change state.selected adding current el */ } 
                    onFocus={ () => { setSelected(i) } } 
                    onKeyDown={handleKeyPress}
                    key={id}
                    tabIndex='0'
                    className={`char__item ${i === selected ? 'char__item_selected' : ''}` /* check and add active class if index === selected */}>
                    
                    <img src={thumbnail} alt={name ? name : 'No img'} style={imgStyle}/>
                    <div className="char__name">{name ? name : 'No name'}</div>
                </li>
            );
        })

        return (
            <ul className="char__grid">
                {newList}
            </ul>
        ); // return variable with created code
    }

    const addMoreChars = () => {
        newRandomChars(3)
        setOffset(offset + 3)
    }

    const
        // if exist error return error
        errorMessage = error ? <ErrorMessage /> : null,
        // if wait info from server return spinner
        spinner = loading ? <Spinner /> : null,
        // if doesn't exist error and spinner is null return content
        content = renderItems(list)

    return (
        <div className="char__list">
            {errorMessage}
            {content}
            {spinner}

            <button className="button button__main button__long" 
                onClick={addMoreChars}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default CharList;