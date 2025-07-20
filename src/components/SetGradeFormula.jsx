// 성적 부여
import { Group } from '@chakra-ui/react';
import * as GC from '@mescius/spread-sheets';

const SetGradeFormula = (spread) => {
    const sheet = spread.getActiveSheet();
    const rowCount = sheet.getRowCount();

    for (let r = 1; r < rowCount; r++){
        const grade = `=IF(G${r+1}>=200,"A", IF(G${r+1}>=100,"B", "F")`;
        
        sheet.setFormula(r, 7, grade);
    }
};

export default SetGradeFormula;