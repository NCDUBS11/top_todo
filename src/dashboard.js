
import * as validate from "./validate";
import { Project, projectList } from "./new-project";
import * as populate from "./populate";
import { compareAsc, format, formatDate, formatDistance, formatDistanceToNow } from "date-fns";


export default function dashboardLoad(){
    const mainArea = document.getElementById("main");

    mainArea.innerHTML =
    `<div id="dashboard" class="dashboard">
            <div id="dashTopRow" class="dashTopRow">
                <div id="dashUpcoming" class="dashUpcoming">
                    <div id="upcomingTitle" class="upcomingTitle">
                        Upcoming Tasks:
                    </div>
                    <div id="upcomingTaskArea" class="upcomingTaskArea">
                        <div id="upcomingTaskBlock" class="upcomingTaskBlock">
                            <div id="upcomingTaskName" class="upcomingTaskName">Example Task Name</div>
                            <div id="upcomingTaskDue" class="upcomingTaskDue">Due Date</div>
                        </div>
                    </div>
                </div>
                <div id="dashClock" class="dashClock">
                    <div id="clock" class="clockMonth">January</div>
                    <div id="clock" class="clockDay">01</div>
                    <div id="clock" class="clockYear">2000</div>
                </div>
            </div>
            <div id="dashProjectRow" class="dashProjectRow">
                <div id="dashProjectList" class="dashProjectList">
                    <div id="projectListTitle" class="projectListTitle">
                        Projects:
                    </div>
                    <div id="projectListArea" class="projectListArea">
                        <div id="projectListBlock" class="projectListBlock">
                            <div id="projectListName" class="projectListName">Project Name</div>
                            <div id="nextProjectListTask" class="nextProjectListTask">Next Task in List</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

    populate.dashboardRefresh();
}