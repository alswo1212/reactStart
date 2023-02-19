import Proptypes from  "prop-types";
import styles from "./Button.module.css"

function Button ({text}){
    return <button className={styles.btn}>{text}</button>
}
// create-react-app은 css 코드를 javascript 오브젝트로 변환시켜주고 해당 javascript 오브젝트는 btn을 안에 가지고 있다.

Button.propTypes = {
    text : Proptypes.string.isRequired,
}

export default Button;
