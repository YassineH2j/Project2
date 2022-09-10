import '../../Styles/CourseIntro.css'
import { AiOutlineCheck } from 'react-icons/ai';

const CourseIntro = (props) => {
    return (
        <div className='all text-start mt-6'>
            <h4 className='fw-bold'>What you'll learn</h4>
            <div className='ticks justify-content-start'>
                {
                    props.course.overview.map((item) => {
                        return (
                            <div className='col-6 d-flex'>
                                <AiOutlineCheck />
                                <p className=''>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CourseIntro;