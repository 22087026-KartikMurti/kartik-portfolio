import Jotform from "jotform"
import { NextRequest, NextResponse } from "next/server"

const client = new Jotform(process.env.JOTFORM_API_KEY!)

export async function POST(req: NextRequest) {
  if(!client) return NextResponse.json({ responseMessage: 'Invalid API key' })

  try {
    const body = await req.json()

    const formId = process.env.FORM_ID as string

    if(typeof formId !== 'string') return 

    await client.form.addSubmission(formId, 
      /*
       * These elements were made in this order which is why the numbers are janky, but 7 is for company name,
       * 5 is for email and 6 is for the message they wanted to leave for me
       */
      { 
        '7': body.name,
        '5': body.email,
        '6': body.message
      }
    )

    console.log(body.name, body.email, body.message)

    return NextResponse.json({ responseMessage: "✓ Message sent successfully! I'll get back to you soon." })
  } catch(error) {
    console.error('Unexpected error occurred: ', error)
    return NextResponse.json({ responseMessage: '✗ Failed to send message. Please try again or use the links above to contact me directly.'})
  }
}