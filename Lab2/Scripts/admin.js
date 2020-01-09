function saveItem(){
    var code = $("#txtCode").val();
    $("#txtCode").val("");

    var description = $("#txtDescription").val();
    $("#txtDescription").val("");

    var price = $("#txtPrice").val();
    $("#txtPrice").val("");

    var image = $("#txtImage").val();
    $("#txtImage").val("");

    var category = $("#txtCategory").val();
    $("#txtCategory").val("");

    var stock = $("#txtStock").val();
    $("#txtStock").val("");

    var deliveryDays = $("#txtDeliveryDays").val();
    $("#txtDeliveryDays").val("");

    // HOMEWORK:
    // read the values from the rest of the input fields

    console.log(code);
    console.log(description);
    console.log(price);
    console.log(image);
    console.log(category);
    console.log(stock);
    console.log(deliveryDays);

}

function init(){
    // console.log("This is the Admin page!!");


    $("#btnSave").click(saveItem);

    $("#txtCode").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })

    $("#txtDescription").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })

    $("#txtPrice").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })

    $("#txtImage").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })

    $("#txtCategory").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })

    $("#txtStock").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })

    $("#txtDeliveryDays").keypress(function(e){

        if(e.key == "Enter"){
            saveItem();
        }
    })
    
}



window.onload = init;
