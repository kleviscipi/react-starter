//genereate messages for validation
//@param1 events generatet on change 
//@param2 type of control
//@param3 experimental (not used)
export function messagesValidate(event={},type,customvalue = false){
	const msg = {}
	var value 	= event.value;

	switch(type){

		case 'isEmpty':
			if(value.trim()==""){

				var txt_empty = "This field is empty!";
				msg[event.name] = {error:1,classname:'parsley-error',message:txt_empty};

			}else{
				msg[event.name] = {classname:'',error:0,message:''};
			}

		break;

		case 'isEmail':

			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
				var txt_email = "Email is not valid!";
				msg[event.name] = {error:1,classname:'parsley-error',message:txt_email};
	  		}else{
				msg[event.name] = {classname:'',error:0,message:''};
	  		}

		break;

		case 'isNumber':

			if(isNaN(Number(value))){

				var txt_number = "Just numbers!";
				msg[event.name] = {error:1,classname:'parsley-error',message:txt_number};
			}else{
				msg[event.name] = {classname:'',error:0,message:''};
			}

		break;

		case 'is6length':
			if(value.length < 6) {

				var txt_6length = "6 characters minimun";
				msg[event.name] = {error:1,classname:'parsley-error',message:txt_6length};

			}else{
				msg[event.name] = {classname:'',error:0,message:''};
			}


		break;

	}


	return msg;
}

//MULTIPLES VALIDATE AT TIME
//@param1  arry obj-> func,field,valore state
//examples

    /*	var eventError = ValidateAll(
    				[
    					{'func'	:'isEmail','field':'nome','value':this.state.nome},
    					{'func'	:'is6length','field':'codice','value':this.state.codice},
    				]
    			); */

export function ValidateAll(event = new Array){
	const fields 	={};
	var render 		={};
	var errorsgenerate = [];
	var errors 		= 0;
	var disabled 	= false;

	event.map((arr,index)=>{		

				if(arr.value.trim() == "" ){
					fields[arr.field] = messagesValidate({name:arr.field,value:arr.value},'isEmpty')[arr.field];
				}else{
					switch(arr.func){
						case 'isEmail':
							fields[arr.field] = messagesValidate({name:arr.field,value:arr.value},'isEmail')[arr.field];
						break;
						case 'isNumber':
							fields[arr.field] = messagesValidate({name:arr.field,value:arr.value},'isNumber')[arr.field];
						break
						case 'is6length':
							fields[arr.field] = messagesValidate({name:arr.field,value:arr.value},'is6length')[arr.field];
						break
						case 'isEmpty':
							fields[arr.field] = messagesValidate({name:arr.field,value:arr.value},'isEmpty')[arr.field];
						break
						case 'hasTipologia2':

						var customvalue = -1;
						if(arr.customvalue){
							customvalue = arr.customvalue;
						}
						fields[arr.field] = messagesValidate({name:arr.field,value:arr.value},'hasTipologia2',customvalue)[arr.field];	
							
						break
					}						
				}
		errorsgenerate.push(fields[arr.field].error);			
	})

	if(errorsgenerate.includes(1)){
		errors = 1;
		disabled = true;
	}else{
		disabled = false;
		errors = 0;
	}

	errorsgenerate = [];

	return {
		fields,
		errors,
		disabled
	}
}

export function ValidateServer(validations = {}){

	const fields 	={};
	var disabled = true;

	Object.keys(validations).map((index)=>{
		fields[index] = {error: validations[index].error ,classname:'parsley-error',message: validations[index].message};
	});

	return {
		fields,
		disabled
	}
}
//SINGLE VALIDATE AT TIME
//@param1: un array object [{'func'	:'isEmail','field':name,'value':this.state[name]}] // ciaoe nomte del controllo, nome filed (input) , e valore state
//@param2 : il tipo di controlo in base al switch case
//EXAMPLE

		/* var	eventCodice = ValidateSingle(
	    				[
	    					{'func'	:'isEmail','field':name,'value':this.state[name]},
	    				],name
	    			);	
	    */
export function ValidateSingle(event = new Array,single){

	const fields 	={};
	var render 		={};
	var errorsgenerate = [];
	var errors 		= 0;
	var disabled 	= false;
	
	event.map((arr,index)=>{		
			if(arr.field==single){
				if(arr.value.trim() == "" ){
					fields[arr.field] = messagesValidate({name:arr.field,value:arr.value},'isEmpty')[arr.field];
				}else{
					switch(arr.func){
						case 'isEmail':
							fields[arr.field] = messagesValidate({name:arr.field,value:arr.value},'isEmail')[arr.field];
						break;

						case 'isNumber':
							fields[arr.field] = messagesValidate({name:arr.field,value:arr.value},'isNumber')[arr.field];

						break

						case 'is6length':
							fields[arr.field] = messagesValidate({name:arr.field,value:arr.value},'is6length')[arr.field];
						break

						case 'isEmpty':
							fields[arr.field] = messagesValidate({name:arr.field,value:arr.value},'isEmpty')[arr.field];
						break

						case 'hasTipologia2':
						var customvalue = -1;
						if(arr.customvalue){
							customvalue = arr.customvalue;
						}
						fields[arr.field] = messagesValidate({name:arr.field,value:arr.value},'hasTipologia2',customvalue)[arr.field];	
						break
					}						
				}
			}
		errorsgenerate.push(fields[arr.field].error);			
	})

	if(errorsgenerate.includes(1)){
		errors = 1;
		disabled = true;
	}else{
		disabled = false;
		errors = 0;
	}

	errorsgenerate = [];

	return {
		fields,
		errors,
		disabled
	}
}





