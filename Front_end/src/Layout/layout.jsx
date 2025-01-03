import { Route, Routes } from "react-router-dom";
import Card from "../Components/Card/card";
import Navbar from "../Components/Navbar/navbar";
import Service from "../Components/Services/Services";
import Add_student from "../Components/Services/Add_Student/Add_student";
import Update_student from "../Components/Services/Update_Student/Update_student";
import UpdateStudent from "../Components/Services/Update_Student/update";
import Delete_student from "../Components/Services/Delete_student/Delete_student";
import Take_Attendence from "../Components/Attendance/Take_Attendance/Take_Attendence";
import Attendence_Standard from "../Components/Attendance/Attendence_Standard/Attendence_Standard";
import Sixth from "../Components/Attendance/Standard/6th";
import Seventh from "../Components/Attendance/Standard/7th";
import Eighth from "../Components/Attendance/Standard/8th";
import Nineth from "../Components/Attendance/Standard/9th";
import Tenth from "../Components/Attendance/Standard/10th";
import Eleventh from "../Components/Attendance/Standard/11th";
import Twelveth from "../Components/Attendance/Standard/12th";

function Layout() {
  return (
    <>
      <Navbar> </Navbar>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Add_student" element={<Add_student />} />
        <Route path="/Update_student" element={<Update_student />} />
        <Route
          path="/Update_Student/update/:studentid"
          element={<UpdateStudent />}
        />
        <Route path="/Delete_student" element={<Delete_student />} />
        <Route path="/Take_Attendence" element={<Take_Attendence />} />
        <Route path="/Attendence_Standard" element={<Attendence_Standard />} />
        <Route path="/6th" element={<Sixth />} />
        <Route path="/7th" element={<Seventh />} />
        <Route path="/8th" element={<Eighth />} />
        <Route path="/9th" element={<Nineth/>} />
        <Route path="/10th" element={<Tenth />} />
        <Route path="/11th" element={<Eleventh />} />
        <Route path="/12th" element={<Twelveth />} />
      </Routes>
    </>
  );
}

export default Layout;
