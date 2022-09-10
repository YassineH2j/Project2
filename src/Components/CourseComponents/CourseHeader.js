import YellowStar from "./YellowStar"
import { BsFillPatchExclamationFill } from "react-icons/bs"
import { BsGlobe } from "react-icons/bs"
import { MdClosedCaptionOff } from "react-icons/md"

const CourseHeader = (props) => {
    return (
        <div>
            <p className="ms-0 fw-bold">{"Development > Programming Languages > "}{props.course.topic}</p>
            <h2 className="fw-bold">{props.course.title}</h2>
            <p className="ms-0 fs-5">{props.course.Introduction}</p>
            <div className="d-flex">
                <p className="ms-0 me-2 fw-bold">{props.course.rate}</p>
                <YellowStar /><YellowStar /><YellowStar /><YellowStar /><YellowStar />
                <p>({props.course.ratingCount} ratings)</p>
                <p>{props.course.enrollCount} students</p>
            </div>
            <p className="ms-0">Created By
                {
                    props.course.instructor.map((item) =>
                        <a className="text-decoration-undeline">{item.name + " "}</a>
                    )
                }
            </p>
            <div className="d-flex">
                <BsFillPatchExclamationFill />
                <p className="ms-2 me-4">Last updated {props.course.lastUpdate}</p>
                <BsGlobe />
                <p className="ms-2 me-4">{props.course.globe}</p>
                <MdClosedCaptionOff />
                <p className="ms-2 me-4">{props.course.Captioning}</p>
            </div>
        </div>
    )
}

export default CourseHeader