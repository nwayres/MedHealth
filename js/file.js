const myForm = document.getElementById('myForm');
const patient_name = document.getElementById('patient_name');
const ssn_number = document.getElementById('ssn_number');
const birthday = document.getElementById('birthday');
const sex = document.getElementById('sex');
const gender = document.querySelectorAll('input[name="gender"]');
const ms = document.getElementById('ms');
const marital_status = document.querySelectorAll('input[name="marital_status"]');
const eth = document.getElementById('eth');
const ethnicity = document.querySelectorAll('input[name="ethnicity"]');
const race = document.getElementById('race');
const home_address  = document.getElementById('home_address');
const city = document.getElementById('city');
const state_name = document.getElementById('state_name');
const zip = document.getElementById('zip');
const country = document.getElementById('country');
const home_phone = document.getElementById('home_phone');
const work_phone = document.getElementById('work_phone');
const cell_phone = document.getElementById('cell_phone');
const email = document.getElementById('email');
const employer = document.getElementById('employer');
const primary_insurance = document.getElementById('primary_insurance');
const sub_name = document.getElementById('sub_name');
const sub_dob = document.getElementById('sub_dob');
const ins_id= document.getElementById('ins_id');
const ins_group = document.getElementById('ins_group');
const patient_relationship = document.getElementById('patient_relationship');
const sec_sub_dob = document.getElementById('sec_sub_dob');
const sec_ins_id = document.getElementById('sec_ins_id');
const pharmacy_name = document.getElementById('pharmacy_name');
const pharmacy_location = document.getElementById('pharmacy_location');
const pharmacy_number = document.getElementById('pharmacy_number');
 


document.getElementById('myForm').addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

 

function checkInputs() {

	// regex variables
	var numbers = /^[0-9]+$/;
	var letters = /^[A-Za-z]+$/;
	var ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
	var date = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
	var alphanumeric = /^[a-zA-Z0-9\s,'-]*$/;
	var phone_number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	
	// trim to remove the whitespaces
	const patient_nameValue = patient_name.value.trim();
	const birthdayValue = birthday.value.trim();
	const ssn_numberValue = ssn_number.value.trim();
    const home_addressValue = home_address.value.trim();
	const cityValue = city.value.trim();
	const zipValue = zip.value.trim();
    const home_phoneValue = home_phone.value.trim();
    const work_phoneValue = work_phone.value.trim();
    const cell_phoneValue = cell_phone.value.trim();
    const emailValue = email.value.trim();
    const employerValue = employer.value.trim();
    const primary_insuranceValue = primary_insurance.value.trim();
    const sub_nameValue = sub_name.value.trim();
	const sub_dobValue = sub_dob.value.trim();
	const ins_idValue = ins_id.value.trim();
    const ins_groupValue = ins_group.value.trim();
    const patient_relationshipValue = patient_relationship.value.trim();
    const sec_sub_dobValue = sec_sub_dob.value.trim();
    const sec_ins_idValue = sec_ins_id.value.trim();
    const pharmacy_nameValue = pharmacy_name.value.trim();
	const pharmacy_locationValue = pharmacy_location.value.trim();
	const pharmacy_numberValue = pharmacy_number.value.trim();
	
	/* Validate patient name for blank and letters only */

	if(patient_nameValue === '') {
		setErrorFor(patient_name, 'Cannot be blank');
		patient_name.focus(); }

	else if (!letters.test(patient_nameValue)) {
		setErrorFor(patient_name, 'Letters only');	
		patient_name.focus(); } 
		
	else {
		setSuccessFor(patient_name); } 

	/* Validate social security number for blank and ***-**-**** or ********* format */

    if(ssn_numberValue === '') {
		setErrorFor(ssn_number, 'Cannot be blank');
		ssn_number.focus(); }
		
	else if(!ssnPattern.test(ssn_numberValue)) {
		setErrorFor(ssn_number, 'Enter a valid social security number');
		ssn_number.focus(); } 
	
	else {
		setSuccessFor(ssn_number); }	

    /* Validate birthday for blank and ***-**-**** or ********* format */

	if(birthdayValue === '') {
		setErrorFor(birthday, 'Cannot be blank');
		birthday.focus(); }

	else if (!date.test(birthdayValue)) {
		setErrorFor(birthday, 'Enter a valid birthdate');
		birthday.focus(); } 

	else {
		setSuccessFor(birthday); }
	
	 /* Validate radio button is selected (gender) */ 
		
	if ( ( myForm.gender[0].checked == false ) && ( myForm.gender[1].checked == false ) ) {
		setErrorFor(sex, 'Please make a selection'); 
		gender.focus();
		return false; }
		
	else {
			setSuccessFor(sex); }

	/* Validate radio button is selected (marital status) */ 
		
	if ( ( myForm.marital_status[0].checked == false ) && ( myForm.marital_status[1].checked == false ) && ( myForm.marital_status[2].checked == false ) && ( myForm.marital_status[3].checked == false )) {
		setErrorFor(ms, 'Please make a selection'); 
		marital_status.focus();
		return false; }
		
	else {
			setSuccessFor(ms); }

	/* Validate radio button is selected (ethnicity) */ 
		
	if ( ( myForm.ethnicity[0].checked == false ) && ( myForm.ethnicity[1].checked == false ) ) {
		setErrorFor(eth, 'Please make a selection'); 
		ethnicity.focus();
		return false; }
		
	else {
			setSuccessFor(eth); }

		/* Validate drop down menu is selected (race) */ 
		var card1 = document.getElementById("ddlView");
		
		if(card1.selectedIndex == 0) {
		 
			
			setErrorFor(race, 'Please make a selection'); 
			race.focus();
			
			 }

			else {
				setSuccessFor(race); }     
				

				/* Validate drop down menu is selected (state) */

				var card2 = document.getElementById("ddlView2");
		
		if(card2.selectedIndex == 0) {
		 
			
			setErrorFor(state_name, 'Please make a selection'); 
			state_name.focus();
			
			 }

			else {
				setSuccessFor(state_name); }

		/* Validate drop down menu is selected (country) */ 

		var card3 = document.getElementById("ddlView3");
		
		if(card3.selectedIndex == 0) {
		 
			
			setErrorFor(country, 'Please make a selection'); 
			country.focus();
			
			 }

			else {
				setSuccessFor(country); }
				
    /* Validate home address for blank and only letters and numbers */
    
    if(home_addressValue === '') {
		setErrorFor(home_address, 'Cannot be blank');
		home_address.focus(); }

	else if (!alphanumeric.test(home_addressValue)) {
		setErrorFor(home_address, 'Enter a valid address');
		home_address.focus();} 
		
	else {
		setSuccessFor(home_address); }
	
	/* Validate city for blank and only letters */

    if(cityValue === '') {
		setErrorFor(city, 'Cannot be blank');
		city.focus(); }

	else if (!letters.test(cityValue))  {
		setErrorFor(city, 'Enter a valid city');
		city.focus(); }
		
	else{
		setSuccessFor(city); } 

	
	
	/* Validate zip for blank and only 5 numbers */
	
    if(zipValue === "") {
		setErrorFor(zip, 'Cannot be blank');	
		zip.focus(); }

	else if (zipValue.length!=5  || !numbers.test(zipValue))  {
		setErrorFor(zip, 'Enter a valid zip code');
		zip.focus(); } 
		
	else {
			setSuccessFor(zip); }

	
	
	/* Validate home phone for blank and validate and format for North American phone numbers */
	
    if(home_phoneValue === '') {
		setErrorFor(home_phone, 'Cannot be blank');
		home_phone.focus(); }

     else if (!phone_number.test(home_phoneValue))  {
		setErrorFor(home_phone, 'Enter a valid phone number');
		home_phone.focus(); } 
		
	else {
		setSuccessFor(home_phone); }
		
		
	/* Validate work phone for blank and validate and format for North American phone numbers */	
	
    if(work_phoneValue === '') {
		setErrorFor(work_phone, 'Cannot be blank');
		work_phone.focus(); }
		
	else if (!phone_number.test(work_phoneValue))  {
			setErrorFor(work_phone, 'Enter a valid phone number');
			work_phone.focus(); } 
			
	else {
		setSuccessFor(work_phone); }
		
	
	/* Validate home phone for blank and validate and format for North American phone numbers */    
	
	if(cell_phoneValue === '') {
		setErrorFor(cell_phone, 'Cannot be blank');
		cell_phone.focus(); } 
		
	else if (!phone_number.test(cell_phoneValue))  {
			setErrorFor(cell_phone, 'Enter a valid phone number');
			cell_phone.focus(); } 
			
	else {
		setSuccessFor(cell_phone); }

	/* Validate email for blank and the standard format *****@****.com */

	if(emailValue === '') {
		setErrorFor(email, 'Cannot be blank');
		email.focus(); } 
		
	else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		email.focus(); } 
		
	else {
		setSuccessFor(email); }
	
	/* Validate employer for blank */
    
    if(employerValue === '') {
		setErrorFor(employer, 'Cannot be blank');
		employer.focus(); }
		
	else {
		setSuccessFor(employer); }

	/* Validate primary insurance for blank */
	
    if(primary_insuranceValue === '') {
		setErrorFor(primary_insurance, 'Cannot be blank');
		primary_insurance.focus(); }

	else {
		setSuccessFor(primary_insurance); }
	
	/* Validate subscribers name for blank */

    if(sub_nameValue === '') {
		setErrorFor(sub_name, 'Cannot be blank');
		sub_name.focus(); }

	 else {
		setSuccessFor(sub_name); }
   
	/* Validate subscriber's dob for blank */

    if(sub_dobValue === '') {
		setErrorFor(sub_dob, 'Cannot be blank');
		sub_dob.focus(); }
	
	else if (!date.test(sub_dobValue)) {
		setErrorFor(sub_dob, 'Enter a valid birthdate');
		sub_dob.focus(); } 

	else {
		setSuccessFor(sub_dob); }
	
		 
	/* Validate insurance id for blank and for only number and at least but not more than 9 digits */

    if(ins_idValue === '') {
		setErrorFor(ins_id, 'Cannot be blank');
		ins_id.focus(); }
		
	else if (!numbers.test(ins_idValue) || ins_idValue.length != 9 )  {
		setErrorFor(ins_id, 'Enter a valid id number');
		ins_id.focus(); }
		
	else {
		setSuccessFor(ins_id); }
	

	/* Validate insurance group for blank */

    if(ins_groupValue === '') {
		setErrorFor(ins_group, 'Cannot be blank');
		ins_group.focus(); } 
		
	else {
		setSuccessFor(ins_group); }
	
	/* Validate patient relationship for blank */

    if(patient_relationshipValue === '') {
		setErrorFor(patient_relationship, 'Cannot be blank');
		patient_relationship.focus(); }
		
	else {
		setSuccessFor(patient_relationship); }
	
	/* Validate secondary insurance dob for correct format */

    if ((sec_sub_dobValue != '') && (!date.test(sec_sub_dobValue))) {
		setErrorFor(sec_sub_dob, 'Use correct format');
		sec_sub_dobValue.focus(); }
		

	
	/* Validate insurance id for blank and for only number and at least but not more than 9 digits */
 if ((sec_ins_idValue != '') &&  (!numbers.test(sec_ins_idValue) && sec_ins_idValue.length != 9 )) {
		setErrorFor(sec_ins_id, 'Enter a valid id number');
		sec_ins_id.focus(); }
		
	
	
	/* Validate pharmacy name for blank */
    
    if(pharmacy_nameValue === '') {
		setErrorFor(pharmacy_name, 'Cannot be blank');
		pharmacy_name.focus(); }
		
	else {
		setSuccessFor(pharmacy_name); }
	
	/* Validate pharmacy location for blank */

    if(pharmacy_locationValue === '') {
		setErrorFor(pharmacy_location, 'Cannot be blank');
		pharmacy_location.focus(); }
		
	else if (!alphanumeric.test(pharmacy_locationValue)) {
			setErrorFor(pharmacy_location, 'Enter a valid address');
			pharmacy_location.focus(); }
			
	else {
		setSuccessFor(pharmacy_location); }

	/* Validate pharmacy number for blank and format for North American phone numbers */

    if(pharmacy_numberValue === '') {
		setErrorFor(pharmacy_number, 'Cannot be blank');
		pharmacy_number.focus(); }
		
	else if (!phone_number.test(pharmacy_numberValue))  {
        setErrorFor(pharmacy_number, 'Use correct format');
		pharmacy_number.focus(); } 
		
	else {
		setSuccessFor(pharmacy_number); }
  



function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}




	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


}


