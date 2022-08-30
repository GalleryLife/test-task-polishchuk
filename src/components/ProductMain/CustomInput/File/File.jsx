import React, {useRef, useState} from 'react';
import styles from './File.module.scss';

const File = ({handleSetPhoto, fieldValue, isError}) => {
  const refFile = useRef(null)
  const handleUpload = () => {
    refFile.current.click()
  }
  
  return (
    <div className={styles.form__control}>
      <span>
      <button type="button" onClick={handleUpload}>Upload</button>
        {fieldValue ? fieldValue.name : 'Upload your photo'}
      </span>
      <input type="file" ref={refFile} name='photo' onChange={handleSetPhoto}/>
      <p>{isError && 'Error'}</p>
    </div>
  )
}

export default File;
