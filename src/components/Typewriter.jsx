import React from 'react';
import Typewriter from 'typewriter-effect';

function TypewriterEffect() {
    return (
        <div className='container'>
            <h1 className="font-decalotype text-4xl text-center tracking-wide">
                <Typewriter
                    options = {{
                        autoStart: true,
                        loop: true,
                        delay: 70,
                        strings: [
                            "I\'m a Full Stack Developer",
                            "I\'m a Software Engineer",
                        ]
                    }}>
                </Typewriter>
            </h1>
        </div>
    )
}

export default TypewriterEffect;