const CharacterBasicInfo = (props) => {
    return (
        <div className={'character__basics'}>
            <img src={props.characterInfo.thumbnail} alt={props.characterInfo.name}
                 className={`randomchar__img ${props.characterInfo.imageNotFoundIndex !== -1 ? 'randomchar__contain-image' : ''}`}/>
            <div>
                <div className={'character__info-name'}>{props.characterInfo.name}</div>
                <div className={'character__actions'}>
                    <a href={props.characterInfo.homepage} className={'button button__main'}>
                        <div className={'inner'}>homepage</div>
                    </a>
                    <a href={props.characterInfo.wiki} className={'button button__secondary'}>
                        <div className={'inner'}>Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default CharacterBasicInfo;