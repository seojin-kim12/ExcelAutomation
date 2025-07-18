import '../css/Report.css';
import React, { useRef } from 'react';
import * as GC from '@mescius/spread-sheets';
import { SpreadSheets, Worksheet } from '@mescius/spread-sheets-react';
import '@mescius/spread-sheets-shapes';
import '@mescius/spread-sheets-charts';
import '@mescius/spread-sheets-slicers';
import '@mescius/spread-sheets-pivot-addon';
import '@mescius/spread-sheets-io';
import '@mescius/spread-sheets-resources-ko';
import '@mescius/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css';
import ImportFile from '../components/ImportFile';
import Export_Excel from '../components/Export_Excel';
import GetCelData from '../components/GetCelData';

GC.Spread.Common.CultureManager.culture('ko-kr');

const Report = () => {
    const [minutes, setMinutes] = React.useState('export');
    const [spread, setSpread] = React.useState(null);

    // 스프레드 시트 사이즈
    let hostStyle = {
        width: '100%',
        height: '380px',
    };

    let initSpread = function (spread) {
        setSpread(spread);
    };

    return (
        <div>
        <div className="row">
          <div className="left">
            <SpreadSheets
              workbookInitialized={(spread) => initSpread(spread)}
              hostStyle={hostStyle}
            >
              <Worksheet></Worksheet>
            </SpreadSheets>
          </div>
  
          <div className="right">
            <div>
              <h4> Excel 가져오기 </h4>
              <input type="file" name="files[]" id="fileDemo" accept=".xlsx" />
              <button onClick={() => ImportFile(spread)}>불러오기</button>
            </div>
            <div>
              <h4> Excel 내보내기 </h4>
              파일명:
              <input
                type="text"
                id="exportFileName"
                placeholder="Export file name"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
              />
              <button onClick={() => Export_Excel(spread)}>저장하기</button>
            </div>
            <div>
              <h4> 특정 셀(Cell) 데이터 가져오기 </h4>
              <button onClick={() => GetCelData(spread)}>콘솔로 A1 & B2:D4 값 가져오기</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Report