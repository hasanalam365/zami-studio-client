 import ClientAccess from "./ClientAccess"
import Deals from "./Deals"
// import EventReg from "./EventReg"
import FacesBanner from "./FacesBanner"
import FilesManagement from "./FilesManagement"
import HRMFeatures from "./HRMFeatures"

 import LastQuate from "./LastQuate"
import LeadClientMng from "./LeadClientMng"
import Lettering from "./Lettering"
import NewsLetter from "./NewsLetter"
// import OnlineDonation from "./OnlineDonation"
// import OnlinePaymentTh from "./OnlinePaymentTh"
import ProfLookingInv from "./ProfLookingInv"
import QuatationSmart from "./QuatationSmart"
import RoleManager from "./RoleManager"
import SmartIncomeState from "./SmartIncomeState"
import TaskManagement from "./TaskManagement"
import ToDoList from "./ToDoList"
import WebQuery from "./WebQuery"


const FacesOffice = () => {
  return (
    <div>
       <FacesBanner></FacesBanner>
       <LeadClientMng></LeadClientMng>
       <ClientAccess></ClientAccess>
       <ProfLookingInv></ProfLookingInv>
       {/* <EventReg></EventReg> */}
       {/* <OnlinePaymentTh></OnlinePaymentTh> */}
       {/* <OnlineDonation></OnlineDonation> */}
       <QuatationSmart></QuatationSmart>
       <TaskManagement></TaskManagement>
       <HRMFeatures></HRMFeatures>
       <WebQuery></WebQuery>
       <NewsLetter></NewsLetter>
       <FilesManagement></FilesManagement>
       <Lettering></Lettering>
       <SmartIncomeState></SmartIncomeState>
       <RoleManager></RoleManager>
       <ToDoList></ToDoList>
       <Deals></Deals>
      <LastQuate></LastQuate> 
    </div>
  )
}



export default FacesOffice
