// Fungsi untuk mencari baris berdasarkan email
function findRowByEmail(email) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    for (var i = 0; i < data.length; i++) {
        if (data[i][1] === email) {
            return i + 1; // Menambahkan 1 karena baris dimulai dari 1, bukan 0
        }
    }
    return -1; // Mengembalikan -1 jika email tidak ditemukan
}

// Fungsi untuk memperbarui entri berdasarkan email
function updateDataByEmail(email, name, phone) {
    var row = findRowByEmail(email);
    if (row !== -1) {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        sheet.getRange(row, 1).setValue(name);
        sheet.getRange(row, 3).setValue(phone);
    } else {
        Logger.log("Email tidak ditemukan.");
    }
}

// Fungsi untuk menghapus entri berdasarkan email
function deleteDataByEmail(email) {
    var row = findRowByEmail(email);
    if (row !== -1) {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        sheet.deleteRow(row);
    } else {
        Logger.log("Email tidak ditemukan.");
    }
}