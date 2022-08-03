class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=44443af08b0223b4c9500dae06b84ef8';
    _baseOffset = '210';
    _baseLimit = 9;
    getResource = async (url) => {
        let result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`)
        }
        return await result.json();
    }
    getAllCharacters = async (offset=this._baseOffset) => {
        const result = await this.getResource(`${this._apiBase}characters?limit=${this._baseLimit}&offset=${offset}&${this._apiKey}`);
        return result.data.results.map(this._transformCharacter)
    }
    getCharacterById = async (id) => {
        const result = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(result.data.results[0]);
    }
    _transformCharacter = (character) => {
        return {
            name: character.name,
            description: character.description || 'Данных об этом персонаже нет.',
            id: character.id,
            thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            homepage: character.urls[0].url,
            wiki: character.urls[1].url,
            comics: character.comics.items,
            imageNotFoundIndex: `${character.thumbnail.path}`.lastIndexOf('not_available')
        }
    }
}

export default MarvelService;