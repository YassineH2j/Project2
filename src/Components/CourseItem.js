import { NavLink } from 'react-router-dom'

const CourseItem = (props) => {
    return (
        <div className="cardd col-3">
            <div className="imggg">
                <NavLink to={`/course/${props.id}`} style={{ textDecoration: 'none' }}>
                    <img src={props.src}
                        className="img-fluid" alt="" />
                </NavLink>
            </div>
            <h3>{props.text}</h3>
            <p className='ms-0'>{props.creator}</p>
            <h3>{props.price}</h3>
        </div>
    )
}

export default CourseItem;