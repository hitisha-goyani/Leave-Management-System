const leaveAppliedEmail = (name, leaveType, startDate, endDate, reason) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border: 1px solid #d1d5db; border-radius: 10px; color: #1F2937;">
      
      <div style="text-align: center; margin-bottom: 25px;">
        <h1 style="background: linear-gradient(90deg, #2563eb, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 28px; margin: 0;">
          Leave Request Submitted
        </h1>
      </div>

      <p style="font-size: 17px;">Hi <strong>${name}</strong>,</p>

      <p style="font-size: 17px; line-height: 1.6;">
        Your leave request has been successfully submitted through the <strong>Leave Management System</strong>.
      </p>

      <div style="background-color: #eff6ff; padding: 18px 24px; border-left: 5px solid #3b82f6; border-radius: 5px; margin: 25px 0;">
        <p style="margin: 0 0 10px 0; font-size: 16px;"><strong>Leave Details:</strong></p>
        <ul style="list-style: none; padding-left: 0; font-size: 15.5px; margin: 0;">
          <li><strong>Type:</strong> ${leaveType}</li>
          <li><strong>Start Date:</strong> ${startDate}</li>
          <li><strong>End Date:</strong> ${endDate}</li>
          <li><strong>Reason:</strong> ${reason}</li>
        </ul>
      </div>

      <p style="font-size: 17px;">
        Your request is currently under review and will be processed by your manager or admin shortly. You will be notified once it's approved or rejected.
      </p>

      <p style="font-size: 16px;">
        If you made a mistake or have questions, please contact your manager or reach out to our support team.
      </p>

      <div style="text-align: center; margin: 35px 0;">
        <a href="mailto:support@yourdomain.com" style="background-color: #2563eb; color: white; padding: 12px 28px; text-decoration: none; border-radius: 6px; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          Contact Support
        </a>
      </div>

      <hr style="margin: 35px 0; border: none; border-top: 1px solid #e5e7eb;" />

      <p style="font-size: 13px; color: #6b7280; text-align: center;">
        &copy; ${new Date().getFullYear()} Leave Management System. All rights reserved.
      </p>
    </div>
  `;
};

export default leaveAppliedEmail;
