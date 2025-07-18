// 특정 셀 데이터 가져오기
const GetCelData = (spread) => {
    let sheet = spread.getActiveSheet();
    // A1 데이터 가져오기
    let val = sheet.getValue(0, 0);
    console.log('A1-', val);
    // B2:D4 데이터 가져오기
    let arr = sheet.getArray(1, 1, 3, 3);
    console.log('B2:D4-', arr);
};

export default GetCelData;