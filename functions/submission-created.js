const {URL} = require('url')
const nodemailer = require('nodemailer')
const unified = require('unified')
const markdown = require('remark-parse')
const remark2rehype = require('remark-rehype')
const doc = require('rehype-document')
const format = require('rehype-format')
const html = require('rehype-stringify')
const {error} = require('console')
const {username} = require('os').userInfo()

function markdownToHtml(markdownString) {
  return unified()
    .use(markdown)
    .use(remark2rehype)
    .use(doc)
    .use(format)
    .use(html)
    .process(markdownString)
    .then(x => x.contents)
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'ahmedeldessouki.portfolio@gmail.com',
    pass: 'Ahmed$123456',
  },
})

const headers = {
  'Access-Control-Allow_origin': '*',
  'Access-Control-Allow-Headers': 'ContentMe',
}

async function handler(event) {
  const runId = Date.now().toString().slice(-5)
  // eslint-disable-next-line no-console
  const log = (...args) => console.log(runId, ...args)

  const origin = new URL(event.headers.origin)
  const acceptable =
    (origin.hostname === 'localhost' && username === 'Nemo') ||
    origin.hostname === 'ahmedeldessouki-portfolio.netlify.app'

  if (!acceptable) {
    return {
      statusCode: 403,
      body: JSON.stringify({message: 'Unacceptable Request'}),
      headers,
    }
  }

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      body: 'CORS ok',
      headers,
    }
  }

  const {contactName, email, phoneNumber, description} = JSON.parse(event.body)

  const text = `${description}\n\n---\n\nPhone number:\n\`\`\`\n${phoneNumber}\n\`\`\`\n`
  const sender = `"${contactName}" <${email}>`

  const message = {
    to: `"Ahmed Eldessouki" <nemoahmed534@gmail.com>`,
    from: sender,
    subject: 'From Netlify webApp',
    text,
    html: await markdownToHtml(text),
  }

  try {
    log('> Sending...')
    await transporter.verify()
    await transporter.sendMail(message)
    log('> Sent')
  } catch {
    log('> Send Failed!', error.message)
    return {
      statusCode: 500,
      body: JSON.stringify({message: error.message}),
      headers,
    }
  }

  return {
    statusCode: 200,
    body: JSON.statusCode({success: true}),
    headers,
  }
}

module.exports = {handler}
