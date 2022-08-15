import Skeleton from "../Skeleton/Skeleton";
import CharacterDescription from "./CharacterDescription";
import CharacterBasicInfo from "./CharacterBasicInfo";
import Comics from "../Comics/Comics";
import {Fragment, useEffect, useState} from "react";
import Spinner from "../../../../UI/Spinner/Spinner";
import useMarvelService from "../../../../../services/MarvelService";
import Error from "../../../../UI/Error/Error";


let loadingBlock = <Fragment>
    <p className="character__select">Please select a character to see information</p>
    <Skeleton/>
</Fragment>;

const CharacterInfo = (props) => {
    const [character, setCharacter] = useState({});
    const {hasLoading, hasError, getCharacterById} = useMarvelService();
    const loadCharacter = (id) => {
        getCharacterById(id)
            .then(character => {
                setCharacter(character);
            })
    }
    useEffect(() => {
        if (props.id !== null) {
            loadCharacter(props.id);
            loadingBlock = <Spinner/>;
        }
    }, [props.id])
    return (
        <div className={'character__info'}>
            {hasError ? <Error/> :
                hasLoading ? loadingBlock : <Fragment>
                    <CharacterBasicInfo characterInfo={character}/>
                    <CharacterDescription description={character.description}/>
                    {character.comics.length === 0 ? '' : <Comics comics={character.comics}/>}
                </Fragment>}
        </div>
    )
}

export default CharacterInfo;