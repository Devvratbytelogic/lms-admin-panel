import React, { Fragment, lazy } from 'react'
import Academics from '../components/pages/Academics/Academics';
import Section from '../components/pages/Academics/Section/Section';
import Subjects from '../components/pages/Academics/Subjects/Subjects';
import ClassTeacher from '../components/pages/Academics/ClassTeacher/ClassTeacher';
import StudentsList from '../components/pages/Students/StudentsList';
import StudentDetails from '../components/pages/Students/Student-details/StudentDetails';
import EditStudent from '../components/pages/Students/Student-details/edit-student/EditStudent';
import Teacher from '../components/teachers/Teacher';
import AddTeacher from '../components/teachers/add-teacher/AddTeacher';
import AssignTeacher from '../components/teachers/assign-teacher/AssignTeacher';
import Complaints from '../components/teachers/complaints/Complaints';
import TeacherProfile from '../components/teachers/TeacherProfile';
import AddStudent from '../components/pages/Students/Student-details/add-student/AddStudent';
import ReportCards from '../components/pages/Students/report-cards/ReportCards';
import StudentPromotion from '../components/pages/Students/Student-details/student-promotion/StudentPromotion';
import Attendance from '../components/pages/Students/Student-details/attendance/Attendance';
import Complaint from '../components/pages/Students/complaint/Complaint';
import AcademicSyllabus from '../components/syllabus-section/AcademicSyllabus';
import AcademicSchedule from '../components/syllabus-section/AcademicSchedule';
import CreateExam from '../components/exam/CreateExam';
import ExamSchedule from '../components/exam/ExamSchedule';
import PreviousExam from '../components/exam/PreviousExam';
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
    { path: `${import.meta.env.BASE_URL}/add-student`, element: <AddStudent /> },
    { path: `${import.meta.env.BASE_URL}/student-report-cards`, element: <ReportCards /> },
    { path: `${import.meta.env.BASE_URL}/student-promotion`, element: <StudentPromotion /> },
    { path: `${import.meta.env.BASE_URL}/student-attendance`, element: <Attendance /> },
    { path: `${import.meta.env.BASE_URL}/complaint`, element: <Complaint /> },
    { path: `${import.meta.env.BASE_URL}/teachers`, element: <Teacher /> },
    { path: `${import.meta.env.BASE_URL}/add-teacher`, element: <AddTeacher /> },
    { path: `${import.meta.env.BASE_URL}/assign-teacher`, element: <AssignTeacher /> },
    { path: `${import.meta.env.BASE_URL}/complaints`, element: <Complaints /> },
    { path: `${import.meta.env.BASE_URL}/teacher-profile`, element: <TeacherProfile /> },
    { path: `${import.meta.env.BASE_URL}/academic-syllabus`, element: <AcademicSyllabus /> },
    { path: `${import.meta.env.BASE_URL}/academic-schedule`, element: <AcademicSchedule /> },
    { path: `${import.meta.env.BASE_URL}/create-exam`, element: <CreateExam /> },
    { path: `${import.meta.env.BASE_URL}/exam-schedule`, element: <ExamSchedule /> },
    { path: `${import.meta.env.BASE_URL}/previous-exam`, element: <PreviousExam /> },

];