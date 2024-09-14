import React, { Fragment, lazy } from 'react'
import Academics from '../components/pages/Academics/Academics';
import Section from '../components/pages/Academics/Section/Section';
import Subjects from '../components/pages/Academics/Subjects/Subjects';
import ClassTeacher from '../components/pages/Academics/ClassTeacher/ClassTeacher';
import StudentsList from '../components/pages/Students/StudentsList';
import StudentDetails from '../components/pages/Students/Student-details/StudentDetails';
import EditStudent from '../components/pages/Students/Student-details/edit-student/EditStudent';
const Dashboard = lazy(() => import("../components/dashboard/dashboard"));

export const RouterData = [

    { path: `${import.meta.env.BASE_URL}/dashboard`, element: <Dashboard /> },
    { path: `${import.meta.env.BASE_URL}/academics`, element: <Academics /> },
    { path: `${import.meta.env.BASE_URL}/section`, element: <Section /> },
    { path: `${import.meta.env.BASE_URL}/subjects`, element: <Subjects /> },
    { path: `${import.meta.env.BASE_URL}/class-teacher`, element: <ClassTeacher /> },
    { path: `${import.meta.env.BASE_URL}/students-list`, element: <StudentsList /> },
    { path: `${import.meta.env.BASE_URL}/student-details/:id`, element: <StudentDetails /> },
    { path: `${import.meta.env.BASE_URL}/edit-student-details/:id`, element: <EditStudent /> },

];