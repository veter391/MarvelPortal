import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';

class CharList extends Component {
    
    state = {
        list : [],
        selected: 1
    }

    marvelService = new MarvelService(); // add service to variable and create instance of it

    // #add components in the start
    componentDidMount() {
        // console.log('mount')
        this.onAddChars();
    }

    // generate random id and check it if exists the same
    onFilterSame = arr => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000); // generata random id
        if(arr.some(el => el.id === id)) {
            this.onFilterSame(arr);
        } 

        return id;
    }

    // #get new random char from server
    newRandomChar = () => {
        
        this.marvelService.getCharacter(this.onFilterSame(this.state.list)) // get element and change, filter it data
            
            .then(data => {this.onCharGenerate(data)}) // filter element info 
            
            // .catch(data => {console.log(`error ${data}`)}) // if server not found
            .catch(data => {
                this.onCharGenerate({name: 'NoName', thumbnail: abyss, description: 'server not found'});
                console.log(`Error Message: => ${data}`)
            })
    }

    // #create new filtered char and add it to array
    onCharGenerate = char => {
        
        const charInfo = { // filter char info
            name: char.name,
            thumbnail: char.thumbnail,
            id: char.id
        } 

        
        this.setState(({list}) => { // change list and add obj(char) to it
            return {
                list: [...list, charInfo]
            }
        })
    }

    // #generate html list and pull info from state.list
    renderItems = (arr) => {
        
        const newList = arr.map((item, i) => { // change array with chars and add to variable

            const {name, thumbnail, id} = item; // get info of item
            let imgStyle = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: 'contain'} : null

            const handleKeyPress = event => {
                if (event.key === 'Enter' || event.key === 'Space') {
                    this.props.onCharSelected(id);
                }
            }
            
            return ( // return custom html(xhtml) code to variable
                
                <li onClick={ // check selected item and add class for it
    
                    () => {this.props.onCharSelected(id); this.setState({selected: i})} /* check id and change state.selected adding current el */ } 
                    onFocus={ () => { this.setState({ selected: i }) } } 
                    onKeyDown={handleKeyPress}
                    key={id}
                    tabIndex='0'
                    className={`char__item ${i === this.state.selected ? 'char__item_selected' : ''}` /* check and add active class if index === selected */}>
                    
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

    // #number of items add to list
    onAddChars = (num = 9) => {
        for (let i = 0; i < num; i++) {
            this.newRandomChar();            
        }
    }


    render() {
        // console.log('render')

        return (
            <div className="char__list">

                {this.renderItems(this.state.list)}

                <button className="button button__main button__long" 
                        onClick={() => this.onAddChars(3)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;




// Random Char:
// 1. change the char info to click inner(try it) btn and (check how to work with error)

// CharList:
// 3. delete random char and get chars in order or => filter list even when add new char and delet if char exists.
