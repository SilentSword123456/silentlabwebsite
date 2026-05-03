import { FaLinkedin, FaSlack, FaGithub, FaEnvelope } from 'react-icons/fa';

export function LinkedIn(){
    return (
        <a
            href="https://ro.linkedin.com/in/andrei-dumitru-6a1a08363"
            target="_blank"
            rel="noopener noreferrer"
            >
                <FaLinkedin size={32} />
        </a>
    )
}

export function Slack(){
    return (
        <a
            href="https://hackclub.enterprise.slack.com/team/U0A531VD30C"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaSlack size={32} />
        </a>
    )
}

export function Github(){
    return (
        <a
            href="https://github.com/SilentSword123456"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaGithub size={32} />
        </a>
    )
}

export function Email(){
    return (
        <a
            href="mailto:contact@silentlab.work"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaEnvelope size={32} />
        </a>
    )
}
