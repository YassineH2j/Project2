import React, { useState, useEffect, useReducer } from 'react'
import { useParams, useLocation, BrowserRouter } from 'react-router-dom'
import '../Styles/Navbar.css'
import CourseItem from './CourseItem';

const CourseList = (props) => {

    const [reducerValue, forceUpdate] = useReducer(x => x+1, 0); 

    useEffect(() => {
        fetchCourses();
    }, [reducerValue])

    const [courseText, setText] = useState(useParams().text);

    const [items, setItems] = useState([]);

    let location = useLocation();

    useEffect(() => {
        setText(location.pathname.substring(6))
        console.log(location.pathname.substring(6))
        forceUpdate();
    }, [location]);

    const fetchCourses = async () => {
        console.log("fetch")
        const data = await fetch(
            'https://mocki.io/v1/038287eb-3e55-4156-8bb7-d00e5130ae24'
        );
        const jsonData = await data.json();
        if (courseText === undefined) {
            setItems(jsonData);
        }
        else {
            setItems(jsonData.filter(
                item => item.title.toLowerCase().includes(courseText.toLowerCase())
            ));
        }
        console.log("1" + items)
    }

    return (
        <div className="mt-4 d-flex w-100 overflow-hidden">
            {items.map(item => {
                return (
                    <CourseItem id={item.id} src={item.image} text={item.title} creator={item.instructor.name} price={item.price}></CourseItem>
                )
            })}
        </div>
    )
}

export default CourseList;
