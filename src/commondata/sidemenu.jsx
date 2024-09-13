export const MENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}dashboard`,icon: "home", type: "link", active: false, title: "Dashboard",
      },
    ],
  },

  {
    menutitle: "CUSTOM & ERROR PAGES",
    Items: [
      {
        title: "Custom Pages",
        icon: "settings",
        type: "sub",
        active: false,
        children: [
          { title: "Errors Pages",
            icon: "info",
            type: "sub",
            active: false,
            children: [
              {
                path: `${import.meta.env.BASE_URL}custompages/errorpages/errorpage400`,
   title: "400",
   type: "link",
              },
            ],
          },
        ],
      },
  {
    path: `${import.meta.env.BASE_URL}Submenus`,
    icon: "sliders",
    type: 'sub',
    active: false,
    selected: false,
    title: 'Submenus',
    children: [
        {
            type: 'sub', active: false, selected: false, title: 'Submenu1', children:
                [
                    { path: "#", type: 'link', active: false, selected: false, title: 'Submenu1.1' },
                    { path: "#", type: 'link', active: false, selected: false, title: 'Submenu1.2' },

                    {
                        type: 'sub', active: false, selected: false, title: 'Submenu1.2', children:
                            [
                                { path: "#", type: 'link', active: false, selected: false, title: 'Submenu1.2.1' },
                                { path: "#", type: 'link', active: false, selected: false, title: 'Submenu1.2.2' },
                                { path: "#", type: 'link', active: false, selected: false, title: 'Submenu1.2.3' },

                            ]
                    },
                    { path: "#", type: 'link', active: false, selected: false, title: 'Submenu1.3' },

                ]
        },
        { path: "#", type: 'link', active: false, selected: false, title: 'Submenu2' },

    ]
},
    ],
  },

];
