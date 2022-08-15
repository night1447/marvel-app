import Error from "../UI/Error/Error";
import {Link} from "react-router-dom";

const PageError = () => {

    return <div style={{maxWidth: '500px', margin: '0 auto'}}>
        <Error/>
        <p>Вы попали на несуществующую страницу, перейдите по ссылке ниже, чтобы попасть на главную</p>
        <Link to={'/'} style={{textDecoration: 'underline', color: 'blue'}}>Нажмите сюда</Link>
    </div>
}
export default PageError;