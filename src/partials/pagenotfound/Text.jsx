export default function Text({gap}) {
  return (
    <div className={`d-flex flex-column align-items-center gap-${gap/2}`}>
      <h1 className='title text-black'>Something Gone Wrong</h1>
      <p className='mb-0'>The page you’re looking for doesn’t exist</p>
    </div>
  )
}