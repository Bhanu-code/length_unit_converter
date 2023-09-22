var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){

	option_from = inputType.value;
	option_to = resultType.value;



//for meter to other

	if(option_from === "meter" && option_to==="kilometer"){
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "meter" && option_to==="centimeter"){
		result.value = Number(input.value) * 100;
	}else if(option_from === "meter" && option_to==="meter"){
		result.value = input.value
	}else if(option_from === 'meter' && option_to === 'decameter'){
		result.value = Number(input.value) * 0.1;
	}else if(option_from === 'meter' && option_to === 'millimeter'){
		result.value = Number(input.value) * 100;
	}else if(option_from === 'meter' && option_to === 'micrometer'){
		result.value = Number(input.value) * 1e+6;
	}else if(option_from === 'meter' && option_to === 'nanometer'){
		result.value = Number(input.value) * 1e+9;
	}else if(option_from === 'meter' && option_to === 'inch'){
		result.value = Number(input.value) * 39.37;
	}else if(option_from === 'meter' && option_to === 'foot'){
		result.value = Number(input.value) * 3.281;
	}


	//for kilometer to other

	if(option_from === "kilometer" && option_to==="meter"){
		result.value = Number(input.value) * 1000;
	}else if(option_from === "kilometer" && option_to==="centimeter"){
		
		result.value = Number(input.value) * 100000;
	}else if(option_from === "kilometer" && option_to==="kilometer"){
	
		result.value = input.value
	}else if(option_from === "kilometer" && option_to==="decameter"){
	
		result.value = Number(input.value) * 100;
	}else if(option_from === "kilometer" && option_to==="micrometer"){
	
		result.value = Number(input.value) * 1e+9;
	}else if(option_from === "kilometer" && option_to==="nanometer"){
	
		result.value = Number(input.value) * 1e+12;
	}else if(option_from === "kilometer" && option_to==="inch"){
 
		result.value = Number(input.value) * 39370;
	}else if(option_from === "kilometer" && option_to==="foot"){
	
		result.value = Number(input.value) * 3281;
	}else if(option_from === "kilometer" && option_to === 'millimeter'){
		result.value = Number(input.value) * 1e+6;
	}

	//centimeter to other

	if(option_from === "centimeter" && option_to==="Kilometer"){ 
		result.value = Number(input.value) * 0.00001;
	}else if(option_from === "centimeter" && option_to==="meter"){ 
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "centimeter" && option_to==="centimeter"){
		result.value = input.value
	}else if(option_from === "centimeter" && option_to==="decameter"){ 
		result.value = Number(input.value) / 1000;
	}else if(option_from === "centimeter" && option_to==="micrometer"){ 
		result.value = Number(input.value) * 10000;
	}else if(option_from === "centimeter" && option_to==="nanometer"){

		result.value = Number(input.value) * 1e+7;
	}else if(option_from === "centimeter" && option_to==="inch"){ 
		result.value = Number(input.value) / 2.54;
	}else if(option_from === "centimeter" && option_to==="foot"){ 
		result.value = Number(input.value) / 30.48;
	}else if(option_from === "centimeter" && option_to==="millimeter"){ 
		result.value = Number(input.value) * 10;
	}

	//decameter to other

	if(option_from === "decameter" && option_to==="kilometer"){
		result.value = Number(input.value) / 100;
	}else if(option_from === "decameter" && option_to==="meter"){ 
		result.value = Number(input.value) * 10;
	}else if(option_from === "decameter" && option_to==="centimeter"){
		result.value = Number(input.value) * 1000;
	}else if(option_from === "decameter" && option_to==="decameter"){ 
		result.value = input.value;
	}else if(option_from === "decameter" && option_to==="micrometer"){ 
		result.value = Number(input.value) * 1e+7;
	}else if(option_from === "decameter" && option_to==="nanometer"){ 
		result.value = Number(input.value) * 1e+10;
	}else if(option_from === "decameter" && option_to==="inch"){ 
		result.value = Number(input.value) * 393.7;
	}else if(option_from === "decameter" && option_to==="foot"){ 
		result.value = Number(input.value) * 32.808;
	}else if(option_from === "decameter" && option_to==="millimeter"){
		 
		result.value = Number(input.value) * 10000;
	}

	//micrometer to other

	if(option_from === "micrometer" && option_to==="kilometer"){

		result.value = Number(input.value) / 1e+9;
	}else if(option_from === "micrometer" && option_to==="meter"){
 
		result.value = Number(input.value) / 1e+6;
	}else if(option_from === "micrometer" && option_to==="centimeter"){

		result.value = Number(input.value) / 10000;
	}else if(option_from === "micrometer" && option_to==="decameter"){

		result.value = Number(input.value) / 1e+7;
	}else if(option_from === "micrometer" && option_to==="micrometer"){
 
		result.value = input.value;
	}else if(option_from === "micrometer" && option_to==="nanometer"){
		result.value = Number(input.value) * 1000;
	}else if(option_from === "micrometer" && option_to==="inch"){
	
		result.value = Number(input.value) * 25400;
	}else if(option_from === "micrometer" && option_to==="foot"){
	
		result.value = Number(input.value) * 304800;
	}else if(option_from === "micrometer" && option_to==="millimeter"){
 
		result.value = Number(input.value) / 1000;
	}

	//nanometer to other

	if(option_from === "nanometer" && option_to==="kilometer"){
	 
		result.value = Number(input.value) / 1e+12;
	}else if(option_from === "nanometer" && option_to==="meter"){
	
		result.value = Number(input.value) / 1e+9;
	}else if(option_from === "nanometer" && option_to==="centimeter"){
	
		result.value = Number(input.value) / 1e+7;
	}else if(option_from === "nanometer" && option_to==="decameter"){
	
		result.value = Number(input.value) / 1e+10;
	}else if(option_from === "nanometer" && option_to==="micrometer"){
		result.value = input.value;
	}else if(option_from === "nanometer" && option_to==="nanometer"){
		result.value = input.value;
	}else if(option_from === "nanometer" && option_to==="inch"){
 
		result.value = Number(input.value) / 2.54e+7;
	}else if(option_from === "nanometer" && option_to==="foot"){

		result.value = Number(input.value) / 3.048e+8;
	}else if(option_from === "nanometer" && option_to==="millimeter"){

		result.value = Number(input.value) / 1e+6;
	}

	//inch to other
	if(option_from === "inch" && option_to==="kilometer"){
		 
		result.value = Number(input.value) / 39370;
	}else if(option_from === "inch" && option_to==="meter"){
		
		result.value = Number(input.value) / 39.37;
	}else if(option_from === "inch" && option_to==="centimeter"){
		 
		result.value = Number(input.value) * 2.54;
	}else if(option_from === "inch" && option_to==="decameter"){
		result.value = Number(input.value) / 393.7;
	}else if(option_from === "inch" && option_to==="micrometer"){
		
		result.value = Number(input.value) * 25400;
	}else if(option_from === "inch" && option_to==="nanometer"){
		
		result.value = Number(input.value) * 2.54e+7;
	}else if(option_from === "inch" && option_to==="inch"){
		 
		result.value = input.value;
	}else if(option_from === "inch" && option_to==="foot"){
		 
		result.value = Number(input.value) / 12;
	}else if(option_from === "inch" && option_to==="millimeter"){
	
		result.value = Number(input.value) * 25.4;
	}

	//foot to other

	if(option_from === "foot" && option_to==="kilometer"){
		
		result.value = Number(input.value) / 3281;
	}else if(option_from === "foot" && option_to==="meter"){
	 
		result.value = Number(input.value) / 3.281;
	}else if(option_from === "foot" && option_to==="centimeter"){
	 
		result.value = Number(input.value) * 30.48;
	}else if(option_from === "foot" && option_to==="decameter"){
	 
		result.value = Number(input.value) / 32.808;
	}else if(option_from === "foot" && option_to==="micrometer"){
		
		result.value = Number(input.value) * 304800;
	}else if(option_from === "foot" && option_to==="nanometer"){
		
		result.value = Number(input.value) * 3.048e+8;
	}else if(option_from === "foot" && option_to==="inch"){
		 
		result.value = Number(input.value) * 12;
	}else if(option_from === "foot" && option_to==="foot"){
		
		result.value = input.value
	}else if(option_from === "foot" && option_to==="millimeter"){
		
		result.value = Number(input.value) * 304.8;
	}

	//millimeter to other

	if(option_from === "millimeter" && option_to==="kilometer"){
		result.value = Number(input.value) / 1e+6;
	}else if(option_from === "millimeter" && option_to==="meter"){ 
		result.value = Number(input.value) / 1000;
	}else if(option_from === "millimeter" && option_to==="centimeter"){ 
		result.value = Number(input.value) / 10;
	}else if(option_from === "millimeter" && option_to==="decameter"){

		result.value = Number(input.value) / 10000;
	}else if(option_from === "millimeter" && option_to==="micrometer"){ 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "millimeter" && option_to==="nanometer"){
		result.value = Number(input.value) * 1e+6;
	}else if(option_from === "millimeter" && option_to==="inch"){ 
		result.value = Number(input.value) / 25.4;
	}else if(option_from === "millimeter" && option_to==="foot"){
		result.value = Number(input.value) / 304.8;
	}else if(option_from === "millimeter" && option_to==="millimeter"){
		result.value = input.value;
	}


}
