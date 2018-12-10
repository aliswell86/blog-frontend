import React from 'react';
import styles from './EditorHeader.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const EditorHeader = ({onGoBack}) => {
  return (
    <div className={cx('editor-header')}>
      <div className={cx('back')}>
        <Button theme="outline" onClick={onGoBack}>뒤로가기</Button>
      </div>
      <div className={cx('submit')}>
        <Button theme="outline">작성하기</Button>
      </div>
    </div>
  );
};

export default EditorHeader;
