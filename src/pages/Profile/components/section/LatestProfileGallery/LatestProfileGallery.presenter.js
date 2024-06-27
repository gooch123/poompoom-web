import ReviewPostCard from '../../../../Review/components/Card/ReviewPostCard/ReviewPostCard.container';
import * as S from './LatestProfileGallery.styles';

export default function LatestProfileGalleryUI({ latestPosts, handlePostClick }) {
  return (
    <S.Wrapper>
      <S.GalleryBody>
        <S.PostList>
          {latestPosts &&
            latestPosts.map((post) => <ReviewPostCard key={post.reviewId} post={post} onPostClick={handlePostClick} />)}
        </S.PostList>
      </S.GalleryBody>
    </S.Wrapper>
  );
}
