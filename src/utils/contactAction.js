import { redirect } from "react-router-dom";

const submitContact = async ({request}) => {

    const data = await request.formData();
    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    // Validate Input && || Send Data to DB
    if (submission.message.length < 10) {
        return {error: "Message musht be over 10 chars long"}
    }

    // Redirect User to Homepage
    return redirect("/")
}

export default submitContact