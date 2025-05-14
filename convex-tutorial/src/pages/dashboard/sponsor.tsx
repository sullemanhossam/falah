// Features:
// 	•	Create/manage study requests
// 	•	View/respond to CRO proposals
// 	•	Track milestones & progress
// 	•	Upload/view secured docs (NDAs/CDAs)


import MilestonesCell from "../../cells/milestones";
import ProposalsCell from "../../cells/proposals";
import StudyRequestsCell from "../../cells/study_requests";


export default function SponsorDashboard(){
    return (
        <>
        <StudyRequestsCell/>
        <ProposalsCell/>
        <MilestonesCell/>
        </>
    )
}