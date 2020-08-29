import React from 'react';
import LeadsComponent from './LeadsComponent/';
import { CustomWrapper } from './Common/styledComponents';

function App() {
  return (
    <CustomWrapper
      display='flex' flexDirection='column' alignItems='center' justifyContent='center'
      margin='100px 20px 0px 20px' padding='10px'
      width='100%'
      heigth='100%'
    >
      <LeadsComponent />
    </CustomWrapper>
  );
}

export default App;
