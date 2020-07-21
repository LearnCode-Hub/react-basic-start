import React from 'react';
import {StudentCard} from '../Student-Card/StudentCard-Component';

export const StudentList = props=>{
    console.log(props);
    return(<div className="student-list">
        {props.employees.map(employee => (<StudentCard key={employee.id} employee={employee}></StudentCard>))}
    </div>);
}