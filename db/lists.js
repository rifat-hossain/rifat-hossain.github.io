var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://rifat-hossain.github.io/db/db.json", true);
xhttp.send(null);

var pr_count = 1;
var projss;
var np;

var ex_count = 1;
var expss;
var nx;

var ss_count = 1;
var ssss;
var ns;

var num = 5;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //var xml = xhttp.responseXML;
        var json = xhttp.response;
        if (document.getElementById("projs") != null) {
            //projss = xml.getElementsByTagName("proj");
            projss = JSON.parse(json).proj;
            less_proj();
        }
        if (document.getElementById("exps") != null) {
            expss = xml.getElementsByTagName("exp");
            less_exp();
        }
        if (document.getElementById("sss") != null) {
            ssss = xml.getElementsByTagName("ss");
            /*for(var i = 0; i < ssss.length; i++){
            	document.getElementById("sss").innerHTML += "<li><strong>" + ssss.item(i).childNodes.item(1).innerHTML + "</strong>&nbsp;- " + ssss.item(i).childNodes.item(3).innerHTML + "</li>";
            }*/
            less_ss();
        }
        if (document.getElementById("full") != null) {
            var url = new URL(window.location.href);
            var listss = xml.getElementsByTagName(url.searchParams.get('q'));
            switch (url.searchParams.get('q')) {
                case 'proj':
                    document.getElementById("name").innerHTML = "Projects";
                    break;
                case 'exp':
                    document.getElementById("name").innerHTML = "Experiences";
                    break;
                case 'ss':
                    document.getElementById("name").innerHTML = "Special Skills";
                    break;
            }
            for (var i = 0; i < listss.length; i++) {
                document.getElementById("full").innerHTML += "<li><strong>" + listss.item(i).childNodes.item(1).innerHTML + "</strong>&nbsp;- " + listss.item(i).childNodes.item(3).innerHTML + "</li>";
            }
        }

        if (document.getElementById("edu") != null) {
            var edus = xml.getElementsByTagName("edu");
            for (var i = 0; i < edus.length; i++) {
                document.getElementById("edu").innerHTML += "<div class=\"timeline\">\
                <div class=\"timeline-content\">\
                    <span class=\"year\">" + edus.item(i).childNodes.item(5).innerHTML + "</span>\
                    <div class=\"inner-content\">\
                        <h3 class=\"title\">" + edus.item(i).childNodes.item(1).innerHTML + "</h3>\
                        <p class=\"description\">" + edus.item(i).childNodes.item(3).innerHTML + "</p></div></div>";
            }
        }

        if (document.getElementById("grap") != null) {
            var grapp = xml.getElementsByTagName("gra");
            console.log(grapp);
            for (var i = 0; i < grapp.length; i++) {
                document.getElementById("grap").innerHTML += "<li>\
                <span>" + grapp.item(i).childNodes.item(1).innerHTML + "</span>\
                <small class=\"float-right\">" + grapp.item(i).childNodes.item(3).innerHTML + "</small>\
                <p>" + grapp.item(i).childNodes.item(5).innerHTML + "</p>\
                <img src=\"" + grapp.item(i).childNodes.item(7).innerHTML + "\">\
            </li>";
            }
        }
    }
};

function test(text) {
    alert(text);
}

function gotoList(page) {
    open("list.html?q=" + page);
}

function pageCount(length, num) {
    var a = length / num;
    var i = parseInt(a);
    if (a > i) {
        i++;
    }
    return i;
}

function less_proj() {

    np = pageCount(Object.keys(projss).length, num);
    document.getElementById("proj_count").innerHTML = "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"prev_pr();\">Previous</a></li>";
    for (var i = 1; i <= np; i++) {
        if (i == pr_count) {
            document.getElementById("proj_count").innerHTML += "<li class=\"page-item active\"><a class=\"page-link text-light\">" + i + "</a></li>";
        } else {
            document.getElementById("proj_count").innerHTML += "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"jmp_pr(" + i + ");\">" + i + "</a></li>";
        }
    }
    document.getElementById("proj_count").innerHTML += "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"nxt_pr();\">Next</a></li>\
		<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"gotoList('proj');\">View All</a></li>";
    if (Object.keys(projss).length <= num) {
        document.getElementById("proj_count").setAttribute("class", "invisible pagination justify-content-center");
    }

    document.getElementById("projs").innerHTML = "";
    for (var i = (pr_count - 1) * num; i < Object.keys(projss).length && i < pr_count * num; i++) {
        document.getElementById("projs").innerHTML += "<li><strong>" + projss[i].name + "</strong>&nbsp;- " + projss[i].des + "</li>";
    }
}

function less_exp() {

    nx = pageCount(expss.length, num);
    document.getElementById("exp_count").innerHTML = "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"prev_ex();\">Previous</a></li>";
    for (var i = 1; i <= nx; i++) {
        if (i == ex_count) {
            document.getElementById("exp_count").innerHTML += "<li class=\"page-item active\"><a class=\"page-link text-light\">" + i + "</a></li>";
        } else {
            document.getElementById("exp_count").innerHTML += "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"jmp_ex(" + i + ");\">" + i + "</a></li>";
        }
    }
    document.getElementById("exp_count").innerHTML += "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"nxt_ex();\">Next</a></li>\
		<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"gotoList('exp');\">View All</a></li>";
    if (expss.length <= num) {
        document.getElementById("exp_count").setAttribute("class", "invisible pagination justify-content-center");
    }

    document.getElementById("exps").innerHTML = "";
    for (var i = (ex_count - 1) * num; i < expss.length && i < ex_count * num; i++) {
        document.getElementById("exps").innerHTML += "<li><strong>" + expss.item(i).childNodes.item(1).innerHTML + "</strong>&nbsp;- " + expss.item(i).childNodes.item(3).innerHTML + "</li>";
    }
}

function less_ss() {

    ns = pageCount(ssss.length, num);
    document.getElementById("ss_count").innerHTML = "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"prev_ss();\">Previous</a></li>";
    for (var i = 1; i <= ns; i++) {
        if (i == ex_count) {
            document.getElementById("ss_count").innerHTML += "<li class=\"page-item active\"><a class=\"page-link text-light\">" + i + "</a></li>";
        } else {
            document.getElementById("ss_count").innerHTML += "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"jmp_ss(" + i + ");\">" + i + "</a></li>";
        }
    }
    document.getElementById("ss_count").innerHTML += "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"nxt_ss();\">Next</a></li>\
		<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"gotoList('ss');\">View All</a></li>";
    if (ssss.length <= num) {
        document.getElementById("ss_count").setAttribute("class", "invisible pagination justify-content-center");
    }

    document.getElementById("sss").innerHTML = "";
    for (var i = (ex_count - 1) * num; i < ssss.length && i < ex_count * num; i++) {
        document.getElementById("sss").innerHTML += "<li><strong>" + ssss.item(i).childNodes.item(1).innerHTML + "</strong>&nbsp;- " + ssss.item(i).childNodes.item(3).innerHTML + "</li>";
    }
}

function prev_pr() {
    if (pr_count > 1) {
        pr_count--;
        less_proj();
    }
}

function nxt_pr() {
    if (pr_count < np) {
        pr_count++;
        less_proj();
    }
}

function jmp_pr(i) {
    pr_count = i;
    less_proj();
}

function prev_ex() {
    if (ex_count > 1) {
        ex_count--;
        less_exp();
    }
}

function nxt_ex() {
    if (ex_count < nx) {
        ex_count++;
        less_exp();
    }
}

function jmp_ex(i) {
    ex_count = i;
    less_exp();
}

function prev_ss() {
    if (ss_count > 1) {
        ss_count--;
        less_ss();
    }
}

function nxt_ss() {
    if (ss_count < np) {
        ss_count++;
        less_ss();
    }
}

function jmp_ss(i) {
    ss_count = i;
    less_ss();
}

function edu_align(i) {
    if (i % 2 == 0) {
        return "align-left";
    }
    return "align-right";
}

function edu_rev(i) {
    if (i % 2 == 0) {
        return "reverse";
    }
    return "";
}