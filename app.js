		// DOM 
		let inputs = document.querySelectorAll('input'); // select les inputs
		let page = document.getElementById('page');
		let parent;

		// les fonctions


		function Create_Element()

			{
				let element = document.createElement(inputs[0].value);

				// les boucles 
				for ( let x=1 ;x < inputs.length;x++)
				{

						let attribute = inputs[x].getAttribute('placeholder');

						let value = inputs[x].value;

						// les conditions 
						if(value){

							element[attribute] = value;
						}

						page.appendChild(element);	

				}

				parent = element.parentNode;
			
				

				console.log(element);

			}


			function remove_element() {

				let last_element = parent.lastChild;

				last_element.remove();
			}




			function reset_all(){

				for(let x = 0 ; x < inputs.length; x++){

					inputs[x].value = "";
				}
			}