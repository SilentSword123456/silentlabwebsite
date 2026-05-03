import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: 'https://silentlab.work', lastModified: new Date() },
        { url: 'https://silentlab.work/projects', lastModified: new Date() },
        { url: 'https://silentlab.work/contact', lastModified: new Date() },
    ]
}