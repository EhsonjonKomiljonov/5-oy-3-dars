import ErrImg from '../../assets/images/404error-img.svg';

export const Error = () => {
  return (
    <div className='container'>
      <img
        style={{ margin: '0 auto', display: 'block' }}
        width={800}
        height={700}
        src={ErrImg}
        alt='404 Error'
      />
    </div>
  );
};
