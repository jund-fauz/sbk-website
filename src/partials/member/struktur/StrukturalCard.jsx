import style from "../../../stylesheet/member.module.css";
import MemberImageContainer from "./MemberImageContainer.jsx";
import Member from "./Member.jsx";
import ManyMembersContainer from "./ManyMembersContainer.jsx";
import TwoMembersFromManyContainer from "./TwoMembersFromManyContainer.jsx";
import {useEffect} from "react";

export default function StrukturalCard({jabatan = '', members = [], ikhwan = 3}) {
  let countNumber = 0
  const few = members.length < 5
  let justifyContent;
  switch (members.length) {
    case 1:
      justifyContent = 'center'
      break
    case 4:
      justifyContent = 'evenly'
      break
    default:
      justifyContent = 'around'
  }
  const getMemberDiv = (count, from) => {
    if (typeof count === 'number') {
      let divs = []
      count = typeof from !== 'undefined' ? count + from : count
      for (let i = from || 0; i < count; i++) {
        divs.push(typeof members[i] !== 'undefined' ? <Member key={i} member={members[i]}/> : <Member />)
        countNumber++
      }
      return divs
    } else {
      return members.map((member, index) => <Member member={member} key={index}/>)
    }
  }
  useEffect(() => console.log(members.length), [members])
  return (
    <div className={`${style.card} d-flex flex-column align-items-center gap-2 pt-2 mt-4`}>
      <h1 className={style.title}>{jabatan}</h1>
      <MemberImageContainer justifyContent={justifyContent}>
        {few ? getMemberDiv('all') : (
          <>
            <ManyMembersContainer>
              <TwoMembersFromManyContainer>{getMemberDiv(2)}</TwoMembersFromManyContainer>
              {ikhwan === 3 && members.length === 5 || members.length === 6 ? getMemberDiv(1, countNumber) : <Member />}
            </ManyMembersContainer>
            <ManyMembersContainer>
              {getMemberDiv(1, countNumber)}
              <TwoMembersFromManyContainer>{getMemberDiv(2, countNumber)}</TwoMembersFromManyContainer>
            </ManyMembersContainer>
          </>
        )}
      </MemberImageContainer>
    </div>
  )
}