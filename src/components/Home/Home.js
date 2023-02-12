import staff from '../../assets/data/staff';
import StaffInfo from './StaffInfo';
import Contact from './Contact';
import styled from 'styled-components';

const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 20px;
`;

const TextSection = styled.div`
  max-width: 750px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const HomeHeader = styled(TextSection)`
  font-size: 30px;
`;

const TeamSection = styled(TextSection)`
  gap: 20px;
  padding: 20px;
`;

const TeamHeader = styled.h2`
  font-size: 32px;
  text-align: left;
`;

const Home = () => {
  return (
    <HomeSection>
      <HomeHeader>
        Welcome to Paddy's Pub, the oldest pub in America.
      </HomeHeader>
      <TextSection>
        We have a variety of old liquors served in strange containers. We are
        packed with celebrities - the fun ones. We also have cockfights and
        strippers. And guess what. We don't have a sign, so good luck finding
        the place. But, if you do, you'll be lucky 'cause we also got donkey
        shows, Mötley Crüe and cake.
      </TextSection>
      <TextSection>
        Paddy's Pub has been around since 1773 and has been operated by the same
        family since its founding. During the revolutionary war, it acted not
        just as a pub but as a base for those who sought independence from the
        British. It was the location of the Liberty Bell's cracking. During this
        era, Paddy's Pub was known as Patrick's Pub. The owners were not
        supporters of independence and actually planned to gain favor with the
        British. However all their plans ended disastrously and they unwittingly
        aided the revolution after causing the death of Colonel Cricket of the
        British army.
      </TextSection>
      <TeamSection>
        <TeamHeader>Meet Our Team...</TeamHeader>
        {staff.map((staffData) => (
          <StaffInfo staffData={staffData} />
        ))}
      </TeamSection>
      <Contact />
    </HomeSection>
  );
};

export default Home;
