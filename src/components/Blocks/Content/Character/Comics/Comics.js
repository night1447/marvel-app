import ComicList from "./ComicList/ComicList";

const Comics = (props) => {
    return (
        <div className={'character__comics'}>
            <p className={'character__comics-subtitle'}>Comics:</p>
            <ComicList comicList={props.comics}/>
        </div>
    )
}
export default Comics;