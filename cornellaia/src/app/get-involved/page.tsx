export default function GetInvolved() {
  return (
    <main>
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-cornell-red mb-8">
            Introduction to AI Alignment Fellowship
          </h1>

          <p className="text-xl mb-6">
            We run an
            <span className="font-semibold">
              8-week introductory fellowship on AI safety
            </span>
            . Topics covered span both technical alignment and policy and include neural network interpretability, learning
            from human feedback, goal misgeneralization in reinforcement
            learning settings, and potential catastrophic risks from advanced AI
            systems. The program is open to both undergraduate and graduate
            students. Students with machine learning experience are especially
            encouraged to apply, but no prior experience is required.
          </p>

          <p className="text-xl mb-8">
            The fellowship meets weekly in small groups, with dinner provided
            and no additional work outside of meetings. Our curriculum is{" "}
            <a
              href="https://course.aisafetyfundamentals.com/alignment"
              className="text-cornell-red hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              based on a course developed by OpenAI researcher Richard Ngo
            </a>
            . See syllabus{" "}
            <a
              href="https://docs.google.com/document/d/1wnKxJPlA3YsUs4K_-IoWHD6flND_4SJs1rOBuC8sGsw/edit?tab=t.0#heading=h.c6ivfpz8bbwa"
              className="text-cornell-red hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-cornell-red mb-8">
            Technical Paper Reading Group
          </h1>

          <p className="text-xl mb-6">
            CAIA runs a weekly technical ML reading group. Reading group
            sessions are led by experienced TAs; cover recent significant papers
            in AI/ML safety; and meet weekly in small groups. Dinner is provided
            and there is no additional work outside of meetings.
          </p>

          <p className="text-xl mb-6">
            Learn more by joining our Slack.
          </p>
          {/* <a
            href="#"
            className="inline-block bg-cornell-red text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition"
          >
            Apply here by February 9, 2025, 11:59pm EST.
          </a> */}
        </div>

        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-cornell-red mb-8">
            Student Research
          </h1>

          <p className="text-xl mb-6">
            CAIA supports original student research in AI safety. If you are
            interested in beginning technical or policy research, reach out to
            cornellaialignment@gmail.com to be connected with resources and a
            faculty or upperclassman mentor.
          </p>

          {/* <a
            href="#"
            className="inline-block bg-cornell-red text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition"
          >
            Apply here by February 9, 2025, 11:59pm EST.
          </a> */}
        </div>
      </section>
    </main>
  );
}
