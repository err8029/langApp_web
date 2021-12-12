
/*********************click on an option********************/
function toggleClass(elem,className){
    /*menu unfolding*/
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu');
	const icon = dropdown.querySelector('.fa-angle-right');

	toggleClass(menu,'hide');
	toggleClass(icon,'rotate-90');
}


/**************************select or change an option***********************/

function handleOptionSelected(e){
	/*toggleClass(e.target.parentNode, 'hide');		*/	

	const t = e.target;
    if (t.id=="option1"){/*english*/
        var currentLng = 'en';
        localStorage.setItem("currentLng",currentLng);
    }
    else if(t.id=="option2"){/*spanish*/
        var currentLng = 'es';
        localStorage.setItem("currentLng",currentLng);
    }
    else if(t.id=="option3"){/*catalan*/
        var currentLng = 'cat';
        localStorage.setItem("currentLng",currentLng);       
    }
    else if(t.id=="option4"){/*french*/
        var currentLng = 'fr';
        localStorage.setItem("currentLng",currentLng);
    }
    else if(t.id=="option5"){/*french*/
        var currentLng = 'lt';
        localStorage.setItem("currentLng",currentLng);
    }
	
	//reload webpage and set the language
	location.reload(); 
}

function handleTitleChange(e){
	const result = document.getElementById('result');

	
}

