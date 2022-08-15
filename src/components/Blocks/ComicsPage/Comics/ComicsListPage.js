import ComicItem from "./ComicItem";

const ComicsListPage = (props) => {

    return <ul className={'comics__list'}>
        {props.comics.map(item => <ComicItem comic={item} key={item.id}/>)}
    </ul>
}
export default ComicsListPage;