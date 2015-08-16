var calculate = (function(){
	//CacheDOM
	var inputValue = document.getElementById("displaybox");
	//variables
	var newValue = "";
	_render();

	//Reisters Input Values Into Display Box
	function InputValue(value){
		if(value.match(/[-+*\/.]|[0-9]/g)){
			newValue += value;
			_render();
		}
		else if(value == '='){
			evaluate();
		}
		else if(value == 'c'){
			newValue = "";
			_render();
		}
		else
			console.log("Invalid!");
	}

	//Evaluates Written Values
	function evaluate(){
		try { 
			 newValue = eval(newValue); 
			 _render();

		}
		catch(e){
			  newValue = 'Error'; 
			  _render();
		} 
		finally{
			 newValue = "";
		}
	}

	//Renders into HTML
	function _render(){
		inputValue.value = newValue;
	}

	return {
		InputValue: InputValue
	};


})(this.value);