import YellowStar from "./YellowStar";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";

const CourseOneReview = (props) => {

    let abbrv = props.review.name
        .match(/[\p{Alpha}\p{Nd}]+/gu)
        .reduce((previous, next) => previous + ((+next === 0 || parseInt(next)) ? parseInt(next) : next[0] || ''), '')
        .toUpperCase();

    return (
        < div className="border-bottom border-dark-75 py-3" >
            <div className="d-flex">
                <div>
                    <div className="rounded-circle bg-black text-center p-1">
                        <h6 className="text-white">{ abbrv }</h6>
                    </div>
                </div>
                <div className="ms-4 lh-1">
                    <p className="fw-bold ms-0">{props.review.name}</p>
                    <div className="d-flex">
                        <YellowStar />
                        <YellowStar />
                        <YellowStar />
                        <YellowStar />
                        <YellowStar />
                        <p>a month ago</p>
                    </div>
                    <p className="ms-0">{props.review.content}</p>
                    <p className="ms-0">Was the review helpful?</p>
                    <div className="d-flex justify-content-start align-items-center">
                        <div className="p-1 border border-dark rounded-circle me-2"><GoThumbsup /></div>
                        <div className="p-1 border border-dark rounded-circle me-3"><GoThumbsdown /></div>
                        <a style={{ fontSize: "12px" }}>Report</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CourseOneReview;