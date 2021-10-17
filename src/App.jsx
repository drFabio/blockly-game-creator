import { useState } from 'react';
import { Wrapper } from './components/Wrapper';
import { Navigator } from './components/Navigator';
import { GameArea } from './components/game';
import { Settings } from './components/Settings';
import { ContentWrapper } from './components/ContentWrapper';
import { BlocklyEditor } from './components/blocky';
import { PAGE_APP, PAGE_CODE, PAGE_MIX, PAGE_SETTINGS } from './constants';
import { WorkspaceContext } from './WorkspaceContext';

function App() {
  const [currentPage, setCurrentPage] = useState(PAGE_MIX);
  const [getJsCode, setGetJsCode] = useState(() => '');
  const [getWorkspaceXml, setWorkspaceXml] = useState(() => '');

  return (
    <WorkspaceContext.Provider value={{ getJsCode, setGetJsCode, getWorkspaceXml, setWorkspaceXml }}>
      <Wrapper>
        <Navigator
          onApp={() => setCurrentPage(PAGE_APP)}
          onCode={() => setCurrentPage(PAGE_CODE)}
          onMix={() => setCurrentPage(PAGE_MIX)}
          onSettings={() => setCurrentPage(PAGE_SETTINGS)}
          currentPage={currentPage}
        />
        <ContentWrapper currentPage={currentPage}>
          {(currentPage === PAGE_MIX || currentPage === PAGE_CODE) && (
            <BlocklyEditor
              readOnly={false}
              trashcan={true}
              currentPage={currentPage}
              move={{
                scrollbars: true,
                drag: true,
                wheel: true,
                
              }}
              zoom= {{
                controls:true,
                wheel: true
              }}
              initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="canvas_background_color" id="4SVzU|aWhU*Nh|9P+X" x="253" y="275"><value name="backgroundColor"><shadow type="colour_picker" id="*F3FFG@6zp?g?@C2[LO("><field name="COLOUR">#33ccff</field></shadow></value><next><block type="text_print" id="nwR,iP,?~nzM.3|5.94|"><value name="TEXT"><shadow type="text" id="ZuNhv^os)g9;0T!sty|"><field name="TEXT">Olá</field></shadow></value></block></next></block></xml>
      `}
            ></BlocklyEditor>
          )}
          {(currentPage === PAGE_MIX || currentPage === PAGE_APP) && <GameArea currentPage={currentPage} />}
          {currentPage === PAGE_SETTINGS && <Settings />}
        </ContentWrapper>
      </Wrapper>
    </WorkspaceContext.Provider>
  );
}

export default App;
