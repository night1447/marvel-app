import {Fragment, useCallback, useEffect, useReducer, useState} from "react";
import Spinner from "../../../../UI/Spinner/Spinner";
import Error from "../../../../UI/Error/Error";
import useMarvelService from "../../../../../services/MarvelService";

const charactersInfoReducer = (state, action) => {
    return {
        characters: state.characters.concat(action.items),
        offset: state.offset + 9,
    };
}
const Characters = (props) => {
    const [hasItemLoading, setHasItemLoading] = useState(false);
    const [charactersEnded, setCharactersEnded] = useState(false);
    const {hasLoading, hasError, getAllCharacters, clearError} = useMarvelService();
    const [charactersInfo, dispatchCharactersInfo] = useReducer(charactersInfoReducer, {
        characters: [],
        offset: 210,
    });

    const onRequest = useCallback((offset) => {
            getAllCharacters(offset).then(items => {
                clearError();
                if (items.length === 0) {
                    setCharactersEnded(true);
                    return;
                }
                setHasItemLoading(false);
                dispatchCharactersInfo({items: items})
            })
        }
        , [getAllCharacters]);

    useEffect(() => {
        onRequest();
    }, []);
    const selectCharacterHandler = (event) => {
        if (event.target.closest('.character__item')) {
            const id = event.target.closest('.character__item').id;
            props.onChangeSelectedItem(id);
        }
    };

    const loadMoreCharactersHandler = useCallback(() => {
        setHasItemLoading(true);
        onRequest(charactersInfo.offset);
    }, [charactersInfo.offset])
    const getContent = () => {
        if (hasError) {
            return <Error/>;
        }
        if (!hasItemLoading && hasLoading) {
            return <Spinner/>

        } else return <Fragment>
            <ul className={'character__list'} onClick={selectCharacterHandler}>
                {charactersInfo.characters.map(character => <li className={`${'character__item'}`} id={character.id}
                                                                key={character.id}>
                    <img src={character.thumbnail} alt={character.name} className={'character__image'}/>
                    <p className={'character__name'}>
                        {character.name}
                    </p>
                </li>)}
            </ul>

            <button className={`button button__main button__long ${charactersEnded ? 'button__off' : ''}`}
                    disabled={hasItemLoading} type={'button'}
                    onClick={loadMoreCharactersHandler}>
                <div className={'inner'}>Load more</div>
            </button>
        </Fragment>;
    };

    return (
        getContent()
    )
}
export default Characters;