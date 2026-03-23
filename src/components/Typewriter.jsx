import Typewriter from "typewriter-effect"

export default function TypewriterEffect() {
  return (
    <div className="min-h-[3rem] md:min-h-[3.5rem]">
      <p className="font-body text-2xl text-text-muted md:text-3xl">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 75,
            strings: [
              "I'm a Project Manager",
              "I'm a Technical Consultant",
            ],
          }}
        />
      </p>
    </div>
  )
}
