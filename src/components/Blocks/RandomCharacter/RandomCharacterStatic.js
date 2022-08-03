import mjolnir from '../../../resourses/img/mjolnir.png'

const RandomCharacterStatic = (props) => {
    return (
        <div className={'randomchar__static'}>
            <p className={'randomchar__title'}>
                Random character for today!<br/>
                Do you want to get to know him better?
            </p>
            <p className={'randomchar__title'}>
                Or choose another one
            </p>
            <button className={'button button__main'} onClick={props.onChangeCharacter}>
                <div className={"inner"}>try it</div>
            </button>

            <img src={mjolnir} alt="mjolnir" className={'randomchar__decoration'}/>
        </div>
);
}
export default RandomCharacterStatic;