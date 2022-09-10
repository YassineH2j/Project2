import Accordion from 'react-bootstrap/Accordion';
import { AiFillPlayCircle } from 'react-icons/ai';
import '../../Styles/Chapter.css'

const Chapter = (props) => {
    console.log();
    return (
        <div>
            <Accordion>
                <Accordion.Item className='rounded-0' eventKey="0">
                    <Accordion.Header >
                        <div className='col-12 d-flex justify-content-between align-items-center pe-3'>
                            <h6>{props.chapter[0][0]}</h6>
                            <p>{props.chapter[1].length} lectures - 6min</p>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className='px-0 pb-0 pt-4'>
                        <div>
                            <ul style={{ listStyleType: "none" }}>
                                {
                                    props.chapter[1].map((item) => {
                                        return (
                                            <li key={item}>
                                                <div className='d-flex col-12 justify-content-between'>
                                                    <div className='d-flex'>
                                                        <AiFillPlayCircle />
                                                        <p>{item}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Chapter;