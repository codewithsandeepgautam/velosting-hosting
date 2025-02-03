const asyncHandler = require('express-async-handler')
const nodemailer = require('nodemailer')
const GetInquiryModal = require('../schemas/getInquiry.schema')

const ServerInquiryController = asyncHandler(async (req, res) => {
    const { fullName, businessEmail, company, countryCode, phone } = req.body;
    if (!fullName || !businessEmail || !company || !countryCode || !phone) {
        return res.status(400).json({ error: 'Invalid request body' });
    }
    const emailTemp = `
    <div style="display:block;width:100%;">
     <table align="center" style="padding:0;background-color:#F3F7FB;border:1px solid #F3F7FB;max-width: 600px; margin: 0px auto;" width="100%" cellpadding="0" cellspacing="0">
         <tbody style="border:none;">
             <tr style="border:none;">
                 <td style="border:none;padding:30px">
                     <table width="100%" cellpadding="0" cellspacing="0" style="border:none;">
                         <tbody style="border:none;">
                             <tr style="border:none;">
                                 <td style="border:none;">
                                     <table width="100%" cellpadding="0" cellspacing="0" style="border:none;">
                                         <tbody style="border:none;">
                                             <tr style="border:none;">
                                                 <td style="border:none;">
                                                     <img style="display:block;margin: 0px auto;height: 50px;object-fit: cover;object-position: center;" src="https://images.ctfassets.net/1t419u57cumw/6pGgNWM7QnfZ4kNnm5rAnl/16e64027161330b95dc6f0b6803928d7/logo_Velosting.png" width="300px" alt="logo">
                                                 </td>
                                             </tr>
                                         </tbody>
                                     </table>
                                 </td>
                             </tr>
                         </tbody>
                     </table>
                 </td>
             </tr>
             <tr style="border:none;">
                 <td style="border:none;padding:0px 30px 20px;">
                     <table width="100%" cellpadding="0" cellspacing="0" style="border:none;">
                         <tbody style="border:none;">
                                 <tr style="border:none;">
                                     <td style="border:none;">
                                         <table width="100%" cellpadding="0" cellspacing="0" style="border:none;border-bottom: 2px solid #b9b8c8;">
                                             <tbody style="border:none;">
                                                 <tr style="border:none;">
                                                     <td style="border:none;font-family: 'Open Sans', Arial, sans-serif; font-size:20px; font-weight: bold; color:#000244;text-align: center;">
                                                         Server Inquiry Form Submission
                                                     </td>
                                                 </tr>
                                                 <tr style="border:none;">
                                                     <td style="border:none;" height="15"></td>
                                                 </tr>
                                             </tbody>
                                         </table>
                                     </td>
                                 </tr>
                                 <tr style="border:none;">
                                     <td style="border:none;" height="20"></td>
                                 </tr>
                                 <tr style="border:none;">
                                     <td style="border:none;background-color: #00a51a0d;padding: 20px;border-radius: 5px;">
                                         <table width="100%" cellpadding="0" cellspacing="0" style="border:none;">
                                             <tbody>
                                                 <tr style="border:none;color: #000;width: 100%;vertical-align: top;">
                                                     <th width="30%" style="color: #000;font-family: 'Open Sans', Arial, sans-serif;font-size:16px;line-height:23px;border:none;padding: 5px;text-align: left;">Name:</th>
                                                     <td width="70%" style="color: #000;font-family: 'Open Sans', Arial, sans-serif;font-size:16px;line-height:23px;border:none;padding: 5px;text-align: left;">${fullName}</td>
                                                 </tr>
                                                 <tr style="border:none;color: #000;width: 100%;vertical-align: top;">
                                                     <th width="30%" style="color: #000;font-family: 'Open Sans', Arial, sans-serif;font-size:16px;line-height:23px;border:none;padding: 5px;text-align: left;">Email Id:</th>
                                                     <td width="70%" style="color: #000;font-family: 'Open Sans', Arial, sans-serif;font-size:16px;line-height:23px;border:none;padding: 5px;text-align: left;">${businessEmail}</td>
                                                 </tr>
                                                 <tr style="border:none;color: #000;width: 100%;vertical-align: top;">
                                                     <th width="30%" style="color: #000;font-family: 'Open Sans', Arial, sans-serif;font-size:16px;line-height:23px;border:none;padding: 5px;text-align: left;">Phone No:</th>
                                                     <td width="70%" style="color: #000;font-family: 'Open Sans', Arial, sans-serif;font-size:16px;line-height:23px;border:none;padding: 5px;text-align: left;">${countryCode}${phone}</td>
                                                 </tr>
                                                 <tr style="border:none;color: #000;width: 100%;vertical-align: top;">
                                                     <th width="30%" style="color: #000;font-family: 'Open Sans', Arial, sans-serif;font-size:16px;line-height:23px;border:none;padding: 5px;text-align: left;">Message:</th>
                                                     <td width="70%" style="color: #000;font-family: 'Open Sans', Arial, sans-serif;font-size:16px;line-height:23px;border:none;padding: 5px;text-align: left;">${company}</td>
                                                 </tr>
                                             </tbody>
                                         </table>
                                     </td>
                                 </tr>
                         </tbody>
                     </table>
                 </td>
             </tr>
             <tr style="border:none;">
                 <td height="15" style="border:none;"></td>
             </tr>
         </tbody>
     </table>
 </div>                                           
     `
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.GOOGLE_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.GOOGLE_MAIL,
                pass: process.env.GOOGLE_PASS
            }
        })
        const mailOptions = {
            from: businessEmail,
            to: process.env.GOOGLE_MAIL,
            subject: `Velosting | Server Inquiry Form`,
            html: emailTemp
        };
        const status = await transporter.sendMail(mailOptions)
        if (status) {
            const newContact = await GetInquiryModal.create({
                fullName: fullName,
                businessEmail: businessEmail,
                countryCode: countryCode,
                company: company,
                phone: phone,
            })
            res.status(200).json({ message: "Email sent successfully", contact: newContact });
        }
        return status
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})
module.exports = { ServerInquiryController }