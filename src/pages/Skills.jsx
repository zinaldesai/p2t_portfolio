import React from "react";

const SkillsSection = () => {
  return (
    <div className="skills-container py-10 px-6 md:px-20 h-auto pb-20">
      
      {/* Page Header */}
      <header className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="title text-5xl font-bold mb-10 font-roca text-center mt-36">Project Management</h1>
        <p className="text-lg md:text-xl font-decalotype leading-relaxed text-slate-600">
          I manage projects by aligning people, processes, and tools to deliver
          high-quality outcomes across operational and technical environments.
        </p>

        {/* Summary */}
        <p className="mt-6 text-sm uppercase tracking-widest text-slate-500">
          Agile • Scrum • SDLC • Jira • Asana • Stakeholder Management • Risk Mitigation
        </p>
      </header>

      {/* Skills Container */}
      <section className="w-full max-w-5xl mx-auto space-y-10 font-decalotype">

        {/* Sections */}
        <div>
          <h2 className="text-2xl font-semibold tracking-widest uppercase mb-4">
            Project Management & Delivery
          </h2>
          <div className="h-px w-24 bg-slate-300 mb-8"></div>

          <ul className="grid md:grid-cols-2 gap-x-16 gap-y-4 text-lg leading-relaxed">
            <li>Agile & Scrum methodologies (Sprint Planning, Retrospectives)</li>
            <li>End-to-end project lifecycle management</li>
            <li>Software Development Lifecycle (SDLC) coordination</li>
            <li>Risk identification, dependency tracking, and issue resolution</li>
            <li>Resource coordination and delivery prioritization</li>
            <li>Change management and continuous improvement</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-widest uppercase mb-4">
            Stakeholder & Vendor Management
          </h2>
          <div className="h-px w-24 bg-slate-300 mb-8"></div>

          <ul className="grid md:grid-cols-2 gap-x-16 gap-y-4 text-lg leading-relaxed">
            <li>Cross-functional collaboration across technical and business teams</li>
            <li>Stakeholder communication and alignment</li>
            <li>Vendor coordination and performance management</li>
            <li>Executive-level reporting and project updates</li>
            <li>Issue escalation, resolution, and accountability tracking</li>
            <li>Post-project reviews and operational analysis</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-widest uppercase mb-4">
            Tools & Platforms
          </h2>
          <div className="h-px w-24 bg-slate-300 mb-8"></div>

          <ul className="grid md:grid-cols-2 gap-x-16 gap-y-4 text-lg leading-relaxed">
            <li>Jira — sprint tracking, backlog management, reporting</li>
            <li>Asana — project planning, milestones, task coordination</li>
            <li>ServiceNow (ITSM / IRM) — workflow automation fundamentals</li>
            <li>Microsoft Office (Excel, PowerPoint) — budgeting and presentations</li>
            <li>Git — version control awareness and technical collaboration</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-widest uppercase mb-4">
            Technical & Analytical Literacy
          </h2>
          <div className="h-px w-24 bg-slate-300 mb-8"></div>

          <ul className="grid md:grid-cols-2 gap-x-16 gap-y-4 text-lg leading-relaxed">
            <li>SQL — data validation, reporting, and analysis</li>
            <li>Python & JavaScript — technical fluency and automation awareness</li>
            <li>Business analytics and metrics-driven decision making</li>
            <li>Human-Computer Interaction (HCI) principles</li>
            <li>Technical documentation and workflow mapping</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-widest uppercase mb-4">
            How I Deliver Projects
          </h2>
          <div className="h-px w-24 bg-slate-300 mb-8"></div>

          <ol className="space-y-3 text-lg leading-relaxed list-decimal list-inside">
            <li>Define scope, objectives, constraints, and success metrics</li>
            <li>Align stakeholders, teams, and vendors</li>
            <li>Plan milestones, sprints, and dependencies</li>
            <li>Track progress, risks, and delivery performance</li>
            <li>Communicate clearly and adapt execution</li>
            <li>Deliver outcomes, document results, and improve processes</li>
          </ol>
        </div>

      </section>
    </div>
  );
};

export default SkillsSection;

