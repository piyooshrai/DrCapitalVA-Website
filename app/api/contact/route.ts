import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequest {
  name?: string;
  email: string;
  phone?: string;
  specialty?: string;
  message?: string;
  practiceType?: string;
  source?: 'contact-form' | 'chat-widget';
  agent?: string;
  type?: 'prospect' | 'applicant';
}

export async function POST(request: Request) {
  try {
    const body: ContactRequest = await request.json();

    const { name, email, phone, specialty, message, practiceType, source, agent, type } = body;

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    // Determine subject and body based on source
    let subject = '';
    let htmlBody = '';

    if (source === 'chat-widget') {
      subject = `Dr. Capital VA Chat Lead — ${email}`;
      htmlBody = `
        <h2>New Chat Widget Lead</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Agent:</strong> ${agent || 'Unknown'}</p>
        <p><strong>Type:</strong> ${type === 'applicant' ? 'Job Applicant' : 'Practice Prospect'}</p>
        <p><strong>Practice/Specialty:</strong> ${practiceType || 'Not specified'}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `;
    } else {
      subject = `Dr. Capital VA Contact Form — ${name || email}`;
      htmlBody = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Practice Type:</strong> ${specialty || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, '<br>') || 'No message provided'}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `;
    }

    // Send email via Resend
    const response = await resend.emails.send({
      from: 'Dr. Capital VA <onboarding@resend.dev>',
      to: 'info@thehuman.capital',
      subject,
      html: htmlBody,
      reply_to: email,
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    // Also send confirmation to user
    await resend.emails.send({
      from: 'Dr. Capital VA <onboarding@resend.dev>',
      to: email,
      subject: 'We Received Your Message — Dr. Capital VA',
      html: `
        <h2>Thank You!</h2>
        <p>We received your message and will get back to you within 24 business hours.</p>
        <p>In the meantime, feel free to explore:</p>
        <ul>
          <li><a href="https://drcapitalva.com/pricing">Our Pricing</a></li>
          <li><a href="https://drcapitalva.com/how-it-works">How It Works</a></li>
          <li><a href="https://drcapitalva.com/compliance/hipaa">HIPAA Compliance</a></li>
        </ul>
        <p>Dr. Capital VA Team</p>
      `,
    });

    return Response.json({ success: true, id: response.data?.id }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
