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
                        delay: 75,
                        strings: [
                            "I\'m a Project Manager",
                            "I\'m a Technical Consultant",
                        ]
                    }}>
                </Typewriter>
            </h1>
        </div>
    )
}

export default TypewriterEffect;