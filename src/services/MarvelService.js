

class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    // personal api key
    _apiKey = 'apikey=d0cba7230807643ac1c3837fafb40afd'

    getrecorce = async url => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        // return promice
        return await res.json();
    }

    // find all characters
    getAllCharacters = async () => {
        const res = await this.getrecorce(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);

        // map return callback function to each element is the same => ''.map(item => this._transformCharacter(item))''
        return res.data.results.map(this._transformCharacter); 
    }

    // return character with uniq id
    getCharacter = async id => {
        const res = await this.getrecorce(`${this._apiBase}characters/${id}?${this._apiKey}`);

        // return transformed element
        return this._transformCharacter(res.data.results[0]);
    }

    // if function or variable starts with '_' be careful with changes!! try to NOT CHANGE IT
    _transformCharacter = (char) => {
        // transform and return new object and add this to state(obj)
        return {
            id: char.id,
            name: char.name,
            description: char.description ? char.description : 'Not info about this character !',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items.length === 0 ? [{name: 'Not comics about this character !'}] : char.comics.items.slice(0, 10)
        }
    }

}


export default MarvelService;