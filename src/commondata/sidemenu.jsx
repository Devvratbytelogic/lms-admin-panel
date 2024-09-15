export const MENUITEMS = [
  // {
  //   menutitle: "MAIN",
  //   Items: [
  //     {
  //       path: `${import.meta.env.BASE_URL}dashboard`, icon: "fe fe-home", type: "link", active: false, title: "Dashboard",
  //     },
  //   ],
  // },
  // {
  //   // menutitle: "MAIN",
  //   Items: [
  //     {
  //       path: `${import.meta.env.BASE_URL}academics`, icon: "database", type: "link", active: false, title: "Academics",
  //     },
  //   ],
  // },
  {
    menutitle: "Academics",
    Items: [
      {
        title: "Academics",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}academics`, type: "link", title: "Class Management",
          },
          {
            path: `${import.meta.env.BASE_URL}section`, type: "link", title: "Section",
          },
          {
            path: `${import.meta.env.BASE_URL}subjects`, type: "link", title: "Subjects",
          },
          {
            path: `${import.meta.env.BASE_URL}class-teacher`, type: "link", title: "Classs Teacher",
          },

        ],
      },
    ],
  },
  {

    title: "Teachers",
    menutitle: "Elements",
    Items: [
      {
        title: "Teachers",
        icon: "icon icon-graduation",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}teachers`, type: "link", title: "Teachers List",
          },
          {
            path: `${import.meta.env.BASE_URL}add-teacher`, type: "link", title: "Add Teacher",
          },
          {
            path: `${import.meta.env.BASE_URL}assign-teacher`, type: "link", title: "Assign Teacher",
          },
          {
            path: `${import.meta.env.BASE_URL}complaints`, type: "link", title: "Complaints",
          },

        ],
      },
    ],
  },
  {
    menutitle: "Students",
    Items: [
      {
        title: "Students",
        icon: "fe fe-users",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}students-list`, type: "link", title: "Students List",
          },
          {
            path: `${import.meta.env.BASE_URL}add-student`, type: "link", title: "Add Student",
          },
          {
            path: `${import.meta.env.BASE_URL}student-report-cards`, type: "link", title: "Report Cards",
          },
          {
            path: `${import.meta.env.BASE_URL}student-promotion`, type: "link", title: "Student Promotion",
          },
          {
            path: `${import.meta.env.BASE_URL}student-attendance`, type: "link", title: "Attendance",
          },
          {
            path: `${import.meta.env.BASE_URL}complaint`, type: "link", title: "Complaint",
          },
        ],
      },
    ],
  },
  // {

  //   title: "Teachers",
  //   menutitle: "Elements",
  //   Items: [
  //     {
  //       title: "Teachers",
  //       icon: "database",
  //       type: "sub",
  //       active: false,
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}teachers`, type: "link", title: "Teachers List",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}add-teacher`, type: "link", title: "Add Teacher",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}assign-teacher`, type: "link", title: "Assign Teacher",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}complaints`, type: "link", title: "Complaints",
  //         },

  //       ],
  //     },
  //   ],
  // },
  {
    title: "Syllabus",
    menutitle: "Elements",
    Items: [
      {
        title: "Syllabus",
        icon: "icon icon-graduation",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}academic-syllabus`, type: "link", title: "Academic Syllabus",
          },
          {
            path: `${import.meta.env.BASE_URL}academic-schedule`, type: "link", title: "Create Syllabus",
          },
        ],
      },
    ],
  },
  {
    title: "Exams",
    Items: [
      {
        title: "Exams",
        icon: "icon icon-book-open",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}create-exam`, type: "link", title: "Create Exam",
          },
          {
            path: `${import.meta.env.BASE_URL}exam-schedule`, type: "link", title: "Exam Schedule",
          },
          {
            path: `${import.meta.env.BASE_URL}previous-exam`, type: "link", title: "Previous Exams",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Attendance",
    Items: [
      {
        title: "Attendance",
        icon: "fe fe-users",
        type: "sub",
        active: false,
        children: [
          // {
          //   path: `${import.meta.env.BASE_URL}students-list`, type: "link", title: "Students List",
          // },
        ],
      },
    ],
  },
  {
    menutitle: "Finance",
    Items: [
      {
        title: "Finance",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          // {
          //   path: `${import.meta.env.BASE_URL}students-list`, type: "link", title: "Students List",
          // },
        ],
      },
    ],
  },
  {
    menutitle: "Hostel",
    Items: [
      {
        title: "Hostel",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          // {
          //   path: `${import.meta.env.BASE_URL}students-list`, type: "link", title: "Students List",
          // },
        ],
      },
    ],
  },

  {
    menutitle: "Transport",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}#`, icon: "fe fe-truck", type: "link", active: false, title: "Transport",
      },
    ],
  },
  {
    menutitle: "Notice",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}#`, icon: "icon icon-speech", type: "link", active: false, title: "Notice",
      },
    ],
  },
  {
    menutitle: "Calendar",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}#`, icon: "fe fe-calendar", type: "link", active: false, title: "Calendar",
      },
    ],
  },
  {
    menutitle: "Library",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}#`, icon: "fe fe-book-open", type: "link", active: false, title: "Library",
      },
    ],
  },
  {
    menutitle: "Message",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}#`, icon: "icon icon-speech", type: "link", active: false, title: "Message",
      },
    ],
  },
];
