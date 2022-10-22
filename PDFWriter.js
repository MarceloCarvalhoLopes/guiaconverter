var pdf = require("html-pdf");

class PDFWriter{

    static WritePdf(fileName, html){
        pdf.create(html,{}).toFile(fileName, (err) => {});
    }
}

module.exports = PDFWriter;