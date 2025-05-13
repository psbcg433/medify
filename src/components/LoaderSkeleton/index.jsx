import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoaderSkeleton = () => {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      backgroundColor: '#f8f8f8'
    }}>
      {/* Header Skeleton */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <Skeleton height={40} width={120} /> {/* Logo */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Skeleton height={20} width={80} />
          <Skeleton height={20} width={80} />
          <Skeleton height={20} width={80} />
          <Skeleton height={20} width={80} />
        </div>
      </header>

      {/* Main Section */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Left Side (Text) */}
        <div style={{ flex: '1 1 300px', paddingRight: '1rem' }}>
          <Skeleton height={40} width="60%" />
          <Skeleton height={30} width="80%" style={{ marginTop: '1rem' }} />
          <Skeleton height={15} count={3} width="100%" style={{ marginTop: '1.5rem' }} />
          <Skeleton height={45} width={150} style={{ marginTop: '2rem' }} />
        </div>

        {/* Right Side (Image) */}
        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Skeleton height={300} width="100%" />
        </div>
      </main>
    </div>
  );
};

export default LoaderSkeleton;
