import{j as e,b as D}from"./Router.DEkvU821.js";import{a as i}from"./index.CfTCg2BY.js";import{T as h}from"./teacherApprovalService.hlj6jj6i.js";import{m as s}from"./proxy.Dd64Huta.js";import{C as x}from"./circle-check-big.BzkAWTDt.js";import{C as E}from"./circle-alert.Drxpjbn_.js";import{M as F}from"./mail.CO4yqH6V.js";import{P as L}from"./phone.CInxth3d.js";import{F as N}from"./file-text.BTzrpggw.js";import{L as w}from"./loader.CVgdyoDX.js";import{C as A}from"./circle-x.vNvXhZuL.js";import{C as O}from"./clock.DpUeShGt.js";function q(){const[R,T]=i.useState([]),[S,u]=i.useState(!0),[t,l]=i.useState(null),[c,d]=i.useState(!1),[f,m]=i.useState(""),[b,n]=i.useState(""),[p,P]=i.useState("pending"),o=a=>a.status??a.approvalStatus??"pending";i.useEffect(()=>{g()},[]);const g=async()=>{u(!0);try{const a=await h.getPendingApprovals();T(a),console.log("[TeacherApprovalPage] Loaded approvals:",a.length)}catch(a){console.error("[TeacherApprovalPage] Error loading approvals:",a),n("Failed to load approval records")}finally{u(!1)}},k=async a=>{if(a.email){d(!0),n(""),m("");try{console.log("[TeacherApprovalPage] Approving teacher:",a.email),await h.approveTeacher(a.email,"admin");const r=`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #10B981; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 20px; border-radius: 8px; }
              .message { font-size: 16px; line-height: 1.6; }
              .button { display: inline-block; background-color: #10B981; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; margin-top: 20px; }
              .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✓ Registration Approved!</h1>
              </div>
              
              <div class="content">
                <p class="message">
                  Dear ${a.fullName},<br><br>
                  Congratulations! Your teacher registration with VR Robotics Academy has been <strong>approved</strong>.<br><br>
                  You can now log in to your teacher portal and start managing your classes.<br><br>
                  <a href="${window.location.origin}/login" class="button">Log In to Your Account</a><br><br>
                  If you have any questions, please contact us.<br><br>
                  Best regards,<br>
                  VR Robotics Academy Admin Team
                </p>
              </div>

              <div class="footer">
                <p>VR Robotics Academy - Teacher Registration System</p>
              </div>
            </div>
          </body>
        </html>
      `;await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer YOUR_RESEND_API_KEY"},body:JSON.stringify({from:"admin@vrrroboticsacademy.com",to:a.email,subject:"Registration Approved - Welcome to VR Robotics Academy",html:r})}).catch(()=>{console.log("[TeacherApprovalPage] Email notification sent (or simulated)")}),m(`✓ Teacher ${a.fullName} has been approved and granted portal access!`),setTimeout(()=>{g(),l(null)},1500)}catch(r){console.error("[TeacherApprovalPage] Error approving teacher:",r),n("Failed to approve teacher. Please try again.")}finally{d(!1)}}},C=async a=>{if(!a.email){n("Unable to process rejection");return}d(!0),n(""),m("");try{console.log("[TeacherApprovalPage] Rejecting and deleting teacher record:",a.email),await h.rejectTeacher(a.email,"Rejected by admin","admin");const r=`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #EF4444; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 20px; border-radius: 8px; }
              .message { font-size: 16px; line-height: 1.6; }
              .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Registration Status Update</h1>
              </div>
              
              <div class="content">
                <p class="message">
                  Dear ${a.fullName},<br><br>
                  Thank you for applying to VR Robotics Academy. After reviewing your application and documents, we regret to inform you that your registration has not been approved at this time.<br><br>
                  If you believe this is a mistake or would like to reapply with additional information, please contact us.<br><br>
                  Best regards,<br>
                  VR Robotics Academy Admin Team
                </p>
              </div>

              <div class="footer">
                <p>VR Robotics Academy - Teacher Registration System</p>
              </div>
            </div>
          </body>
        </html>
      `;await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer YOUR_RESEND_API_KEY"},body:JSON.stringify({from:"admin@vrrroboticsacademy.com",to:a.email,subject:"Registration Status - VR Robotics Academy",html:r})}).catch(()=>{console.log("[TeacherApprovalPage] Rejection email sent (or simulated)")}),m(`✓ Teacher ${a.fullName}'s record has been permanently deleted.`),setTimeout(()=>{g(),l(null)},1500)}catch(r){console.error("[TeacherApprovalPage] Error rejecting teacher:",r),n("Failed to reject teacher. Please try again.")}finally{d(!1)}},y=R.filter(a=>p==="all"?!0:o(a)==="pending"),j=a=>{switch(a){case"approved":return"bg-green-500/10 border-green-500/30 text-green-400";case"rejected":return"bg-red-500/10 border-red-500/30 text-red-400";case"pending":default:return"bg-yellow-500/10 border-yellow-500/30 text-yellow-400"}},v=a=>{switch(a){case"approved":return e.jsx(x,{className:"w-5 h-5"});case"rejected":return e.jsx(A,{className:"w-5 h-5"});case"pending":default:return e.jsx(O,{className:"w-5 h-5"})}};return e.jsx("div",{className:"min-h-screen overflow-x-hidden bg-background text-foreground p-6",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs(s.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"mb-8",children:[e.jsx("h1",{className:"font-heading text-4xl mb-2",children:"Teacher Registration Approvals"}),e.jsx("p",{className:"font-paragraph text-foreground/70",children:"Review and approve pending teacher registrations"})]}),f&&e.jsxs(s.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 font-paragraph flex items-center gap-2",children:[e.jsx(x,{className:"w-5 h-5 flex-shrink-0"}),f]}),b&&e.jsxs(s.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-paragraph flex items-center gap-2",children:[e.jsx(E,{className:"w-5 h-5 flex-shrink-0"}),b]}),e.jsx("div",{className:"mb-8 flex gap-3 flex-wrap",children:["all","pending"].map(a=>e.jsx(s.button,{onClick:()=>P(a),className:`px-4 py-2 rounded-lg font-heading text-sm capitalize transition-all ${p===a?"bg-primary text-primary-foreground":"bg-foreground/10 text-foreground/70 hover:bg-foreground/20"}`,whileHover:{scale:1.05},whileTap:{scale:.95},children:a},a))}),S?e.jsx("div",{className:"flex items-center justify-center py-12",children:e.jsx(D,{})}):y.length===0?e.jsx(s.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center py-12",children:e.jsxs("p",{className:"font-paragraph text-foreground/60",children:["No ",p!=="all"?p:""," registrations found"]})}):e.jsx("div",{className:"grid gap-4",children:y.map((a,r)=>e.jsx(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:r*.1},className:"p-6 rounded-lg border border-foreground/20 bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer",onClick:()=>l(a),children:e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("h3",{className:"font-heading text-lg",children:a.fullName}),e.jsxs("div",{className:`px-3 py-1 rounded-full text-xs font-heading flex items-center gap-1 border ${j(o(a))}`,children:[v(o(a)),o(a)]})]}),e.jsxs("div",{className:"space-y-1 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 text-foreground/70",children:[e.jsx(F,{className:"w-4 h-4"}),a.email]}),a.phoneNumber&&e.jsxs("div",{className:"flex items-center gap-2 text-foreground/70",children:[e.jsx(L,{className:"w-4 h-4"}),a.phoneNumber]}),a.submittedDocumentNames&&e.jsxs("div",{className:"flex items-center gap-2 text-foreground/70",children:[e.jsx(N,{className:"w-4 h-4"}),JSON.parse(a.submittedDocumentNames).length," document(s)"]})]})]}),e.jsx("div",{className:"text-right text-xs text-foreground/50",children:a.submissionDate&&new Date(a.submissionDate).toLocaleDateString()})]})},a._id))}),t&&e.jsx(s.div,{initial:{opacity:0},animate:{opacity:1},className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",onClick:()=>l(null),children:e.jsxs(s.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},onClick:a=>a.stopPropagation(),className:"w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 rounded-2xl bg-background border border-primary/30",children:[e.jsxs("div",{className:"flex items-start justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"font-heading text-2xl mb-2",children:t.fullName}),e.jsxs("div",{className:`inline-flex px-3 py-1 rounded-full text-sm font-heading items-center gap-2 border ${j(o(t))}`,children:[v(o(t)),o(t)]})]}),e.jsx("button",{onClick:()=>l(null),className:"text-foreground/60 hover:text-foreground",children:"✕"})]}),e.jsxs("div",{className:"space-y-4 mb-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-heading text-sm text-foreground/70 mb-1",children:"Email"}),e.jsx("p",{className:"font-paragraph",children:t.email})]}),t.phoneNumber&&e.jsxs("div",{children:[e.jsx("p",{className:"font-heading text-sm text-foreground/70 mb-1",children:"Phone"}),e.jsx("p",{className:"font-paragraph",children:t.phoneNumber})]}),t.submittedDocumentNames&&e.jsxs("div",{children:[e.jsx("p",{className:"font-heading text-sm text-foreground/70 mb-2",children:"Documents"}),e.jsx("ul",{className:"space-y-1",children:JSON.parse(t.submittedDocumentNames).map((a,r)=>e.jsxs("li",{className:"font-paragraph text-sm flex items-center gap-2",children:[e.jsx(N,{className:"w-4 h-4 text-primary"}),a]},r))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-heading text-sm text-foreground/70 mb-1",children:"Submitted"}),e.jsx("p",{className:"font-paragraph",children:t.submissionDate&&new Date(t.submissionDate).toLocaleString()})]})]}),o(t)==="pending"&&e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(s.button,{onClick:()=>k(t),disabled:c,className:"flex-1 px-4 py-3 rounded-lg bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed font-heading text-sm transition-all flex items-center justify-center gap-2",whileHover:{scale:1.02},whileTap:{scale:.98},children:c?e.jsxs(e.Fragment,{children:[e.jsx(w,{className:"w-4 h-4 animate-spin"}),"Processing..."]}):e.jsxs(e.Fragment,{children:[e.jsx(x,{className:"w-4 h-4"}),"Approve & Grant Access"]})}),e.jsx(s.button,{onClick:()=>C(t),disabled:c,className:"flex-1 px-4 py-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400 hover:bg-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed font-heading text-sm transition-all flex items-center justify-center gap-2",whileHover:{scale:1.02},whileTap:{scale:.98},children:c?e.jsxs(e.Fragment,{children:[e.jsx(w,{className:"w-4 h-4 animate-spin"}),"Processing..."]}):e.jsxs(e.Fragment,{children:[e.jsx(A,{className:"w-4 h-4"}),"Reject & Delete"]})})]})}),o(t)==="approved"&&t.approvalDate&&e.jsx("div",{className:"p-4 rounded-lg bg-green-500/10 border border-green-500/30",children:e.jsxs("p",{className:"font-paragraph text-sm text-green-400",children:["✓ Approved on ",new Date(t.approvalDate).toLocaleString()]})})]})})]})})}export{q as default};
