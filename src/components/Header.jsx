import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  state = {
    inputProduct: '',
  }

  handleChange = ({ target }) => {
    const input = target.value;
    this.setState({inputProduct: input});
  }

  render() {
    const { inputProduct } = this.state;
    const { handleSearch } = this.props;
    return (
      <div className="text-center bg-yellow-300 h-36 sm:h-20">
        <div className="flex flex-row flex-wrap py-4 w-full h-fit justify-around">
          <Link to="/">
            {/* <img src="/images/logo.jpg" alt="logo"  className="h-14 self-start"/> */}
            <img src="/images/logo.jpg" alt="logo"  className="h-14 self-start order-1 sm:order-1"/>
          </Link>
          {/* <div className="py-4"> */}
          <div className="py-4 order-3 sm:order-2">
            <input type="text" name="input-search" placeholder="Procurar" className="text-center rounded h-8" onChange={this.handleChange}/>
            <button type="button" className="pl-4" onClick={() => handleSearch(inputProduct)}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </div>
          {/* <div className="py-4 h-12"> */}
          <div className="py-4 h-12 order-2 sm:order-3">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAEjUlEQVR4nO2cy2sVVxzHP4kWFWPxFUOSW6hUFEUrWlDER+lCW5qCrlsMLvwHBB8LXemmC5e68LFzUWNQF75WQaxVEXc1LVrRhZSUaHzEZ0S918XvDDOOc+89k+Q85vZ84HAyZ86c+52fv/Ob85gRAoFAIBAIBAKBTykBvcAzoAK8Af4FLgF7gHnupPlPCXiEGK5aegccBzodafSaXsRIZxADdQJnVdlfwBHglToeAn50I9Nfom6b9K4vVNkTddwOnCLu3httCvSdYcQwpURZZMCnqbr7VPlLYIEVdQXgJGKUs4gRS8A5VdabUf+oOnfNlkDfmY/EtvSD4xHZT98W5AldAb63pNF7OoEepDsPI55Xa+iyDTHgafPSGpM2oIwY+zPHWgrL34gXLnctxAbNBtr8U+VLDLTtHSYMeFPlwYCj5H9lwCYDbc4F7gHvgQHggUpDiTSYOn5APLspFCYM2ITMVD4fxbVPgP9UHqWBVFl0/BB4Ow56x4QJAwJcBVYBm4HbQCswW6VWYE6qrI38Bo8WMbI8+2EiT3r/mzHcUyYTx7tBxU3EgDOBGzmumwF0qHwGsliRPE6WtSaSLiPU9+y099fElAH7Vb4453WRcB2aiT048uy2VFkbH3v6ZOQfoB1YpPEbr5F7uFetgkkPBLNP4jLxA0qX6Uj4qGX0OYiHtyMzqqrGM8lMJEa9wMxQyTRbEf0n6lU0dXOPkfgxFfjS0G+YZK3KL9eraNI7oind1xp1r5At1nR5NbwwYJ44WEa6jO3yLErIZGCY+B6c0I2I7nEpYhT8TLwSXxdfPNAntLuvaSYjU6236u9a+BQD+xEPXK1T2aQHjgB3kLHmwjp1fYmBs5AB9mvyzaCM0YMI73YtRJNNiN6LuheYHuQWLQ5G8e933QtMG1B3TuxLDIwM+IdGXcAfD/QhBrYAy5AXprx5OaCJ+B2bWY611GM9ovN6notMe2AF2eaE/EtbthnV+M/GSknUjWvNiX2Igd4aUOdB4joGTgJWqjraDxBbfIcIu+paSA1WIxpzLx7Y7MKLMbeJNVbWqTz3/NeGAYeQzZppVF9cdR0D16jcSwNC/fGgyxg4HfhWndeegdhmPyJwt2shGezE/xjNFkTkb66FpNiAbLZXgJ8ca6nJN4jI/noVLdACrAAOIWuVFeCgU0UaTEHmmLU+2nGR3gG/UpCt11u4N1j0Pctd4DB6O4beEH359ItrIeOJTdct2uKqFsGABWIe0oXvuxZSVJqRl40qyHt+DYHNLlymOIur2tge/zRcHHRlwKWWf7dhWIXEwAFggmMthWQC8rpHBdjrWEth+QH5CKcMHEMWGiY5VVRAupEXeFzPi9OpUHwFHAD+IV4xdp0KyVpE/Aiwnfg7jh2qrEK8Z6vLOgNtest55Ia2Z5yLltvP5WzzgoE2vWUQuaF2dZzcQetQ5wY9aDMTH1Zip6SOs3bQ0nVctOktfcjN7cg4t0ud6/OgTW/pIg74O5Eu1oHcaLRj1uVBm14T/ddRWWmfR216TRfSrZ6r1MfYvcREm4FAIBAIBAKNwAfBHiDB8MDnrwAAAABJRU5ErkJggg==" alt="cart" className="h-12 pb-6"></img>
          </div>
        </div>
      </div>
    )
  }
}
