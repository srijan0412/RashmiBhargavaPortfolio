import { ContactSectionTitle, GetInTouch } from "./SubComponent"
import { ContactSectionTopData, GetStartedData } from "../../Data"
import GetStarted from "./SubComponent/GetStarted/GetStarted"

const Contact = () => {
  return (
    <>
      <ContactSectionTitle data={ContactSectionTopData}/>
      <GetInTouch />
      <GetStarted data={GetStartedData}/>
    </>
  )
}

export default Contact
