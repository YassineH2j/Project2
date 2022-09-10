import Advertisement from "./Advertisement";
import Description from "./Description";
import CourseSection from "./CourseSection";
import { useParams } from 'react-router-dom';
const Dashboard = () => {
    let text = useParams().text;
    
    return (
        <div>
            <Advertisement/>
            <Description/>
            <CourseSection text = {text}/>
        </div>
    )
}

export default Dashboard;