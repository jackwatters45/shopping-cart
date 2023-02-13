import React from 'react';
import styled from 'styled-components';

const StaffMember = styled.div`
  background-color: rgba(252, 247, 18, 0.3);
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto 1fr;
  width: 100%;
`;

const StaffImg = styled.img`
  grid-row: 1 / -1;
  height: 150px;
`;

const StaffName = styled.p`
  margin-left: 20px;
  min-width: 350px;
  align-self: flex-end;
  font-size: 42px;
  white-space: nowrap;
`;

const StaffRole = styled.p`
  margin-left: 20px;
  font-size: 22px;
`;

const StaffInfo = ({ staffData }) => (
  <StaffMember key={staffData.name}>
    <StaffImg src={staffData.img} alt={staffData.name} />
    <StaffName>{staffData.name}</StaffName>
    <StaffRole>{staffData.role}</StaffRole>
  </StaffMember>
);

export default StaffInfo;
