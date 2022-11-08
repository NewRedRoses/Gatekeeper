import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#806491' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white'>
          Gatekeeper
        </a>
      </div>
    </MDBFooter>
  );
}