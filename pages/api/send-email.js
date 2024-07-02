import { sendEmail } from "../../src/utils";

export default async function handler(req, res) {
    try {
        const { email, subject, message } = req.body;
        const result = await sendEmail(email, subject, '', message);
        if (result.success) {
            return res.status(200).json({ status: true, response_code: 200, message: `Success`, data: result.data });
        } else {
            return res.status(400).json({ status: false, response_code: 400, message: result.data, data: result.data });
        }
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(400).json({ status: false, response_code: 400, message: error.message, data: [] });
    }
}