'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ajax from '@fdaciuk/ajax'
import SearchCep from './search-cep'
import { updateAddress } from 'reducers/address/action-creators'

class SearchCepContainer extends PureComponent {
  state = { isFetching: false }

  handlesubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })

    const code = e.target.cep.value
    const response = await ajax().get(
      'https://ws.apicep.com/cep.json',
      { code }
    )

    this.setState({ isFetching: false })
    console.log(response)
    this.props.dispatch(response)
  }

  render () {
    console.log(this.props)
    return (
      <SearchCep
        {...this.state}
        {...this.props.address}
        handleSubmit={this.handlesubmit}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => { updateAddress }

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
