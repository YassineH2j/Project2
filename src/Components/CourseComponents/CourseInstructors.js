import { AiFillStar, AiFillPlayCircle } from "react-icons/ai";
import { BiMedal } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";

const CourseInstructors = (props) => {
    return (
        <div className="text-start">
            <h5 className="fw-bold">{props.instr.name}</h5>
            <p>{props.instr.intro}</p>
            <div className="d-flex">
                <img style={{ maxHeight: "112px" }} className="rounded-circle" src={props.instr.Image} />
                <div className="ps-3 pt-1 lh-1">
                    <div className="d-flex">
                        <AiFillStar />
                        <p>{props.instr.Rating} Instructor Rating</p>
                    </div>
                    <div className="d-flex">
                        <BiMedal />
                        <p>{props.instr.reviewsNumber} Reviews</p>
                    </div>
                    <div className="d-flex">
                        <HiUsers />
                        <p>{props.instr.studentsNumber} Students</p>
                    </div>
                    <div className="d-flex">
                        <AiFillPlayCircle />
                        <p>{props.instr.coursesNumber} Courses</p>
                    </div>
                </div>
            </div>
            <p> {props.instr.description}</p>
        </div>
    )
}

export default CourseInstructors;