function work(){
    var i = document.getElementById("selectit").selectedIndex;
    if(i == 0){
        var currentNow = new Date();
        var ans = add(document.getElementById('lo').value, document.getElementById('ro').value);
        
        var currentThen = new Date();
        past = currentNow.getHours() * 3600 + currentNow.getMinutes() * 60 + currentNow.getSeconds() + currentNow.getMilliseconds() * 0.001;
        now = currentThen.getHours() * 3600 + currentThen.getMinutes() * 60 + currentThen.getSeconds() + currentThen.getMilliseconds() * 0.001;
        document.getElementById('time').innerHTML = "Duration: " + (now - past).toString() + " s";
        document.getElementById('result').innerHTML = ans;
    }
    else if(i == 1){
        var currentNow = new Date();
        var ans = subt(document.getElementById('lo').value, document.getElementById('ro').value);
        
        var currentThen = new Date();
        past = currentNow.getHours() * 3600 + currentNow.getMinutes() * 60 + currentNow.getSeconds() + currentNow.getMilliseconds() * 0.001;
        now = currentThen.getHours() * 3600 + currentThen.getMinutes() * 60 + currentThen.getSeconds() + currentThen.getMilliseconds() * 0.001;
        document.getElementById('time').innerHTML = "Duration: " + (now - past).toString() + " s";
        document.getElementById('result').innerHTML = ans;
    }
    else if(i == 2){
        var currentNow = new Date();
        var ans = mult_long(document.getElementById('lo').value, document.getElementById('ro').value);
        
        var currentThen = new Date();
        past = currentNow.getHours() * 3600 + currentNow.getMinutes() * 60 + currentNow.getSeconds() + currentNow.getMilliseconds() * 0.001;
        now = currentThen.getHours() * 3600 + currentThen.getMinutes() * 60 + currentThen.getSeconds() + currentThen.getMilliseconds() * 0.001;
        document.getElementById('time').innerHTML = "Duration: " + (now - past).toString() + " s";
        document.getElementById('result').innerHTML = ans;
    }
    else if(i == 3){
        var currentNow = new Date();
        var ans = mult_lattice(document.getElementById('lo').value, document.getElementById('ro').value);
        
        var currentThen = new Date();
        past = currentNow.getHours() * 3600 + currentNow.getMinutes() * 60 + currentNow.getSeconds() + currentNow.getMilliseconds() * 0.001;
        now = currentThen.getHours() * 3600 + currentThen.getMinutes() * 60 + currentThen.getSeconds() + currentThen.getMilliseconds() * 0.001;
        document.getElementById('time').innerHTML = "Duration: " + (now - past).toString() + " s";
        document.getElementById('result').innerHTML = ans;
    }
    else if(i == 4){
        var currentNow = new Date();
        var ans = divi(document.getElementById('lo').value, document.getElementById('ro').value, 3);
        
        var currentThen = new Date();
        past = currentNow.getHours() * 3600 + currentNow.getMinutes() * 60 + currentNow.getSeconds() + currentNow.getMilliseconds() * 0.001;
        now = currentThen.getHours() * 3600 + currentThen.getMinutes() * 60 + currentThen.getSeconds() + currentThen.getMilliseconds() * 0.001;
        document.getElementById('time').innerHTML = "Duration: " + (now - past).toString() + " s";
        document.getElementById('result').innerHTML = ans;
    }
}