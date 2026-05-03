import { FaLinkedin, FaSlack, FaGithub, FaEnvelope, FaGlobe } from 'react-icons/fa';

export function LinkedIn(){
    return (
        <a
            href="www.linkedin.com/in/
SilentSword"
            target="_blank"
            rel="nofollow noopener noreferrer"
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
            rel="nofollow noopener noreferrer"
        >
            <FaSlack size={32} />
        </a>
    )
}

export function Github({url}: {url: string}) {
    return (
        <a
            href={url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Link to Github"
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
            rel=" noopener noreferrer"
        >
            <FaEnvelope size={32} />
        </a>
    )
}

export function CustomSite({url}: {url: string}) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaGlobe size={32} />
        </a>
    )
}
