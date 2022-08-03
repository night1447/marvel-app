import Skeleton from "../Skeleton/Skeleton";
import CharacterDescription from "./CharacterDescription";
import CharacterBasicInfo from "./CharacterBasicInfo";
import Comics from "../Comics/Comics";
import {Fragment, useEffect, useReducer, useState} from "react";
import MarvelService from "../../../../../services/MarvelService";
import Spinner from "../../../../UI/Spinner/Spinner";

const marvelService = new MarvelService();

const characterReducer = (state, action) => {
    if (action.type === 'SET_CHARACTER') {
        return {
            name: action.characterInfo.name,
            description: action.characterInfo.description,
            thumbnail: action.characterInfo.thumbnail,
            homepage: action.characterInfo.homepage,
            wiki: action.characterInfo.wiki,
            comics: action.characterInfo.comics,
            imageNotFoundIndex: action.characterInfo.imageNotFoundIndex,
        }
    }
};
let loadingBlock = <Fragment>
    <p className="character__select">Please select a character to see information</p>
    <Skeleton/>
</Fragment>;

const CharacterInfo = (props) => {
    const [character, dispatchCharacter] = useReducer(characterReducer, {});
    const [hasLoading, setLoading] = useState(true);
    const loadCharacter = (id) => {
        setLoading(true);
        marvelService.getCharacterById(id)
            .then(character => {
                setLoading(false);
                dispatchCharacter(
                    {
                        type: 'SET_CHARACTER',
                        characterInfo: character,
                    });
            }).catch(error => {
            console.log(error)
        });
    }
    useEffect(() => {
        if (props.id !== null) {
            loadCharacter(props.id);
        }
        loadingBlock = <Spinner/>;
    }, [props.id])
    return (
        <div className={'character__info'}>
            {hasLoading ? loadingBlock : <Fragment>
                <CharacterBasicInfo characterInfo={character}/>
                <CharacterDescription description={character.description}/>
                {character.comics.length === 0 ? '' : <Comics comics={character.comics}/>}
            </Fragment>}
        </div>
    )
}
export default CharacterInfo;