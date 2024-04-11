export default function MemberImageContainer({children, justifyContent}) {
  return <div className={`d-flex justify-content-${justifyContent} w-100`}>{children}</div>
}