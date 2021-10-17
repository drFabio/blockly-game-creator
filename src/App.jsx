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
<block type="game_setup" x="0" y="0"></block>
</xml>
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
