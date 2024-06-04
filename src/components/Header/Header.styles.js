import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 12vh;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  background-color: #e6e6e6;
  border: 3px solid #ccc;
`;
export const HeaderContent = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* 조건부 스타일링 */
  ${({ showSearchBar }) =>
    showSearchBar
      ? css`
          /* showSearchBar가 true일 때의 스타일 */
        `
      : css`
          /* showSearchBar가 false일 때의 스타일 */
        `}
`;
export const IconBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
`;
export const LogoImgBox = styled.div`
  width: 15%;
  height: 100%;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

export const ProfileBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileIcon = styled(FontAwesomeIcon)`
  font-size: 48px;
  cursor: pointer;
`;
export const ProfileButton = styled.button`
  width: 70%;
  border: 0;
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 48px;
  cursor: pointer;
`;
