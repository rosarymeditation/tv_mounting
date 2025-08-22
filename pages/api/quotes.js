import { Twilio } from "twilio";

export default async function handler(req, res) {
  const accountSid = process.env.TWILIOSID;
  const authToken = process.env.TWILIOTOKEN;
  const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
  const recipient1 = process.env.TWILIO_RECIPIENT_1; // First SMS recipient

  const client = new Twilio(accountSid, authToken);

  try {
    if (req.method === "POST") {
      // Extract the form data from the request body
      const {
        name,
        email,
        phone,
        location,
        tvSize,
        wallType,
        hasBracket,
        bracketType,
        message,
      } = req.body;

      // Compose the message body for SMS
      const messageBody = `
New Booking Submitted:
Name: ${name}
Email: ${email}
Phone: ${phone}
Location: ${location}
TV Size: ${tvSize}
Wall Type: ${wallType}
Bracket: ${
        hasBracket === "yes"
          ? `User's (${bracketType})`
          : `Required (${bracketType})`
      }
Message: ${message || "No additional message provided"}
      `;

      // Send SMS to the recipients
      await client.messages.create({
        body: messageBody,
        from: twilioPhoneNumber,
        to: recipient1,
      });

      // Respond with success status
      return res
        .status(201)
        .json({ success: true, message: "Quote submitted and SMS sent!" });
    } else if (req.method === "GET") {
      // Handle GET request if needed (though this may not be used in your case)
      return res.status(405).json({ message: "GET method not allowed" });
    } else {
      // Method Not Allowed
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to send SMS", error: error.message });
  }
}
