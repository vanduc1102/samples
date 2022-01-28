import axios from 'axios';

export function handleNpmImport(url: string, cb: (error: any, content: string) => void) {
    // eslint-disable-next-line no-useless-catch
    try {
        const req = 'https://unpkg.com/' + url
        axios.get(req).then(response => cb(null, response.data))

    } catch (e) {
        throw e
    }
}