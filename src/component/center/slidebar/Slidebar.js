import React from 'react'
import './Slidebar.css'

export default function Slidebar() {
  return (
    <div class='slide-container'>
        <div className='courses'><ul><li><a>Courses</a></li></ul></div>
        <ul>
            <li>
                <a href="#">Learning</a>
                <ul class="submenu">
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Quizzes</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Community</a>
                <ul class="submenu">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Zalo</a></li>
                </ul>
            </li>
        </ul>
        <ul><li><a>Settings</a></li></ul>
    </div>
  )
}
