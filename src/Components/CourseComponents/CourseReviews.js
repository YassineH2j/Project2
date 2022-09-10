import CourseOneReview from "./CourseOneReview";

const CourseReviews = (props) => {
    return (
        <div className="text-start">
            <h4 className="fw-bold">Reviews</h4>
            {
                props.reviews.map((item) => {
                    return (
                        <CourseOneReview review = {item} />
                    )
                })
            }
        </div>
    )
}
export default CourseReviews;