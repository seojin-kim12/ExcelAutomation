// 콤보 박스 추가하기
import * as GC from '@mescius/spread-sheets';

const SetComboBox = (spread) => {
    const sheet = spread.getActiveSheet();
    const combo = new GC.Spread.Sheets.CellTypes.ComboBox();
    combo.items([
        {text: 'A+', value: 'A+'},
        {text: 'A', value: 'A'},
        {text: 'B+', value: 'B+'},
        {text: 'B', value: 'B'},
        {text: 'C+', value: 'C+'},
        {text: 'C', value: 'C'},
        {text: 'F', value: 'F'},
    ]);

    // 전체 행의 개수
    const rowCount = sheet.getRowCount(); 

    // 1번째 행을 제외한 모든 행에 적용시킴
    for (let r = 1; r < rowCount; r++) {
      sheet.setCellType(r, 7, combo, GC.Spread.Sheets.SheetArea.viewport); 
    } 
};

export default SetComboBox;