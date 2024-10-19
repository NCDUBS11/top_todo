
export default function newTask(){

    const mainArea = document.getElementById("main");

        mainArea.innerHTML = `
            <div id="newTaskMenu" class="newTaskMenu">
            <form action="" id="form" class="form">
                <fieldset>
                    <legend>New Task</legend>
                    <div class="formControl taskName">
                        <label for="taskName">Task:</label>
                        <input type="text" name="taskName" id="taskName" class="taskName"
                        placeholder="Task Title">
                            <img id="error" class="error" src="icons/xmark-svgrepo-com.png" alt="">
                    </div>
                    <div class="formControl taskDueDate">
                        <label for="">Due:</label>
                        <input type="date" name="taskDueDate" id="taskDueDate" class="taskDueDate">
                        <img id="error" class="error" src="icons/xmark-svgrepo-com.png" alt="">
                    </div>
                    <div class="formControl taskDescription">
                        <label for="taskDescription">Description:</label>
                        <textarea type="text" rows="5" name="taskDescription" id="taskDescription" class="taskDescription"
                        placeholder="Task Description"></textarea>
                        <img id="error" class="error" src="icons/xmark-svgrepo-com.png" alt="">
                    </div>
                    <div class="formControl submitNewTask">
                        <button id="submitBtn" class="submitBtn" type="button" onclick="">Submit</button>
                        <button id="cancelBtn" class="cancelBtn" type="button" onclick="">Cancel</button>
                        <p id="error" class="error">'error desc'</p>
                    </div>
                </fieldset>
            </form>
        </div>
        `;
};