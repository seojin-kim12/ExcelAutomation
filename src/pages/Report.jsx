import '../css/Report.css';
import React, { useState } from 'react';
import '@mescius/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css';
import '@mescius/spread-sheets-resources-ko';
import '@mescius/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css';
import '@mescius/spread-sheets-designer-resources-ko';
import { Designer } from '@mescius/spread-sheets-designer-react';
import * as GC from '@mescius/spread-sheets';
import ImportFile from '../components/ImportFile';
import Export_Excel from '../components/Export_Excel';

GC.Spread.Common.CultureManager.culture('ko-kr');

const Report = () => {
  const [minutes, setMinutes] = useState('export');
  const [spread, setSpread] = useState(null);

  const onDesignerInitialized = (designer) => {
    const workbook = designer.getWorkbook();
    setSpread(workbook);
    workbook.setSheetCount(5);
    workbook.options.newTabVisible = false;
  };

  const config = GC.Spread.Sheets.Designer.DefaultConfig;

  config.ribbon[0].buttonGroups.unshift({
    label: '작업',
    thumbnailClass: 'work',
    commandGroup: {
      children: [
        {
          direction: 'vertical',
          commands: ['addRowToLast']
        },
        {
          direction: 'vertical',
          commands: ['updateToGrid']
        }
      ]
    }
  });

  config.commandMap = {
    addRowToLast: {
      title: '행 추가',
      text: '행 추가',
      iconClass: 'add-row-button',
      bigButton: true,
      commandName: 'addRowToLast',
      execute: function (context, propertyName, fontItalicChecked) {
        const sheet = spread.getActiveSheet();
        if (sheet && sheet.getDataSource()) {
          sheet.addRows(sheet.getRowCount(), 1);
        }
      }
    },
    updateToGrid: {
      title: '업데이트',
      text: '업데이트',
      iconClass: 'update-to-grid-button',
      bigButton: true,
      commandName: 'updateToGrid',
      execute: function () {
        alert('업데이트 버튼 클릭됨 (예시)');
      }
    }
  };

  return (
    <div>
      <div style={{ height: '750px', width: '70%' }}>
        <Designer
          styleInfo={{ width: '100%', height: '100%' }}
          config={config}
          designerInitialized={onDesignerInitialized}
        />
      </div>

      <div className="bottom">
        <div>
          <h4> Excel 가져오기 </h4>
          <input type="file" id="fileDemo" accept=".xlsx" />
          <button onClick={() => ImportFile(spread)}>불러오기</button>
        </div>
        <div>
          <h4> Excel 내보내기 </h4>
          파일명:
          <input
            type="text"
            id="exportFileName"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
          <button onClick={() => Export_Excel(spread)}>저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default Report;
