const wbook = SpreadsheetApp.getActive()
const sheet = wbook.getSheetByName('Buah')

function doGet(request) {
    const action = request.parameter.action
    const buah = request.parameter.buah

    let response = ''

    if (action == 'find-buah') {
        response = findRowByName(buah)
    } else {
        response = findAll()
    }

    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);

}


function doPost(request) {
    const action = request.parameter.action
    const data = JSON.parse(request.postData.contents)
    if (action === 'insert') {
        sheet.appendRow([
            data.nama,
            data.sisa
        ])
    }

    let response = {
        success: true,
        message: "sukses melakukan Perubahan data",
        data: null
    }
    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);

}

function findAll() {
    const rlen = sheet.getLastRow();
    const clen = sheet.getLastColumn();
    let data = []
    const rows = sheet.getRange(1, 1, rlen, clen).getValues();

    for (let i = 0; i < rows.length; i++) {
        const dataRow = rows[i];
        let record = {};

        for (let j = 0; j < clen; j++) {
            record[rows[0][j]] = dataRow[j];
        }

        if (i > 0) {
            data.push(record);
        }

    }


    const response = {
        "data": data
    };

    return response

}

function findRowByName(nama) {

    const values = sheet.getDataRange().getValues();

    const regex = new RegExp(nama, "i");
    const data = values.filter(item => item[0].match(regex))
    // const data =values.filter(item => item[0] === nama)
    // const data =values.find(item => item[0] === nama)

    // Nanas Muda

    let response = {
        success: true,
        message: "sukses melakukan pencarian data",
        data: data ?? 'Data Tidak Ditemukan'
    }
    return response
    // return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}












