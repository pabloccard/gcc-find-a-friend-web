import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #f15156;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: calc(1215px + 3rem);
  padding-top: 0 1.5rem;
`

export const Header = styled.header`
  margin-bottom: 0.75rem;
`

export const Hero = styled.main`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    font-size: 4.5rem;
    line-height: 90%;
    letter-spacing: -0.02em;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 7.875rem;

  p {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 142%;
  }
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  span {
    white-space: nowrap;
    margin-right: 1.5rem;
  }

  button {
    background: #f4d35e;
    border: 0;
    border-radius: 20px;
    line-height: 0;

    margin-left: 2rem;

    width: 4.5rem;
    height: 4.5rem;
  }
`

export const CitySelect = styled.select`
  width: 4.5rem;
  height: 4.5rem;

  background: transparent;
  border: 1px solid #fff;
  border-radius: 20px;
  padding-right: 0.5rem;
  margin-right: 0.625rem;

  color: #fff;
  font-size: 1.25rem;
  line-height: 34px;
  font-weight: 700;
  text-align: center;
`

export const StateSelect = styled.label`
  display: flex;
  justify-content: center;

  width: 17.65rem;
  height: 4.5rem;

  background: #e44449;
  border-radius: 20px;
  cursor: pointer;

  select {
    background: transparent;
    border: 0;

    color: #fff;
    font-size: 1.25rem;
    line-height: 34px;
    font-weight: 800;
    text-align: center;
  }
`
