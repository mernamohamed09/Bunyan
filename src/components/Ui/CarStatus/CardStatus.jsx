import style from "./CardStatus.module.css"

function cardStatus({counter,title}) {
    return (
        <div className={`${style.cardStatus} d-flex align-items-center`}>
            {/* icon */}
            <div className={`${style.icon} d-flex align-items-center justify-content-center w-100`}>
                <i className="fa-solid fa-users"></i>
            </div>
            {/* info */}
            <div className={`${style.info}  w-100 d-flex flex-column align-items-center gap-2`}>
                <span className={style.counter}>{counter}</span>
                <span className={style.title}>{title}</span>
            </div>
        </div>
    )
}
export default cardStatus;