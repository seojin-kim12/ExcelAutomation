// 조건부 서식 추가하기
import * as GC from '@mescius/spread-sheets';

const SetConditionalFormatting = (spread) => {
    const sheet = spread.getActiveSheet();

    const style = new GC.Spread.Sheets.Style();
    style.backColor = 'red';

    const rule = new GC.Spread.Sheets.ConditionalFormatting.NormalConditionRule();
    rule.ruleType(GC.Spread.Sheets.ConditionalFormatting.RuleType.cellValueRule);
    rule.operator(GC.Spread.Sheets.ConditionalFormatting.ComparisonOperators.equalsTo);
    rule.value1('F');
    rule.style(style);

    const rowCount = sheet.getRowCount();
    rule.ranges([new GC.Spread.Sheets.Range(1, 7, rowCount - 1, 1)]);
    
    sheet.conditionalFormats.addRule(rule);
};

export default SetConditionalFormatting;