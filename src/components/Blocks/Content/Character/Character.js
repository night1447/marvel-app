import Wrapper from "../../../UI/Wrapper";
import Characters from "./Characters/Characters";
import CharacterInfo from "./CharacterInfo/CharacterInfo";
import {useState} from "react";

const Character = (props) => {
    const [selectedId, setSelectedId] = useState(null);
    const changeSelectedItemHandler = (id) => {
        setSelectedId(prevState => {
                if (prevState !== null) {
                    document.getElementById(`${prevState}`).classList.remove('character__item-selected');
                }
                return id;
            }
        )
    }


    return <div className={'character'}>
        <Wrapper class={'character__wrapper'}>
            <Characters onChangeSelectedItem={changeSelectedItemHandler}/>
        </Wrapper>
        <CharacterInfo id={selectedId}/>
    </div>
}
export default Character;