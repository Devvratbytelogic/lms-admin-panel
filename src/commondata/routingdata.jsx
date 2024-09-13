import React, { lazy } from 'react'

//Dashboard
const Dashboard = lazy(()=> import("../components/dashboard/dashboard"));

export const RouterData = [

{ path:`${import.meta.env.BASE_URL}/dashboard`, element:<Dashboard />},

];