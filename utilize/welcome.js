const welcomeEmail = (name) => {
  return `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 620px; margin: auto; background: linear-gradient(to bottom, #f9fbfc, #ffffff); padding: 40px 30px; border-radius: 10px; border: 1px solid #e0e0e0; color: #333;">
      
      <div style="text-align: center; margin-bottom: 25px;">
        <h1 style="color: #1a237e; font-size: 26px; margin: 0;">🎉 Welcome to Leave Management System</h1>
        <p style="margin: 5px 0; font-size: 16px; color: #555;">Your leave tracking just got easier.</p>
      </div>

      <p style="font-size: 16px; margin-top: 30px;">Hi <strong style="color: #1a237e;">${name}</strong>, 👋</p>

      <p style="font-size: 16px; line-height: 1.6; margin: 15px 0;">
        We're thrilled to have you with us! The Leave Management System simplifies how you request, track, and manage your leaves.
      </p>

      <div style="background-color: #e8f0fe; padding: 18px 24px; border-left: 5px solid #3949ab; border-radius: 6px; margin: 30px 0;">
        <p style="margin: 0; font-size: 15px; font-weight: 500;">What you can do:</p>
        <ul style="margin-top: 10px; padding-left: 18px; font-size: 15px; line-height: 1.6;">
          <li>👤 Register and manage employee profiles</li>
          <li>📝 Apply for different types of leave</li>
          <li>📜 Track personal leave history</li>
          <li>👨‍💼 Managers can manage team leave requests</li>
          <li>✅ Approve or reject leave based on roles</li>
          <li>📊 Admins see full leave statistics and insights</li>
        </ul>
      </div>

      <p style="font-size: 16px; margin: 20px 0;">
        Let’s get you started:
      </p>

      <div style="text-align: center; margin: 35px 0;">
        <a href="https://yourdomain.com/login" style="background: linear-gradient(to right, #3949ab, #1e88e5); color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: bold;">🚀 Go to Dashboard</a>
      </div>

      <p style="font-size: 15px; color: #444; margin-bottom: 25px;">
        Need help? Contact us at 
        <a href="mailto:support@yourdomain.com" style="color: #1e88e5; text-decoration: underline;">support@yourdomain.com</a>.
      </p>

      <hr style="margin: 40px 0; border: none; border-top: 1px solid #ddd;" />

      <p style="font-size: 13px; color: #999; text-align: center;">
        &copy; ${new Date().getFullYear()} Leave Management System. All rights reserved.
      </p>
    </div>
  `;
};

export default welcomeEmail;
