import styled from 'styled-components';
import ReviewPostAuthor from '../ReviewPostAuthor/ReviewPostAuthor.container';
import ReviewPostBackground from '../ReviewPostBackground/ReviewPostBackground.container';
import ReviewPostHashtags from '../ReviewPostHashtags/ReviewPostHashtags.container';
import ReviewPostPreview from '../ReviewPostPreview/ReviewPostPreview.container';

export default function ReviewPostCardUI({ post, onPostClick, isHovered, handleMouseEnter, handleMouseLeave }) {
  return (
    <Wrapper>
      <ReviewPostAuthor post={post} />
      <HoveredLayout>
        <HoveredBox onClick={() => onPostClick(post)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ReviewPostBackground post={post} />
          {/* <img src="http://via.placeholder.com/380x430.png" alt={`Post ${post} 사진`} />{' '}
          320x450, 250x330, 220x300 */}
          {isHovered ? (
            <PreviewBox>
              <ReviewPostPreview post={post} />
            </PreviewBox>
          ) : (
            <HashtagsBox>
              <ReviewPostHashtags post={post} />
            </HashtagsBox>
          )}
        </HoveredBox>
      </HoveredLayout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%; /* 아이템이 한 줄에 3개 들어가도록 설정 | calc(80% / 3); column-gap: 20px;*/
  border: red solid 1px;
`;
const HoveredLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HoveredBox = styled.div`
  width: 380px;
  height: 430px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
const PreviewBox = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(-400px);
`;
const HashtagsBox = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(-80px);
  overflow: hidden;
  height: 80px;
`;
