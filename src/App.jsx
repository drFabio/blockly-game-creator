import { useState } from 'react';
import { Wrapper } from './components/Wrapper';
import { Navigator } from './components/Navigator';
import { GameArea } from './components/game';
import { ContentWrapper } from './components/ContentWrapper';
import { BlocklyEditor } from './components/blocky';
import { PAGE_APP, PAGE_CODE, PAGE_MIX } from './constants';

function App() {
  const [currentPage, setCurrentPage] = useState(PAGE_APP);

  return (
    <Wrapper>
      <Navigator
        onApp={() => setCurrentPage(PAGE_APP)}
        onCode={() => setCurrentPage(PAGE_CODE)}
        onMix={() => setCurrentPage(PAGE_MIX)}
        currentPage={currentPage}
      />
      <ContentWrapper currentPage={currentPage}>
        <BlocklyEditor
          readOnly={false}
          trashcan={true}
          currentPage={currentPage}
          move={{
            scrollbars: false,
            drag: true,
            wheel: true,
          }}
          initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_ifelse" x="0" y="0"></block>
</xml>
      `}
        ></BlocklyEditor>
        <GameArea />
      </ContentWrapper>
    </Wrapper>
  );
}

export default App;
