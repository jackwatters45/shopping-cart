import Icon from '@mdi/react';
import { mdiMapMarker, mdiPhone } from '@mdi/js';
import styled from 'styled-components';

const ContactSection = styled.div`
  margin: 10px 0;
  padding: 10px 20px;
  width: 560px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Contact = () => (
  <ContactSection>
    <h2>Contact</h2>
    <ContactInfo>
      <ContactMethod>
        <Icon path={mdiMapMarker} alt="Address Icon" size={1} />
        <p>1443 South 3rd Street, Philadelphia, PA 19147</p>
      </ContactMethod>
      <ContactMethod>
        <Icon path={mdiPhone} size={1} alt="phone Icon" />
        <p>(267) 494 - 9167</p>
      </ContactMethod>
    </ContactInfo>
  </ContactSection>
);

export default Contact;
