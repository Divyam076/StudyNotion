import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from "../components/core/Dashboard/SideBar"
function Dashboard(){
    const {loading:profilieLoading}=useSelector((state)=>state.profile);
    const {loading:authLoading}=useSelector((state)=>
    state.auth);

    if(profilieLoading || authLoading){
        return(
            <div className="fles items-center justify-center min-h-[calc(100vh-3.5rem)]">
                <div className="spinner"></div>
            </div>
            
        )
    }
    return(
        <div className="relative flex min-h-[calc(100vh-3.5rem)]">
            <SideBar />
            <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
                <div className="mx-auto w-11/12 max-w-[1000px] py-10">
                    <Outlet />
                </div>
            </div>
        </div>

    )

}


export default Dashboard