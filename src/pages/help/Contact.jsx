import "../../sass/Contact.scss"
import { Form, useActionData } from "react-router-dom"

function Contact() {
  const submitResponse = useActionData()
  return (
    <div className="contact">
        <h3>Contact Us</h3>
        <Form method="post" action="/help/contact">
            <label htmlFor="">
                <span>Your Email</span>
                <input type="email" name="email" required/>
            </label>

            <label htmlFor="">
                <span>Your Message</span>
                <textarea name="message" required></textarea>
            </label>
            <button>Submit</button>
            {(submitResponse && submitResponse.error) && (<p>{submitResponse.error}</p>)}
        </Form>
    </div>
  )
}

export default Contact