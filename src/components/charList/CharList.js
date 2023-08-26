import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';

class CharList extends Component {
    
    state = {
        list : [],
        selected: 1
    }

    // add service to variable and create instance of it
    marvelService = new MarvelService();

    // add components in the start
    componentDidMount() {
        // console.log('mount')
        this.onAddChars();
    }

    // get new random char from server
    newRandomChar = () => {
        // generata random id
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        // get element and change, filter it data
        this.marvelService.getCharacter(id)
            // filter element info 
            .then(data => {this.onCharGenerate(data)})
            // if server not found
            // .catch(data => {console.log(`error ${data}`)})
            .catch(data => {
                this.onCharGenerate({name: 'rey1', thumbnail: abyss, description: 'hello my friend'});
                console.log(`Error Message: => ${data}`)
            })
    }

    // create new filtered char and add it to array
    onCharGenerate = char => {
        // filter char info
        const charInfo = {
            name: char.name,
            thumbnail: char.thumbnail
        }

        // change list and add obj(char) to it
        this.setState(({list}) => {
            return {
                list: [...list, charInfo]
            }
        })
    }

    // generate html list and pull info from state.list
    onCreateList = list => {
        // change array with chars and add to variable
        const newList = list.map((item, i) => {

            // get info of item
            const {name, thumbnail} = item;

            // return custom html(xhtml) code to variable
            return (
                // check selected item and add class for it
                <li className={`char__item ${i === this.state.selected ? 'char__item_selected' : ''}`}>
                    <img src={thumbnail} alt={name ? name : 'No img'}/>
                    <div className="char__name">{name ? name : 'No name'}</div>
                </li>
            );
        })

        // return variable with created code
        return newList;
    }

    // number of items add to list
    onAddChars = (num = 9) => {
        for (let i = 0; i < num; i++) {
            this.newRandomChar();            
        }
    }

    // function for linking  the button and the number of added elements
    onAddMore = () => {
        this.onAddChars(3)
    }


    render() {
        // console.log('render')
        console.log(this.state.list)

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {this.onCreateList(this.state.list)}
                </ul>
                <button className="button button__main button__long" onClick={this.onAddMore}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;

// Random Char:
// 1. change the char info to click inner(try it) btn and (check how to work with error)
// * 2. change style if image not found!
// 4. check browser history!!!

// CharList:
// * 1. create CharList logic
// 2. clear code and add coments
