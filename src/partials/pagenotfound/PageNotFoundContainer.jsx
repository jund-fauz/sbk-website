export default function PageNotFoundContainer({children, gap}) {
  return (
    <div className={`d-flex align-items-center flex-column w-100 gap-${gap} py-5`}>
      {children}
    </div>
  )
}