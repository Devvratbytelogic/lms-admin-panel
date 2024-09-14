export const MENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}dashboard`, icon: "home", type: "link", active: false, title: "Dashboard",
      },
    ],
  },
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
        icon: "database",
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
    menutitle: "Students",
    Items: [
      {
        title: "Students",
        icon: "database",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}students-list`, type: "link", title: "Students List",
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
        icon: "database",
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
    title: "Syllabus",
    menutitle: "Elements",
    Items: [
      {
        title: "Syllabus",
        icon: "database",
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
    menutitle: "Elements",
    Items: [
      {
        title: "Exams",
        icon: "database",
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
];












// export const MENUITEMS = [
//   {
//     menutitle: "MAIN",
//     Items: [
//       {
//         path: `${import.meta.env.BASE_URL}dashboard`, icon: "home", type: "link", active: false, title: "Dashboard",
//       },
//     ],
//   },
//   {
//     menutitle: "WIDGETS",
//     Items: [
//       {
//         path: `${import.meta.env.BASE_URL}components/widgets`, icon: "grid", type: "link", active: false, title: "Widgets",
//       },
//     ],
//   },
//   {
//     menutitle: "Elements",
//     Items: [
//       {
//         title: "Components",
//         icon: "database",
//         type: "sub",
//         active: false,
//         children: [
//           {
//             path: `${import.meta.env.BASE_URL}components/cardsDesign`, type: "link", title: "Cards Design",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}components/defaultCalendar`, type: "link", title: "Default Calendar",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}components/fullCalendar`, type: "link", title: "Full Calendar",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}components/defaultChat`, type: "link", title: "Default Chat",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}components/notifications`, type: "link", title: "Notifications",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}components/sweetAlerts`, type: "link", title: "Sweet Alerts",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}components/rangeSlider`, type: "link", title: "Range Slider",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}components/contentScrollBar`, type: "link", title: "Content Scrollbar",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}components/loader`, type: "link", title: "Loaders",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}components/counters`, type: "link", title: "Counters",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}components/rating`, type: "link", title: "Rating",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}components/timeline`, type: "link", title: "Timeline",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}components/treeview`, type: "link", title: "Treeview",
//           },
//         ],
//       },
//       {
//         title: "Elements",
//         icon: "package",
//         type: "sub",
//         active: false,
//         children: [
//           {
//             path: `${import.meta.env.BASE_URL}elements/alerts`, title: "Alerts", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/buttons`, title: "Buttons", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/colors`, title: "Colors", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/avatarSquares`, title: "Avatar-Squares", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/avatarRounded`, title: "Avatar-Rounded", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/avatarRadius`, title: "Avatar-Radius", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/dropDowns`, title: "Drop downs", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/list`, title: "List", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/tags`, title: "Tags", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/paginations`, title: "Paginations", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/navigation`, title: "Navigation", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/typography`, title: "Typography", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/breadcrumbs`, title: "Breadcrumbs", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/badges`, title: "Badges", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/panels`, title: "Panels", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}elements/thumbnails`, title: "Thumbnails", type: "link",
//           },
//         ],
//       },
//       {
//         title: "Advanced Elements",
//         icon: "file",
//         type: "sub",
//         bookmark: true,
//         active: false,
//         children: [
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/mediaObject`, type: "link", title: "Media Object",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/accordions`, type: "link", title: "Accordions",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/tabs`, type: "link", title: "Tabs",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/charts`, type: "link", title: "Charts",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/modal`, type: "link", title: "Modal",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/tooltipandpopover`, type: "link", title: "Tooltip and popover",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/progress`, type: "link", title: "Progress",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/carousels`, type: "link", title: "Carousels",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/headers`, type: "link", title: "Headers",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/footers`, type: "link", title: "Footers",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/userList`, type: "link", title: "UserList",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/search`, type: "link", title: "Search",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}advancedElements/cryptoCurrencies`, type: "link", title: "Crypto Currencies",
//           },
//         ],
//       },
//     ],
//   },

//   {
//     menutitle: "CHARTS & TABLES",
//     Items: [
//       {
//         title: "charts",
//         icon: "pie-chart",
//         type: "sub",
//         active: false,
//         children: [
//           {
//             path: `${import.meta.env.BASE_URL}charts/chartJs`, title: " ChartJs", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}charts/echarts`, title: "ECharts", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}charts/pieCharts`, title: "Pie Charts", type: "link",
//           },
//         ],
//       },

//       {
//         title: "Tables",
//         icon: "clipboard",
//         type: "sub",
//         badge1: true,
//         badge: "badge bg-secondary",
//         badgetxt: "2",
//         background: "hor-rightangle",
//         active: false,
//         children: [
//           {
//             path: `${import.meta.env.BASE_URL}tables/defaultTables`, title: " Default Tables", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}tables/dataTables`, title: "Data Tables ", type: "link",
//           },
//         ],
//       },
//     ],
//   },

//   {
//     menutitle: "PAGES",
//     Items: [
//       {
//         title: "Pages",
//         icon: "layers",
//         type: "sub",
//         badge2: true,
//         active: false,
//         children: [
//           {
//             path: `${import.meta.env.BASE_URL}pages/profile`, title: "Profile", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}pages/editProfile`, title: "Edit Profile", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}pages/mailInbox`, title: "Mail Inbox", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}pages/mailCompose`, title: "Mail Compose", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}pages/gallery`, title: "Gallery", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}pages/aboutCompany`, title: "About Company", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}pages/services`, title: "Services", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}pages/faqs`, title: "FAQS", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}pages/terms`, title: "Terms", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}pages/invoice`, title: "Invoice", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}pages/pricingTables`, title: "Pricing Tables", type: "link",
//           },

//           {
//             path: `${import.meta.env.BASE_URL}pages/empty`, title: "Empty", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}pages/underConstruction`, title: "Under Construction", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}pages/themeStyle`, title: "Theme Style", type: "link",
//           },
//           {
//             title: "Blog",
//             type: "sub",
//             active: false,
//             children: [
//               {
//                 path: `${import.meta.env.BASE_URL}pages/Blog/blog`, title: "Blog", type: "link",
//               },
//               {
//                 path: `${import.meta.env.BASE_URL}pages/Blog/blogDetails`, title: "Blog Details", type: "link",
//               },
//               {
//                 path: `${import.meta.env.BASE_URL}pages/Blog/blogPost`, title: "Blog Post", type: "link",
//               },
//             ],
//           },
//           {
//             title: "Maps",
//             icon: "globe",
//             type: "sub",
//             active: false,
//             children: [
//               {
//                 path: `${import.meta.env.BASE_URL}pages/maps/leafletMaps`, type: "link", title: "Leaflet Maps ",
//               },
//               {
//                 path: `${import.meta.env.BASE_URL}pages/maps/vectorMaps`, type: "link", title: "Vector Maps ",
//               },
//             ],
//           },
//           {
//             title: "E-Commerce",
//             icon: "shopping-cart",
//             type: "sub",
//             active: false,
//             children: [
//               {
//                 path: `${import.meta.env.BASE_URL}pages/e-commerce/shop`, title: "Shop", type: "link",
//               },
//               {
//                 path: `${import.meta.env.BASE_URL}pages/e-commerce/productDetails`, title: "Product Details", type: "link",
//               },
//               {
//                 path: `${import.meta.env.BASE_URL}pages/e-commerce/shoppingCart`, title: "Shopping Cart", type: "link",
//               },
//               {
//                 path: `${import.meta.env.BASE_URL}pages/e-commerce/wishlist`, title: "Wishlist", type: "link",
//               },
//               {
//                 path: `${import.meta.env.BASE_URL}pages/e-commerce/checkout`, title: "Checkout", type: "link",
//               },
//             ],
//           },

//           {
//             title: "File Manager",
//             type: "sub",
//             active: false,
//             children: [
//               {
//                 path: `${import.meta.env.BASE_URL}pages/FileManager/FileManagerList/FileManagerList`, title: "File Manager List", type: "link",
//               },
//               {
//                 path: `${import.meta.env.BASE_URL}pages/FileManagerFileManager/FileManager`, title: "File Manager", type: "link",
//               },

//               {
//                 path: `${import.meta.env.BASE_URL}pages/FileManager/FileDetails/FileDetails`, title: "File Details", type: "link",
//               },

//               {
//                 path: `${import.meta.env.BASE_URL}pages/FileManager/FileAttachments/FileAttachments`, title: "File Attachments", type: "link",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },

//   {
//     menutitle: "CUSTOM & ERROR PAGES",
//     Items: [
//       {
//         title: "Custom Pages",
//         icon: "settings",
//         type: "sub",
//         active: false,
//         children: [
//           {
//             path: `${import.meta.env.BASE_URL}custompages/login`, title: "Login", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}custompages/register`, title: "Register", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}custompages/forgotpassword`, title: "Forgot Password", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}custompages/lockscreen`, title: "Lock Screen", type: "link",
//           },
//           {
//             title: "Errors Pages",
//             icon: "info",
//             type: "sub",
//             active: false,
//             children: [
//               {
//                 path: `${import.meta.env.BASE_URL}custompages/errorpages/errorpage400`,
//                 title: "400",
//                 type: "link",
//               },
//               {
//                 path: `${import.meta.env.BASE_URL}custompages/errorpages/errorpage401`,
//                 title: "401",
//                 type: "link",
//               },
//               {
//                 path: `${import.meta.env.BASE_URL}custompages/errorpages/errorpage403`,
//                 title: "403",
//                 type: "link",
//               },
//               {
//                 path: `${import.meta.env.BASE_URL}custompages/errorpages/errorpage500`,
//                 title: "500",
//                 type: "link",
//               },
//               {
//                 path: `${import.meta.env.BASE_URL}custompages/errorpages/errorpage503`,
//                 title: "503",
//                 type: "link",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: `${import.meta.env.BASE_URL}Submenus`,
//         icon: "sliders",
//         type: 'sub',
//         active: false,
//         selected: false,
//         title: 'Submenus',
//         children: [
//           {
//             type: 'sub', active: false, selected: false, title: 'Level-1', children:
//               [
//                 { path: "#", type: 'link', active: false, selected: false, title: 'Level-1.1' },
//                 { path: "#", type: 'link', active: false, selected: false, title: 'Level-1.2' },

//                 {
//                   type: 'sub', active: false, selected: false, title: 'Level-1.2', children:
//                     [
//                       { path: "#", type: 'link', active: false, selected: false, title: 'Level-1.2.1' },
//                       { path: "#", type: 'link', active: false, selected: false, title: 'Level-1.2.2' },
//                       { path: "#", type: 'link', active: false, selected: false, title: 'Level-1.2.3' },

//                     ]
//                 },
//                 { path: "#", type: 'link', active: false, selected: false, title: 'Level-1.3' },

//               ]
//           },
//           { path: "#", type: 'link', active: false, selected: false, title: 'Level-2' },

//         ]
//       },
//     ],
//   },
//   {
//     menutitle: "FORMS & ICONS",
//     Items: [
//       {
//         title: "Forms",
//         icon: "file-text",
//         type: "sub",
//         badge: "badge bg-success",
//         badgetxt: "5",
//         background: "hor-rightangle",
//         active: false,
//         children: [
//           {
//             path: `${import.meta.env.BASE_URL}form/formElements`, title: "Form Elements", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}form/formAdvanced`, title: "Form Advanced", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}form/formEditor`, title: "Form Editor", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}form/formWizard`, title: "Form Wizard", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}form/formValidation`, title: "Form Validation", type: "link",
//           },
//         ],
//       },

//       {
//         title: "Icons",
//         icon: "command",
//         type: "sub",
//         children: [
//           {
//             path: `${import.meta.env.BASE_URL}icon/fontAwesome`, title: "Font Awesome", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}icon/materialDesignIcons`, title: "Material Design Icons", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}icon/simpleLineIcons`, title: "Simple Line Icons", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}icon/featherIcons`, title: "Feather Icons", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}icon/ionicIcons`, title: "Ionic Icons", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}icon/flagIcons`, title: "Flag Icons", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}icon/pe7Icons`, title: "Pe7 Icons", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}icon/themifyIcons`, title: "Themify Icons", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}icon/typiconsIcons`, title: "Typicons Icons", type: "link",
//           },
//           {
//             path: `${import.meta.env.BASE_URL}icon/weatherIcons`, title: "Weather Icons", type: "link",
//           },
//         ],
//       },
//     ],
//   },
// ];
