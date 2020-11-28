let eventList = [];

function populateList() {

    let item = {
        item: "Handla mat",
        checked: "main"
    }

    let item2 = {
        item: "Gå till gymmet",
        checked: ""
    }

    let item3 = {
        item: "Skjutsa Viktor",
        checked: ""
    }

    eventList.push(item);
    eventList.push(item2);
    eventList.push(item3);
}

$("#form").submit(function (event) {
    event.preventDefault();//säkerhetsåtgärd(default?)
    let userInput = $("#userInput").val();


    let itemToAdd = {
        item: userInput,
        checked: ""
    }

    if (!userInput) {
        alert("Du måste fylla i händelsen");
    } else {
        eventList.push(itemToAdd);
    }

    $("#userInput").val("");//man rensar inputfältet efter man har lagt till händelse
    displayList();
})

function displayList() {
    let list = $("#ul-list");
    list.empty();//man tömmer listan för att undvika dubletter

    for (let i = 0; i < eventList.length; i++) {
        list.append(`<li class=${eventList[i].checked}>  ${eventList[i].item} <span> X </span></li><br>`);
    }

    deleteItem();
    onItemMark();

}

function deleteItem() {
    let allListItems = $("span");

    for (let i = 0; i < allListItems.length; i++) {
        $(allListItems[i]).click(function () {
            let parentElement = this.parentElement;
            parentElement.style.display = "none";
            eventList.splice(i, 1);
        })
    }
}


function onItemMark() {
    let allMarkedItems = $("li");

    for (let i = 0; i < allMarkedItems.length; i++) {
        $(allMarkedItems[i]).click(function () {
            $(allMarkedItems[i]).toggleClass("main");
            console.log(allMarkedItems);

            if (eventList[i].checked === "main") {
                eventList[i].checked = "";
            } else if (eventList[i].checked === "") {
                eventList[i].checked = "main";
            }
            console.log(eventList);

        })
        
    }
}



populateList();
displayList();
