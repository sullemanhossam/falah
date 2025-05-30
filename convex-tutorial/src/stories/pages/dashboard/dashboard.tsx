import KPIOverview from "./sections/kpi-overivew";
import MyStudiesTable from "./sections/my-studies";

export function Dashboard(){
    return(
        <>
        <KPIOverview/>
        <MyStudiesTable/>
        </>
    )
}