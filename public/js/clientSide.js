

$(document).ready(function () {
    //Saving Medical Record
    $("#saveMedicalRecord").click(function () {
        saveMedicalRecord();
    });
});



function saveMedicalRecord() {

    //Getting HTML components
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var gender =  document.getElementById('gender');
    var age = document.getElementById('age');
    var city = document.getElementById('city');
    var country = document.getElementById('country');
    var diabeteStatus = document.getElementById('diabeteStatus');

    //Getting Medical Record Values
    var MedicalRecords = {}
    MedicalRecords.firstName = firstName.value;
    MedicalRecords.lastName = lastName.value;
    MedicalRecords.gender = gender.value;
    MedicalRecords.age = age.value;
    MedicalRecords.city = city.value;
    MedicalRecords.country = country.value;
    MedicalRecords.diabeteStatus = diabeteStatus.value;
    //Sending medical mecord to be saved in database
   $.post('/MedicalRecord', MedicalRecords, function (response) {

    }, 'JSON');

    //
    document.getElementById("result").innerHTML = '<div > '+MedicalRecords.firstName+' '+MedicalRecords.lastName+' '+MedicalRecords.gender+' '+MedicalRecords.age+' '+MedicalRecords.country+' '+MedicalRecords.city+'</div>';
   

   
}

