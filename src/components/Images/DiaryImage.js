import React, {Component} from 'react';
import diaryImage from '../../images/pexels-diary.jpg'
import './DiaryImage.scss'

class DiaryImage extends Component {
  render() {
    return (
      <div className="diary-image-container">
        <h1>Let's plan</h1>
        <img src={diaryImage} alt="diary"/>
      </div>
    )
  }
}

export default DiaryImage;