import Chapter from "./Chapter";

const CourseContent = (props) => {
    return (
        <div className="text-start">
            <h4 className='fw-bold'>Course content</h4>
            <div style={{ marginLeft: "-15px" }} className="d-flex justify-content-between">
                <p style={{ fontSize: "14px" }}>15 sections • 146 lectures • 14h 42m total length</p>
                <a><p style={{ fontSize: "14px" }} className='fw-bold'>Expand All Sections</p></a>
            </div>
            {
                props.course.content.map((item) => {
                    return <Chapter chapter={item}/>;
                })
            }
        </div>
    )
}

export default CourseContent;