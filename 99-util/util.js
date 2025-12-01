function getTodayDate() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');  // mois de 01 à 12
    const day = String(now.getDate()).padStart(2, '0');         // jour de 01 à 31

    return `${year}-${month}-${day}`;
}

module.exports = {
    getTodayDate
};