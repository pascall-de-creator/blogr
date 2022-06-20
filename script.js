function droplink(obj){
    if(obj == "Product"){
        product = document.getElementsByClassName('dropmenu1')[0];
        if (product.style.display == "none"){
            product.style.display = "flex";
        } else {
            product.style.display = "none";
        }
    }
    if(obj == "Company"){
        Company = document.getElementsByClassName('dropmenu2')[0];
        if (Company.style.display == "none"){
            Company.style.display = "flex";
        } else {
            Company.style.display = "none";
        }
    }
    if(obj == "Connect"){
        Connect = document.getElementsByClassName('dropmenu3')[0];
        if (Connect.style.display == "none"){
            Connect.style.display = "flex";
        } else {
            Connect.style.display = "none";
        }
    }
}