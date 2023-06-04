import React, {useEffect, useState} from 'react';
import './SortedCategoryPage.css'
import CardList from "../../components/CardList/CardList";
const SortedCategoryPage = () => {
    const [colleges, setCollege] = useState([
        {id: 1, title: 'КПОИиП', description: 'Колледж педагогического образования, информатики и права', departments: [
                {id: 1, collegeId: 1, title: 'Информационное отделение', courses :[
                        {id: 1, departmentId: 1, number: 1, groups: [
                                {id: 1, courseId:1 , title: 'И-11'},
                                {id: 2, courseId:1 , title: 'И-12'}
                            ]},
                        {id: 2, departmentId: 1, number: 2, groups: [
                                {id: 3, courseId:2 , title: 'И-21'},
                                {id: 4, courseId:2 , title: 'И-22'},
                                {id: 5, courseId:2 , title: 'И-23'}
                            ]},
                        {id: 3, departmentId: 1, number: 3, groups: [
                                {id: 6, courseId:3 , title: 'И-31'},
                                {id: 7, courseId:3 , title: 'И-32'}
                            ]},
                        {id: 4, departmentId: 1, number: 4, groups: [
                                {id: 6, courseId:4 , title: 'И-41'},
                                {id: 7, courseId:4 , title: 'И-42'}
                            ]},
                    ]
                },
                {id: 2, collegeId: 1, title: 'Юридическое отделение', courses:[
                        {id: 1, departmentId: 2, number: 1, groups: [
                                {id: 8, courseId:1 , title: 'П-11'},
                                {id: 9, courseId:1 , title: 'П-12'}
                            ]},
                        {id: 2, departmentId: 2, number: 2, groups: [
                                {id: 10, courseId:2 , title: 'П-21'},
                                {id: 11, courseId:2 , title: 'П-22'},
                                {id: 12, courseId:2 , title: 'П-23'}
                            ]},
                        {id: 3, departmentId: 2, number: 3, groups: [
                                {id: 13, courseId:3 , title: 'П-31'},
                                {id: 14, courseId:3 , title: 'П-32'}
                            ]},
                    ]
                },
            ]},
    ])

    const [sortItem, setSortItem] = useState({college: 0, course: 0, group: 0})

    const changeCollege = (value) => {
        if(value === sortItem.college){
            return
        }

        setSortItem({...sortItem, college: value, course: 0, group: 0})
    }
    const changeCourse = (value) => {
        if(value === sortItem.course){
            return
        }

        setSortItem({...sortItem, course: value, group: 0})
    }


    return (
        <main>
            <div className="container">
                <CardList
                    sortItem={sortItem.college}
                    setSortItem={changeCollege}
                    header={<div>Институты<span style={{opacity:0.5}}> - {colleges.length}</span></div>}
                    array={colleges}
                    activeContainer={sortItem.college !== 0}
                    callback={(item) => <div> <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>}>
                </CardList>
                {
                    sortItem.college
                        ? <CardList
                        sortItem={sortItem.course}
                        setSortItem={changeCourse}
                        header={<div>Подразделения и курсы</div>}
                        array={colleges[sortItem.college - 1].departments[0].courses}
                        callback={(item) => <h3>{item.course} курс</h3>}>
                    </CardList> : ''
                }
                {
                    sortItem.course
                        ? <CardList
                        sortItem={sortItem.group}
                        setSortItem={(value) => setSortItem({...sortItem, group: value})}
                        header={<div>Группы</div>}
                        array={colleges[sortItem.college - 1].departments[0].courses[sortItem.course - 1].groups}
                        callback={(item=><h3>{item.title}</h3>)}>
                    </CardList> : ''
                }
            </div>
        </main>
    );
};

export default SortedCategoryPage;