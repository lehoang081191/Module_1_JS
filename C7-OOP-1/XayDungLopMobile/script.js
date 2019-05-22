
function DienThoai() {
    this.pin = 100;
    this.message = "";
    this.tinNhanDen = [];
    this.tinNhanDaGui = [];
    this.tinNhanDangSoan = function (message) {
        this.message = message;
    } ;
    this.getMessage = function () {
        return this.message = message;
    }
    this.turnPhone = function () {
        this.status = !this.status;
    };

    this.haoPin = function () {
        if (this.pin > 0){
            this.pin --;
        }
    };
    this.checkStatus = function () {
        if (this.status){
            document.write("Trạng thái: bật");
        }else{
            document.write("Trạng thái: tắt");
        }
        this.haoPin;
    };
    this.sacPin = function () {
        if (this.pin < 100){
            this.pin += 5;
        } else{
            alert("Pin đầy");
        }
    };
    this.soanTinNhan = function () {

    }

}
let iPhone = new DienThoai();
let samsung = new DienThoai();
function onOffIP() {
    iPhone.haoPin();
    iPhone.turnPhone();
    document.getElementById("statusIP").innerHTML = "Trạng thái: ON";
    document.getElementById("bt-statusIP").innerHTML = "OFF";
    document.getElementById("pinIP").innerHTML = iPhone.pin+"%";
}
function onOffSS() {
    samsung.haoPin();
    samsung.turnPhone();
    document.getElementById("statusSS").innerHTML = "Trạng thái: ON";
    document.getElementById("bt-statusSS").innerHTML = "OFF";
    document.getElementById("pinSS").innerHTML = samsung.pin+"%";
}
function soanTinIP() {
    let messagee = prompt("Soạn tin nhắn");
    iPhone.tinNhanDaGui.push(messagee);
    document.getElementById("tinnhandiIP").innerHTML = iPhone.tinNhanDaGui;
    samsung.tinNhanDen.push(messagee);
    document.getElementById("tinnhandenSS").innerHTML = samsung.tinNhanDen;
    iPhone.haoPin();
    document.getElementById("pinIP").innerHTML = iPhone.pin+"%";

}
function soanTinSS() {

}
function xemTnDenSS() {
    document.getElementById("tinnhandenSS").innerHTML = samsung.tinNhanDen;
}
function xemTnDiIP() {
    document.getElementById("tinnhandiIP").innerHTML = iPhone.tinNhanDaGui;
    iPhone.haoPin();
    document.getElementById("pinIP").innerHTML = iPhone.pin+"%";
}