import ReactLoading from 'react-loading';
import { LoadingWrapper } from './LoadingStyled';

export const Loading = () => {
  return (
    <LoadingWrapper>
      <ReactLoading type={'spin'} color={'#309bff'} height={80} width={80} />
    </LoadingWrapper>
  );
};
