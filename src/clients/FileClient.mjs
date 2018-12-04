import axios from 'axios'
import fs from 'fs'

class FileClient {
    async downloadFile(filename, outputDir) {
        try {
            const url = `${process.env.URL_BASE}/api/files/${filename}`
            const options = {
                responseType: 'arraybuffer',
                url: url,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/pdf'
                }
            }
            const {data} = await axios(options)
            const outputFilename = `${outputDir}/${filename}`
            fs.writeFileSync(outputFilename, data)
            return outputFilename
        } catch (err) {
            throw err
        }
    }
}

export default new FileClient()
