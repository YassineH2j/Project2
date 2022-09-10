const CourseDescription = (props) => {
    return (
        <div className="text-start">
            <h4 className="fw-bold">Description</h4>
            <p className="fw-bold">Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?</p>
            <p>{props.course.description}</p>
        </div>
    )
}

export default CourseDescription;