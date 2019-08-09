import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App'

afterEach(cleanup)

describe('<App />', () => {
  it('App renders without crashing', () => {
    render(<App />)
  })

  // @@@@@@@@@@@@@@@@@@@@ Name Field Tests @@@@@@@@@@@@@@@@@@@@
  describe('Name Field', () => {
    // it('Error message shows if no user input', () => {
    //   const wrapper = render(<App />)
    //   const submitBtn = document.querySelector('.submit-btn')
    //   const nameError = document.querySelector('[data-testid="name-err"]')
    //   fireEvent.click(submitBtn)
    //   expect(nameError).toBeInTheDocument()
    // })
  })

  // @@@@@@@@@@@@@@@@@@@@ Password Field Tests @@@@@@@@@@@@@@@@@@@@
  describe('Password Field', () => {
  //   it('Error message shows if no user input', () => {
  //     const wrapper = render(<App />)
  //     const passErr = wrapper.queryByText(/Password/i)
  //     const submitBtn = document.querySelector('.submit-btn')
  //     fireEvent.click(submitBtn)
  //     expect(passErr).toBeInTheDocument()
  //   })
  })

  // @@@@@@@@@@@@@@@@@@@@ Submit Button Tests @@@@@@@@@@@@@@@@@@@@
  describe('Submit Button', () => {
    it('Element renders', () => {
      render(<App />)
      const submitBtn = document.querySelector('.submit-btn')
      expect(submitBtn).toBeInTheDocument()
    })

    it('Element clicks', () => {
      render(<App />)
      const submitBtn = document.querySelector('.submit-btn')
      fireEvent.click(submitBtn)
    })
  })
})