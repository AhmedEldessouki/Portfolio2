/* eslint-disable no-console */
/** @jsx jsx */

import {jsx, css} from '@emotion/core'
import {useEffect, useState} from 'react'
// import PropTypes from 'prop-types'

import {
  wrapper,
  colors,
  spinner,
  btnStyle,
  warning,
  labelWrapper,
  signWrapperInput,
  textArea,
  h1M,
} from '../../styles'

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}
export function ContactMe() {
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [description, setDescription] = useState('')
  const [errPhoneNumber, setErrPhoneNumber] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [descriptionErr, setDescriptionErr] = useState('')
  const [contactNameErr, setContactNameErr] = useState('')
  const [phoneNumberErr, setPhoneNumberErr] = useState('')
  const [emailErr, setEmailErr] = useState('')

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(phoneNumber)) {
      setErrPhoneNumber(true)
    } else setErrPhoneNumber(false)
    return () => {
      setErrPhoneNumber(false)
    }
  }, [phoneNumber])

  const handleSubmit = e => {
    e.preventDefault()
    setIsSubmitting(true)
    const arr = {contactName, email, phoneNumber, description}
    const form = e.target
    try {
      fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: encode({
          'form-name': form.getAttribute('name'),
          ...arr,
        }),
      })
    } catch (error) {
      console.log(error)
    }
    setIsSubmitting(false)
    setTimeout(() => {
      setPhoneNumber('')
      setEmail('')
      setDescription('')
      setContactName('')
    }, 1000)
    console.log(arr)
    return arr
  }
  return (
    <div
      css={css`
        max-width: 100%;
        margin-bottom: 0;
        background-color: ${colors.independenceBlue};
      `}
    >
      <h1 css={h1M}>Contact Me</h1>
      <form
        name="contactMe"
        onSubmit={handleSubmit}
        css={wrapper}
        action="/thanks/"
        netlify
        data-netlify="true"
        method="post"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contactMe" />
        <section>
          <label css={labelWrapper} htmlFor="contactName">
            <input
              css={[
                signWrapperInput,
                css`
                  border-color: ${contactNameErr};
                `,
              ]}
              onChange={e => setContactName(e.target.value)}
              onBlur={e =>
                e.target.validity.valid
                  ? setContactNameErr('inherit')
                  : setContactNameErr(colors.burgundyRed)
              }
              name="contactName"
              id="contactName"
              value={contactName}
              pattern="[^\(\)0-9]*"
              placeholder="Name"
              required
              minLength={3}
              maxLength={30}
              inputMode="text"
            />
          </label>
          <label css={labelWrapper} htmlFor="email">
            <input
              onChange={e => setEmail(e.target.value)}
              onBlur={e =>
                e.target.validity.valid
                  ? setEmailErr('inherit')
                  : setEmailErr(colors.burgundyRed)
              }
              css={[
                signWrapperInput,
                css`
                  border-color: ${emailErr};
                `,
              ]}
              name="email"
              id="email"
              value={email}
              type="email"
              inputMode="email"
              placeholder="Email Address"
              required
            />
          </label>
          <label css={labelWrapper} htmlFor="phoneNumber">
            <input
              css={[
                signWrapperInput,
                css`
                  border-color: ${phoneNumberErr};
                `,
              ]}
              onChange={e => setPhoneNumber(e.target.value)}
              onBlur={e =>
                e.target.validity.valid
                  ? setPhoneNumberErr('inherit')
                  : setPhoneNumberErr(colors.burgundyRed)
              }
              name="phoneNumber"
              id="phoneNumber"
              inputMode="tel"
              value={phoneNumber}
              minLength={11}
              required
              maxLength={13}
              placeholder="Phone Number"
              pattern="^[0-9\b]+$"
            />
            {errPhoneNumber ? (
              <span css={warning}>Invalid Phone Number</span>
            ) : null}
          </label>
        </section>
        <label css={labelWrapper} htmlFor="description">
          <textarea
            name="description"
            onChange={e => setDescription(e.target.value)}
            onBlur={e =>
              e.target.validity.valid
                ? setDescriptionErr('inherit')
                : setDescriptionErr(colors.burgundyRed)
            }
            id="description"
            value={description}
            required
            placeholder="Description"
            minLength={10}
            maxLength={500}
            css={[
              textArea,
              css`
                border-color: ${descriptionErr};
              `,
            ]}
          />
        </label>
        {isSubmitting ? (
          <div
            css={css`
              width: 100%;
            `}
          >
            <div css={spinner} />
          </div>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting || errPhoneNumber}
            css={btnStyle}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  )
}
