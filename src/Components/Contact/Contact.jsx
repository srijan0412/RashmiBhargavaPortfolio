import { ContactSectionTitle, GetInTouch } from "./SubComponent"
import { ContactSectionTopData } from "../../Data"

const Contact = () => {
  return (
    <>
      <ContactSectionTitle data={ContactSectionTopData}/>
      <GetInTouch />
    </>
  )
}

export default Contact
