jQuery(document).ready(function(){
    var url = "http://statenweb.mockable.io/conversions/";
    $('#inchButton').on('click',function(e){
        e.preventDefault();
        var input =$('#inchesToCenti').val();
        //if returned false, not valid input
        if(inputValidator(input) === false){
            return;
        }else{
        axios.get(url).then(function(response){
            console.log(response);
            var centimeters = parseFloat(response.data.centimetersInInch,10);
            var conversion = input * centimeters;
            console.log(conversion);
            $('#result').append('<p>'+ input +' centimeters in inches is: ' + conversion + '</p>');
        });
    }
    });
    $('#centiButton').on('click',function(e){
        e.preventDefault();
        var input = $('#centiToInch').val();
        if(inputValidator(input) === false){
            return;
        }
        else{
        axios.get(url).then(function(response){
            console.log(response);
           var inches = parseFloat(response.data.inchesInCm,10);
           var conversion = input * inches;
           console.log(conversion);
           $('#result').append('<p>'+ input +' inch in centimeters is: ' + conversion + '</p>');
        });
    }
    });

function inputValidator (input){
    if(!input){
        alert('enter something');
        return false;
    }
    if(isNaN(input)){
        var type = typeof input;
        alert('What you entered is not a number, you entered: ' + type);
        return false;
        
    }
}
});