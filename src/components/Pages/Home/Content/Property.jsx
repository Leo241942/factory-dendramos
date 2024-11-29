import styled from 'styled-components';

const PropertyWrapper = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Text = styled.p`
  font-size: 14px; 
  color: #4F5665; 
`;

export default function Property({ text, img }) {
  return (
    <PropertyWrapper>
      <Icon src= {img} alt="Check icon" />
      <Text>{text}</Text>
    </PropertyWrapper>
  );
}
