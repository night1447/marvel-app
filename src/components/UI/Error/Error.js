import {Fragment} from "react";

const Error = () => {
    return <Fragment>
        <img src={`${process.env.PUBLIC_URL}/error.gif`} alt="error"
                   style={{margin: '0 auto', width: '250px', height: '250px', display: 'flex'}}/>
    </Fragment>
}
export default Error;