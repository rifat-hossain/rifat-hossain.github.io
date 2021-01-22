var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://rifat-hossain.github.io/db/db.json", true);
xhttp.send(null);

var vjson;
var n_count = 1;
var np;
var nx;
var ns;

var num = 5;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = xhttp.response;
        if (document.getElementById("projs") != null) {
            vjson = JSON.parse(json).proj;
            less_proj();
        }
        if (document.getElementById("exps") != null) {
            vjson = JSON.parse(json).exp;
            less_exp();
        }
        if (document.getElementById("sss") != null) {
            vjson = JSON.parse(json).ss;
            less_ss();
        }
        if (document.getElementById("ides") != null) {
            vjson = JSON.parse(json).idetool;
            idetool(document.getElementById("ides").getAttribute("value"));
        }
        if (document.getElementById("a_proj") != null) {
            vjson = JSON.parse(json).proj;
            aproj(document.getElementById("a_proj").getAttribute("value"));
        }
        if (document.getElementById("full") != null) {
            var url = new URL(window.location.href);
            var listss = JSON.parse(json)[url.searchParams.get('q')];
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
            for (var i = 0; i < Object.keys(listss).length; i++) {
                document.getElementById("full").innerHTML += "<li><strong>" + listss[i].name + "</strong>&nbsp;- " + listss[i].des + "</li>";
            }
        }

        if (document.getElementById("edu") != null) {
            var edus = JSON.parse(json).edu;
            for (var i = 0; i < Object.keys(edus).length; i++) {
                document.getElementById("edu").innerHTML += "<div class=\"timeline\">\
                <div class=\"timeline-content\">\
                    <span class=\"year\">" + edus[i].year + "</span>\
                    <div class=\"inner-content\">\
                        <h3 class=\"title\">" + edus[i].title + "</h3>\
                        <p class=\"description\">" + edus[i].des + "</p></div></div>";
            }
        }

        if (document.getElementById("grap") != null) {
            var grapp = JSON.parse(json).gra;
            for (var i = 0; i < grapp.length; i++) {
                document.getElementById("grap").innerHTML += "<li>\
                <span>" + grapp[i].title + "</span>\
                <small class=\"float-right\">" + grapp[i].date + "</small>\
                <img src=\"" + grapp[i].img_loc + "\">\
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

function idetool(tag) {
    document.getElementById("ides").innerHTML = "";
    for (var i = 0; i < Object.keys(vjson).length; i++) {
        var cont = false;
        vjson[i].tag.forEach(element => {
            if(element == tag){
                cont = true;
            }
        });
        if(cont == false){
            continue;
        }
        document.getElementById("ides").innerHTML += "<li><strong>" + vjson[i].title + "</strong>&nbsp;- " + vjson[i].des + "</li>";
    }
}

function aproj(tag) {
    document.getElementById("a_proj").innerHTML = "";
    for (var i = 0; i < Object.keys(vjson).length; i++) {
        var cont = false;
        vjson[i].tags.forEach(element => {
            if(element == tag){
                cont = true;
            }
        });
        if(cont == false){
            continue;
        }
        document.getElementById("a_proj").innerHTML += "<li><strong>" + vjson[i].name + "</strong>&nbsp;- " + vjson[i].des + "</li>";
    }
}

function less_proj() {

    np = pageCount(Object.keys(vjson).length, num);
    document.getElementById("proj_count").innerHTML = "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"prev_pr();\">Previous</a></li>";
    for (var i = 1; i <= np; i++) {
        if (i == n_count) {
            document.getElementById("proj_count").innerHTML += "<li class=\"page-item active\"><a class=\"page-link text-light\">" + i + "</a></li>";
        } else {
            document.getElementById("proj_count").innerHTML += "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"jmp_pr(" + i + ");\">" + i + "</a></li>";
        }
    }
    document.getElementById("proj_count").innerHTML += "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"nxt_pr();\">Next</a></li>\
		<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"gotoList('proj');\">View All</a></li>";
    if (Object.keys(vjson).length <= num) {
        document.getElementById("proj_count").setAttribute("class", "invisible pagination justify-content-center");
    }

    document.getElementById("projs").innerHTML = "";
    for (var i = (n_count - 1) * num; i < Object.keys(vjson).length && i < n_count * num; i++) {
        document.getElementById("projs").innerHTML += "<li><strong>" + vjson[i].name + "</strong>&nbsp;- " + vjson[i].des + "</li>";
    }
}

function less_exp() {

    nx = pageCount(Object.keys(vjson).length, num);
    document.getElementById("exp_count").innerHTML = "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"prev_ex();\">Previous</a></li>";
    for (var i = 1; i <= nx; i++) {
        if (i == n_count) {
            document.getElementById("exp_count").innerHTML += "<li class=\"page-item active\"><a class=\"page-link text-light\">" + i + "</a></li>";
        } else {
            document.getElementById("exp_count").innerHTML += "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"jmp_ex(" + i + ");\">" + i + "</a></li>";
        }
    }
    document.getElementById("exp_count").innerHTML += "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"nxt_ex();\">Next</a></li>\
		<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"gotoList('exp');\">View All</a></li>";
    if (Object.keys(vjson).length <= num) {
        document.getElementById("exp_count").setAttribute("class", "invisible pagination justify-content-center");
    }

    document.getElementById("exps").innerHTML = "";
    for (var i = (n_count - 1) * num; i < Object.keys(vjson).length && i < n_count * num; i++) {
        document.getElementById("exps").innerHTML += "<li><strong>" + vjson[i].name + "</strong>&nbsp;- " + vjson[i].des + "</li>";
    }
}

function less_ss() {

    ns = pageCount(Object.keys(vjson).length, num);
    document.getElementById("n_count").innerHTML = "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"prev_ss();\">Previous</a></li>";
    for (var i = 1; i <= ns; i++) {
        if (i == n_count) {
            document.getElementById("n_count").innerHTML += "<li class=\"page-item active\"><a class=\"page-link text-light\">" + i + "</a></li>";
        } else {
            document.getElementById("n_count").innerHTML += "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"jmp_ss(" + i + ");\">" + i + "</a></li>";
        }
    }
    document.getElementById("n_count").innerHTML += "<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"nxt_ss();\">Next</a></li>\
		<li class=\"page-item\"><a class=\"page-link text-primary\" onclick=\"gotoList('ss');\">View All</a></li>";
    if (Object.keys(vjson).length <= num) {
        document.getElementById("n_count").setAttribute("class", "invisible pagination justify-content-center");
    }

    document.getElementById("sss").innerHTML = "";
    for (var i = (n_count - 1) * num; i < Object.keys(vjson).length && i < n_count * num; i++) {
        document.getElementById("sss").innerHTML += "<li><strong>" + vjson[i].name + "</strong>&nbsp;- " + vjson[i].des + "</li>";
    }
}

function prev_pr() {
    if (n_count > 1) {
        n_count--;
        less_proj();
    }
}

function nxt_pr() {
    if (n_count < np) {
        n_count++;
        less_proj();
    }
}

function jmp_pr(i) {
    n_count = i;
    less_proj();
}

function prev_ex() {
    if (n_count > 1) {
        n_count--;
        less_exp();
    }
}

function nxt_ex() {
    if (n_count < nx) {
        n_count++;
        less_exp();
    }
}

function jmp_ex(i) {
    n_count = i;
    less_exp();
}

function prev_ss() {
    if (n_count > 1) {
        n_count--;
        less_ss();
    }
}

function nxt_ss() {
    if (n_count < np) {
        n_count++;
        less_ss();
    }
}

function jmp_ss(i) {
    n_count = i;
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