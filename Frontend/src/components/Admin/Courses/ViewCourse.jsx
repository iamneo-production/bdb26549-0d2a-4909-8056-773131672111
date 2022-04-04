import { useState, useEffect } from "react";
import {Navbar} from '../Navbar';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import {BiEdit} from 'react-icons/bi';
import {RiDeleteBin4Fill} from 'react-icons/ri';
import { IoIosAddCircle } from "react-icons/io";
import ReactPaginate from 'react-paginate';
import axios from "axios";
import { useNavigate } from "react-router-dom";



function ViewCourse(){
    let navigate = useNavigate();
    const [course, setCourse] = useState([]);
    const [del, setDel] = useState([]);
    const [pagecount, setpageCount] = useState([]);
    const [pageno, setPageno] = useState([]);

    const [search, setSearch] = useState([]);
    const [courseName, setcourseName] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${courseName}`)
        setcourseName("")
    }

    const viewCourseByName = (courseName) => {
        axios.get(`http://localhost:8080/admin/viewCourseByName/${courseName}`).then(
            (res) => {
                setCourse([]);
                setCourse([res.data]);
                console.log(res.data);

            }
        )
    }

    const getDetails = (pageno) => {
        setPageno(pageno);
        axios.get("http://localhost:8080/admin/viewCourse/"+pageno+"/"+10).then(
            (response) => {
                setCourse(response.data.courses);
                setpageCount(response.data.count)
                console.log(response.data.courses)

            }
        );
    };
    const editCourse = (courseId) => {
        navigate(`/admin/editCourse/${courseId}`);
    }

    const deleteCourse = (courseId) => {

        axios.delete(`http://localhost:8080/admin/deleteCourse/${courseId}`).then(
            (res) => {

                setDel(res.data);
                console.log(res.data);
                getDetails(pageno)
            }
        );
    }
    const handlePageClick = (data)=>{
        console.log(data.selected)
        getDetails(data.selected)
    }
    useEffect(() => {
        getDetails(0);
    }, []);
   
       return (
            <div >
                <Navbar/>
                    <div className="mb-3 p-3">
                        <div className='form-group'> 
                            <form onSubmit={handleSubmit}>
                                <div className="form">
                                    <div className='row'>
                                        <div className='col-9'>
                                            <input type="search" className="form-control rounded"
                                            placeholder='Type here to search course' value={courseName}
                                            onChange={(e) => setcourseName(e.target.value)}/>
                                        </div>
                                        <div className='col-3'>
                                            <button type="button" class="btn btn-success" onClick={() => viewCourseByName(courseName)}>Search</button>
                                        </div>
                                    </div>       
                                </div>
                            </form>
                        </div>    
                    </div>
                    <Container style={{width:'60%'}}>
                        {
                            course?.map((course) => (
                            
                                <tr key={course.id}>
                                    <Row style={{border:'1px solid black',backgroundColor:'#D3D3D3'}}>
                                        <Row >
                                            <Col>
                                                Course name : {course.courseName} <br/>
                                            </Col>
                                            <Col>
                                                Course Id : {course.courseId}
                                            </Col>
                                            
                                        </Row>
                                        <Row>
                                            <Col>
                                                Institute Name : {course.institute.instituteName}
                                            </Col>
                                            <Col>
                                                Number of students : {course.noOfStudents}<br/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Course duration : {course.courseDuration}<br/>
                                            </Col>
                                            <Col>
                                                Course available timings : {course.courseTiming}<br/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            
                                            <Col>
                                                Course description : {course.courseDescription}
                                            </Col>
                                        </Row>
                                       
                                        <div >
                                            <Row className='float-end'>
                                                <Col>       
                                                    <a onClick={()=>editCourse(course.courseId)}><BiEdit size={30} value={{color:'red'}}/></a>
                                                    <a onClick={() => deleteCourse(course.courseId)}><RiDeleteBin4Fill size={30}/></a> 
 
                                                </Col>
                                            </Row>
                                        </div>
                                        
                                    </Row><br></br>
                                </tr>
                             ))
                        }
                    </Container>
                    <div className="float-end">
                        <a href="/admin/addCourse" className="btn btn-success">
                        <IoIosAddCircle />Add Course</a>
                    </div>  
                   <ReactPaginate
                   previousLabel={'Previous'}
                   nextLabel={'Next'}
                   breakLabel={'...'}
                   pageCount={pagecount}
                   onPageChange={handlePageClick}
                   containerClassName={'pagination justify-content-center'}
                   pageClassName={'page-item'}
                   pageLinkClassName={'page-link'}
                   previousClassName={'page-item'}
                   previousLinkClassName={'page-link'}
                   nextClassName={'page-item'}
                   nextLinkClassName={'page-link'}
                   breakClassName={'page-item'}
                   breakLinkClassName={'page-link'}
                   activeClassName={'active'}
                    /> 
            </div>
                    ) 
    }


export default ViewCourse;











// import { useState, useEffect } from "react";
// import {Navbar} from '../Navbar';
// import Container from 'react-bootstrap/Container';
// import { Row } from 'react-bootstrap'
// import { Col } from 'react-bootstrap';
// import {BiEdit} from 'react-icons/bi';
// import {RiDeleteBin4Fill} from 'react-icons/ri';
// import { IoIosAddCircle } from "react-icons/io";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function ViewCourse(){
//     let navigate = useNavigate();
//     const [course, setCourse] = useState([]);
//     const [del, setDel] = useState([]);


//     const getDetails = () => {
//         axios.get("http://localhost:8080/admin/viewCourse").then(
//             (response) => {
//                 setCourse(response.data);
//                 console.log(response.data)
//             }
//         );
//     };
//     const editCourse = (courseId) => {
//         navigate(`/admin/editCourse/${courseId}`);
//     }

//     const deleteCourse = (courseId) => {

//         axios.delete(`http://localhost:8080/admin/deleteCourse/${courseId}`).then(
//             (res) => {

//                 setDel(res.data);
//                 console.log(res.data);
//                 getDetails();
//             }
//         );
//     }
//     useEffect(() => {
//         getDetails();
//     }, []);
   
//         return (
//             <div >
//                 <Navbar/>
//                     <div className='container'>
//                         <div className='form-group'> 
//                             <form>
//                                 <div className="form">
//                                     <div className='row'>
//                                         <div className='col-9'>
//                                             <input type="search" className="form-control"
//                                             placeholder='Type here to search course'/>
//                                         </div>
//                                         <div className='col-3'>
//                                             <button type="button" class="btn btn-success">Search</button>
//                                         </div>
//                                     </div>       
//                                 </div>
//                             </form>
//                         </div>    
//                     </div>
//                     <Container style={{width:'60%'}}>
//                         {
//                             course?.map((course) => (
                            
//                                 <tr key={course.id}>
//                                     <Row style={{border:'1px solid black',backgroundColor:'#D3D3D3'}}>
//                                         <Row >
//                                             <Col>
//                                                 Course name : {course.courseName} <br/>
//                                             </Col>
//                                             <Col>
//                                                 Number of students : {course.noOfStudents}<br/>
//                                             </Col>
//                                         </Row>
//                                         <Row>
//                                             <Col>
//                                                 Course Id : {course.courseId}<br/>
//                                             </Col>
//                                             <Col>
//                                                 Course description : {course.courseDescription}
//                                             </Col>
//                                         </Row>
//                                         <Row>
//                                             <Col>
//                                                 Course duration : {course.courseDuration}<br/>
//                                             </Col>
//                                         </Row>
//                                         <Row>
//                                             <Col>
//                                                 Course available timings : {course.courseTiming}<br/>
//                                             </Col>
//                                         </Row>
//                                         <div >
//                                             <Row className='float-end'>
//                                                 <Col>       
//                                                     <a onClick={()=>editCourse(course.courseId)}><BiEdit size={30}/></a>
//                                                     <a onClick={() => deleteCourse(course.courseId)}><RiDeleteBin4Fill size={30}/></a> 
 
//                                                 </Col>
//                                             </Row>
//                                         </div>
                                        
//                                     </Row><br></br>
//                                 </tr>
//                              ))
//                         }
//                     </Container>
//                     <div className="float-end">
//                         <a href="/admin/addCourse" className="btn btn-success">
//                         <IoIosAddCircle />Add Course</a>
//                     </div>  
//             </div>
//         )
//     }


// export default ViewCourse;










