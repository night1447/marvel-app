import ComicsListPage from "../Blocks/ComicsPage/Comics/ComicsListPage";
import {Fragment, useCallback, useEffect, useReducer, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import Error from "../UI/Error/Error";
import Spinner from "../UI/Spinner/Spinner";
import avengersImage from '../../resourses/img/Avengers.png'
import avengersLogo from '../../resourses/img/Avengers_logo.png'

const comicsInfoReducer = (state, action) => {
    return {
        comics: state.comics.concat(action.comics),
        offset: state.offset + 32,
    };
}
const ComicsPage = () => {
    const [hasItemLoading, setHasItemLoading] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false);
    const [comicsInfo, dispatchComicsInfo] = useReducer(comicsInfoReducer, {
        comics: [],
        offset: 210,
    });
    const {hasLoading, hasError, getComics, clearError} = useMarvelService();
    const onRequest = useCallback((offset) => {
        getComics(offset).then(comics => {
            clearError();
            if (comics.length === 0) {
                setComicsEnded(true);
                return;
            }
            setHasItemLoading(false);
            dispatchComicsInfo({
                comics: comics,
            })
        })
    }, [clearError, getComics]);
    useEffect(() => {
        onRequest();
    }, []);

    const loadMoreComicsHandler = () => {
        setHasItemLoading(true);
        onRequest(comicsInfo.offset);
    }
    const View = useCallback(() => {
        if (hasError) {
            return <Error/>;
        }
        if (!hasItemLoading && hasLoading) {
            return <Spinner/>
        } else return (
            <Fragment>
                <ComicsListPage comics={comicsInfo.comics}/>
                <button
                    className={`comics__button button button__main button__long ${comicsEnded ? 'button__off' : ''}`}
                    disabled={hasItemLoading}
                    onClick={loadMoreComicsHandler}>
                    <div className={'inner'}>Load
                        more
                    </div>
                </button>
            </Fragment>);

    }, [comicsInfo.comics, hasItemLoading]);
    return (
        <section className={'comics'}>
            <div className={'comics__banner'}>
                <img src={avengersImage} alt="avengers"/>
                <p className={'comics__banner-text'}>
                    New comics every week!
                    Stay tuned!
                </p>
                <img src={avengersLogo} alt="avengersLogo"/>
            </div>
            {<View/>}
        </section>);
}
export default ComicsPage;