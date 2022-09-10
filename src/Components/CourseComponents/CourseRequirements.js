const CourseRequirements = (props) => {
    return (
        <div className="text-start">
            <h4 className="fw-bold">Requirements</h4>
            <ul>
                {
                    props.course.requirements.map((item) => <li>{item}</li>)
                }
            </ul>
        </div>
    )
}

export default CourseRequirements;