import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as editorActions from 'store/modules/editor';
import EditorPane from 'components/editor/EditorPane';

class EditorPaneContainer extends React.Component {

  handleChangeInput = ({name, value}) => {
    const {EditorActions} = this.props;
    EditorActions.changeInput({name, value})
  }

  render () {
    const {title, markdown, tags} = this.props;
    const {handleChangeInput} = this;

    return (
      <EditorPane
        title={title}
        mardown={markdown}
        tags={tags}
        onChangeInput={handleChangeInput}/>
    )
  }
}

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags')
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(EditorPaneContainer);
