const managerUpdated= (name) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border: 1px solid #bfdbfe; border-radius: 10px; color: #1e40af;">
      
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="background: linear-gradient(90deg, #2563eb, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 28px; margin: 0;">
          Account Deletion Confirmation
        </h1>
      </div>

      <p style="font-size: 17px; color: #1e3a8a;">Hi <strong>${name}</strong>,</p>

      <p style="font-size: 17px; line-height: 1.6; color: #1e40af;">
        This is to confirm that your account on the <strong>Leave Management System</strong> has been successfully deleted.
      </p>

      <div style="background-color: #dbeafe; padding: 18px 24px; border-left: 5px solid #3b82f6; border-radius: 5px; margin: 25px 0;">
        <p style="margin: 0; font-size: 15.5px; color: #1e40af;">
          All your personal data and leave records have been removed in accordance with our data privacy policy.
        </p>
      </div>

      <p style="font-size: 17px; color: #2563eb;">
        If this was a mistake or you'd like to reactivate your account, please get in touch with our support team.
      </p>

      <div style="text-align: center; margin: 35px 0;">
        <a href="mailto:support@yourdomain.com" style="background: linear-gradient(90deg, #2563eb, #3b82f6); color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.4);">
          Contact Support
        </a>
      </div>

      <p style="font-size: 15.5px; color: #1e40af;">
        Thank you for using our system. We hope to have the opportunity to serve you again in the future.
      </p>

      <hr style="margin: 30px 0; border: none; border-top: 1px solid #bfdbfe;" />

      <p style="font-size: 13px; color: #60a5fa; text-align: center;">
        &copy; ${new Date().getFullYear()} Leave Management System. All rights reserved.
      </p>
    </div>
  `;
};

export default  managerUpdated;
