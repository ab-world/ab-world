import nodemailer from 'nodemailer';

export async function POST(request) {
    const { subject, content } = await request.json();

    try {
        // Nodemailer 설정
        const transporter = nodemailer.createTransport({
            host: process.env.NEXT_PUBLIC_MAIL_HOST,
            port: process.env.NEXT_PUBLIC_MAIL_PORT,
            auth: {
                user: process.env.NEXT_PUBLIC_MAIL_USER,
                pass: process.env.NEXT_PUBLIC_MAIL_PASS
            }
        });

        // 메일 옵션
        const mailOptions = {
            from: process.env.NEXT_PUBLIC_MAIL_USER,
            to: process.env.NEXT_PUBLIC_MAIL_TO,
            subject: subject,
            html: content
        };

        // 메일 전송
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ data: { code: 0, message: 'Email sent successfully!' } }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ data: { code: -1, message: 'Error sending email' } }), { status: 500 });
    }
}
