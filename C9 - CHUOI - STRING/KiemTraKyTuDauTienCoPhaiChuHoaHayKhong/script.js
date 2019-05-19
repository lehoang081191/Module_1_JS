function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    /^[A-Z]/
    
    if (regexp.test(str)){
        alert("Chuỗi bắt đầu bằng 1 ký tự hoa");
    }else{
        alert("Chuỗi bắt đầu bằng 1 ký tự thường");
    }
}

isFirstLetterUpperCase("dfjvnvv");
isFirstLetterUpperCase("ThdhfhTd");
string1 = "Nguyen van Nam";

string2 = "NGUYEN VAN NAM";

string3 = "nguyen van Nam";
isFirstLetterUpperCase(string1);

