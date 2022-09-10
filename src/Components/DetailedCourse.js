import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, useParams } from "react-router-dom";

import CourseHeader from "./CourseComponents/CourseHeader";
import CourseIntro from "./CourseComponents/CourseIntro";
import CourseContent from "./CourseComponents/CourseContent";
import CourseRequirements from "./CourseComponents/CourseRequirements";
import CourseDescription from "./CourseComponents/CourseDescription";
import CourseInstructors from "./CourseComponents/CourseInstructors";
import CourseFeedback from "./CourseComponents/CourseFeedback";
import CourseReviews from './CourseComponents/CourseReviews';
import CourseCard from './CourseComponents/CourseCard';
import '../Styles/DetailedCourse.css'

const DetailedCourse = () => {
    let courseId = useParams()

    useEffect(() => {
        fetchCourses();
    }, []);

    const [item, setItem] = useState([]);

    const fetchCourses = async () => {
        const data = await fetch(
            'https://mocki.io/v1/038287eb-3e55-4156-8bb7-d00e5130ae24'
        );
        const items = await data.json();
        setItem(items.filter(
            element => {
                return element.id === parseInt(courseId.id)
            }
        ));
        console.log(items);
        console.log(item);
    }

    return (
        // <div></div>
        <div>
            <div style={{ position: "fixed" }} className='mt-4 w-100'>
                <div className='container d-flex justify-content-end'>
                    <div className='col-4'>
                        <CourseCard course={item[0]} />
                    </div>
                </div>
            </div>
            <div className="bg-black mb-4">
                <div className="container p-4 text-start text-white">
                    <div className='col-8'>
                        <CourseHeader course={item[0]} />
                    </div>
                </div>
            </div>
            <div className="container px-4">
                <div className="col-8 pe-4">
                    <div className="mb-4">
                        <CourseIntro course={item[0]} />
                    </div>
                    <div className="mb-4">
                        <CourseContent course={item[0]} />
                    </div>
                    <div className="mb-4">
                        <CourseRequirements course={item[0]} />
                    </div>
                    <div className="mb-4">
                        <CourseDescription course={item[0]} />
                    </div>
                    <h4 className="fw-bold">Course Instructors</h4>
                    {
                        item[0].instructor.map((instruc) => {
                            return (
                                <div className="mb-4">
                                    <CourseInstructors instr={instruc} />
                                </div>
                            )
                        })
                    }
                    <div className="mb-4">
                        <CourseFeedback />
                    </div>
                    <div className="mb-4">
                        <CourseReviews reviews={item[0].reviews}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedCourse;