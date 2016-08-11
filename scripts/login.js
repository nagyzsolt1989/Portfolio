function clicked() 
	{	
	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	
	var coruser ="Zsolti";
	var corpass ="király";

    	if(user.value == coruser && pass.value == corpass)
		{
			window.open("http://www.zsoltnagy.me/backend.html");
    	}
    	else
		{
    		window.alert("Hibás belépési adatok");
    	}   	
    }