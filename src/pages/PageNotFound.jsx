import Cat from "../partials/pagenotfound/Cat.jsx";
import PageNotFoundContainer from "../partials/pagenotfound/PageNotFoundContainer.jsx";
import Text from "../partials/pagenotfound/Text.jsx";
import GoHome from "../partials/pagenotfound/GoHome.jsx";

export default function PageNotFound() {
  const gap = 4
  return (
    <PageNotFoundContainer gap={gap}>
      <Cat/>
      <Text gap={gap}/>
      <GoHome />
    </PageNotFoundContainer>
  )
}