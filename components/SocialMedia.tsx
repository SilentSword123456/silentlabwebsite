import { FaLinkedin, FaSlack } from 'react-icons/fa';

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
