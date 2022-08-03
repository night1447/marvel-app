const ComicsList = (props) => {
    const getCheckedComics = (comics) => {
        if (props.comicList.length > 10) {
            return props.comicList.slice(0,10);
        }
        return props.comicList;
    }
    return <ul className={'character__comics-list'}>
        {getCheckedComics(props.comicList).map(comic => <li className={'character__comics-item'} key={Math.random()}>{comic.name}</li>)}
    </ul>
}
export default ComicsList;