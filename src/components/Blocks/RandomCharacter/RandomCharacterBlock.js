const RandomCharacterBlock = (props) => {
    return (
        <div className={'randomchar__block'}>
            <img src={props.characterInfo.thumbnail} alt={props.characterInfo.name}
                 className={`randomchar__img ${props.characterInfo.imageNotFoundIndex !== -1 ? 'randomchar__contain-image' : ''}`}/>
            <div className={'randomchar__info'}>
                <h3 className={'randomchar__name'}>
                    {props.characterInfo.name}
                </h3>
                <p className={'randomchar__description'}>
                    {props.characterInfo.description}
                </p>
                <div className={'randomchar__actions'}>
                    <a href={props.characterInfo.homepage} className="button button__main">
                        <div className={'inner'}>HOMEPAGE</div>
                    </a>
                    <a href={props.characterInfo.wiki} className={" button button__secondary"}>
                        <div className={'inner'}>WIKI</div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default RandomCharacterBlock;