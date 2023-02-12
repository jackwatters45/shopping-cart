import menuItem from '../../assets/data/menuItems';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--sunny-yellow-color);
  padding-bottom: 40px;
`;

const MenuSection = styled.div`
  max-width: 500px;
  margin-top: 40px;
  font-size: 26px;
`;

const MenuItem = styled.li`
  text-align: center;
  font-weight: 300;
  font-size: 18px;
  line-height: 2;
`;

const CategoryName = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const Menu = () => (
  <MenuContainer>
    {menuItem.map((section) => (
      <MenuSection>
        <CategoryName> {section.category} </CategoryName>
        <ul style={{ 'list-style': 'none' }}>
          {section.menuItems.map((item) => (
            <MenuItem>
              <strong style={{ 'margin-right': '5px' }}>{item.name}</strong>
              {item.desc}
            </MenuItem>
          ))}
        </ul>
      </MenuSection>
    ))}
  </MenuContainer>
);

export default Menu;
