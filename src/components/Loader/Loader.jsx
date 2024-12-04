import './Loader.module.css';
import { Hourglass } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Hourglass
      visible={true}
      height="50"
      width="50"
      ariaLabel="hourglass-loading"
      wrapperStyle={{
        marginTop: 200,
      }}
      colors={['#306cce', '#72a1ed']}
    />
  );
}
