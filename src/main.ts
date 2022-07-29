import './style.css'
import { Contents } from './parts/contents';

document.querySelectorAll('.l-text').forEach((val,i) => {
  new Contents({
    el:val,
    id:i,
  })
})



