import { Button } from "react-bootstrap";
import CourseList from "./CourseList";

const CourseSection = (props) => {
    return (
        <div className="mx-4 border p-4">
            <h4 className="fw-bold">Expand your career opportunities with Python</h4>
            <p className="fs-6 ms-0">Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability </p>
            <Button style={{background: "white", color: "black", borderRadius: 0, border: "1px solid black"}}>
                <p className="m-1 fw-bold">Explore Python</p>
            </Button>
            <CourseList text = {props.text}/>
        </div>
    )
}

export default CourseSection;