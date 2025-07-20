// 더하기 연산 추가
import { Group } from '@chakra-ui/react';
import * as GC from '@mescius/spread-sheets';

const SetTotalFormula = (spread) => {
    const sheet = spread.getActiveSheet();
    const rowCount = sheet.getRowCount();

    for (let r = 1; r < rowCount; r++){
        const sum = `=SUM(C${r+1}:E${r+1})`;
        sheet.setFormula(r, 6, sum);
    }
};

export default SetTotalFormula;