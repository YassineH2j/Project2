import { Button } from 'react-bootstrap';
import { GiAlarmClock } from 'react-icons/gi'
import { BsPlayBtn } from 'react-icons/bs'
import { AiOutlineFile, AiOutlineTrophy } from 'react-icons/ai'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import { IoIosInfinite } from 'react-icons/io'
import { BiMobile } from 'react-icons/bi'

const CourseCard = (props) => {
    return (
        <div className='container'>
            <div className="bg-white border px-4 py-3">
                {/* <img src="https://miro.medium.com/max/750/0*kQ7HxB1t_RBDIxyH.jpg"></img> */}
                <div className="d-flex align-items-center">
                    <h1>${props.course.price}</h1>
                    <p className="secondary fs-6">${props.course.originalPrice}</p>
                    <p className="secondary fs-6">Discount80% off</p>
                </div>
                <div className="d-flex text-danger">
                    <GiAlarmClock className='' />
                    <p className='ms-1 fw-bold'>22 hours</p>
                    <p className='ms-1'>left at this price!</p>
                </div>
                <Button className='border-0 p-2' style={{ width: "100%", borderRadius: "0", background: "#a435f0" }}><h6> Add to cart </h6></Button>
                <Button className='border border-dark p-2 mt-2' style={{ width: "100%", borderRadius: "0", background: "white", color: "black" }}><h6> Buy Now </h6></Button>
                <p className='mt-3 text-secondary'>30-Day Money-Back Guarantee</p>
                <p className='fw-bold text-start fs-6 ms-0'>This course includes:</p>
                <div className="d-flex">
                    <BsPlayBtn />
                    <p>{props.course.hoursCount} hours on-demand video</p>
                </div>
                <div className="d-flex">
                    <AiOutlineFile />
                    <p>{props.course.articlesCount} article</p>
                </div>
                <div className="d-flex">
                    <HiOutlineFolderDownload />
                    <p>{props.course.downloadableResource} downloadable resources</p>
                </div>
                <div className="d-flex">
                    <IoIosInfinite />
                    <p>Full lifetime access</p>
                </div>
                <div className="d-flex">
                    <BiMobile />
                    <p>Access on mobile and TV</p>
                </div> 
                <div className="d-flex">
                    <AiOutlineTrophy />
                    <p>Certificate of completion</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className='ms-0 fw-bold text-decoration-underline'>Share</p>
                    <p className='fw-bold text-decoration-underline'>Gift this Course</p>
                    <p className='fw-bold text-decoration-underline'>Apply Coupon</p>
                </div>
            </div>
            <div className="bg-white border px-4 py-3">
                <h6 className='fw-bold text-start'>Training 5 or more people?</h6>
                <p className='text-secondary'>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
                <Button className='border border-dark p-2' style={{ width: "100%", borderRadius: "0", color: "black", background: "white" }}>
                    <h6>Try Udemy Business</h6>
                </Button>
            </div>
        </div>
    )

}

export default CourseCard;