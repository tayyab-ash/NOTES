console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";

    let addTitle = document.getElementById("addTitle");
    let title = localStorage.getItem("title");
    if (title == null) {
        titleObj = [];
    } else {
        titleObj = JSON.parse(title);
    }
    titleObj.push(addTitle.value);
    localStorage.setItem("title", JSON.stringify(titleObj));
    addTitle.value = "";
    showNotes();
});

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }



    let title = localStorage.getItem("title");
    if (title == null) {
        titleObj = [];
    } else {
        titleObj = JSON.parse(title);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        let dvalue = "New Note";
        html += `
            
                <div class="item" >
                        <div class="note-data">
                            <div class="data-heading">
                                <h3>${titleObj[index] == '' ? dvalue : titleObj[index]}</h3>
                            </div>
                            <div class="data-text"> 
                                <p>${element}</p>
                            </div>
                        </div>
                        <div class="delete-note">
                            <button id="${index}" class="delete-note" onclick="deleteNote(this.id)">Delete note</button>
                        </div>
                    </div>`;

    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}


function deleteNote(index) {
    //   console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    let title = localStorage.getItem("title");
    if (title == null) {
        titleObj = [];
    } else {
        titleObj = JSON.parse(title);
    }
    titleObj.splice(index, 1);
    localStorage.setItem("title", JSON.stringify(titleObj));
    showNotes();


}