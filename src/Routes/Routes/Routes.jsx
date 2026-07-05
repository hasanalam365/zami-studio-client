import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
// import Fundings from "../../Pages/Fundings/Fundings/Fundings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
import Profile from "../../Pages/Dashboard/Profile/Profile";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import ContentManagement from "../../Pages/Dashboard/ContentManageMent/ContentManagement";
import AddBlog from "../../Pages/Dashboard/ContentManageMent/AddBlog";
import BlogPage from "../../Pages/BlogPage/BlogPage";
import BlogDetails from "../../Components/BlogDetails";
// import Testimonials from "../../Pages/Home/Testimonial/Testimonials";
import Services from "../../Pages/Services/Services";
import About from "../../Pages/About/About";
// import FacesOffice from "../../Pages/Faces-Office/FacesOffice";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServicesDetails"
import Brandings from "../../Pages/Brandings/Brandings";
import SubscribePlan from "../../Components/SubscribePlan";
import AllTestimonials from "../../Components/AllTestimonials";
import PrivacyPolicy from "../../Pages/FooterPages/PrivacyPolicy";
import TermsCondition from "../../Pages/FooterPages/TermsCondition";
// import Payment from "../../Pages/Fundings/Fundings/Payment";
import Contact from "../../Pages/Home/Contact/Contact";
import AllUsers from "../../Pages/Dashboard/CompanyDashboard/AllUsers";
import SuperAllUsers from "../../Pages/Dashboard/SuperAdminDashboard/SuperAllUsers";
import SuperAdminRoute from "../SuperAdminRoute/SuperAdminRoute";
import DashboardHome from "../../Pages/Dashboard/DashboardHome/DashboardHome";
import SuperAllOrders from "../../Pages/Dashboard/SuperAdminDashboard/SuperAllOrders";
// import SuperAllOrders from "../../Pages/Dashboard/SuperAdminDashboard/SuperAllOrders";
import Payment from "../../Pages/Checkout/Payment";
import AllCompaniesUsers from "../../Pages/Dashboard/SuperAdminDashboard/AllCompaniesUsers";
import AllCompaniesOrders from "../../Pages/Dashboard/SuperAdminDashboard/AllCompaniesOrders";
import WorkDetails from "../../Pages/Home/RecentWork/WorkDetails";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/brandings',
                element: <Brandings></Brandings>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
    path: '/service-details/:id',
    element: <ServiceDetails></ServiceDetails>
}

            ,
            {
                path: '/contact-us',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            // {
            //     path: '/faces-office',
            //     element: <FacesOffice></FacesOffice>
            // },
           
          
            {
  path: "/subscribePlan",
  element:<PrivateRoute><SubscribePlan /></PrivateRoute> 
},

            {
                path: '/login',
                element: <Login></Login>
            },
            // {
            //     path: '/blogs',
            //     element: <BlogPage></BlogPage>
            // },
            // {
            //     path: '/blog/:id',
            //     element: <BlogDetails></BlogDetails>
            // },
            {
                path: '/registerUser',
                element: <Register></Register>
            },
            {
                path: '/testimonials',
                element: <AllTestimonials></AllTestimonials>
            },
           
           
            // {
            //     path: '/testimonials',
            //     element: <Testimonials></Testimonials>
            // },
            {
                path: '/privacy-policy',
                element:<PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: '/terms-and-conditions',
                element: <TermsCondition></TermsCondition>
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            },
            
            {
  path: "/work/:id",
  element: <WorkDetails />,
}

        ]
    },
    {
  path: '/dashboard',
  element: (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  ),
  children: [

    {
      index: true,
      element: <DashboardHome />
    },

    {
      path: 'funnels/all-users',
      element: (
        <AdminRoute>
          <AllUsers />
        </AdminRoute>
      )
    },

    {
      path: "funnels/super-all-users",
      element: (
        <SuperAdminRoute>
          <SuperAllUsers />
        </SuperAdminRoute>
      )
    },
    {
      path: "funnels/super-all-orders",
      element: (
        <SuperAdminRoute>
          <SuperAllOrders/>
        </SuperAdminRoute>
          
       
      )
    },
{
  path: 'funnels/allCompaniesUsers',
  element:
  <SuperAdminRoute>
<AllCompaniesUsers></AllCompaniesUsers>
  </SuperAdminRoute>
  
},
{
  path: 'funnels/allCompaniesOrders',
  element:
  <SuperAdminRoute>
<AllCompaniesOrders/>
  </SuperAdminRoute>
  
},
    {
      path: 'content-management',
      element: (
        <AdminRoute>
          <ContentManagement />
        </AdminRoute>
      )
    },

    {
      path: 'content-management/add-blog',
      element: (
        <AdminRoute>
          <AddBlog />
        </AdminRoute>
      )
    },

    {
      path: 'profile',
      element: <Profile />
    }

  ]
}
]);