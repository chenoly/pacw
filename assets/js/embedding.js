


class PACWatermarking{

    PACWatermarking(coh_i,coh_j, block_size, box_size, height, width, crc, ecc){
        this.coh_i = coh_i;
        this.coh_j = coh_j;
        this.block_size = block_size;
        this.box_size = box_size;
        this.height = height;
        this.width = width;
        this.crc = crc;
        this.ecc = ecc;
    }
    generateUniformFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
    
}
var qrcode = new QRCode(document.getElementById("qrcode"), {
	boxSize:12
});
function makeCode() {		
	var elText = document.getElementById("text");
	
	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}
	
	qrcode.makeCode(elText.value);
}

