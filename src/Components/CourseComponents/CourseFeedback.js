import YellowStar from "./YellowStar";

const CourseFeedback = () => {
    return (
        <div className="text-start">
            <h4 className="fw-bold">Students Feedback</h4>
            <div className="d-flex">
                <div>
                    <h1>4.4</h1>
                    <YellowStar /><YellowStar /><YellowStar /><YellowStar /><YellowStar />
                    <h6 style={{ fontSize: '13px' }}>Course Rating</h6>
                </div>
                <div className="w-75">

                </div>
                <div className="lh-1">
                    <div className="d-flex">
                        <YellowStar /><YellowStar /><YellowStar /><YellowStar /><YellowStar /><p style={{fontSize: "10px"}}>43%</p>
                    </div>
                    <div className="d-flex">
                        <YellowStar /><YellowStar /><YellowStar /><YellowStar /><YellowStar /><p style={{fontSize: "10px"}}>37%</p>
                    </div>
                    <div className="d-flex">
                        <YellowStar /><YellowStar /><YellowStar /><YellowStar /><YellowStar /><p style={{fontSize: "10px"}}>15%</p>
                    </div>
                    <div className="d-flex">
                        <YellowStar /><YellowStar /><YellowStar /><YellowStar /><YellowStar /><p style={{fontSize: "10px"}}>3%</p>
                    </div>
                    <div className="d-flex">
                        <YellowStar /><YellowStar /><YellowStar /><YellowStar /><YellowStar /><p style={{fontSize: "10px"}}>2%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseFeedback;