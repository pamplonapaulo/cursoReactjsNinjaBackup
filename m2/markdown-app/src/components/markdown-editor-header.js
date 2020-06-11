'use strict'

import React, { PropTypes } from 'react'

//const MarkdownEditorHeader = ({ onSave }) => (
const MarkdownEditorHeader = ({ isSaving }) => (
  <header className='editor-header'>
    {/* <button className='save' onClick={onSave}>Salvar</button> */}
    <p className='save-message'>
      {isSaving ? 'Salvando...' : 'Salvo!'}
    </p>
  </header>
)

MarkdownEditorHeader.propTypes = {
  isSaving: PropTypes.bool.isRequired
}

export default MarkdownEditorHeader
